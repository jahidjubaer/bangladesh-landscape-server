import { Router } from 'express';
import { requireAuth, optionalAuth, requireRole } from '../middlewares/auth.js';
import * as reviewCtrl from '../controllers/reviewController.js';

const router = Router();

router.get('/', optionalAuth, reviewCtrl.listPublic);
router.post('/', requireAuth, reviewCtrl.submit);

router.get('/moderation', requireAuth, requireRole('admin', 'moderator'), reviewCtrl.moderationList);
router.patch('/:id/status', requireAuth, requireRole('admin', 'moderator'), reviewCtrl.setStatus);

export default router;
