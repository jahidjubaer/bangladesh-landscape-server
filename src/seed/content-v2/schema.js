// Shared loader + structural checks for content-v2 division files (no DB access).
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const SEED_DIR = path.resolve(DIR, '..');

const CATS = ['haor', 'hill', 'river', 'waterfall', 'garden', 'heritage', 'other'];
const TAGS = ['adventure', 'family', 'relaxed'];
const SKIP = new Set(['schema.js', 'validate.js', 'apply.js']);

// District slugs and existing spot slugs → district, read from the earlier seed files
export function existingIndex() {
  const allDistricts = fs.readFileSync(path.join(SEED_DIR, 'seedAllDistricts.js'), 'utf8');
  const districts = new Set([...allDistricts.matchAll(/\['([a-z-]+)', '/g)].map((m) => m[1]));
  districts.add('sunamganj');

  const spotDistrict = new Map();
  for (const f of ['enrich-part1.js', 'enrich-part2.js', 'enrich-part3.js']) {
    const text = fs.readFileSync(path.join(SEED_DIR, f), 'utf8');
    let current = null;
    for (const line of text.split('\n')) {
      const d = line.match(/^ {4}slug: '([a-z-]+)',/);
      if (d) current = d[1];
      const s = line.match(/^ {6}\{ slug: '([a-z0-9-]+)'/);
      if (s && current) spotDistrict.set(s[1], current);
    }
  }
  return { districts, spotDistrict };
}

export async function loadDivisions() {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.js') && !SKIP.has(f));
  const out = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(DIR, f)).href);
    for (const d of mod.default) out.push({ file: f, ...d });
  }
  return out;
}

const str = (v) => typeof v === 'string' && v.trim().length > 0;
const pair = (v) => v && str(v.bn) && str(v.en);

export function validate(entries) {
  const { districts, spotDistrict } = existingIndex();
  const errors = [];
  const seenDistricts = new Set();
  const newSlugs = new Set();

  for (const d of entries) {
    const at = `${d.file}:${d.slug}`;
    if (!districts.has(d.slug)) errors.push(`${at} unknown district slug`);
    if (d.slug === 'sunamganj') errors.push(`${at} sunamganj is already rich — leave it out`);
    if (seenDistricts.has(d.slug)) errors.push(`${at} duplicate district`);
    seenDistricts.add(d.slug);

    for (const k of ['overview', 'transport', 'food', 'season']) {
      if (!str(d.en?.[k])) errors.push(`${at} en.${k} missing`);
    }
    if (!Array.isArray(d.warnings) || d.warnings.length < 2 || !d.warnings.every(pair)) {
      errors.push(`${at} needs 2+ warnings with bn+en`);
    }
    if (!pair(d.hospital)) errors.push(`${at} hospital bn+en missing`);

    const mine = [...spotDistrict].filter(([, dist]) => dist === d.slug).map(([s]) => s);
    const updated = new Set((d.spotUpdates || []).map((u) => u.slug));
    for (const s of mine) if (!updated.has(s)) errors.push(`${at} no spotUpdate for existing spot ${s}`);
    for (const u of d.spotUpdates || []) {
      if (spotDistrict.get(u.slug) !== d.slug) errors.push(`${at} spotUpdate ${u.slug} is not an existing spot of this district`);
      if (!str(u.descEn) || !str(u.howEn) || !pair(u.bestTime)) errors.push(`${at} spotUpdate ${u.slug} incomplete`);
      if (!Array.isArray(u.entry) || u.entry.length !== 2 || typeof u.hours !== 'number') errors.push(`${at} spotUpdate ${u.slug} entry/hours`);
    }

    if (!Array.isArray(d.newSpots) || d.newSpots.length < 3) errors.push(`${at} needs 3 newSpots`);
    for (const s of d.newSpots || []) {
      const sa = `${at} newSpot ${s.slug}`;
      if (!/^[a-z0-9-]+$/.test(s.slug || '')) errors.push(`${sa} bad slug`);
      if (spotDistrict.has(s.slug) || newSlugs.has(s.slug) || s.slug === 'sunamganj') errors.push(`${sa} slug already used`);
      newSlugs.add(s.slug);
      if (!str(s.bn) || !str(s.en)) errors.push(`${sa} names`);
      if (!CATS.includes(s.cat)) errors.push(`${sa} bad cat ${s.cat}`);
      if (!(s.lat > 20.5 && s.lat < 26.7 && s.lng > 88 && s.lng < 92.7)) errors.push(`${sa} lat/lng outside Bangladesh`);
      if (!Array.isArray(s.tags) || !s.tags.every((t) => TAGS.includes(t))) errors.push(`${sa} bad tags`);
      if (!pair(s.desc) || !pair(s.how) || !pair(s.bestTime)) errors.push(`${sa} desc/how/bestTime bn+en`);
      if (!Array.isArray(s.entry) || s.entry.length !== 2 || typeof s.hours !== 'number') errors.push(`${sa} entry/hours`);
      if (s.warnings && !s.warnings.every(pair)) errors.push(`${sa} warnings bn+en`);
    }
  }
  return { errors, districtsCovered: seenDistricts, newSpotCount: newSlugs.size };
}
