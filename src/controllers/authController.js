import User from '../models/User.js';
import District from '../models/District.js';
import AppError from '../utils/AppError.js';
import { signToken, cookieOptions, COOKIE_NAME } from '../utils/token.js';
import { validateRegister, validateLogin } from '../validators/authValidator.js';
import { notify } from '../services/notifyService.js';
import { verifyFirebaseIdToken, isAdminEmail } from '../services/firebaseAuth.js';

// Admin emails can only be claimed by a verified Google sign-in, so nobody can park one
// on their own account and block (or capture) the real admin's first Google login.
function assertEmailNotReserved(email, user) {
  if (email && isAdminEmail(email) && !user?.roles?.includes('admin')) {
    throw new AppError('This email address cannot be used', 400);
  }
}

// Referral: a valid code rewards both sides with one plan credit
async function findReferrer(ref) {
  if (!ref || typeof ref !== 'string') return null;
  return User.findOne({ referralCode: ref.trim().toUpperCase() });
}

async function rewardReferral(referrer, user) {
  if (!referrer) return;
  user.freePlanCredits += 1;
  await user.save();
  referrer.freePlanCredits += 1;
  referrer.referralCount += 1;
  await referrer.save();
  await notify(referrer._id, 'referral-joined', { name: user.name }, '/profile');
}

function sendAuthResponse(res, user, statusCode, message) {
  const token = signToken(user._id.toString());
  res
    .cookie(COOKIE_NAME, token, cookieOptions())
    .status(statusCode)
    .json({ success: true, message, data: { user: user.toSafeJSON() } });
}

export async function register(req, res, next) {
  try {
    const { name, phone, email, password } = validateRegister(req.body);
    assertEmailNotReserved(email);

    const referrer = await findReferrer(req.body.ref);
    const passwordHash = await User.hashPassword(password);
    const user = await User.create({
      name,
      phone,
      email,
      passwordHash,
      referralCode: User.newReferralCode(),
      ...(referrer && { referredBy: referrer._id }),
    });

    await rewardReferral(referrer, user);
    sendAuthResponse(res, user, 201, 'Registration successful');
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { phone, email, password } = validateLogin(req.body);

    const query = phone ? { phone } : { email };
    const user = await User.findOne(query).select('+passwordHash');
    if (!user || !(await user.comparePassword(password))) {
      throw new AppError('Phone/email or password is incorrect', 401);
    }
    if (user.status === 'suspended') throw new AppError('Account suspended', 403);

    sendAuthResponse(res, user, 200, 'Login successful');
  } catch (err) {
    next(err);
  }
}

// POST /auth/google { idToken } (a Firebase Auth ID token from signInWithPopup)
export async function googleLogin(req, res, next) {
  try {
    const g = await verifyFirebaseIdToken(req.body?.idToken);
    if (!g.email || !g.emailVerified) throw new AppError('Your Google account has no verified email', 401);
    const makeAdmin = isAdminEmail(g.email);

    let user = await User.findOne({ googleUid: g.uid });
    let status = 200;

    if (!user) {
      const sameEmail = await User.findOne({ email: g.email });
      if (sameEmail) {
        // Emails on password accounts are never verified, so only link when the account is
        // already an admin listed in ADMIN_EMAILS (both set by the site owner).
        if (sameEmail.googleUid || !(makeAdmin && sameEmail.roles.includes('admin'))) {
          throw new AppError('An account with this email already exists. Log in with your mobile number and password.', 409);
        }
        sameEmail.googleUid = g.uid;
        user = sameEmail;
      } else {
        user = new User({
          name: g.name.length >= 2 ? g.name.slice(0, 100) : g.email.split('@')[0],
          email: g.email,
          googleUid: g.uid,
          avatarUrl: g.picture,
          referralCode: User.newReferralCode(),
          ...(makeAdmin && { roles: ['user', 'admin'] }),
        });
        status = 201;
      }
    }

    if (user.status === 'suspended') throw new AppError('Account suspended', 403);
    // Grant only: removing an email from ADMIN_EMAILS does not demote (use the admin users page)
    if (makeAdmin && !user.roles.includes('admin')) user.roles = [...new Set([...user.roles, 'admin'])];
    if (user.isNew || user.isModified()) await user.save();
    if (status === 201) {
      const referrer = await findReferrer(req.body?.ref);
      if (referrer && !referrer._id.equals(user._id)) await rewardReferral(referrer, user);
    }

    sendAuthResponse(res, user, status, 'Login successful');
  } catch (err) {
    next(err);
  }
}

