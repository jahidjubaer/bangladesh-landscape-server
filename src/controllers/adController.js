import Ad from '../models/Ad.js';
import AppError from '../utils/AppError.js';

// ---------- Public ----------

// GET /ads?slot=hero-top → active ads in their run window (impression counted)
export async function activeBySlot(req, res, next) {
  try {
    const now = new Date();
    const filter = { isActive: true, startsAt: { $lte: now }, endsAt: { $gte: now } };
    if (req.query.slot) filter.slot = req.query.slot;

    const ads = await Ad.find(filter).select('slot sponsorName imageUrl targetUrl').sort('-createdAt').limit(5);
    if (ads.length) {
      await Ad.updateMany({ _id: { $in: ads.map((a) => a._id) } }, { $inc: { impressions: 1 } });
    }
    res.json({ success: true, data: { ads } });
  } catch (err) {
    next(err);
  }
}

// GET /ads/:id/click → count + redirect to sponsor
export async function click(req, res, next) {
  try {
    const ad = await Ad.findByIdAndUpdate(req.params.id, { $inc: { clicks: 1 } });
    if (!ad) throw new AppError('Ad not found', 404);
    res.redirect(302, ad.targetUrl);
  } catch (err) {
    next(err);
  }
}

// ---------- Admin ----------

export async function adminList(_req, res, next) {
  try {
    const ads = await Ad.find().sort('-createdAt');
    res.json({ success: true, data: { ads } });
  } catch (err) {
    next(err);
  }
}

export async function adminCreate(req, res, next) {
  try {
    const ad = await Ad.create(req.body);
    res.status(201).json({ success: true, message: 'Ad created', data: { ad } });
  } catch (err) {
    next(err);
  }
}

export async function adminUpdate(req, res, next) {
  try {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true });
    if (!ad) throw new AppError('Ad not found', 404);
    res.json({ success: true, message: 'Ad updated', data: { ad } });
  } catch (err) {
    next(err);
  }
}

export async function adminDelete(req, res, next) {
  try {
    const ad = await Ad.findByIdAndDelete(req.params.id);
    if (!ad) throw new AppError('Ad not found', 404);
    res.json({ success: true, message: 'Ad deleted' });
  } catch (err) {
    next(err);
  }
}
