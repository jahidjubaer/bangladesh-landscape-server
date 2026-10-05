// Structural check of every content-v2 division file — no database needed.
// Run: node src/seed/content-v2/validate.js [file.js]
import { loadDivisions, validate } from './schema.js';

const only = process.argv[2];
const entries = (await loadDivisions()).filter((e) => !only || e.file === only);
const { errors, districtsCovered, newSpotCount } = validate(entries);

console.log(`Districts: ${districtsCovered.size}, new spots: ${newSpotCount}`);
if (errors.length) {
  console.log(`${errors.length} problem(s):`);
  for (const e of errors) console.log('  - ' + e);
  process.exit(1);
}
console.log('OK');
