// Shared applier for the district enrichment data files.
import mongoose from 'mongoose';
import env from '../config/env.js';
import District from '../models/District.js';
import Spot from '../models/Spot.js';

export async function applyEnrichment(DATA, label) {
  await mongoose.connect(env.mongodbUri);
  console.log(`Connected — applying ${label}`);

  let spotsUpserted = 0;
  for (const d of DATA) {
    const district = await District.findOne({ slug: d.slug });
    if (!district) {
      console.log(`MISSING district: ${d.slug}`);
      continue;
    }

    await District.updateOne(
      { _id: district._id },
      {
        $set: {
          'overview.bn': d.overview,
          'transportInfo.bn': d.transport,
          'foodInfo.bn': d.food,
          'bestSeason.bn': d.season,
          ...(d.stayTypes && { stayTypesAvailable: d.stayTypes }),
        },
      }
    );

    for (const s of d.spots || []) {
      await Spot.findOneAndUpdate(
        { slug: s.slug },
        {
          slug: s.slug,
          district: district._id,
          name: { bn: s.bn, en: s.en || '' },
          category: s.cat,
          description: { bn: s.desc, en: '' },
          howToGo: { bn: s.how, en: '' },
          location: { lat: s.lat, lng: s.lng },
          tags: s.tags || [],
          isHidden: Boolean(s.hidden),
          isActive: true,
          bestTime: { bn: '', en: '' },
        },
        { upsert: true, setDefaultsOnInsert: true }
      );
      spotsUpserted++;
    }
    console.log(`  ${d.slug}: enriched, ${d.spots?.length || 0} spot(s)`);
  }

  console.log(`Done. Spots upserted: ${spotsUpserted}`);
  await mongoose.disconnect();
}
