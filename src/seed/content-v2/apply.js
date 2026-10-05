// Applies content-v2 to the database: English text, warnings, emergency info,
// richer existing spots and new spots. Merge-only and safe to re-run.
// Run: node src/seed/content-v2/apply.js
import mongoose from 'mongoose';
import env from '../../config/env.js';
import District from '../../models/District.js';
import Spot from '../../models/Spot.js';
import { loadDivisions, validate } from './schema.js';

const entries = await loadDivisions();
const { errors } = validate(entries);
if (errors.length) {
  console.error(`content-v2 has ${errors.length} problem(s) — run validate.js first`);
  process.exit(1);
}

await mongoose.connect(env.mongodbUri);
console.log(`Connected — applying content-v2 to ${entries.length} districts`);

let added = 0;
let updated = 0;
for (const d of entries) {
  const district = await District.findOne({ slug: d.slug });
  if (!district) {
    console.log(`MISSING district: ${d.slug}`);
    continue;
  }

  await District.updateOne(
    { _id: district._id },
    {
      $set: {
        'overview.en': d.en.overview,
        'transportInfo.en': d.en.transport,
        'foodInfo.en': d.en.food,
        'bestSeason.en': d.en.season,
        warnings: d.warnings,
        'emergency.police': '৯৯৯ (জাতীয় জরুরি সেবা)',
        'emergency.fireService': '৯৯৯ (জাতীয় জরুরি সেবা)',
        'emergency.hospital': d.hospital.bn,
      },
    }
  );

  for (const u of d.spotUpdates) {
    const res = await Spot.updateOne(
      { slug: u.slug, district: district._id },
      {
        $set: {
          'description.en': u.descEn,
          'howToGo.en': u.howEn,
          bestTime: u.bestTime,
          entryCost: { min: u.entry[0], max: u.entry[1] },
          timeNeededHours: u.hours,
        },
      }
    );
    updated += res.modifiedCount;
  }

  for (const s of d.newSpots) {
    const clash = await Spot.findOne({ slug: s.slug, district: { $ne: district._id } }).select('_id');
    if (clash) {
      console.log(`  skip ${s.slug}: slug belongs to another district`);
      continue;
    }
    await Spot.findOneAndUpdate(
      { slug: s.slug },
      {
        $set: {
          district: district._id,
          name: { bn: s.bn, en: s.en },
          category: s.cat,
          description: s.desc,
          howToGo: s.how,
          bestTime: s.bestTime,
          location: { lat: s.lat, lng: s.lng },
          entryCost: { min: s.entry[0], max: s.entry[1] },
          timeNeededHours: s.hours,
          tags: s.tags,
          isHidden: Boolean(s.hidden),
          warnings: s.warnings || [],
          isActive: true,
        },
      },
      { upsert: true, setDefaultsOnInsert: true }
    );
    added++;
  }
  console.log(`  ${d.slug}: done`);
}

console.log(`Done. Existing spots updated: ${updated}, new spots upserted: ${added}`);
await mongoose.disconnect();
