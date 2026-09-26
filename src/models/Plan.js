import mongoose from 'mongoose';
import crypto from 'crypto';

const planSchema = new mongoose.Schema(
  {
    publicId: {
      type: String,
      unique: true,
      default: () => crypto.randomBytes(6).toString('base64url'),
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
    input: {
      spots: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Spot' }],
      members: Number,
      days: Number,
      nights: Number,
      budget: Number, // total, BDT
      foodPref: { type: String, enum: ['local', 'special', 'regular'] },
      exploreStyle: { type: String, enum: ['adventure', 'relaxed', 'family', 'other'] },
      stayPref: { type: String, enum: ['houseboat', 'cottage', 'hotel', 'resort', 'any'] },
      startDate: Date,
    },
    // Structured JSON produced by the generator (AI or mock) — templates render this
    output: {
      title: String,
      summary: String,
      budgetVerdict: String, // honest note if budget is tight/impossible
      days: [
        {
          dayNumber: Number,
          title: String,
          activities: [String],
          meals: String,
          stay: String,
          transport: String,
          costEstimate: Number,
        },
      ],
      mapPoints: [{ name: String, lat: Number, lng: Number, order: Number }],
      costBreakdown: [{ item: String, amount: Number }],
      totalCostEstimate: Number,
      warnings: [String],
      hiddenPlaces: [String],
      tips: [String],
    },
    status: { type: String, enum: ['generated', 'paid', 'failed'], default: 'generated', index: true },
    paidAt: Date,
    payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
    usedFreeCredit: { type: Boolean, default: false },
    pdfFile: String, // cached rendered PDF filename
    modelMeta: { model: String, promptVersion: String },
  },
  { timestamps: true }
);

export default mongoose.model('Plan', planSchema);
