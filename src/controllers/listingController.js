import Listing from '../models/Listing.js';
import District from '../models/District.js';
import User from '../models/User.js';
import AppError from '../utils/AppError.js';
import { normalizeBdPhone } from '../validators/authValidator.js';

// Which district feature flag gates booking for each listing type
export const TYPE_TO_FEATURE = {
  houseboat: 'boatBooking',
  boat: 'boatBooking',
  hotel: 'hotelBooking',
  cottage: 'hotelBooking',
  resort: 'hotelBooking',
  'chander-gari': 'transportBooking',
  'other-transport': 'transportBooking',
};

export function isListingBookable(listing, district) {
  return Boolean(
    listing.isBookable &&
      listing.status === 'approved' &&
      district?.isLaunched &&
      district?.features?.[TYPE_TO_FEATURE[listing.type]]
  );
}

// ---------- Public: approved listings shown as verified info (not bookable yet) ----------

export async function listByDistrict(req, res, next) {
  try {
    const district = await District.findOne({ slug: req.params.slug, isLaunched: true });
    if (!district) throw new AppError('District not found', 404);

    const listings = await Listing.find({ district: district._id, status: 'approved' })
      .select('type name description images contactPhone priceRange capacity isBookable')
      .sort('type name.bn');
    res.json({
      success: true,
      data: {
        listings: listings.map((l) => ({
          ...l.toObject(),
          bookable: isListingBookable(l, district),
        })),
      },
    });
  } catch (err) {
    next(err);
  }
}

// Public listing detail with computed bookable flag
export async function getPublic(req, res, next) {
  try {
    const listing = await Listing.findOne({ _id: req.params.id, status: 'approved' }).populate('district');
    if (!listing || !listing.district?.isLaunched) throw new AppError('Listing not found', 404);

    const bookable = isListingBookable(listing, listing.district);
    const obj = listing.toObject();
    obj.district = { _id: listing.district._id, slug: listing.district.slug, name: listing.district.name };
    delete obj.blockedDates;
    delete obj.owner;

    res.json({ success: true, data: { listing: obj, bookable } });
  } catch (err) {
    next(err);
  }
}

// ---------- Partner self-service ----------

export async function myListings(req, res, next) {
  try {
    const listings = await Listing.find({ owner: req.user._id }).populate('district', 'slug name features isLaunched');
    res.json({
      success: true,
      data: {
        listings: listings.map((l) => ({ ...l.toObject(), bookable: isListingBookable(l, l.district) })),
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function updateMyListing(req, res, next) {
  try {
    const listing = await Listing.findOne({ _id: req.params.id, owner: req.user._id });
    if (!listing) throw new AppError('Listing not found', 404);

    const b = req.body || {};
    if (b.description?.bn !== undefined) listing.description.bn = b.description.bn;
    if (b.description?.en !== undefined) listing.description.en = b.description.en;
    if (Array.isArray(b.images)) listing.images = b.images.filter((u) => typeof u === 'string').slice(0, 10);
    if (b.contactPhone !== undefined) listing.contactPhone = String(b.contactPhone).trim();
    if (b.priceRange) {
      listing.priceRange.min = Math.max(0, Number(b.priceRange.min) || 0);
      listing.priceRange.max = Math.max(0, Number(b.priceRange.max) || 0);
    }
    if (b.capacity !== undefined) listing.capacity = Math.max(0, Number(b.capacity) || 0);
    if (Array.isArray(b.blockedDates)) {
      listing.blockedDates = b.blockedDates.map((d) => new Date(d)).filter((d) => !Number.isNaN(d.getTime()));
    }
    await listing.save();
    res.json({ success: true, message: 'Listing updated', data: { listing } });
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
    const listings = await Listing.find(filter)
      .populate('district', 'slug name')
      .populate('owner', 'name phone')
      .sort('-createdAt');
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
    const listing = await Listing.create(req.body);
    res.status(201).json({ success: true, message: 'Listing created', data: { listing } });
  } catch (err) {
    next(err);
  }
}

export async function adminUpdate(req, res, next) {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });
    if (!listing) throw new AppError('Listing not found', 404);
    res.json({ success: true, message: 'Listing updated', data: { listing } });
  } catch (err) {
    next(err);
  }
}

// PATCH /admin/listings/:id/owner { phone } — assigns a partner (grants role); empty phone unassigns
export async function adminAssignOwner(req, res, next) {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) throw new AppError('Listing not found', 404);

    const raw = req.body?.phone;
    if (!raw) {
      listing.owner = null;
      await listing.save();
      return res.json({ success: true, message: 'Owner removed', data: { listing } });
    }

    const phone = normalizeBdPhone(raw);
    if (!phone) throw new AppError('Valid mobile number required', 400);
    const user = await User.findOne({ phone });
    if (!user) throw new AppError('No user with this number — they must register first', 404);

    listing.owner = user._id;
    await listing.save();
    await User.findByIdAndUpdate(user._id, { $addToSet: { roles: 'partner' } });

    res.json({ success: true, message: `Owner set: ${user.name} (partner role granted)`, data: { listing } });
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
