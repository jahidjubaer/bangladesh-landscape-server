import { Router } from 'express';
import { writeLimiter } from '../middlewares/rateLimits.js';
import { requireAuth } from '../middlewares/auth.js';
import * as payCtrl from '../controllers/paymentController.js';

const router = Router();

router.post('/init', requireAuth, writeLimiter, payCtrl.init);
router.post('/manual-bkash', requireAuth, writeLimiter, payCtrl.submitManualBkash);

// Gateway-facing endpoints (no auth — SSLCommerz posts to these)
router.post('/callback/success', payCtrl.callbackSuccess);
router.post('/callback/fail', payCtrl.callbackFail);
router.post('/callback/cancel', payCtrl.callbackCancel);
router.post('/ipn', payCtrl.ipn);

// Dev-only mock gateway
router.get('/mock/pay', payCtrl.mockPay);

export default router;
