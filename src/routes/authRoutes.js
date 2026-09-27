import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { register, login, logout, me, updateMe, changePassword, updateAvatar } from '../controllers/authController.js';
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
router.post('/logout', logout);
// optionalAuth: anonymous visitors get 200 {user:null} instead of console-noise 401s
router.get('/me', optionalAuth, me);
router.patch('/me', requireAuth, updateMe);
router.post('/change-password', requireAuth, authLimiter, changePassword);
router.post('/avatar', requireAuth, uploadImage.single('image'), updateAvatar);

export default router;
