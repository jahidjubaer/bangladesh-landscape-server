import mongoose from 'mongoose';

// First-party error monitoring: one document per distinct error (fingerprint),
// counting repeats, so a crash loop can't flood the collection.
const errorLogSchema = new mongoose.Schema(
  {
    fingerprint: { type: String, required: true, unique: true },
    source: { type: String, enum: ['server', 'client'], required: true },
    message: { type: String, maxlength: 500 },
    stack: { type: String, maxlength: 4000 },
    path: { type: String, maxlength: 300 },
    method: { type: String, maxlength: 10 },
    userAgent: { type: String, maxlength: 300 },
    count: { type: Number, default: 1 },
    lastSeen: { type: Date, default: Date.now, index: { expires: '30d' } }, // auto-purge after 30 quiet days
    resolved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('ErrorLog', errorLogSchema);
