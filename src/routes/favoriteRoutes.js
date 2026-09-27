import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.js';
import * as favoriteCtrl from '../controllers/favoriteController.js';

const router = Router();

router.use(requireAuth);

router.get('/', favoriteCtrl.list);
router.get('/ids', favoriteCtrl.ids);
router.post('/toggle', favoriteCtrl.toggle);

export default router;
