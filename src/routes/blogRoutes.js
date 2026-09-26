import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { requireAuth } from '../middlewares/auth.js';
import { uploadImage } from '../middlewares/upload.js';
import * as blogCtrl from '../controllers/blogController.js';
import AppError from '../utils/AppError.js';

const router = Router();

const submitLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many submissions, try again later' },
});

// Public
router.get('/', blogCtrl.list);

// Author (specific paths before /:slug)
router.get('/me/list', requireAuth, blogCtrl.myBlogs);
router.get('/me/:id', requireAuth, blogCtrl.getMine);
router.post('/', requireAuth, submitLimiter, blogCtrl.create);
router.patch('/:id', requireAuth, blogCtrl.update);
router.delete('/:id', requireAuth, blogCtrl.remove);

// Author image upload (cover/inline) — public storage, auth required
router.post('/uploads', requireAuth, submitLimiter, uploadImage.single('image'), (req, res, next) => {
  if (!req.file) return next(new AppError('No image file received (field name: image)', 400));
  res.status(201).json({ success: true, data: { url: `/uploads/${req.file.filename}` } });
});

router.get('/:slug', blogCtrl.getBySlug);

export default router;
