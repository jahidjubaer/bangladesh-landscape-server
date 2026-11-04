import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import env from './config/env.js';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import planRoutes from './routes/planRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import guideRoutes from './routes/guideRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import moderationRoutes from './routes/moderationRoutes.js';
import partnerRoutes from './routes/partnerRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import toolRoutes from './routes/toolRoutes.js';
import sitemapRoutes from './routes/sitemapRoutes.js';
import { UPLOAD_DIR } from './middlewares/upload.js';
import { notFound, errorHandler } from './middlewares/errorHandler.js';
import { sanitizeBody } from './middlewares/sanitize.js';
import { apiLimiter, beaconLimiter } from './middlewares/rateLimits.js';
import { reportClientError } from './controllers/errorLogController.js';

const app = express();

// Behind Render/other reverse proxies: real client IPs for rate limiting,
// X-Forwarded-Proto respected for secure cookies
app.set('trust proxy', 1);

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } })); // allow images from :5173
app.use(compression());
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' })); // SSLCommerz callbacks are form-encoded
app.use(cookieParser());
app.use(sanitizeBody);

app.use('/uploads', express.static(UPLOAD_DIR, { maxAge: '7d' }));

// Uptime monitors: ?deep=1 also pings the database (503 when it is down)
app.get('/api/v1/health', async (req, res) => {
  let db;
  if (req.query.deep) {
    try {
      await connectDB();
      await mongoose.connection.db.admin().ping();
      db = 'up';
    } catch {
      db = 'down';
    }
  }
  res.status(db === 'down' ? 503 : 200).json({
    success: db !== 'down',
    message: 'Bangladesh Landscape API is running',
    time: new Date().toISOString(),
    ...(db ? { db } : {}),
  });
});

app.use('/api/v1', apiLimiter);

// Serverless cold starts: make sure Mongo is connected before any handler runs
app.use(async (_req, _res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

app.post('/api/v1/client-errors', beaconLimiter, reportClientError);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', publicRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/plans', planRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/guides', guideRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/moderation', moderationRoutes);
app.use('/api/v1/partner', partnerRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/favorites', favoriteRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/tools', toolRoutes);
app.use('/', sitemapRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
