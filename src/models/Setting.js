import mongoose from 'mongoose';

// Singleton document — admin-editable platform settings (no redeploy needed)
const settingSchema = new mongoose.Schema(
  {
    key: { type: String, default: 'global', unique: true },
    planPrice: { type: Number, default: 150 }, // BDT per PDF download
    freePlanCreditsForNewUser: { type: Number, default: 1 },
    guideCommissionPct: { type: Number, default: 15 },
    bookingConfirmWindowHours: { type: Number, default: 12 },
    promptVersion: { type: String, default: 'v1' },
    // Manual bKash send-money (personal number, no merchant account)
    bkashPersonalNumber: { type: String, default: '' },
  },
  { timestamps: true }
);

settingSchema.statics.get = async function () {
  let doc = await this.findOne({ key: 'global' });
  if (!doc) doc = await this.create({ key: 'global' });
  return doc;
};

export default mongoose.model('Setting', settingSchema);
