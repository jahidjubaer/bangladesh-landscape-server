import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const ROLES = ['user', 'guide', 'partner', 'moderator', 'admin'];

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    // Phone-first identity for password accounts; Google accounts sign up without a phone
    phone: {
      type: String,
      trim: true,
      required() {
        return !this.googleUid;
      },
    },
    email: { type: String, lowercase: true, trim: true },
    passwordHash: {
      type: String,
      select: false,
      required() {
        return !this.googleUid;
      },
    },
    googleUid: { type: String }, // Firebase Auth uid of the linked Google account
    roles: { type: [String], enum: ROLES, default: ['user'] },
    avatarUrl: { type: String, default: '' },
    verifiedAuthor: { type: Boolean, default: false },
    freePlanCredits: { type: Number, default: 1 },
    referralCode: { type: String, unique: true, sparse: true, uppercase: true },
    referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    referralCount: { type: Number, default: 0 },
    status: { type: String, enum: ['active', 'suspended'], default: 'active' },
    // "My Bangladesh Map" — district slugs the user has visited
    visitedDistricts: { type: [String], default: [] },
    passedDistricts: { type: [String], default: [] }, // only travelled through
    homeDistrict: { type: String, default: '' },
  },
  { timestamps: true }
);

// Partial (not sparse) unique indexes: accounts without the field never collide.
// Run `npm run migrate:user-indexes` once on an existing database.
userSchema.index({ phone: 1 }, { unique: true, partialFilterExpression: { phone: { $type: 'string' } } });
userSchema.index({ email: 1 }, { unique: true, partialFilterExpression: { email: { $type: 'string' } } });
userSchema.index({ googleUid: 1 }, { unique: true, partialFilterExpression: { googleUid: { $type: 'string' } } });

userSchema.methods.comparePassword = function (plain) {
  if (!this.passwordHash) return Promise.resolve(false); // Google-only account
  return bcrypt.compare(plain, this.passwordHash);
};

userSchema.statics.hashPassword = function (plain) {
  return bcrypt.hash(plain, 10);
};

userSchema.statics.newReferralCode = function () {
  return crypto.randomBytes(4).toString('hex').toUpperCase(); // e.g. 9F3A21BC
};

// Lazily assign a referral code (covers accounts created before the feature)
userSchema.methods.ensureReferralCode = async function () {
  if (this.referralCode) return this.referralCode;
  for (let i = 0; i < 5; i++) {
    this.referralCode = this.constructor.newReferralCode();
    try {
      await this.save();
      return this.referralCode;
    } catch (err) {
      if (err.code !== 11000) throw err; // collision → retry
    }
  }
  throw new Error('Could not assign referral code');
};

userSchema.methods.toSafeJSON = function () {
  return {
    id: this._id,
    name: this.name,
    phone: this.phone || null,
    email: this.email || null,
    google: Boolean(this.googleUid),
    roles: this.roles,
    avatarUrl: this.avatarUrl,
    verifiedAuthor: this.verifiedAuthor,
    freePlanCredits: this.freePlanCredits,
    referralCode: this.referralCode || null,
    referralCount: this.referralCount || 0,
    status: this.status,
    visitedDistricts: this.visitedDistricts || [],
    passedDistricts: this.passedDistricts || [],
    homeDistrict: this.homeDistrict || '',
    createdAt: this.createdAt,
  };
};

export { ROLES };
export default mongoose.model('User', userSchema);
