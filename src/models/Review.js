import mongoose from 'mongoose';

// Open reviews for spots and stays (guide reviews stay trip-verified on
// bookings). Moderated: only approved reviews are public and counted.
export const REVIEW_KINDS = { spot: 'Spot', listing: 'Listing' };

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    kind: { type: String, enum: Object.keys(REVIEW_KINDS), required: true },
    item: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    text: { type: String, default: '', maxlength: 2000 },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending', index: true },
  },
  { timestamps: true }
);

// One review per user per item — editing resubmits it for moderation
reviewSchema.index({ user: 1, kind: 1, item: 1 }, { unique: true });

export default mongoose.model('Review', reviewSchema);
