import User from '../models/User.js';
import AppError from '../utils/AppError.js';
import { signToken, cookieOptions, COOKIE_NAME } from '../utils/token.js';
import { validateRegister, validateLogin } from '../validators/authValidator.js';

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

    const passwordHash = await User.hashPassword(password);
    const user = await User.create({ name, phone, email, passwordHash });

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

export async function me(req, res) {
  res.json({ success: true, data: { user: req.user.toSafeJSON() } });
}
