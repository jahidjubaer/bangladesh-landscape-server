import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { requireAuth } from '../middlewares/auth.js';
import * as eventCtrl from '../controllers/eventController.js';

const router = Router();

const bookLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many booking attempts, try again later' },
});

router.get('/', eventCtrl.list);
router.get('/me/bookings', requireAuth, eventCtrl.myEventBookings);
router.post('/book', requireAuth, bookLimiter, eventCtrl.book);
router.patch('/bookings/:id/cancel', requireAuth, eventCtrl.cancelMyEventBooking);
router.get('/:slug', eventCtrl.getBySlug);

export default router;
