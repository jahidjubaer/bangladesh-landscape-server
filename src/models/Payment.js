import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    purpose: { type: String, enum: ['plan', 'guide-booking', 'listing-booking'], required: true },
    ref: { type: mongoose.Schema.Types.ObjectId, required: true }, // plan or booking id
    gateway: { type: String, enum: ['sslcommerz', 'mock'], required: true },
    tranId: { type: String, unique: true, required: true }, // our transaction id sent to gateway
    gatewayTranId: String, // gateway's own id (bank_tran_id etc.)
    amount: { type: Number, required: true },
    currency: { type: String, default: 'BDT' },
    status: { type: String, enum: ['initiated', 'success', 'failed', 'cancelled'], default: 'initiated', index: true },
    raw: Object, // gateway IPN/validation payload
  },
  { timestamps: true }
);

export default mongoose.model('Payment', paymentSchema);
