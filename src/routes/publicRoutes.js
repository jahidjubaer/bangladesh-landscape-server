import { Router } from 'express';
import * as districtCtrl from '../controllers/districtController.js';
import * as spotCtrl from '../controllers/spotController.js';

const router = Router();

router.get('/districts', districtCtrl.listLaunched);
router.get('/districts/:slug', districtCtrl.getBySlug);
router.get('/spots/:slug', spotCtrl.getBySlug);

export default router;
