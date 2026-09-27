import mongoose from 'mongoose';

// Seat-based booking for group tour events.
// requested → admin confirms (after payment arranged) → confirmed
const eventBookingSchema = new mongoose.Schema(
  {
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    seats: { type: Number, required: true, min: 1 },
    amountTotal: { type: Number, required: true }, // pricePerPerson × seats at request time
    note: String,
    phone: String, // contact number given at booking time
    status: {
      type: String,
      enum: ['requested', 'confirmed', 'rejected', 'cancelled'],
      default: 'requested',
      index: true,
    },
    adminNote: String,
  },
  { timestamps: true }
);

eventBookingSchema.index({ event: 1, status: 1 });

export default mongoose.model('EventBooking', eventBookingSchema);
