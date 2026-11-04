import mongoose from 'mongoose';

// A fact that needs field verification (from desk research or reported by staff)
const contentFlagSchema = new mongoose.Schema(
  {
    target: { type: String, enum: ['spot', 'district'], required: true },
    slug: { type: String, required: true, index: true },
    field: {
      type: String,
      enum: ['history', 'fee', 'hours', 'location', 'name', 'facility', 'safety', 'other'],
      default: 'other',
    },
    note: { type: String, required: true, maxlength: 600 },
    source: { type: String, default: 'desk-research' },
    status: { type: String, enum: ['open', 'confirmed', 'fixed'], default: 'open', index: true },
    resolutionNote: { type: String, default: '', maxlength: 600 },
    resolvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    resolvedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

contentFlagSchema.index({ target: 1, slug: 1, note: 1 }, { unique: true });

export default mongoose.model('ContentFlag', contentFlagSchema);
