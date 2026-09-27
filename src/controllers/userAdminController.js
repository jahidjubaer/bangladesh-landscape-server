import User from '../models/User.js';
import Plan from '../models/Plan.js';
import Payment from '../models/Payment.js';
import Booking from '../models/Booking.js';
import Blog from '../models/Blog.js';
import GuideProfile from '../models/GuideProfile.js';
import EventBooking from '../models/EventBooking.js';
import AppError from '../utils/AppError.js';

// ---------- Users ----------

export async function listUsers(req, res, next) {
  try {
    const filter = {};
    if (req.query.q) {
      const q = String(req.query.q).trim();
      filter.$or = [{ name: { $regex: q, $options: 'i' } }, { phone: { $regex: q } }];
    }
    if (req.query.role) filter.roles = req.query.role;

    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = 20;
    const [users, total] = await Promise.all([
      User.find(filter).sort('-createdAt').skip((page - 1) * limit).limit(limit),
      User.countDocuments(filter),
    ]);

    res.json({
      success: true,
      data: { users: users.map((u) => u.toSafeJSON()), total, page, pages: Math.ceil(total / limit) },
    });
  } catch (err) {
    next(err);
  }
}

// Guards for role/status edits: never self, never another admin
async function loadEditableUser(req) {
  const user = await User.findById(req.params.id);
  if (!user) throw new AppError('User not found', 404);
  if (user._id.toString() === req.user._id.toString()) throw new AppError('You cannot modify your own account here', 403);
  if (user.roles.includes('admin')) throw new AppError('Admin accounts cannot be modified from this panel', 403);
  return user;
}

// PATCH /admin/users/:id/moderator { enabled: true|false }
export async function setModerator(req, res, next) {
  try {
    const user = await loadEditableUser(req);
    if (req.body?.enabled) {
      if (!user.roles.includes('moderator')) user.roles.push('moderator');
    } else {
      user.roles = user.roles.filter((r) => r !== 'moderator');
    }
    await user.save();
    res.json({ success: true, message: 'Roles updated', data: { user: user.toSafeJSON() } });
  } catch (err) {
    next(err);
  }
}

// PATCH /admin/users/:id/verified-author { enabled }
export async function setVerifiedAuthor(req, res, next) {
  try {
    const user = await loadEditableUser(req);
    user.verifiedAuthor = Boolean(req.body?.enabled);
    await user.save();
    res.json({ success: true, message: 'Updated', data: { user: user.toSafeJSON() } });
  } catch (err) {
    next(err);
  }
}

// PATCH /admin/users/:id/status { status: 'active'|'suspended' }
export async function setStatus(req, res, next) {
  try {
    const user = await loadEditableUser(req);
    const status = req.body?.status;
    if (!['active', 'suspended'].includes(status)) throw new AppError('Invalid status', 400);
    user.status = status;
    await user.save();
    res.json({ success: true, message: status === 'suspended' ? 'User suspended' : 'User activated', data: { user: user.toSafeJSON() } });
  } catch (err) {
    next(err);
  }
}

// ---------- Operations overview ----------

export async function overview(_req, res, next) {
  try {
    const [
      pendingPayments,
      pendingEventBookings,
      pendingGuideApps,
      pendingBlogs,
      totalUsers,
      totalPlans,
      paidPlans,
      confirmedBookings,
      recentPlans,
      recentPendingPayments,
    ] = await Promise.all([
      Payment.countDocuments({ status: 'pending-verification' }),
      EventBooking.countDocuments({ status: 'requested' }),
      GuideProfile.countDocuments({ applicationStatus: { $in: ['pending', 'screened'] } }),
      Blog.countDocuments({ status: 'pending' }),
      User.countDocuments(),
      Plan.countDocuments(),
      Plan.countDocuments({ status: 'paid' }),
      Booking.aggregate([
        { $match: { status: { $in: ['confirmed', 'completed'] } } },
        { $group: { _id: null, count: { $sum: 1 }, commission: { $sum: '$commission' } } },
      ]),
      Plan.find().populate('user', 'name').populate('district', 'name').select('publicId output.title status createdAt').sort('-createdAt').limit(5),
      Payment.find({ status: 'pending-verification' }).populate('user', 'name phone').sort('-createdAt').limit(5),
    ]);

    res.json({
      success: true,
      data: {
        actionNeeded: { pendingPayments, pendingGuideApps, pendingBlogs, pendingEventBookings },
        totals: {
          users: totalUsers,
          plans: totalPlans,
          paidPlans,
          bookings: confirmedBookings[0]?.count || 0,
          commissionEarned: confirmedBookings[0]?.commission || 0,
        },
        recentPlans,
        recentPendingPayments,
      },
    });
  } catch (err) {
    next(err);
  }
}
