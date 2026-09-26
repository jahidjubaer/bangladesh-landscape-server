import Spot from '../models/Spot.js';
import AppError from '../utils/AppError.js';

// ---------- Public ----------

export async function getBySlug(req, res, next) {
  try {
    const spot = await Spot.findOne({ slug: req.params.slug, isActive: true }).populate(
      'district',
      'slug name isLaunched'
    );
    if (!spot || !spot.district?.isLaunched) throw new AppError('Spot not found', 404);
    res.json({ success: true, data: { spot } });
  } catch (err) {
    next(err);
  }
}

// ---------- Admin ----------

export async function adminList(req, res, next) {
  try {
    const filter = {};
    if (req.query.district) filter.district = req.query.district;
    const spots = await Spot.find(filter).populate('district', 'slug name').sort('name.bn');
    res.json({ success: true, data: { spots } });
  } catch (err) {
    next(err);
  }
}

export async function adminGet(req, res, next) {
  try {
    const spot = await Spot.findById(req.params.id);
    if (!spot) throw new AppError('Spot not found', 404);
    res.json({ success: true, data: { spot } });
  } catch (err) {
    next(err);
  }
}

export async function adminCreate(req, res, next) {
  try {
    const spot = await Spot.create(req.body);
    res.status(201).json({ success: true, message: 'Spot created', data: { spot } });
  } catch (err) {
    next(err);
  }
}

export async function adminUpdate(req, res, next) {
  try {
    const spot = await Spot.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!spot) throw new AppError('Spot not found', 404);
    res.json({ success: true, message: 'Spot updated', data: { spot } });
  } catch (err) {
    next(err);
  }
}

export async function adminDelete(req, res, next) {
  try {
    const spot = await Spot.findByIdAndDelete(req.params.id);
    if (!spot) throw new AppError('Spot not found', 404);
    res.json({ success: true, message: 'Spot deleted' });
  } catch (err) {
    next(err);
  }
}
