import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    purpose: { type: String, enum: ['plan', 'guide-booking', 'listing-booking'], required: true },
    ref: { type: mongoose.Schema.Types.ObjectId, required: true }, // plan or booking id
    gateway: { type: String, enum: ['sslcommerz', 'mock', 'bkash-manual'], required: true },
    tranId: { type: String, unique: true, required: true }, // our transaction id sent to gateway
    gatewayTranId: String, // gateway's own id (bank_tran_id etc.)
    amount: { type: Number, required: true },
    currency: { type: String, default: 'BDT' },
    status: {
      type: String,
      enum: ['initiated', 'pending-verification', 'success', 'failed', 'cancelled'],
      default: 'initiated',
      index: true,
    },
    // Manual bKash send-money: user-submitted proof, admin verifies by hand
    manual: {
      senderNumber: String,
      trxId: String,
    },
    adminNote: String,
    verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    raw: Object, // gateway IPN/validation payload
  },
  { timestamps: true }
);

export default mongoose.model('Payment', paymentSchema);
