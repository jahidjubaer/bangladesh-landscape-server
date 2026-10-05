// Shared loader + structural checks for content-v3 spot files (no DB access).
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const SKIP = new Set(['schema.js', 'validate.js', 'apply.js']);

export const FACILITIES = ['toilet', 'food', 'parking', 'shop', 'lodging', 'boat', 'guide', 'prayer', 'ticket', 'wheelchair'];

export async function loadSpots(only) {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.js') && !SKIP.has(f) && (!only || f === only));
  const out = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(DIR, f)).href);
    for (const s of mod.default) out.push({ file: f, ...s });
  }
  return out;
}

const str = (v, min = 1) => typeof v === 'string' && v.trim().length >= min;
const pair = (v) => v && str(v.bn) && str(v.en);

export function validate(entries, expected) {
  const errors = [];
  const seen = new Set();
  for (const s of entries) {
    const at = `${s.file}:${s.slug}`;
    if (seen.has(s.slug)) errors.push(`${at} duplicate`);
    seen.add(s.slug);
    if (!str(s.about?.bn, 350)) errors.push(`${at} about.bn shorter than 350 chars`);
    if (!str(s.about?.en, 400)) errors.push(`${at} about.en shorter than 400 chars`);
    if (!Array.isArray(s.highlights) || s.highlights.length < 3 || s.highlights.length > 5 || !s.highlights.every(pair)) {
      errors.push(`${at} needs 3–5 highlights with bn+en`);
    }
    if (!Array.isArray(s.tips) || s.tips.length < 2 || s.tips.length > 4 || !s.tips.every(pair)) {
      errors.push(`${at} needs 2–4 tips with bn+en`);
    }
    if (!pair(s.nearbyFood)) errors.push(`${at} nearbyFood bn+en`);
    if (!Array.isArray(s.facilities) || !s.facilities.every((f) => FACILITIES.includes(f))) {
      errors.push(`${at} facilities must be a subset of ${FACILITIES.join(',')}`);
    }
  }
  if (expected) {
    for (const slug of expected) if (!seen.has(slug)) errors.push(`missing spot ${slug}`);
    for (const slug of seen) if (!expected.includes(slug)) errors.push(`unexpected spot ${slug}`);
  }
  return { errors, count: seen.size };
}
