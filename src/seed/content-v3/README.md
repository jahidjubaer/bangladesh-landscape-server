# Content v3 — rich spot pages

One file per batch (`dhaka-a.js`, `khulna.js`, ...), each `export default [ ...spots ]`.
Adds long-form content to every spot; merge-only (never touches name/description/howToGo/photos).

Validate (no DB): `node src/seed/content-v3/validate.js [file.js] [--expect index.json]`
Apply (needs MONGODB_URI): `node src/seed/content-v3/apply.js`

## Shape of one spot entry

```js
{
  slug: 'lalbagh-fort',                    // existing spot slug
  about: {                                 // 2–3 short paragraphs, separated by "\n\n"
    bn: '...',                             // ≥ 350 characters
    en: '...',                             // ≥ 400 characters
  },
  highlights: [{ bn: '...', en: '...' }],  // 3–5 things to see/do there, one line each
  tips: [{ bn: '...', en: '...' }],        // 2–4 practical tips (timing, cost-saving, what to bring, etiquette)
  nearbyFood: { bn: '...', en: '...' },    // 1 sentence: what/where to eat nearby
  facilities: ['toilet', 'food', 'parking'], // subset of FACILITIES below, only what is really there
}
```

FACILITIES: `toilet`, `food`, `parking`, `shop`, `lodging`, `boat`, `guide`, `prayer`, `ticket`, `wheelchair`
