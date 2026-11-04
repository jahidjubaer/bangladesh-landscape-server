import env from '../config/env.js';
import { logError } from '../services/errorLogService.js';

export function notFound(req, res) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  // Mongo duplicate key → friendly message
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern || {})[0] || 'field';
    return res.status(409).json({ success: false, message: `This ${field} is already registered` });
  }

  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((e) => e.message).join(', ');
    return res.status(400).json({ success: false, message });
  }

  // Malformed ObjectId in a URL or body (e.g. /bookings/abc) — client error, not a crash
  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, message: `Invalid ${err.path || 'value'}` });
  }

  // Body parser: broken JSON / oversized body
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ success: false, message: 'Invalid JSON body' });
  }
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ success: false, message: 'Request is too large' });
  }

  // Multer upload limits
  if (err.name === 'MulterError') {
    const tooBig = err.code === 'LIMIT_FILE_SIZE';
    return res.status(tooBig ? 413 : 400).json({ success: false, message: tooBig ? 'File is too large' : 'Upload rejected' });
  }

  const status = err.statusCode || err.status || 500;
  if (status >= 500) {
    console.error(err);
    logError({
      source: 'server',
      message: err.message,
      stack: err.stack,
      path: req.originalUrl?.split('?')[0],
      method: req.method,
      userAgent: req.get('user-agent'),
    });
  }

  res.status(status).json({
    success: false,
    message: err.isOperational ? err.message : 'Something went wrong',
    ...(env.nodeEnv === 'development' && status >= 500 ? { stack: err.stack } : {}),
  });
}
