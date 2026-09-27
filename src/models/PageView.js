import mongoose from 'mongoose';

// First-party, privacy-light analytics: one counter doc per (day, path) and
// one doc per anonymous visitor per day — no IPs, no user agents, no cookies.

const pageViewSchema = new mongoose.Schema({
  day: { type: String, required: true }, // YYYY-MM-DD
  path: { type: String, required: true }, // normalized route pattern
  views: { type: Number, default: 0 },
});
pageViewSchema.index({ day: 1, path: 1 }, { unique: true });

const dailyVisitorSchema = new mongoose.Schema(
  {
    day: { type: String, required: true },
    vid: { type: String, required: true }, // random id from the visitor's localStorage
  },
  { timestamps: true }
);
dailyVisitorSchema.index({ day: 1, vid: 1 }, { unique: true });
// Raw visitor rows expire after ~6 months; the counters stay
dailyVisitorSchema.index({ createdAt: 1 }, { expireAfterSeconds: 180 * 24 * 3600 });

export const DailyVisitor = mongoose.model('DailyVisitor', dailyVisitorSchema);
export default mongoose.model('PageView', pageViewSchema);
