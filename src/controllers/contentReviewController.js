import mongoose from 'mongoose';
import ContentFlag from '../models/ContentFlag.js';
import District from '../models/District.js';
import Spot from '../models/Spot.js';
import AppError from '../utils/AppError.js';

const FIELDS = ['history', 'fee', 'hours', 'location', 'name', 'facility', 'safety', 'other'];
const STATUSES = ['open', 'confirmed', 'fixed'];

// Resolve slugs → names + ids for links (public page and admin edit form)
async function describe(flags) {
  const spotSlugs = flags.filter((f) => f.target === 'spot').map((f) => f.slug);
  const districtSlugs = flags.filter((f) => f.target === 'district').map((f) => f.slug);
  const [spots, districts] = await Promise.all([
    Spot.find({ slug: { $in: spotSlugs } }).select('slug name district').populate('district', 'slug name'),
    District.find({ slug: { $in: districtSlugs } }).select('slug name'),
  ]);
  const bySpot = Object.fromEntries(spots.map((s) => [s.slug, s]));
  const byDistrict = Object.fromEntries(districts.map((d) => [d.slug, d]));
  return flags.map((f) => {
    const item = f.target === 'spot' ? bySpot[f.slug] : byDistrict[f.slug];
    return {
      ...f.toObject(),
      itemId: item?._id || null,
      itemName: item?.name || { bn: f.slug, en: f.slug },
      districtName: f.target === 'spot' ? item?.district?.name || null : null,
      publicLink: f.target === 'spot' ? `/spots/${f.slug}` : `/districts/${f.slug}`,
    };
  });
}

// GET /admin/content-review/flags?status=open&field=fee
export async function listFlags(req, res, next) {
  try {
    const { status = 'open', field } = req.query;
    const filter = {};
    if (STATUSES.includes(status)) filter.status = status;
    if (FIELDS.includes(field)) filter.field = field;
    const [flags, counts] = await Promise.all([
      ContentFlag.find(filter).sort({ target: 1, slug: 1 }).populate('resolvedBy', 'name'),
      ContentFlag.aggregate([{ $group: { _id: '$status', n: { $sum: 1 } } }]),
    ]);
    res.json({
      success: true,
      data: {
        flags: await describe(flags),
        counts: Object.fromEntries(counts.map((c) => [c._id, c.n])),
      },
    });
  } catch (err) {
    next(err);
  }
}

// PATCH /admin/content-review/flags/:id { status, resolutionNote }
export async function updateFlag(req, res, next) {
  try {
    const { status, resolutionNote } = req.body || {};
    if (!STATUSES.includes(status)) throw new AppError('Invalid status', 400);
    if (!mongoose.isValidObjectId(req.params.id)) throw new AppError('Flag not found', 404);
    const flag = await ContentFlag.findById(req.params.id);
    if (!flag) throw new AppError('Flag not found', 404);
    flag.status = status;
    if (typeof resolutionNote === 'string') flag.resolutionNote = resolutionNote.slice(0, 600);
    flag.resolvedBy = status === 'open' ? null : req.user._id;
    flag.resolvedAt = status === 'open' ? null : new Date();
    await flag.save();
    res.json({ success: true, data: { flag } });
  } catch (err) {
    next(err);
  }
}

// POST /admin/content-review/flags { target, slug, field, note } — staff report a doubtful fact
export async function createFlag(req, res, next) {
  try {
    const { target, slug, field = 'other', note } = req.body || {};
    if (!['spot', 'district'].includes(target)) throw new AppError('Invalid target', 400);
    if (!FIELDS.includes(field)) throw new AppError('Invalid field', 400);
    if (typeof note !== 'string' || note.trim().length < 5) throw new AppError('Note is too short', 400);
    const exists = await (target === 'spot' ? Spot : District).exists({ slug });
    if (!exists) throw new AppError(`Unknown ${target}`, 404);
    const flag = await ContentFlag.create({ target, slug, field, note: note.trim(), source: 'staff' });
    res.status(201).json({ success: true, data: { flag } });
  } catch (err) {
    if (err.code === 11000) return next(new AppError('This note already exists', 409));
    next(err);
  }
}

// GET /admin/content-review/gaps — live data-quality checks
export async function dataGaps(_req, res, next) {
  try {
    const [spots, districts] = await Promise.all([
      Spot.find({ isActive: true })
        .select('slug name images entryCost description location about district')
        .populate('district', 'slug name'),
      District.find().select('slug name heroImageUrl isVerified overview warnings'),
    ]);
    const spotItem = (s) => ({ target: 'spot', id: s._id, slug: s.slug, name: s.name, districtName: s.district?.name });
    const districtItem = (d) => ({ target: 'district', id: d._id, slug: d.slug, name: d.name });
    const checks = [
      { key: 'noPhoto', items: spots.filter((s) => !s.images?.length).map(spotItem) },
      { key: 'unknownFee', items: spots.filter((s) => !s.entryCost?.max).map(spotItem) },
      { key: 'noEnglish', items: spots.filter((s) => !s.description?.en).map(spotItem) },
      { key: 'noCoordinates', items: spots.filter((s) => s.location?.lat == null).map(spotItem) },
      { key: 'noAbout', items: spots.filter((s) => !s.about?.bn).map(spotItem) },
      { key: 'noHero', items: districts.filter((d) => !d.heroImageUrl).map(districtItem) },
      { key: 'notVerified', items: districts.filter((d) => !d.isVerified).map(districtItem) },
      { key: 'noWarnings', items: districts.filter((d) => !d.warnings?.length).map(districtItem) },
    ].map((c) => ({ ...c, count: c.items.length }));
    res.json({ success: true, data: { checks, totals: { spots: spots.length, districts: districts.length } } });
  } catch (err) {
    next(err);
  }
}
