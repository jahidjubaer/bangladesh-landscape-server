// Structural check of content-v3 spot files — no database needed.
// Run: node src/seed/content-v3/validate.js [file.js] [--expect index.json]
import fs from 'fs';
import { loadSpots, validate } from './schema.js';

const args = process.argv.slice(2);
const expectAt = args.indexOf('--expect');
const expected = expectAt >= 0 ? JSON.parse(fs.readFileSync(args[expectAt + 1], 'utf8')).map((s) => s.slug) : null;
const only = args.find((a, i) => a.endsWith('.js') && (expectAt < 0 || i !== expectAt + 1));

const { errors, count } = validate(await loadSpots(only), expected);
console.log(`Spots: ${count}`);
if (errors.length) {
  console.log(`${errors.length} problem(s):`);
  for (const e of errors) console.log('  - ' + e);
  process.exit(1);
}
console.log('OK');
