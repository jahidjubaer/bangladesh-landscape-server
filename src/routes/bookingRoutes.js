import { Router } from 'express';
import { requireAuth, requireRole } from '../middlewares/auth.js';
import * as bookingCtrl from '../controllers/bookingController.js';

const router = Router();

router.use(requireAuth);

router.post('/guide', bookingCtrl.createGuideBooking);
router.get('/me', bookingCtrl.myBookings);
router.patch('/:id/cancel', bookingCtrl.cancelBooking);
router.post('/:id/review', bookingCtrl.reviewBooking);

// Guide side
router.get('/guide/incoming', requireRole('guide'), bookingCtrl.guideBookings);
router.patch('/:id/confirm', requireRole('guide'), bookingCtrl.confirmBooking);
router.patch('/:id/reject', requireRole('guide'), bookingCtrl.rejectBooking);

export default router;
