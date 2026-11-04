import mongoose from 'mongoose';
import ErrorLog from '../models/ErrorLog.js';
import AppError from '../utils/AppError.js';
import { logError } from '../services/errorLogService.js';

// POST /client-errors — browser crash reports (anonymous, rate-limited)
export async function reportClientError(req, res) {
  const { message, stack, path } = req.body || {};
  if (typeof message === 'string' && message.trim()) {
    await logError({
      source: 'client',
      message,
      stack: typeof stack === 'string' ? stack : '',
      path: typeof path === 'string' ? path.split('?')[0] : '',
      method: 'GET',
      userAgent: req.get('user-agent'),
    });
  }
  res.status(204).end();
}

// GET /admin/errors?source=server|client&resolved=true|false
export async function listErrors(req, res, next) {
  try {
    const filter = { resolved: req.query.resolved === 'true' };
    if (['server', 'client'].includes(req.query.source)) filter.source = req.query.source;
    const [errors, open] = await Promise.all([
      ErrorLog.find(filter).sort({ lastSeen: -1 }).limit(200),
      ErrorLog.aggregate([{ $match: { resolved: false } }, { $group: { _id: '$source', n: { $sum: 1 } } }]),
    ]);
    res.json({ success: true, data: { errors, open: Object.fromEntries(open.map((o) => [o._id, o.n])) } });
  } catch (err) {
    next(err);
  }
}

// PATCH /admin/errors/:id { resolved }
export async function setResolved(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) throw new AppError('Not found', 404);
    const log = await ErrorLog.findByIdAndUpdate(req.params.id, { resolved: !!req.body?.resolved }, { returnDocument: 'after' });
    if (!log) throw new AppError('Not found', 404);
    res.json({ success: true, data: { error: log } });
  } catch (err) {
    next(err);
  }
}

// DELETE /admin/errors — clear resolved entries
export async function clearResolved(_req, res, next) {
  try {
    const { deletedCount } = await ErrorLog.deleteMany({ resolved: true });
    res.json({ success: true, data: { deleted: deletedCount } });
  } catch (err) {
    next(err);
  }
}
