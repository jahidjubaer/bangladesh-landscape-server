import District from '../models/District.js';
import Spot from '../models/Spot.js';
import AppError from '../utils/AppError.js';

// ---------- Public ----------

export async function listLaunched(_req, res, next) {
  try {
    const [districts, counts] = await Promise.all([
      District.find({ isLaunched: true })
        .select('slug name division heroImageUrl overview bestSeason stayTypesAvailable isVerified')
        .sort({ isVerified: -1, 'name.bn': 1 }),
      Spot.aggregate([{ $match: { isActive: true } }, { $group: { _id: '$district', n: { $sum: 1 } } }]),
    ]);
    const countMap = Object.fromEntries(counts.map((c) => [c._id.toString(), c.n]));
    res.json({
      success: true,
      data: {
        districts: districts.map((d) => ({ ...d.toObject(), spotCount: countMap[d._id.toString()] || 0 })),
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function getBySlug(req, res, next) {
  try {
    const district = await District.findOne({ slug: req.params.slug, isLaunched: true });
    if (!district) throw new AppError('District not found', 404);
    const spots = await Spot.find({ district: district._id, isActive: true })
      .select('slug name images category location entryCost timeNeededHours isHidden tags ratingAvg ratingCount')
      .sort('name.bn');
    res.json({ success: true, data: { district, spots } });
  } catch (err) {
    next(err);
  }
}

// ---------- Admin ----------

export async function adminList(_req, res, next) {
  try {
    const districts = await District.find().sort('name.bn');
    res.json({ success: true, data: { districts } });
  } catch (err) {
    next(err);
  }
}

export async function adminGet(req, res, next) {
  try {
    const district = await District.findById(req.params.id);
    if (!district) throw new AppError('District not found', 404);
    res.json({ success: true, data: { district } });
  } catch (err) {
    next(err);
  }
}

export async function adminCreate(req, res, next) {
  try {
    const district = await District.create(req.body);
    res.status(201).json({ success: true, message: 'District created', data: { district } });
  } catch (err) {
    next(err);
  }
}

export async function adminUpdate(req, res, next) {
  try {
    const district = await District.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!district) throw new AppError('District not found', 404);
    res.json({ success: true, message: 'District updated', data: { district } });
  } catch (err) {
    next(err);
  }
}

export async function adminDelete(req, res, next) {
  try {
    const spotCount = await Spot.countDocuments({ district: req.params.id });
    if (spotCount > 0) throw new AppError(`Delete or move the ${spotCount} spots in this district first`, 409);
    const district = await District.findByIdAndDelete(req.params.id);
    if (!district) throw new AppError('District not found', 404);
    res.json({ success: true, message: 'District deleted' });
  } catch (err) {
    next(err);
  }
}
