import { Router } from 'express';
import { requireAuth, requireRole } from '../middlewares/auth.js';
import { uploadImage } from '../middlewares/upload.js';
import * as districtCtrl from '../controllers/districtController.js';
import * as spotCtrl from '../controllers/spotController.js';
import { getSettings, updateSettings } from '../controllers/settingController.js';
import * as payCtrl from '../controllers/paymentController.js';
import * as adCtrl from '../controllers/adController.js';
import * as listingCtrl from '../controllers/listingController.js';
import AppError from '../utils/AppError.js';

const router = Router();

router.use(requireAuth, requireRole('admin'));

// Districts
router.get('/districts', districtCtrl.adminList);
router.post('/districts', districtCtrl.adminCreate);
router.get('/districts/:id', districtCtrl.adminGet);
router.patch('/districts/:id', districtCtrl.adminUpdate);
router.delete('/districts/:id', districtCtrl.adminDelete);

// Spots
router.get('/spots', spotCtrl.adminList);
router.post('/spots', spotCtrl.adminCreate);
router.get('/spots/:id', spotCtrl.adminGet);
router.patch('/spots/:id', spotCtrl.adminUpdate);
router.delete('/spots/:id', spotCtrl.adminDelete);

// Settings
router.get('/settings', getSettings);
router.patch('/settings', updateSettings);

// Ads / sponsor banners
router.get('/ads', adCtrl.adminList);
router.post('/ads', adCtrl.adminCreate);
router.patch('/ads/:id', adCtrl.adminUpdate);
router.delete('/ads/:id', adCtrl.adminDelete);

// Partner listings (baseline; booking gated by district feature flags)
router.get('/listings', listingCtrl.adminList);
router.post('/listings', listingCtrl.adminCreate);
router.get('/listings/:id', listingCtrl.adminGet);
router.patch('/listings/:id', listingCtrl.adminUpdate);
router.delete('/listings/:id', listingCtrl.adminDelete);

// Manual payment verification
router.get('/payments', payCtrl.adminListPayments);
router.patch('/payments/:id/approve', payCtrl.adminApprovePayment);
router.patch('/payments/:id/reject', payCtrl.adminRejectPayment);

// Image upload → returns a URL usable in district/spot forms
router.post('/uploads', uploadImage.single('image'), (req, res, next) => {
  if (!req.file) return next(new AppError('No image file received (field name: image)', 400));
  res.status(201).json({ success: true, data: { url: `/uploads/${req.file.filename}` } });
});

export default router;
