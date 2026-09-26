import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import AppError from '../utils/AppError.js';

// Local disk storage for now; swap to Cloudinary in a later phase without
// changing callers (they only consume the returned URL).
export const UPLOAD_DIR = path.resolve('uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const ALLOWED = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' };

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = ALLOWED[file.mimetype] || path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${crypto.randomBytes(6).toString('hex')}${ext}`);
  },
});

export const uploadImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    if (ALLOWED[file.mimetype]) return cb(null, true);
    cb(new AppError('Only JPG, PNG or WebP images are allowed', 400));
  },
});

// PRIVATE storage for identity documents (NID, নাগরিক সনদপত্র).
// Lives outside the public /uploads static mount; served only via an
// admin/moderator-guarded route.
export const PRIVATE_DIR = path.resolve('private-uploads');
if (!fs.existsSync(PRIVATE_DIR)) fs.mkdirSync(PRIVATE_DIR, { recursive: true });

const PRIVATE_ALLOWED = { ...ALLOWED, 'application/pdf': '.pdf' };

const privateStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, PRIVATE_DIR),
  filename: (_req, file, cb) => {
    const ext = PRIVATE_ALLOWED[file.mimetype] || path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${crypto.randomBytes(8).toString('hex')}${ext}`);
  },
});

export const uploadPrivateDoc = multer({
  storage: privateStorage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
  fileFilter: (_req, file, cb) => {
    if (PRIVATE_ALLOWED[file.mimetype]) return cb(null, true);
    cb(new AppError('Only JPG, PNG, WebP or PDF files are allowed', 400));
  },
});
