import mongoose from 'mongoose';
import crypto from 'crypto';

const blogSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    slug: { type: String, unique: true, required: true },
    title: { bn: { type: String, required: true, maxlength: 200 }, en: { type: String, default: '' } },
    coverImageUrl: { type: String, default: '' },
    content: { bn: { type: String, required: true }, en: { type: String, default: '' } }, // sanitized HTML
    excerpt: { type: String, default: '' }, // plain text, derived on save
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', default: null, index: true },
    status: {
      type: String,
      enum: ['draft', 'pending', 'approved', 'rejected'],
      default: 'pending',
      index: true,
    },
    moderationNote: String,
    moderatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    moderatedAt: Date,
    hasBadge: { type: Boolean, default: false }, // set at approval: admin/mod/verifiedAuthor
    publishedAt: Date,
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

blogSchema.statics.makeSlug = function (titleEn) {
  const base = (titleEn || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 60);
  const suffix = crypto.randomBytes(3).toString('hex');
  return base ? `${base}-${suffix}` : `post-${Date.now()}-${suffix}`;
};

export default mongoose.model('Blog', blogSchema);
