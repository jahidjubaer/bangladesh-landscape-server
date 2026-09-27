import mongoose from 'mongoose';

// kind → mongoose model name
export const FAVORITE_KINDS = { district: 'District', spot: 'Spot', listing: 'Listing' };

const favoriteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    kind: { type: String, enum: Object.keys(FAVORITE_KINDS), required: true },
    item: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

favoriteSchema.index({ user: 1, kind: 1, item: 1 }, { unique: true });

export default mongoose.model('Favorite', favoriteSchema);
