import Listing from '../models/Listing.js';
import District from '../models/District.js';
import AppError from '../utils/AppError.js';

// ---------- Public: approved listings shown as verified info (not bookable yet) ----------

export async function listByDistrict(req, res, next) {
  try {
    const district = await District.findOne({ slug: req.params.slug, isLaunched: true });
    if (!district) throw new AppError('District not found', 404);

    const listings = await Listing.find({ district: district._id, status: 'approved' })
      .select('type name description images contactPhone priceRange capacity')
      .sort('type name.bn');
    res.json({ success: true, data: { listings } });
  } catch (err) {
    next(err);
  }
}

// ---------- Admin CRUD (partners get their own dashboard at booking launch) ----------

export async function adminList(req, res, next) {
  try {
    const filter = {};
    if (req.query.district) filter.district = req.query.district;
    if (req.query.status) filter.status = req.query.status;
    const listings = await Listing.find(filter).populate('district', 'slug name').sort('-createdAt');
    res.json({ success: true, data: { listings } });
  } catch (err) {
    next(err);
  }
}

export async function adminGet(req, res, next) {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) throw new AppError('Listing not found', 404);
    res.json({ success: true, data: { listing } });
  } catch (err) {
    next(err);
  }
}

export async function adminCreate(req, res, next) {
  try {
    const listing = await Listing.create({ ...req.body, isBookable: false }); // booking stays gated
    res.status(201).json({ success: true, message: 'Listing created', data: { listing } });
  } catch (err) {
    next(err);
  }
}

export async function adminUpdate(req, res, next) {
  try {
    const { isBookable, ...body } = req.body; // flag flips only at booking launch, deliberately
    const listing = await Listing.findByIdAndUpdate(req.params.id, body, {
      returnDocument: 'after',
      runValidators: true,
    });
    if (!listing) throw new AppError('Listing not found', 404);
    res.json({ success: true, message: 'Listing updated', data: { listing } });
  } catch (err) {
    next(err);
  }
}

export async function adminDelete(req, res, next) {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) throw new AppError('Listing not found', 404);
    res.json({ success: true, message: 'Listing deleted' });
  } catch (err) {
    next(err);
  }
}
