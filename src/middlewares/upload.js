import multer from 'multer';
import path from 'path';
import fs from 'fs';
import AppError from '../utils/AppError.js';

// Files land in memory; services/storageService.js decides where they live
// (Vercel Blob on stateless hosting, local disk in dev). Callers only consume
// the returned URL.
export const UPLOAD_DIR = path.resolve('uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

export const PRIVATE_DIR = path.resolve('private-uploads');
if (!fs.existsSync(PRIVATE_DIR)) fs.mkdirSync(PRIVATE_DIR, { recursive: true });

const ALLOWED = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' };

export const uploadImage = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    if (ALLOWED[file.mimetype]) return cb(null, true);
    cb(new AppError('Only JPG, PNG or WebP images are allowed', 400));
  },
});

// PRIVATE storage for identity documents (NID, নাগরিক সনদপত্র) — served only
// via an admin/moderator-guarded route, never a public URL in the UI.
const PRIVATE_ALLOWED = { ...ALLOWED, 'application/pdf': '.pdf' };

export const uploadPrivateDoc = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
  fileFilter: (_req, file, cb) => {
    if (PRIVATE_ALLOWED[file.mimetype]) return cb(null, true);
    cb(new AppError('Only JPG, PNG, WebP or PDF files are allowed', 400));
  },
});
