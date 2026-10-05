// Applies content-v3 long-form spot content. Merge-only and safe to re-run.
// Run: node src/seed/content-v3/apply.js
import mongoose from 'mongoose';
import env from '../../config/env.js';
import Spot from '../../models/Spot.js';
import { loadSpots, validate } from './schema.js';

const entries = await loadSpots();
const { errors } = validate(entries);
if (errors.length) {
  console.error(`content-v3 has ${errors.length} problem(s) — run validate.js first`);
  process.exit(1);
}

await mongoose.connect(env.mongodbUri);
let updated = 0;
const missing = [];
for (const s of entries) {
  const res = await Spot.updateOne(
    { slug: s.slug },
    {
      $set: {
        about: s.about,
        highlights: s.highlights,
        tips: s.tips,
        nearbyFood: s.nearbyFood,
        facilities: s.facilities,
      },
    }
  );
  if (!res.matchedCount) missing.push(s.slug);
  else updated++;
}
console.log(`Done. Spots enriched: ${updated}${missing.length ? `, not found: ${missing.join(', ')}` : ''}`);
await mongoose.disconnect();
