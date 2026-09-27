import PageView, { DailyVisitor } from '../models/PageView.js';
import Payment from '../models/Payment.js';
import Plan from '../models/Plan.js';
import Booking from '../models/Booking.js';
import EventBooking from '../models/EventBooking.js';
import User from '../models/User.js';

const byDay = { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } };

// GET /admin/analytics?days=30 — everything the dashboard charts need in one call
export async function analytics(req, res, next) {
  try {
    const days = Math.min(90, Math.max(7, parseInt(req.query.days, 10) || 30));
    const since = new Date(Date.now() - days * 24 * 3600 * 1000);
    const sinceDay = since.toISOString().slice(0, 10);

    const [
      viewsByDay,
      uniquesByDay,
      topPages,
      revenueByDay,
      revenueByPurpose,
      pendingPayments,
      plansByDay,
      planStatus,
      bookingFunnel,
      bookingsByType,
      eventFunnel,
      usersByDay,
      totalUsers,
    ] = await Promise.all([
      PageView.aggregate([
        { $match: { day: { $gte: sinceDay } } },
        { $group: { _id: '$day', views: { $sum: '$views' } } },
        { $sort: { _id: 1 } },
      ]),
      DailyVisitor.aggregate([
        { $match: { day: { $gte: sinceDay } } },
        { $group: { _id: '$day', uniques: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
      PageView.aggregate([
        { $match: { day: { $gte: sinceDay } } },
        { $group: { _id: '$path', views: { $sum: '$views' } } },
        { $sort: { views: -1 } },
        { $limit: 10 },
      ]),
      Payment.aggregate([
        { $match: { status: 'success', createdAt: { $gte: since } } },
        { $group: { _id: byDay, amount: { $sum: '$amount' }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
      Payment.aggregate([
        { $match: { status: 'success', createdAt: { $gte: since } } },
        { $group: { _id: '$purpose', amount: { $sum: '$amount' }, count: { $sum: 1 } } },
      ]),
      Payment.countDocuments({ status: 'pending-verification' }),
      Plan.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: byDay, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
      Plan.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
      Booking.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
      Booking.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: '$type', count: { $sum: 1 } } },
      ]),
      EventBooking.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: '$status', count: { $sum: 1 }, seats: { $sum: '$seats' } } },
      ]),
      User.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: byDay, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
      User.countDocuments(),
    ]);

    // Merge views + uniques into one continuous series (fill missing days with 0)
    const vMap = new Map(viewsByDay.map((d) => [d._id, d.views]));
    const uMap = new Map(uniquesByDay.map((d) => [d._id, d.uniques]));
    const rMap = new Map(revenueByDay.map((d) => [d._id, d]));
    const pMap = new Map(plansByDay.map((d) => [d._id, d.count]));
    const nMap = new Map(usersByDay.map((d) => [d._id, d.count]));
    const series = [];
    for (let i = days - 1; i >= 0; i--) {
      const day = new Date(Date.now() - i * 24 * 3600 * 1000).toISOString().slice(0, 10);
      series.push({
        day,
        views: vMap.get(day) || 0,
        uniques: uMap.get(day) || 0,
        revenue: rMap.get(day)?.amount || 0,
        payments: rMap.get(day)?.count || 0,
        plans: pMap.get(day) || 0,
        newUsers: nMap.get(day) || 0,
      });
    }

    const toObj = (arr, key = 'count') => Object.fromEntries(arr.map((x) => [x._id, x[key]]));

    res.json({
      success: true,
      data: {
        days,
        series,
        topPages: topPages.map((p) => ({ path: p._id, views: p.views })),
        revenue: {
          total: revenueByDay.reduce((n, d) => n + d.amount, 0),
          count: revenueByDay.reduce((n, d) => n + d.count, 0),
          byPurpose: revenueByPurpose.map((p) => ({ purpose: p._id, amount: p.amount, count: p.count })),
          pendingVerification: pendingPayments,
        },
        plans: { byStatus: toObj(planStatus), total: planStatus.reduce((n, s) => n + s.count, 0) },
        bookings: {
          funnel: toObj(bookingFunnel),
          byType: toObj(bookingsByType),
          total: bookingFunnel.reduce((n, s) => n + s.count, 0),
        },
        events: {
          funnel: toObj(eventFunnel),
          seatsConfirmed: eventFunnel.find((e) => e._id === 'confirmed')?.seats || 0,
        },
        users: { total: totalUsers, new: usersByDay.reduce((n, d) => n + d.count, 0) },
      },
    });
  } catch (err) {
    next(err);
  }
}