export async function logout(_req, res) {
  res
    .clearCookie(COOKIE_NAME, { ...cookieOptions(), maxAge: 0 })
    .json({ success: true, message: 'Logged out' });
}

export async function me(req, res, next) {
  try {
    if (!req.user) return res.json({ success: true, data: { user: null } });
    if (!req.user.referralCode) await req.user.ensureReferralCode(); // pre-feature accounts
    res.json({ success: true, data: { user: req.user.toSafeJSON() } });
  } catch (err) {
    next(err);
  }
}

// PATCH /auth/me — name (and optional email) only
export async function updateMe(req, res, next) {
  try {
    const { name, email } = req.body || {};
    if (name !== undefined) {
      if (typeof name !== 'string' || name.trim().length < 2) throw new AppError('Name must be at least 2 characters', 400);
      req.user.name = name.trim();
    }
    if (email !== undefined) {
      if (email === '' || email === null) {
        if (req.user.googleUid) throw new AppError('The email of a Google account cannot be removed', 400);
        req.user.email = undefined;
      }
      else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        const next = String(email).toLowerCase().trim();
        // A Google account's email is its verified identity; keep it as Google reports it
        if (req.user.googleUid && next !== req.user.email) throw new AppError('The email of a Google account cannot be changed', 400);
        assertEmailNotReserved(next, req.user);
        req.user.email = next;
      }
      else throw new AppError('Email address is not valid', 400);
    }
    await req.user.save();
    res.json({ success: true, message: 'Profile updated', data: { user: req.user.toSafeJSON() } });
  } catch (err) {
    next(err);
  }
}

// PUT /auth/me/visited-districts { slugs: [...], passed: [...], home: 'slug' }
// replaces the user's "My Bangladesh Map"
export async function updateVisitedDistricts(req, res, next) {
  try {
    const { slugs, passed = [], home = '' } = req.body || {};
    const isList = (l) => Array.isArray(l) && l.length <= 64 && l.every((s) => typeof s === 'string');
    if (!isList(slugs) || !isList(passed) || typeof home !== 'string') {
      throw new AppError('slugs/passed must be lists of district slugs', 400);
    }
    const valid = new Set(await District.find({ slug: { $in: [...slugs, ...passed, home] } }).distinct('slug'));
    req.user.visitedDistricts = slugs.filter((s) => valid.has(s));
    // A district is either visited or passed through, never both
    req.user.passedDistricts = passed.filter((s) => valid.has(s) && !slugs.includes(s));
    req.user.homeDistrict = valid.has(home) ? home : '';
    await req.user.save();
    res.json({
      success: true,
      data: {
        visitedDistricts: req.user.visitedDistricts,
        passedDistricts: req.user.passedDistricts,
        homeDistrict: req.user.homeDistrict,
      },
    });
  } catch (err) {
    next(err);
  }
}

// POST /auth/change-password { currentPassword, newPassword }
export async function changePassword(req, res, next) {
  try {
    const { currentPassword, newPassword } = req.body || {};
    if (!newPassword || typeof newPassword !== 'string' || newPassword.length < 6) {
      throw new AppError('New password must be at least 6 characters', 400);
    }
    const user = await User.findById(req.user._id).select('+passwordHash');
    if (!currentPassword || !(await user.comparePassword(currentPassword))) {
      throw new AppError('Current password is incorrect', 401);
    }
    user.passwordHash = await User.hashPassword(newPassword);
    await user.save();
    res.json({ success: true, message: 'Password changed' });
  } catch (err) {
    next(err);
  }
}

// POST /auth/avatar (multipart: image)
export async function updateAvatar(req, res, next) {
  try {
    if (!req.file) throw new AppError('No image file received (field name: image)', 400);
    const { storePublicImage } = await import('../services/storageService.js');
    req.user.avatarUrl = await storePublicImage(req.file);
    await req.user.save();
    res.json({ success: true, message: 'Avatar updated', data: { avatarUrl: req.user.avatarUrl } });
  } catch (err) {
    next(err);
  }
}
