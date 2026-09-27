import Booking from '../models/Booking.js';
import GuideProfile from '../models/GuideProfile.js';
import Listing from '../models/Listing.js';
import Setting from '../models/Setting.js';
import AppError from '../utils/AppError.js';
import { isListingBookable } from './listingController.js';
import { notify } from '../services/notifyService.js';

const DAY_MS = 24 * 60 * 60 * 1000;
const dayCount = (from, to) => Math.max(1, Math.round((to - from) / DAY_MS) + 1);

// Lazy expiry: flip stale requests before any availability/list read
async function expireStale(guideId) {
  const filter = { status: 'requested', expiresAt: { $lt: new Date() } };
  if (guideId) filter.guide = guideId;
  await Booking.updateMany(filter, { status: 'expired' });
}

async function hasConflict(guideId, from, to) {
  const guide = await GuideProfile.findById(guideId).select('blockedDates');
  const blocked = (guide?.blockedDates || []).some((d) => d >= from && d <= to);
  if (blocked) return true;
  const overlap = await Booking.exists({
    guide: guideId,
    status: 'confirmed',
    'dates.from': { $lte: to },
    'dates.to': { $gte: from },
  });
  return Boolean(overlap);
}

// POST /bookings/guide { guideId, from, to, members, note }
export async function createGuideBooking(req, res, next) {
  try {
    const { guideId, from: fromRaw, to: toRaw, members, note } = req.body;
    const from = new Date(fromRaw);
    const to = new Date(toRaw);
    if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) throw new AppError('Valid dates are required', 400);
    if (from > to) throw new AppError('End date must be after start date', 400);
    if (from < new Date(Date.now() - DAY_MS)) throw new AppError('Start date must be in the future', 400);
    if (dayCount(from, to) > 30) throw new AppError('Bookings are limited to 30 days', 400);

    const guide = await GuideProfile.findOne({
      _id: guideId,
      applicationStatus: 'approved',
      availabilityStatus: 'active',
    });
    if (!guide) throw new AppError('Guide not found or unavailable', 404);
    if (guide.user.toString() === req.user._id.toString()) throw new AppError('You cannot book yourself', 400);

    await expireStale(guide._id);
    if (await hasConflict(guide._id, from, to)) {
      throw new AppError('Guide is not available on these dates', 409);
    }

    const settings = await Setting.get();
    const amount = guide.dailyRate * dayCount(from, to);

    const booking = await Booking.create({
      type: 'guide',
      user: req.user._id,
      guide: guide._id,
      district: guide.districts[0],
      dates: { from, to },
      members: Math.max(1, Number(members) || 1),
      note: note || '',
      amount,
      commission: Math.round((amount * settings.guideCommissionPct) / 100),
      expiresAt: new Date(Date.now() + settings.bookingConfirmWindowHours * 60 * 60 * 1000),
    });

    await notify(guide.user, 'booking-requested', { name: req.user.name }, '/guide-dashboard');

    res.status(201).json({ success: true, message: 'Booking requested', data: { booking } });
  } catch (err) {
    next(err);
  }
}

async function hasListingConflict(listingId, from, to) {
  const listing = await Listing.findById(listingId).select('blockedDates');
  const blocked = (listing?.blockedDates || []).some((d) => d >= from && d <= to);
  if (blocked) return true;
  const overlap = await Booking.exists({
    listing: listingId,
    status: 'confirmed',
    'dates.from': { $lte: to },
    'dates.to': { $gte: from },
  });
  return Boolean(overlap);
}

