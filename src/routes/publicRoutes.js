import { Router } from 'express';
import * as districtCtrl from '../controllers/districtController.js';
import * as spotCtrl from '../controllers/spotController.js';
import * as adCtrl from '../controllers/adController.js';
import * as listingCtrl from '../controllers/listingController.js';
import { publicStats } from '../controllers/statsController.js';
import { districtWeather } from '../controllers/weatherController.js';
import { gallery } from '../controllers/galleryController.js';

const router = Router();

router.get('/stats', publicStats);
router.get('/gallery', gallery);

// Photo attribution (CC BY-SA compliance) — uploads/image-credits.json
router.get('/credits', async (_req, res) => {
  try {
    const { readFile } = await import('fs/promises');
    const raw = await readFile('uploads/image-credits.json', 'utf8');
    let credits = JSON.parse(raw.replace(/^﻿/, ''));
    if (!Array.isArray(credits)) credits = [credits];
    res.json({ success: true, data: { credits } });
  } catch {
    res.json({ success: true, data: { credits: [] } });
  }
});

router.get('/districts', districtCtrl.listLaunched);
router.get('/districts/:slug', districtCtrl.getBySlug);
router.get('/districts/:slug/listings', listingCtrl.listByDistrict);
router.get('/districts/:slug/weather', districtWeather);
router.get('/listings', listingCtrl.listAll);
router.get('/listings/:id', listingCtrl.getPublic);
router.get('/spots/:slug', spotCtrl.getBySlug);
router.get('/ads', adCtrl.activeBySlot);
router.get('/ads/:id/click', adCtrl.click);

export default router;
