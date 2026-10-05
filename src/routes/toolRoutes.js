import { Router } from 'express';
import { routeOptions, districtProfiles } from '../controllers/toolController.js';

// Public data for the fun/utility tools (budget calculator, trip matcher)
const router = Router();

router.get('/route', routeOptions);
router.get('/district-profiles', districtProfiles);

export default router;
