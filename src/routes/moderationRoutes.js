import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import { requireAuth, requireRole } from '../middlewares/auth.js';
import { PRIVATE_DIR } from '../middlewares/upload.js';
import * as guideCtrl from '../controllers/guideController.js';
import * as blogCtrl from '../controllers/blogController.js';
import AppError from '../utils/AppError.js';

const router = Router();

// Moderators screen; admins can do everything moderators can
router.use(requireAuth, requireRole('moderator', 'admin'));

router.get('/guide-applications', guideCtrl.moderationList);
router.get('/guide-applications/:id', guideCtrl.moderationGet);
router.patch('/guide-applications/:id/screen', guideCtrl.screen);

// Admin-only verification decisions
router.patch('/guide-applications/:id/approve', requireRole('admin'), guideCtrl.approve);
router.patch('/guide-applications/:id/reject', requireRole('admin'), guideCtrl.reject);

// Blog moderation (moderators + admins)
router.get('/blogs', blogCtrl.moderationList);
router.get('/blogs/:id', blogCtrl.moderationGet);
router.patch('/blogs/:id/approve', blogCtrl.approveBlog);
router.patch('/blogs/:id/reject', blogCtrl.rejectBlog);

// Private identity documents (NID, নাগরিক সনদপত্র) — never on a public URL.
// Stored value is a local filename (dev) or a Vercel Blob URL (stateless
// hosting); Blob docs are streamed through this guarded route.
router.get('/files/:name', async (req, res, next) => {
  try {
    const raw = decodeURIComponent(req.params.name);

    if (/^https:\/\//.test(raw)) {
      if (!/\.blob\.vercel-storage\.com\//.test(raw)) throw new AppError('File not found', 404);
      const upstream = await fetch(raw);
      if (!upstream.ok) throw new AppError('File not found', 404);
      res.set('Content-Type', upstream.headers.get('content-type') || 'application/octet-stream');
      const { Readable } = await import('stream');
      Readable.fromWeb(upstream.body).pipe(res);
      return;
    }

    const filename = path.basename(raw); // prevent traversal
    const filePath = path.join(PRIVATE_DIR, filename);
    if (!fs.existsSync(filePath)) throw new AppError('File not found', 404);
    res.sendFile(filePath);
  } catch (err) {
    next(err);
  }
});

export default router;
