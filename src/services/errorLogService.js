import crypto from 'crypto';
import mongoose from 'mongoose';
import ErrorLog from '../models/ErrorLog.js';

const cut = (s, n) => (s == null ? '' : String(s).slice(0, n));
// Numbers/ids in paths and messages would split one bug into many entries
const normalize = (s) => cut(s, 300).replace(/[0-9a-f]{24}/gi, ':id').replace(/\d+/g, 'N');

// Never throws — logging must not break the request that failed
export async function logError({ source, message, stack, path, method, userAgent }) {
  try {
    if (mongoose.connection.readyState !== 1) return;
    const firstFrame = cut(stack, 4000).split('\n').slice(0, 2).join('\n');
    const fingerprint = crypto
      .createHash('sha1')
      .update([source, normalize(message), normalize(path), firstFrame].join('|'))
      .digest('hex');
    await ErrorLog.updateOne(
      { fingerprint },
      {
        $inc: { count: 1 },
        $set: { lastSeen: new Date(), resolved: false, stack: cut(stack, 4000), userAgent: cut(userAgent, 300) },
        $setOnInsert: { fingerprint, source, message: cut(message, 500), path: cut(path, 300), method: cut(method, 10) },
      },
      { upsert: true }
    );
  } catch {
    /* ignore */
  }
}
