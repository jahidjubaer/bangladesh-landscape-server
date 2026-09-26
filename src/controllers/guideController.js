import GuideProfile from '../models/GuideProfile.js';
import Booking from '../models/Booking.js';
import District from '../models/District.js';
import User from '../models/User.js';
import AppError from '../utils/AppError.js';
import { normalizeBdPhone } from '../validators/authValidator.js';

const LANGS = ['bangla', 'english', 'local'];

// ---------- Public ----------

export async function listByDistrict(req, res, next) {
  try {
    const district = await District.findOne({ slug: req.params.slug, isLaunched: true });
    if (!district) throw new AppError('District not found', 404);

    const guides = await GuideProfile.find({
      applicationStatus: 'approved',
      availabilityStatus: 'active',
      districts: district._id,
    })
      .populate('user', 'name avatarUrl')
      .sort('-knowledgeScore -ratingAvg');

    res.json({ success: true, data: { guides: guides.map((g) => g.toPublicJSON()) } });
  } catch (err) {
    next(err);
  }
}

export async function getPublic(req, res, next) {
  try {
    const guide = await GuideProfile.findOne({ _id: req.params.id, applicationStatus: 'approved' })
      .populate('user', 'name avatarUrl')
      .populate('districts', 'slug name')
      .populate('knownSpots', 'slug name');
    if (!guide) throw new AppError('Guide not found', 404);

    const reviews = await Booking.find({ guide: guide._id, 'review.rating': { $exists: true } })
      .populate('user', 'name')
      .select('review user dates')
      .sort('-review.at')
      .limit(20);

    res.json({ success: true, data: { guide: guide.toPublicJSON(), reviews } });
  } catch (err) {
    next(err);
  }
}

// ---------- Application (works with or without an existing account) ----------

export async function apply(req, res, next) {
  try {
    const b = req.body;
    let user = req.user;

    // No session â†’ create the account as part of the application
    if (!user) {
      const phone = normalizeBdPhone(b.phone);
      if (!b.name || b.name.trim().length < 2) throw new AppError('Name is required', 400);
      if (!phone) throw new AppError('A valid mobile number is required', 400);
      if (!b.password || b.password.length < 6) throw new AppError('Password must be at least 6 characters', 400);
      const existing = await User.findOne({ phone });
      if (existing) throw new AppError('This number already has an account â€” log in first, then apply', 409);
      user = await User.create({
        name: b.name.trim(),
        phone,
        passwordHash: await User.hashPassword(b.password),
      });
    }

    if (await GuideProfile.findOne({ user: user._id })) {
      throw new AppError('You already have a guide application', 409);
    }

    // Required application fields
    const whatsapp = normalizeBdPhone(b.whatsappNumber);
    if (!b.nidNumber || String(b.nidNumber).trim().length < 10) throw new AppError('Valid NID number is required', 400);
    if (!b.address || b.address.trim().length < 5) throw new AppError('Address is required', 400);
    if (!whatsapp) throw new AppError('Valid WhatsApp number is required', 400);
    if (!req.files?.nidFile?.[0]) throw new AppError('NID photo/scan is required', 400);

    let districts = [];
    if (b.districts) {
      const slugs = Array.isArray(b.districts) ? b.districts : String(b.districts).split(',');
      districts = (await District.find({ slug: { $in: slugs.map((s) => s.trim()) } })).map((d) => d._id);
    }

    let languages = [];
    if (b.languages) {
      const arr = Array.isArray(b.languages) ? b.languages : String(b.languages).split(',');
      languages = arr.map((l) => l.trim()).filter((l) => LANGS.includes(l));
    }

    const guide = await GuideProfile.create({
      user: user._id,
      application: {
        nidNumber: String(b.nidNumber).trim(),
        nidFile: req.files.nidFile[0].filename,
        address: b.address.trim(),
        facebookUrl: b.facebookUrl || '',
        education: b.education || '',
        citizenshipCertFile: req.files?.certFile?.[0]?.filename || '',
        whatsappNumber: whatsapp,
        experienceSummary: b.experienceSummary || '',
      },
      districts,
      languages: languages.length ? languages : ['bangla'],
      dailyRate: Number(b.dailyRate) || 1000,
      experienceYears: Number(b.experienceYears) || 0,
      bio: { bn: b.bio || '' },
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted â€” we will verify and contact you',
      data: { applicationStatus: guide.applicationStatus, accountCreated: !req.user },
    });
  } catch (err) {
    next(err);
  }
}

