import User from '../models/User.js';
import AppError from '../utils/AppError.js';
import { verifyToken, COOKIE_NAME } from '../utils/token.js';

export async function requireAuth(req, _res, next) {
  try {
    const token = req.cookies[COOKIE_NAME];
    if (!token) throw new AppError('Authentication required', 401);

    let payload;
    try {
      payload = verifyToken(token);
    } catch {
      throw new AppError('Invalid or expired session', 401);
    }

    const user = await User.findById(payload.sub);
    if (!user) throw new AppError('Account not found', 401);
    if (user.status === 'suspended') throw new AppError('Account suspended', 403);

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

// Attaches req.user when a valid session cookie exists, but never rejects
export async function optionalAuth(req, _res, next) {
  try {
    const token = req.cookies[COOKIE_NAME];
    if (token) {
      const payload = verifyToken(token);
      const user = await User.findById(payload.sub);
      if (user && user.status !== 'suspended') req.user = user;
    }
  } catch {
    // invalid token → treat as anonymous
  }
  next();
}

// Usage: router.get('/x', requireAuth, requireRole('admin', 'moderator'), handler)
export function requireRole(...roles) {
  return (req, _res, next) => {
    if (!req.user) return next(new AppError('Authentication required', 401));
    const has = req.user.roles.some((r) => roles.includes(r));
    if (!has) return next(new AppError('You do not have permission for this action', 403));
    next();
  };
}
