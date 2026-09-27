import mongoose from 'mongoose';
import Review, { REVIEW_KINDS } from '../models/Review.js';
import AppError from '../utils/AppError.js';
import { notify } from '../services/notifyService.js';

// Approved reviews drive the denormalized stars on the item itself
async function recompute(kind, itemId) {
  const [agg] = await Review.aggregate([
    { $match: { kind, item: new mongoose.Types.ObjectId(String(itemId)), status: 'approved' } },
    { $group: { _id: null, avg: { $avg: '$rating' }, count: { $sum: 1 } } },
  ]);
  await mongoose.model(REVIEW_KINDS[kind]).updateOne(
    { _id: itemId },
    { ratingAvg: agg ? Math.round(agg.avg * 10) / 10 : 0, ratingCount: agg ? agg.count : 0 }
  );
}

// GET /reviews?kind=&itemId= — approved reviews plus the caller's own (any status)
export async function listPublic(req, res, next) {
  try {
    const { kind, itemId } = req.query;
    if (!REVIEW_KINDS[kind] || !mongoose.isValidObjectId(itemId)) throw new AppError('Invalid request', 400);

    const [reviews, mine] = await Promise.all([
      Review.find({ kind, item: itemId, status: 'approved' })
        .populate('user', 'name avatarUrl')
        .sort('-createdAt')
        .limit(50),
      req.user ? Review.findOne({ kind, item: itemId, user: req.user._id }) : null,
    ]);

    res.json({ success: true, data: { reviews, mine } });
  } catch (err) {
    next(err);
  }
}

// POST /reviews { kind, itemId, rating, text } — create or edit own (re-moderated)
export async function submit(req, res, next) {
  try {
    const { kind, itemId, rating, text } = req.body || {};
    const modelName = REVIEW_KINDS[kind];
    if (!modelName || !mongoose.isValidObjectId(itemId)) throw new AppError('Invalid request', 400);

    const r = Math.round(Number(rating));
    if (!(r >= 1 && r <= 5)) throw new AppError('Rating must be 1–5', 400);

    const exists = await mongoose.model(modelName).exists({ _id: itemId });
    if (!exists) throw new AppError('Item not found', 404);

    const review = await Review.findOneAndUpdate(
      { user: req.user._id, kind, item: itemId },
      { rating: r, text: String(text || '').slice(0, 2000), status: 'pending' },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    // An edited review leaves the public pool until re-approved
    await recompute(kind, itemId);

    res.status(201).json({ success: true, message: 'Review submitted for moderation', data: { review } });
  } catch (err) {
    next(err);
  }
}

// ---------- Moderation (admin/moderator) ----------

// GET /reviews/moderation?status=pending
export async function moderationList(req, res, next) {
  try {
    const status = ['pending', 'approved', 'rejected'].includes(req.query.status)
      ? req.query.status
      : 'pending';
    const reviews = await Review.find({ status }).populate('user', 'name phone').sort('-updatedAt').limit(100);

    // Attach the reviewed item's name + public link per kind
    const byKind = { spot: [], listing: [] };
    reviews.forEach((r) => byKind[r.kind]?.push(r.item));
    const [spots, listings] = await Promise.all([
      mongoose.model('Spot').find({ _id: { $in: byKind.spot } }).select('slug name'),
      mongoose.model('Listing').find({ _id: { $in: byKind.listing } }).select('name'),
    ]);
    const spotMap = new Map(spots.map((s) => [String(s._id), s]));
    const listingMap = new Map(listings.map((l) => [String(l._id), l]));

    res.json({
      success: true,
      data: {
        reviews: reviews.map((r) => {
          const obj = r.toObject();
          if (r.kind === 'spot') {
            const s = spotMap.get(String(r.item));
            obj.itemName = s?.name;
            obj.itemLink = s ? `/spots/${s.slug}` : '';
          } else {
            const l = listingMap.get(String(r.item));
            obj.itemName = l?.name;
            obj.itemLink = l ? `/listings/${r.item}` : '';
          }
          return obj;
        }),
      },
    });
  } catch (err) {
    next(err);
  }
}

// PATCH /reviews/:id/status { status: approved|rejected }
export async function setStatus(req, res, next) {
  try {
    const { status } = req.body || {};
    if (!['approved', 'rejected'].includes(status)) throw new AppError('Invalid status', 400);

    const review = await Review.findById(req.params.id);
    if (!review) throw new AppError('Review not found', 404);

    review.status = status;
    await review.save();
    await recompute(review.kind, review.item);

    const item = await mongoose.model(REVIEW_KINDS[review.kind]).findById(review.item).select('slug name');
    const link = review.kind === 'spot' ? `/spots/${item?.slug}` : `/listings/${review.item}`;
    await notify(
      review.user,
      status === 'approved' ? 'review-approved' : 'review-rejected',
      { title: item?.name?.bn || '' },
      link
    );

    res.json({ success: true, message: `Review ${status}`, data: { review } });
  } catch (err) {
    next(err);
  }
}
