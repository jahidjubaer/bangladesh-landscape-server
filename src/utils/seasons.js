// The six Bengali seasons (ষড়ঋতু), revised Bangladesh calendar.
// Mirrors client/src/lib/seasons.js.
export const SEASON_KEYS = ['grishma', 'barsha', 'sharat', 'hemanta', 'sheet', 'basanta'];

// Season covering the 15th of each month (index 0 = January)
const MONTH_SEASON = ['sheet', 'basanta', 'basanta', 'grishma', 'grishma', 'barsha', 'barsha', 'barsha', 'sharat', 'sharat', 'hemanta', 'hemanta'];

const MONTHS_EN = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const MONTHS_BN = ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলা', 'আগস্ট', 'সেপ্টে', 'অক্টো', 'নভে', 'ডিসে'];

const KEYWORDS = [
  [/\b(year[- ]round|all year|any time|anytime|throughout the year)\b/i, SEASON_KEYS],
  [/সারা ?বছর|বছরজুড়ে|যেকোনো সময়/, SEASON_KEYS],
  [/\bwinter\b/i, ['hemanta', 'sheet']],
  [/শীত/, ['hemanta', 'sheet']],
  [/\bdry season\b/i, ['hemanta', 'sheet', 'basanta']],
  [/শুষ্ক মৌসুম/, ['hemanta', 'sheet', 'basanta']],
  [/\b(monsoon|rainy season|rains|wet season)\b/i, ['barsha']],
  [/বর্ষা/, ['barsha']],
  [/\bsummer\b/i, ['grishma']],
  [/গ্রীষ্ম|গরমকাল/, ['grishma']],
  [/\b(autumn|fall)\b/i, ['sharat']],
  [/শরৎ|শরত/, ['sharat']],
  [/\bspring\b/i, ['basanta']],
  [/বসন্ত/, ['basanta']],
  [/হেমন্ত|late autumn/i, ['hemanta']],
];

function monthIndex(token) {
  const t = token.toLowerCase();
  let i = MONTHS_EN.findIndex((m) => t.startsWith(m));
  if (i >= 0) return i;
  i = MONTHS_BN.findIndex((m) => token.startsWith(m));
  return i;
}

const EN_MONTH = '(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\\b';
const BN_MONTH = '(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)';
const RANGE = new RegExp(`(?:\\b${EN_MONTH}|${BN_MONTH})\\s*(?:–|-|—|to|থেকে)\\s*(?:${EN_MONTH}|${BN_MONTH})`, 'gi');
const SINGLE = new RegExp(`\\b${EN_MONTH}|${BN_MONTH}`, 'gi');

// Free-text best time ({bn, en}) → season keys, in calendar order. [] when unknown.
export function seasonsFromText(bestTime) {
  const text = [bestTime?.en, bestTime?.bn].filter(Boolean).join(' | ');
  if (!text) return [];
  const found = new Set();
  const months = new Set();

  for (const m of text.matchAll(RANGE)) {
    const a = monthIndex(m[1] || m[2]);
    const b = monthIndex(m[3] || m[4]);
    if (a < 0 || b < 0) continue;
    for (let i = a; ; i = (i + 1) % 12) {
      months.add(i);
      if (i === b) break;
    }
  }
  if (!months.size) {
    // "18 April is his anniversary" style dates are not a season; only a lone
    // month without a day number counts
    for (const m of text.matchAll(SINGLE)) {
      const before = text.slice(Math.max(0, m.index - 4), m.index);
      if (/\d\s*$|[০-৯]\s*$/.test(before)) continue;
      const i = monthIndex(m[1] || m[2]);
      if (i >= 0) months.add(i);
    }
  }
  months.forEach((i) => found.add(MONTH_SEASON[i]));

  if (!found.size) {
    for (const [re, keys] of KEYWORDS) if (re.test(text)) keys.forEach((k) => found.add(k));
  }
  return SEASON_KEYS.filter((k) => found.has(k));
}

// Explicit admin choice wins; otherwise derive from the best-time text
export function resolveSeasons(spot) {
  if (Array.isArray(spot?.seasons) && spot.seasons.length) return SEASON_KEYS.filter((k) => spot.seasons.includes(k));
  return seasonsFromText(spot?.bestTime);
}
