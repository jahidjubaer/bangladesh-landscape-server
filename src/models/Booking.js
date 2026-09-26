import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['guide', 'boat', 'hotel', 'transport'], default: 'guide' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    guide: { type: mongoose.Schema.Types.ObjectId, ref: 'GuideProfile', index: true },
    listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', index: true },
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District' },
    dates: {
      from: { type: Date, required: true },
      to: { type: Date, required: true },
    },
    members: { type: Number, default: 1 },
    note: String, // user's message to the guide
    amount: { type: Number, default: 0 }, // dailyRate × days at request time
    commission: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['requested', 'confirmed', 'rejected', 'expired', 'cancelled', 'completed'],
      default: 'requested',
      index: true,
    },
    expiresAt: Date, // unanswered requests auto-expire
    rejectionReason: String,
    payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
    review: {
      rating: { type: Number, min: 1, max: 5 },
      comment: String,
      at: Date,
    },
  },
  { timestamps: true }
);

bookingSchema.index({ guide: 1, 'dates.from': 1, 'dates.to': 1 });

export default mongoose.model('Booking', bookingSchema);
