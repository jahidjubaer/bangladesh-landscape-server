import User from '../models/User.js';
import AppError from '../utils/AppError.js';
import { signToken, cookieOptions, COOKIE_NAME } from '../utils/token.js';
import { validateRegister, validateLogin } from '../validators/authValidator.js';
import { notify } from '../services/notifyService.js';

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

    // Referral: a valid code rewards both sides with one plan credit
    let referrer = null;
    if (req.body.ref && typeof req.body.ref === 'string') {
      referrer = await User.findOne({ referralCode: req.body.ref.trim().toUpperCase() });
    }

    const passwordHash = await User.hashPassword(password);
    const user = await User.create({
      name,
      phone,
      email,
      passwordHash,
      referralCode: User.newReferralCode(),
      ...(referrer && { referredBy: referrer._id }),
    });

    if (referrer) {
      user.freePlanCredits += 1;
      await user.save();
      referrer.freePlanCredits += 1;
      referrer.referralCount += 1;
      await referrer.save();
      await notify(referrer._id, 'referral-joined', { name: user.name }, '/profile');
    }

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

export async function logout(_req, res) {
  res
    .clearCookie(COOKIE_NAME, { ...cookieOptions(), maxAge: 0 })
    .json({ success: true, message: 'Logged out' });
}

export async function me(req, res, next) {
  try {
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
      if (email === '' || email === null) req.user.email = undefined;
      else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) req.user.email = String(email).toLowerCase().trim();
      else throw new AppError('Email address is not valid', 400);
    }
    await req.user.save();
    res.json({ success: true, message: 'Profile updated', data: { user: req.user.toSafeJSON() } });
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
    req.user.avatarUrl = `/uploads/${req.file.filename}`;
    await req.user.save();
    res.json({ success: true, message: 'Avatar updated', data: { avatarUrl: req.user.avatarUrl } });
  } catch (err) {
    next(err);
  }
}
