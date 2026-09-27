import mongoose from 'mongoose';
import Favorite, { FAVORITE_KINDS } from '../models/Favorite.js';
import District from '../models/District.js';
import Spot from '../models/Spot.js';
import Listing from '../models/Listing.js';
import AppError from '../utils/AppError.js';

// GET /favorites/ids — light list for card heart states
export async function ids(req, res, next) {
  try {
    const favorites = await Favorite.find({ user: req.user._id }).select('kind item -_id').lean();
    res.json({ success: true, data: { favorites } });
  } catch (err) {
    next(err);
  }
}

// POST /favorites/toggle { kind, itemId } → { saved }
export async function toggle(req, res, next) {
  try {
    const { kind, itemId } = req.body || {};
    const modelName = FAVORITE_KINDS[kind];
    if (!modelName || !mongoose.isValidObjectId(itemId)) throw new AppError('Invalid favorite', 400);

    const removed = await Favorite.findOneAndDelete({ user: req.user._id, kind, item: itemId });
    if (removed) return res.json({ success: true, data: { saved: false } });

    const exists = await mongoose.model(modelName).exists({ _id: itemId });
    if (!exists) throw new AppError('Item not found', 404);

    try {
      await Favorite.create({ user: req.user._id, kind, item: itemId });
    } catch (err) {
      if (err.code !== 11000) throw err; // double-tap race: already saved
    }
    res.json({ success: true, data: { saved: true } });
  } catch (err) {
    next(err);
  }
}

// GET /favorites — full wishlist, grouped and populated per kind
export async function list(req, res, next) {
  try {
    const favs = await Favorite.find({ user: req.user._id }).sort('-createdAt').lean();
    const idsOf = (kind) => favs.filter((f) => f.kind === kind).map((f) => f.item);

    const [districts, spots, listings] = await Promise.all([
      District.find({ _id: { $in: idsOf('district') } }).select('slug name heroImageUrl division isVerified'),
      Spot.find({ _id: { $in: idsOf('spot') }, isActive: true })
        .populate('district', 'slug name')
        .select('slug name images category isHidden district ratingAvg ratingCount'),
      Listing.find({ _id: { $in: idsOf('listing') }, status: 'approved' })
        .populate('district', 'slug name')
        .select('name type images priceRange district ratingAvg ratingCount'),
    ]);

    // Keep the saved-most-recently-first order from the favorites themselves
    const order = new Map(favs.map((f, i) => [String(f.item), i]));
    const sortByFav = (arr) => arr.sort((a, b) => order.get(String(a._id)) - order.get(String(b._id)));

    res.json({
      success: true,
      data: { districts: sortByFav(districts), spots: sortByFav(spots), listings: sortByFav(listings) },
    });
  } catch (err) {
    next(err);
  }
}
