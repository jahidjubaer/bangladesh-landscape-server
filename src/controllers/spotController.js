import Spot from '../models/Spot.js';
import District from '../models/District.js';
import AppError from '../utils/AppError.js';
import { SEASON_KEYS, resolveSeasons } from '../utils/seasons.js';

// ---------- Public ----------

// GET /spots?category=&tag=&season=&page= — nationwide spot browsing (explore page)
export async function browse(req, res, next) {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(48, Math.max(1, parseInt(req.query.limit, 10) || 24));

    const launchedIds = await District.find({ isLaunched: true }).distinct('_id');
    const filter = { isActive: true, district: { $in: launchedIds } };
    if (req.query.category) filter.category = req.query.category;
    if (req.query.tag) filter.tags = req.query.tag;

    // Season filter: seasons may be derived from free text, so filter in memory
    // over the light list (a few hundred launched spots)
    const season = SEASON_KEYS.includes(req.query.season) ? req.query.season : null;
    if (season) {
      const all = await Spot.find(filter)
        .populate('district', 'slug name isVerified')
        .select('slug name category images tags isHidden district ratingAvg ratingCount bestTime seasons timeNeededHours entryCost')
        .limit(1000)
        .lean();
      const matching = all
        .map((s) => ({ ...s, seasons: resolveSeasons(s) }))
        .filter((s) => s.seasons.includes(season))
        // Photos first, then spots that name few seasons (the sharpest picks), then rating
        .sort(
          (a, b) =>
            (b.images?.length ? 1 : 0) - (a.images?.length ? 1 : 0) ||
            a.seasons.length - b.seasons.length ||
            (b.ratingAvg || 0) - (a.ratingAvg || 0)
        );
      return res.json({
        success: true,
        data: {
          spots: matching.slice((page - 1) * limit, page * limit),
          page,
          hasMore: matching.length > page * limit,
          total: matching.length,
        },
      });
    }

    // all=1: everything at once for the explore map (light fields, capped)
    if (req.query.all === '1') {
      const spots = await Spot.find(filter)
        .populate('district', 'slug name')
        .select('slug name category images location district')
        .limit(500);
      return res.json({ success: true, data: { spots, page: 1, hasMore: false } });
    }

    // Photo-first ordering: spots with images lead the grid
    const [spots, total] = await Promise.all([
      Spot.find(filter)
        .populate('district', 'slug name isVerified')
        .select('slug name category images tags isHidden district ratingAvg ratingCount timeNeededHours')
        .sort({ 'images.0': -1, 'name.bn': 1 })
        .skip((page - 1) * limit)
        .limit(limit + 1),
      Spot.countDocuments(filter),
    ]);

    const hasMore = spots.length > limit;
    res.json({
      success: true,
      data: { spots: spots.slice(0, limit), page, hasMore, total },
    });
  } catch (err) {
    next(err);
  }
}

export async function getBySlug(req, res, next) {
  try {
    const spot = await Spot.findOne({ slug: req.params.slug, isActive: true }).populate(
      'district',
      'slug name isLaunched'
    );
    if (!spot || !spot.district?.isLaunched) throw new AppError('Spot not found', 404);
    res.json({ success: true, data: { spot: { ...spot.toObject(), seasonsResolved: resolveSeasons(spot) } } });
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
