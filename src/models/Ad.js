import mongoose from 'mongoose';

export const AD_SLOTS = ['hero-top', 'hero-bottom', 'sidebar', 'blog-inline'];

const adSchema = new mongoose.Schema(
  {
    slot: { type: String, enum: AD_SLOTS, required: true, index: true },
    sponsorName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    targetUrl: { type: String, required: true },
    startsAt: { type: Date, default: Date.now },
    endsAt: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
    impressions: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Ad', adSchema);
