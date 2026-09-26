import AppError from '../utils/AppError.js';

// Accepts 01XXXXXXXXX, +8801XXXXXXXXX, 8801XXXXXXXXX → normalizes to 01XXXXXXXXX
export function normalizeBdPhone(raw) {
  if (typeof raw !== 'string') return null;
  let p = raw.replace(/[\s-]/g, '');
  if (p.startsWith('+880')) p = '0' + p.slice(4);
  else if (p.startsWith('880')) p = '0' + p.slice(3);
  if (/^01[3-9]\d{8}$/.test(p)) return p;
  return null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRegister(body) {
  const { name, phone, email, password } = body || {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    throw new AppError('Name must be at least 2 characters', 400);
  }
  const normalizedPhone = normalizeBdPhone(phone);
  if (!normalizedPhone) {
    throw new AppError('A valid Bangladeshi mobile number is required (e.g., 01XXXXXXXXX)', 400);
  }
  if (email !== undefined && email !== null && email !== '' && !EMAIL_RE.test(email)) {
    throw new AppError('Email address is not valid', 400);
  }
  if (!password || typeof password !== 'string' || password.length < 6) {
    throw new AppError('Password must be at least 6 characters', 400);
  }

  return {
    name: name.trim(),
    phone: normalizedPhone,
    email: email ? String(email).toLowerCase().trim() : undefined,
    password,
  };
}

export function validateLogin(body) {
  const { identifier, password } = body || {};
  if (!identifier || typeof identifier !== 'string') {
    throw new AppError('Phone number or email is required', 400);
  }
  if (!password || typeof password !== 'string') {
    throw new AppError('Password is required', 400);
  }
  const phone = normalizeBdPhone(identifier);
  const email = EMAIL_RE.test(identifier.trim()) ? identifier.toLowerCase().trim() : null;
  if (!phone && !email) {
    throw new AppError('Enter a valid phone number or email', 400);
  }
  return { phone, email, password };
}
