import mongoose from 'mongoose';

const localized = { bn: { type: String, default: '' }, en: { type: String, default: '' } };

export const SPOT_CATEGORIES = ['haor', 'hill', 'river', 'waterfall', 'garden', 'heritage', 'other'];
export const SPOT_TAGS = ['adventure', 'family', 'relaxed'];

const spotSchema = new mongoose.Schema(
  {
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true, index: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { bn: { type: String, required: true }, en: { type: String, default: '' } },
    description: localized,
    images: [{ type: String }],
    location: {
      lat: { type: Number, default: null },
      lng: { type: Number, default: null },
    },
    category: { type: String, enum: SPOT_CATEGORIES, default: 'other' },
    howToGo: localized,
    entryCost: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
    },
    timeNeededHours: { type: Number, default: 0 },
    bestTime: localized,
    isHidden: { type: Boolean, default: false },
    obstacles: [localized],
    warnings: [localized],
    tags: [{ type: String, enum: SPOT_TAGS }],
    isActive: { type: Boolean, default: true },
    // Denormalized from approved reviews — cheap star badges on cards
    ratingAvg: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Spot', spotSchema);
