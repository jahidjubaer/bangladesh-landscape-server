import mongoose from 'mongoose';

const localized = { bn: { type: String, default: '' }, en: { type: String, default: '' } };

const districtSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { bn: { type: String, required: true }, en: { type: String, default: '' } },
    division: { type: String, default: '' },
    heroImageUrl: { type: String, default: '' },
    overview: localized,
    transportInfo: localized,
    foodInfo: localized,
    bestSeason: localized,
    warnings: [localized],
    emergency: {
      police: { type: String, default: '' },
      hospital: { type: String, default: '' },
      fireService: { type: String, default: '' },
    },
    isLaunched: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false }, // locally verified (field-checked) info badge
    features: {
      guideBooking: { type: Boolean, default: false },
      boatBooking: { type: Boolean, default: false },
      hotelBooking: { type: Boolean, default: false },
      transportBooking: { type: Boolean, default: false },
    },
    stayTypesAvailable: [{ type: String, enum: ['houseboat', 'cottage', 'hotel', 'resort'] }],
    mapCenter: {
      lat: { type: Number, default: 23.685 },
      lng: { type: Number, default: 90.3563 },
    },
    zoom: { type: Number, default: 10 },
  },
  { timestamps: true }
);

export default mongoose.model('District', districtSchema);
