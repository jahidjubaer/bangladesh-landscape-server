import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { writeLimiter } from '../middlewares/rateLimits.js';
import {
  register, login, logout, googleLogin, me, updateMe, updateVisitedDistricts, changePassword, updateAvatar,
} from '../controllers/authController.js';
import { requireAuth, optionalAuth } from '../middlewares/auth.js';
import { uploadImage } from '../middlewares/upload.js';

const router = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20, // 20 attempts / 15 min / IP on sensitive endpoints
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many attempts, try again later' },
});

router.post('/register', authLimiter, register);
router.post('/login', authLimiter, login);
router.post('/google', authLimiter, googleLogin);
router.post('/logout', logout);
// optionalAuth: anonymous visitors get 200 {user:null} instead of console-noise 401s
router.get('/me', optionalAuth, me);
router.patch('/me', requireAuth, updateMe);
router.put('/me/visited-districts', requireAuth, updateVisitedDistricts);
router.post('/change-password', requireAuth, authLimiter, changePassword);
router.post('/avatar', requireAuth, writeLimiter, uploadImage.single('image'), updateAvatar);

export default router;
