# Content v2 — district-by-district enrichment

One file per division (`dhaka.js`, `chattogram.js`, ...), each `export default [ ...districts ]`.
Merge-only: never deletes, never touches Sunamganj, never overwrites Bangla text already in the DB
(except where a field below is explicitly bn).

Validate (no DB): `node src/seed/content-v2/validate.js`
Apply (needs MONGODB_URI): `node src/seed/content-v2/apply.js`

## Shape of one district entry

```js
{
  slug: 'dhaka',                       // must exist in seedAllDistricts.js
  en: {                                // English translations of the existing bn fields
    overview: '...', transport: '...', food: '...', season: '...',
  },
  warnings: [{ bn: '...', en: '...' }],                 // 2–4, practical traveller safety
  hospital: { bn: 'ঢাকা মেডিকেল কলেজ হাসপাতাল', en: 'Dhaka Medical College Hospital' }, // name only, no phone numbers
  spotUpdates: [                       // one per EXISTING spot of this district (from enrich-part*.js)
    {
      slug: 'lalbagh-fort',
      descEn: '...', howEn: '...',
      bestTime: { bn: '...', en: '...' },
      entry: [min, max],               // BDT for Bangladeshi adults; [0, 0] if free or unknown
      hours: 2,                        // time needed on site, hours
    },
  ],
  newSpots: [                          // exactly 3 NEW, real, well-known places
    {
      slug: 'star-mosque', bn: 'তারা মসজিদ', en: 'Star Mosque',
      cat: 'heritage',                 // haor | hill | river | waterfall | garden | heritage | other
      lat: 23.7153, lng: 90.4013,      // approximate is fine, must be inside the district
      tags: ['family', 'relaxed'],     // adventure | family | relaxed
      hidden: false,                   // true = lesser-known gem
      desc: { bn: '...', en: '...' },  // 1–2 sentences
      how: { bn: '...', en: '...' },   // from the district town, local transport
      bestTime: { bn: '...', en: '...' },
      entry: [0, 0], hours: 1,
      warnings: [{ bn: '...', en: '...' }], // optional, 0–1
    },
  ],
}
```
