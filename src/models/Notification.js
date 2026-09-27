import mongoose from 'mongoose';

export const NOTIF_KINDS = [
  'booking-requested', // to guide/partner
  'booking-confirmed', // to traveler
  'booking-rejected',
  'booking-cancelled', // to guide/partner when traveler cancels
  'review-received', // to guide
  'payment-approved', // to traveler (plan unlocked)
  'payment-rejected',
  'blog-approved', // to author
  'blog-rejected',
  'guide-approved', // to applicant
  'guide-rejected',
];

// Messages are rendered client-side from `kind` + `data` (bilingual UI),
// so nothing here is language-bound.
const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    kind: { type: String, enum: NOTIF_KINDS, required: true },
    data: { type: Object, default: {} }, // e.g. { name, title }
    link: { type: String, default: '' }, // client route to open
    readAt: { type: Date, default: null, index: true },
  },
  { timestamps: true }
);

notificationSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model('Notification', notificationSchema);