// POST /bookings/listing { listingId, from, to, members, note }
export async function createListingBooking(req, res, next) {
  try {
    const { listingId, from: fromRaw, to: toRaw, members, note } = req.body;
    const from = new Date(fromRaw);
    const to = new Date(toRaw);
    if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) throw new AppError('Valid dates are required', 400);
    if (from > to) throw new AppError('End date must be after start date', 400);
    if (from < new Date(Date.now() - DAY_MS)) throw new AppError('Start date must be in the future', 400);
    if (dayCount(from, to) > 30) throw new AppError('Bookings are limited to 30 days', 400);

    const listing = await Listing.findById(listingId).populate('district');
    if (!listing || !isListingBookable(listing, listing.district)) {
      throw new AppError('This listing is not bookable right now', 404);
    }
    if (listing.owner && listing.owner.toString() === req.user._id.toString()) {
      throw new AppError('You cannot book your own listing', 400);
    }

    await Booking.updateMany({ status: 'requested', listing: listing._id, expiresAt: { $lt: new Date() } }, { status: 'expired' });
    if (await hasListingConflict(listing._id, from, to)) {
      throw new AppError('Not available on these dates', 409);
    }

    const settings = await Setting.get();
    const days = dayCount(from, to);
    const amount = (listing.priceRange?.min || 0) * days; // indicative — final price agreed directly

    const typeMap = { houseboat: 'boat', boat: 'boat', hotel: 'hotel', cottage: 'hotel', resort: 'hotel' };
    const booking = await Booking.create({
      type: typeMap[listing.type] || 'transport',
      user: req.user._id,
      listing: listing._id,
      district: listing.district._id,
      dates: { from, to },
      members: Math.max(1, Number(members) || 1),
      note: note || '',
      amount,
      commission: Math.round((amount * settings.listingCommissionPct) / 100),
      expiresAt: new Date(Date.now() + settings.bookingConfirmWindowHours * 60 * 60 * 1000),
    });

    if (listing.owner) {
      await notify(listing.owner, 'booking-requested', { name: req.user.name }, '/partner-dashboard');
    }

    res.status(201).json({ success: true, message: 'Booking requested', data: { booking } });
  } catch (err) {
    next(err);
  }
}

// Partner's incoming bookings for their listings
export async function partnerBookings(req, res, next) {
  try {
    const listingIds = (await Listing.find({ owner: req.user._id }).select('_id')).map((l) => l._id);
    await Booking.updateMany(
      { status: 'requested', listing: { $in: listingIds }, expiresAt: { $lt: new Date() } },
      { status: 'expired' }
    );

    const bookings = await Booking.find({ listing: { $in: listingIds } })
      .populate('user', 'name avatarUrl phone')
      .populate('listing', 'name type')
      .sort('-createdAt');

    const data = bookings.map((b) => {
      const obj = b.toObject();
      if (obj.user && b.status !== 'confirmed' && b.status !== 'completed') delete obj.user.phone;
      return obj;
    });

    res.json({ success: true, data: { bookings: data } });
  } catch (err) {
    next(err);
  }
}

async function loadPartnerBooking(req, id) {
  const booking = await Booking.findOne({ _id: id, listing: { $ne: null } }).populate('listing', 'owner blockedDates');
  if (!booking || booking.listing?.owner?.toString() !== req.user._id.toString()) {
    throw new AppError('Booking not found', 404);
  }
  return booking;
}

export async function partnerConfirm(req, res, next) {
  try {
    const booking = await loadPartnerBooking(req, req.params.id);
    if (booking.status !== 'requested') throw new AppError('Only pending requests can be confirmed', 409);
    if (booking.expiresAt && booking.expiresAt < new Date()) throw new AppError('Request has expired', 409);
    if (await hasListingConflict(booking.listing._id, booking.dates.from, booking.dates.to)) {
      throw new AppError('Already booked for these dates', 409);
    }
    booking.status = 'confirmed';
    await booking.save();
    await notify(booking.user, 'booking-confirmed', { name: req.user.name }, '/my-bookings');
    res.json({ success: true, message: 'Booking confirmed' });
  } catch (err) {
    next(err);
  }
}

export async function partnerReject(req, res, next) {
  try {
    const booking = await loadPartnerBooking(req, req.params.id);
    if (booking.status !== 'requested') throw new AppError('Only pending requests can be rejected', 409);
    booking.status = 'rejected';
    booking.rejectionReason = req.body?.reason || '';
    await booking.save();
    await notify(booking.user, 'booking-rejected', { name: req.user.name }, '/my-bookings');
    res.json({ success: true, message: 'Booking rejected' });
  } catch (err) {
    next(err);
  }
}

// User's bookings; confirmed ones reveal the guide's WhatsApp
export async function myBookings(req, res, next) {
  try {
    await expireStale();
    const bookings = await Booking.find({ user: req.user._id })
      .populate({ path: 'guide', populate: { path: 'user', select: 'name avatarUrl' } })
      .populate('listing', 'name type contactPhone images')
      .sort('-createdAt');

    const data = bookings.map((b) => {
      const obj = b.toObject();
      if (obj.listing) {
        // contact revealed only after the partner confirms
        if (b.status !== 'confirmed' && b.status !== 'completed') delete obj.listing.contactPhone;
      }
      if (obj.guide) {
        obj.guide = {
          _id: obj.guide._id,
          user: obj.guide.user,
          photoUrl: obj.guide.photoUrl,
          dailyRate: obj.guide.dailyRate,
          whatsappNumber: b.status === 'confirmed' ? obj.guide.application?.whatsappNumber : undefined,
        };
        delete obj.guide.application;
      }
      return obj;
    });

    res.json({ success: true, data: { bookings: data } });
  } catch (err) {
    next(err);
  }
}

