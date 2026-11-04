// Loads content-flags.js into ContentFlag (upsert; never reopens resolved flags).
// Run: node src/seed/seedContentFlags.js
import mongoose from 'mongoose';
import env from '../config/env.js';
import ContentFlag from '../models/ContentFlag.js';
import District from '../models/District.js';
import Spot from '../models/Spot.js';
import FLAGS from './content-flags.js';

await mongoose.connect(env.mongodbUri);
const spots = new Set(await Spot.distinct('slug'));
const districts = new Set(await District.distinct('slug'));

let added = 0;
const unknown = [];
for (const [target, slug, field, note] of FLAGS) {
  if (!(target === 'spot' ? spots : districts).has(slug)) {
    unknown.push(`${target}:${slug}`);
    continue;
  }
  const res = await ContentFlag.updateOne(
    { target, slug, note },
    { $setOnInsert: { target, slug, field, note, source: 'desk-research' } },
    { upsert: true }
  );
  added += res.upsertedCount;
}
console.log(`Flags: ${FLAGS.length}, newly added: ${added}${unknown.length ? `, unknown slugs: ${unknown.join(', ')}` : ''}`);
await mongoose.disconnect();
