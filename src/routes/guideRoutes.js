import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { requireAuth, requireRole, optionalAuth } from '../middlewares/auth.js';
import { uploadPrivateDoc } from '../middlewares/upload.js';
import * as guideCtrl from '../controllers/guideController.js';

const router = Router();

const applyLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many applications, try again later' },
});

// Public
router.get('/districts/:slug', guideCtrl.listByDistrict);
router.get('/:id', guideCtrl.getPublic);

// Application (logged-in or brand new — account created inline)
router.post(
  '/apply',
  applyLimiter,
  optionalAuth,
  uploadPrivateDoc.fields([
    { name: 'nidFile', maxCount: 1 },
    { name: 'certFile', maxCount: 1 },
  ]),
  guideCtrl.apply
);

// Guide self-service
router.get('/me/profile', requireAuth, requireRole('guide'), guideCtrl.myProfile);
router.patch('/me/profile', requireAuth, requireRole('guide'), guideCtrl.updateMyProfile);
router.put('/me/availability', requireAuth, requireRole('guide'), guideCtrl.updateAvailability);

export default router;