// Guide's incoming bookings; requester phone revealed on confirmed
export async function guideBookings(req, res, next) {
  try {
    const guide = await GuideProfile.findOne({ user: req.user._id });
    if (!guide) throw new AppError('No guide profile found', 404);
    await expireStale(guide._id);

    const bookings = await Booking.find({ guide: guide._id })
      .populate('user', 'name avatarUrl phone')
      .sort('-createdAt');

    const data = bookings.map((b) => {
      const obj = b.toObject();
      if (obj.user && b.status !== 'confirmed' && b.status !== 'completed') {
        delete obj.user.phone; // reveal contact only after confirming
      }
      return obj;
    });

    res.json({ success: true, data: { bookings: data } });
  } catch (err) {
    next(err);
  }
}

async function loadGuideBooking(req, id) {
  const guide = await GuideProfile.findOne({ user: req.user._id });
  if (!guide) throw new AppError('No guide profile found', 404);
  const booking = await Booking.findOne({ _id: id, guide: guide._id });
  if (!booking) throw new AppError('Booking not found', 404);
  return booking;
}

export async function confirmBooking(req, res, next) {
  try {
    await expireStale();
    const booking = await loadGuideBooking(req, req.params.id);
    if (booking.status !== 'requested') throw new AppError('Only pending requests can be confirmed', 409);
    if (await hasConflict(booking.guide, booking.dates.from, booking.dates.to)) {
      throw new AppError('You already have a confirmed booking on these dates', 409);
    }
    booking.status = 'confirmed';
    await booking.save();
    await notify(booking.user, 'booking-confirmed', { name: req.user.name }, '/my-bookings');
    res.json({ success: true, message: 'Booking confirmed' });
  } catch (err) {
    next(err);
  }
}

export async function rejectBooking(req, res, next) {
  try {
    const booking = await loadGuideBooking(req, req.params.id);
    if (booking.status !== 'requested') throw new AppError('Only pending requests can be rejected', 409);
    booking.status = 'rejected';
    booking.rejectionReason = req.body?.reason || '';
    await booking.save();
    await notify(booking.user, 'booking-rejected', { name: req.user.name }, '/my-bookings');
    res.json({ success: true, message: 'Booking rejected' });
  } catch (err) {
    next(err);
  }
}

export async function cancelBooking(req, res, next) {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, user: req.user._id });
    if (!booking) throw new AppError('Booking not found', 404);
    if (!['requested', 'confirmed'].includes(booking.status)) {
      throw new AppError('This booking cannot be cancelled', 409);
    }
    booking.status = 'cancelled';
    await booking.save();

    // Tell the other side (guide or partner)
    if (booking.guide) {
      const g = await GuideProfile.findById(booking.guide).select('user');
      await notify(g?.user, 'booking-cancelled', { name: req.user.name }, '/guide-dashboard');
    } else if (booking.listing) {
      const l = await Listing.findById(booking.listing).select('owner');
      await notify(l?.owner, 'booking-cancelled', { name: req.user.name }, '/partner-dashboard');
    }

    res.json({ success: true, message: 'Booking cancelled' });
  } catch (err) {
    next(err);
  }
}

// Review after the trip: confirmed + dates passed → completed + rating
export async function reviewBooking(req, res, next) {
  try {
    const { rating, comment } = req.body;
    const r = Number(rating);
    if (!r || r < 1 || r > 5) throw new AppError('Rating must be 1-5', 400);

    const booking = await Booking.findOne({ _id: req.params.id, user: req.user._id });
    if (!booking) throw new AppError('Booking not found', 404);
    if (booking.status !== 'confirmed' && booking.status !== 'completed') {
      throw new AppError('Only confirmed bookings can be reviewed', 409);
    }
    if (booking.dates.to > new Date()) throw new AppError('You can review after the trip ends', 409);
    if (booking.review?.rating) throw new AppError('Already reviewed', 409);

    booking.status = 'completed';
    booking.review = { rating: r, comment: comment || '', at: new Date() };
    await booking.save();

    // Recompute guide rating
    const guide = await GuideProfile.findById(booking.guide);
    if (guide) {
      const total = guide.ratingAvg * guide.ratingCount + r;
      guide.ratingCount += 1;
      guide.ratingAvg = Math.round((total / guide.ratingCount) * 10) / 10;
      await guide.save();
      await notify(guide.user, 'review-received', { name: req.user.name }, '/guide-dashboard');
    }

    res.json({ success: true, message: 'Review submitted' });
  } catch (err) {
    next(err);
  }
}
