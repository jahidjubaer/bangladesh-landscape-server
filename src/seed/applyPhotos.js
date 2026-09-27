// Applies uploads/photo-manifest.json: sets spot images (if empty) and
// fills empty district heroes from their best spot photo.
// Run: node src/seed/applyPhotos.js
import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import env from '../config/env.js';
import District from '../models/District.js';
import Spot from '../models/Spot.js';

const raw = await readFile('uploads/photo-manifest.json', 'utf8');
const manifest = JSON.parse(raw.replace(/^﻿/, ''));

await mongoose.connect(env.mongodbUri);
console.log('Connected. Manifest entries:', Object.keys(manifest).length);

let spotUpdates = 0;
for (const [slug, url] of Object.entries(manifest)) {
  const spot = await Spot.findOne({ slug });
  if (!spot) {
    console.log('  no spot:', slug);
    continue;
  }
  if (!spot.images?.length) {
    spot.images = [url];
    await spot.save();
    spotUpdates++;
  }
}
console.log('Spot images set:', spotUpdates);

// District heroes: first spot with a photo per district
const districts = await District.find({ isLaunched: true, $or: [{ heroImageUrl: '' }, { heroImageUrl: null }] });
let heroUpdates = 0;
for (const d of districts) {
  const spot = await Spot.findOne({ district: d._id, isActive: true, 'images.0': { $exists: true } });
  if (spot) {
    d.heroImageUrl = spot.images[0];
    await d.save();
    heroUpdates++;
  }
}
console.log('District heroes set:', heroUpdates);

const withPhotos = await Spot.countDocuments({ 'images.0': { $exists: true } });
const heroes = await District.countDocuments({ heroImageUrl: { $ne: '' } });
console.log(`Totals — spots with photos: ${withPhotos}/${await Spot.countDocuments({ isActive: true })}, district heroes: ${heroes}/64`);
await mongoose.disconnect();
