import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { UPLOAD_DIR, PRIVATE_DIR } from '../middlewares/upload.js';

// Runtime uploads: Vercel Blob when a token is present (stateless hosting),
// local disk otherwise (dev / any host with a persistent disk).
// Callers only consume the returned URL/identifier, so the swap is invisible.

const blobEnabled = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

const EXT = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'application/pdf': '.pdf',
};
const extOf = (file) => EXT[file.mimetype] || path.extname(file.originalname || '').toLowerCase();

const randomName = (file, bytes) =>
  `${Date.now()}-${crypto.randomBytes(bytes).toString('hex')}${extOf(file)}`;

// Public image (avatars, blog covers, listing photos) → directly renderable URL
export async function storePublicImage(file) {
  const name = randomName(file, 6);
  if (blobEnabled()) {
    const { put } = await import('@vercel/blob');
    const blob = await put(`uploads/${name}`, file.buffer, {
      access: 'public',
      contentType: file.mimetype,
    });
    return blob.url;
  }
  fs.writeFileSync(path.join(UPLOAD_DIR, name), file.buffer);
  return `/uploads/${name}`;
}

// Private identity documents (NID etc.) → opaque identifier, only ever served
// through the role-guarded moderation route (never a public link in the UI)
export async function storePrivateDoc(file) {
  const name = randomName(file, 8);
  if (blobEnabled()) {
    const { put } = await import('@vercel/blob');
    const blob = await put(`private/${name}`, file.buffer, {
      access: 'public', // unguessable URL; stored server-side and streamed via moderation route
      addRandomSuffix: true,
      contentType: file.mimetype,
    });
    return blob.url;
  }
  fs.writeFileSync(path.join(PRIVATE_DIR, name), file.buffer);
  return name;
}
