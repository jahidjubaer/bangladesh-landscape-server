import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import { requireAuth, requireRole } from '../middlewares/auth.js';
import { PRIVATE_DIR } from '../middlewares/upload.js';
import * as guideCtrl from '../controllers/guideController.js';
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

// Private identity documents (NID, নাগরিক সনদপত্র) — never on a public URL
router.get('/files/:filename', (req, res, next) => {
  const filename = path.basename(req.params.filename); // prevent traversal
  const filePath = path.join(PRIVATE_DIR, filename);
  if (!fs.existsSync(filePath)) return next(new AppError('File not found', 404));
  res.sendFile(filePath);
});

export default router;
