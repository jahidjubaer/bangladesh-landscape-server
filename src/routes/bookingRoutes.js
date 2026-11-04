import { Router } from 'express';
import { writeLimiter } from '../middlewares/rateLimits.js';
import { requireAuth, requireRole } from '../middlewares/auth.js';
import * as bookingCtrl from '../controllers/bookingController.js';

const router = Router();

router.use(requireAuth);

router.post('/guide', writeLimiter, bookingCtrl.createGuideBooking);
router.post('/listing', writeLimiter, bookingCtrl.createListingBooking);
router.get('/me', bookingCtrl.myBookings);
router.patch('/:id/cancel', bookingCtrl.cancelBooking);
router.post('/:id/review', writeLimiter, bookingCtrl.reviewBooking);

// Guide side
router.get('/guide/incoming', requireRole('guide'), bookingCtrl.guideBookings);
router.patch('/:id/confirm', requireRole('guide'), bookingCtrl.confirmBooking);
router.patch('/:id/reject', requireRole('guide'), bookingCtrl.rejectBooking);

// Partner side (listing bookings)
router.get('/partner/incoming', requireRole('partner'), bookingCtrl.partnerBookings);
router.patch('/:id/partner-confirm', requireRole('partner'), bookingCtrl.partnerConfirm);
router.patch('/:id/partner-reject', requireRole('partner'), bookingCtrl.partnerReject);

export default router;
