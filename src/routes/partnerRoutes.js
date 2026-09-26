import { Router } from 'express';
import { requireAuth, requireRole } from '../middlewares/auth.js';
import * as listingCtrl from '../controllers/listingController.js';

const router = Router();

router.use(requireAuth, requireRole('partner'));

router.get('/listings', listingCtrl.myListings);
router.patch('/listings/:id', listingCtrl.updateMyListing);

export default router;
