import mongoose from 'mongoose';
import crypto from 'crypto';

const localized = { bn: { type: String, default: '' }, en: { type: String, default: '' } };

// Platform-arranged group tours / adventure events
const eventSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, required: true },
    title: { bn: { type: String, required: true }, en: { type: String, default: '' } },
    description: localized,
    coverImageUrl: { type: String, default: '' },
    images: [String],
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', index: true },
    dates: {
      start: { type: Date, required: true },
      end: { type: Date, required: true },
    },
    pricePerPerson: { type: Number, required: true }, // BDT
    capacity: { type: Number, required: true, min: 1 },
    itinerary: [localized], // one entry per line/day
    included: [localized], // what the price covers
    meetingPoint: localized,
    status: { type: String, enum: ['draft', 'published', 'completed', 'cancelled'], default: 'draft', index: true },
  },
  { timestamps: true }
);

eventSchema.statics.makeSlug = function (titleEn) {
  const base = (titleEn || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 60);
  return `${base || 'event'}-${crypto.randomBytes(3).toString('hex')}`;
};

export default mongoose.model('Event', eventSchema);
