import mongoose from 'mongoose';

export const LISTING_TYPES = ['hotel', 'houseboat', 'boat', 'chander-gari', 'other-transport', 'cottage', 'resort'];

// Partner listings — baseline for future booking. Public booking stays
// behind district feature flags; approved listings show as verified info.
const listingSchema = new mongoose.Schema(
  {
    type: { type: String, enum: LISTING_TYPES, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // partner (optional for admin-entered info)
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true, index: true },
    name: { bn: { type: String, required: true }, en: { type: String, default: '' } },
    description: { bn: { type: String, default: '' }, en: { type: String, default: '' } },
    images: [String],
    contactPhone: { type: String, default: '' },
    priceRange: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
    },
    capacity: { type: Number, default: 0 },
    location: {
      lat: { type: Number, default: null },
      lng: { type: Number, default: null },
    },
    status: { type: String, enum: ['pending', 'approved', 'suspended'], default: 'pending', index: true },
    isBookable: { type: Boolean, default: false }, // stays false until booking launch
  },
  { timestamps: true }
);

export default mongoose.model('Listing', listingSchema);
