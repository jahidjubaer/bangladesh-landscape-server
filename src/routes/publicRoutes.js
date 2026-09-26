import { Router } from 'express';
import * as districtCtrl from '../controllers/districtController.js';
import * as spotCtrl from '../controllers/spotController.js';
import * as adCtrl from '../controllers/adController.js';
import * as listingCtrl from '../controllers/listingController.js';
import { publicStats } from '../controllers/statsController.js';

const router = Router();

router.get('/stats', publicStats);

router.get('/districts', districtCtrl.listLaunched);
router.get('/districts/:slug', districtCtrl.getBySlug);
router.get('/districts/:slug/listings', listingCtrl.listByDistrict);
router.get('/spots/:slug', spotCtrl.getBySlug);
router.get('/ads', adCtrl.activeBySlot);
router.get('/ads/:id/click', adCtrl.click);

export default router;