// ---------- Moderation (moderator screens, admin approves) ----------

export async function moderationList(req, res, next) {
  try {
    const filter = {};
    if (req.query.status) filter.applicationStatus = req.query.status;
    const applications = await GuideProfile.find(filter)
      .populate('user', 'name phone email')
      .populate('districts', 'slug name')
      .sort('-createdAt');
    res.json({ success: true, data: { applications } });
  } catch (err) {
    next(err);
  }
}

export async function moderationGet(req, res, next) {
  try {
    const application = await GuideProfile.findById(req.params.id)
      .populate('user', 'name phone email')
      .populate('districts', 'slug name');
    if (!application) throw new AppError('Application not found', 404);
    res.json({ success: true, data: { application } });
  } catch (err) {
    next(err);
  }
}

export async function screen(req, res, next) {
  try {
    const guide = await GuideProfile.findById(req.params.id);
    if (!guide) throw new AppError('Application not found', 404);
    if (guide.applicationStatus !== 'pending') throw new AppError('Only pending applications can be screened', 409);
    guide.applicationStatus = 'screened';
    guide.screenedBy = req.user._id;
    await guide.save();
    res.json({ success: true, message: 'Application screened â€” awaiting admin verification' });
  } catch (err) {
    next(err);
  }
}

export async function approve(req, res, next) {
  try {
    const guide = await GuideProfile.findById(req.params.id);
    if (!guide) throw new AppError('Application not found', 404);
    if (!['pending', 'screened'].includes(guide.applicationStatus)) {
      throw new AppError('Application is not awaiting approval', 409);
    }
    guide.applicationStatus = 'approved';
    guide.approvedBy = req.user._id;
    if (req.body?.knowledgeScore) guide.knowledgeScore = Number(req.body?.knowledgeScore);
    await guide.save();

    await User.findByIdAndUpdate(guide.user, { $addToSet: { roles: 'guide' } });

    res.json({ success: true, message: 'Guide approved' });
  } catch (err) {
    next(err);
  }
}

export async function reject(req, res, next) {
  try {
    const guide = await GuideProfile.findById(req.params.id);
    if (!guide) throw new AppError('Application not found', 404);
    guide.applicationStatus = 'rejected';
    guide.rejectionReason = req.body?.reason || '';
    await guide.save();
    res.json({ success: true, message: 'Application rejected' });
  } catch (err) {
    next(err);
  }
}

// ---------- Guide self-service ----------

export async function myProfile(req, res, next) {
  try {
    const guide = await GuideProfile.findOne({ user: req.user._id })
      .populate('districts', 'slug name')
      .populate('knownSpots', 'slug name');
    if (!guide) throw new AppError('No guide profile found', 404);
    res.json({ success: true, data: { guide } });
  } catch (err) {
    next(err);
  }
}

export async function updateMyProfile(req, res, next) {
  try {
    const guide = await GuideProfile.findOne({ user: req.user._id, applicationStatus: 'approved' });
    if (!guide) throw new AppError('No approved guide profile found', 404);

    const b = req.body;
    if (b.bio?.bn !== undefined) guide.bio.bn = b.bio.bn;
    if (b.dailyRate !== undefined) guide.dailyRate = Math.max(0, Number(b.dailyRate) || guide.dailyRate);
    if (b.experienceYears !== undefined) guide.experienceYears = Math.max(0, Number(b.experienceYears) || 0);
    if (b.photoUrl !== undefined) guide.photoUrl = b.photoUrl;
    if (Array.isArray(b.languages)) guide.languages = b.languages.filter((l) => LANGS.includes(l));
    if (b.availabilityStatus && ['active', 'on-leave'].includes(b.availabilityStatus)) {
      guide.availabilityStatus = b.availabilityStatus;
    }
    await guide.save();
    res.json({ success: true, message: 'Profile updated', data: { guide } });
  } catch (err) {
    next(err);
  }
}

export async function updateAvailability(req, res, next) {
  try {
    const guide = await GuideProfile.findOne({ user: req.user._id, applicationStatus: 'approved' });
    if (!guide) throw new AppError('No approved guide profile found', 404);

    const dates = (req.body.blockedDates || [])
      .map((d) => new Date(d))
      .filter((d) => !Number.isNaN(d.getTime()));
    guide.blockedDates = dates;
    await guide.save();
    res.json({ success: true, message: 'Availability updated', data: { blockedDates: guide.blockedDates } });
  } catch (err) {
    next(err);
  }
}
