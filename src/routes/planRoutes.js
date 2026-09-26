import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { requireAuth, optionalAuth } from '../middlewares/auth.js';
import * as planCtrl from '../controllers/planController.js';

const router = Router();

// Plan generation costs AI tokens — keep it tight per user/IP
const generateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many plans generated, try again later' },
});

router.post('/', requireAuth, generateLimiter, planCtrl.createPlan);
router.get('/me', requireAuth, planCtrl.myPlans);
router.get('/:publicId', optionalAuth, planCtrl.getByPublicId);
router.post('/:publicId/unlock', requireAuth, planCtrl.unlockWithCredit);
router.get('/:publicId/download', requireAuth, planCtrl.downloadPdf);

export default router;
