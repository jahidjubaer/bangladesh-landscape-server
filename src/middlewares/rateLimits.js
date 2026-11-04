import rateLimit from 'express-rate-limit';

// In-memory store: on serverless each warm instance counts separately, which
// still blunts scripted abuse from one IP. Swap in a shared store if needed.
export function limiter(windowMinutes, limit, message = 'Too many requests, try again later') {
  return rateLimit({
    windowMs: windowMinutes * 60 * 1000,
    limit,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message },
  });
}

// Whole API: generous ceiling against scraping / floods
export const apiLimiter = limiter(1, 300);
// Write endpoints anyone signed-in can hit repeatedly (bookings, reviews, payments, uploads)
export const writeLimiter = limiter(15, 40);
// Anonymous beacons (page views, client error reports)
export const beaconLimiter = limiter(1, 60);
