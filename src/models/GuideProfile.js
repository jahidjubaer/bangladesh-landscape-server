import mongoose from 'mongoose';

const guideProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    application: {
      nidNumber: { type: String, required: true },
      nidFile: String, // PRIVATE storage filename — served only to admin/moderator
      address: { type: String, required: true },
      facebookUrl: String,
      education: String,
      citizenshipCertFile: String, // নাগরিক সনদপত্র — PRIVATE
      whatsappNumber: { type: String, required: true },
      experienceSummary: String,
    },
    applicationStatus: {
      type: String,
      enum: ['pending', 'screened', 'approved', 'rejected'],
      default: 'pending',
      index: true,
    },
    rejectionReason: String,
    screenedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    districts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'District', index: true }],
    knownSpots: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Spot' }],
    languages: [{ type: String, enum: ['bangla', 'english', 'local'] }],
    dailyRate: { type: Number, default: 1000 }, // BDT
    experienceYears: { type: Number, default: 0 },
    knowledgeScore: { type: Number, default: 5, min: 1, max: 10 }, // admin-assessed, affects rank
    ratingAvg: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
    bio: { bn: { type: String, default: '' }, en: { type: String, default: '' } },
    photoUrl: String,
    availabilityStatus: { type: String, enum: ['active', 'on-leave'], default: 'active' },
    blockedDates: [Date], // manual blocks; confirmed bookings add to this too
  },
  { timestamps: true }
);

// Public-safe shape — never leaks NID/address/documents
guideProfileSchema.methods.toPublicJSON = function () {
  return {
    id: this._id,
    user: this.user, // populated: name, avatarUrl
    districts: this.districts,
    knownSpots: this.knownSpots,
    languages: this.languages,
    dailyRate: this.dailyRate,
    experienceYears: this.experienceYears,
    ratingAvg: this.ratingAvg,
    ratingCount: this.ratingCount,
    bio: this.bio,
    photoUrl: this.photoUrl,
    availabilityStatus: this.availabilityStatus,
    whatsappNumber: undefined, // exposed only on confirmed bookings
  };
};

export default mongoose.model('GuideProfile', guideProfileSchema);
