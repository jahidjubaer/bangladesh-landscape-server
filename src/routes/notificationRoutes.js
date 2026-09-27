import { Router } from 'express';
import Notification from '../models/Notification.js';
import { requireAuth } from '../middlewares/auth.js';

const router = Router();

router.use(requireAuth);

// Latest 30 + unread count
router.get('/', async (req, res, next) => {
  try {
    const [notifications, unread] = await Promise.all([
      Notification.find({ user: req.user._id }).sort('-createdAt').limit(30),
      Notification.countDocuments({ user: req.user._id, readAt: null }),
    ]);
    res.json({ success: true, data: { notifications, unread } });
  } catch (err) {
    next(err);
  }
});

router.patch('/read-all', async (req, res, next) => {
  try {
    await Notification.updateMany({ user: req.user._id, readAt: null }, { readAt: new Date() });
    res.json({ success: true, message: 'All read' });
  } catch (err) {
    next(err);
  }
});

router.patch('/:id/read', async (req, res, next) => {
  try {
    await Notification.updateOne({ _id: req.params.id, user: req.user._id }, { readAt: new Date() });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
