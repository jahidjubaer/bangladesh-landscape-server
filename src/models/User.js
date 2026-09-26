import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const ROLES = ['user', 'guide', 'partner', 'moderator', 'admin'];

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    // Phone-first identity: phone is required, email optional (foreign users may prefer email later)
    phone: { type: String, required: true, unique: true, trim: true },
    email: { type: String, unique: true, sparse: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true, select: false },
    roles: { type: [String], enum: ROLES, default: ['user'] },
    avatarUrl: { type: String, default: '' },
    verifiedAuthor: { type: Boolean, default: false },
    freePlanCredits: { type: Number, default: 1 },
    status: { type: String, enum: ['active', 'suspended'], default: 'active' },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.passwordHash);
};

userSchema.statics.hashPassword = function (plain) {
  return bcrypt.hash(plain, 10);
};

userSchema.methods.toSafeJSON = function () {
  return {
    id: this._id,
    name: this.name,
    phone: this.phone,
    email: this.email || null,
    roles: this.roles,
    avatarUrl: this.avatarUrl,
    verifiedAuthor: this.verifiedAuthor,
    freePlanCredits: this.freePlanCredits,
    status: this.status,
    createdAt: this.createdAt,
  };
};

export { ROLES };
export default mongoose.model('User', userSchema);
