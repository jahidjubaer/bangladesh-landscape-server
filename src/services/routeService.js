// Deterministic journey builder for tour plans: origin district → destination
// district (bus / train / launch / air options), local legs between the chosen
// spots, and the return trip. Fares are 2026 desk estimates per person and are
// labelled as approximate everywhere they are shown.

// Districts with a passenger railway station on a regular intercity route
const RAIL = new Set([
  'dhaka', 'gazipur', 'narayanganj', 'narsingdi', 'kishoreganj', 'mymensingh', 'jamalpur', 'netrokona',
  'tangail', 'sirajganj', 'brahmanbaria', 'cumilla', 'feni', 'chattogram', 'coxs-bazar', 'chandpur', 'noakhali',
  'sylhet', 'moulvibazar', 'habiganj', 'rajshahi', 'natore', 'chapainawabganj', 'pabna', 'bogura', 'joypurhat',
  'naogaon', 'rangpur', 'dinajpur', 'nilphamari', 'thakurgaon', 'panchagarh', 'kurigram', 'lalmonirhat',
  'gaibandha', 'khulna', 'jashore', 'jhenaidah', 'kushtia', 'chuadanga', 'rajbari', 'faridpur', 'gopalganj',
  'narail', 'munshiganj',
]);
// Domestic airports, keyed by the district they serve
const AIRPORTS = {
  dhaka: 'Hazrat Shahjalal', chattogram: 'Shah Amanat', 'coxs-bazar': "Cox's Bazar", sylhet: 'Osmani',
  jashore: 'Jashore', rajshahi: 'Shah Makhdum', nilphamari: 'Saidpur', barishal: 'Barishal',
};
// Overnight launch routes from Dhaka Sadarghat (river ports)
const LAUNCH = new Set(['barishal', 'bhola', 'patuakhali', 'barguna', 'pirojpur', 'jhalokathi', 'chandpur']);
// Haor districts where spots in the 'haor' category are reached by boat
const HAOR = new Set(['sunamganj', 'kishoreganj', 'netrokona', 'habiganj', 'moulvibazar']);
// Hill districts where longer local hops are by chander gari (shared jeep)
const HILLS = new Set(['bandarban', 'rangamati', 'khagrachhari']);

const LABEL = {
  bus: { bn: 'বাস', en: 'Bus' },
  train: { bn: 'ট্রেন', en: 'Train' },
  launch: { bn: 'লঞ্চ', en: 'Launch' },
  air: { bn: 'বিমান', en: 'Flight' },
  cng: { bn: 'সিএনজি/অটো', en: 'CNG/auto-rickshaw' },
  jeep: { bn: 'চাঁদের গাড়ি (জিপ)', en: 'Chander gari (jeep)' },
  boat: { bn: 'নৌকা', en: 'Boat' },
  walk: { bn: 'হাঁটা', en: 'Walk' },
};

const toRad = (d) => (d * Math.PI) / 180;
export function haversineKm(a, b) {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

const round = (n, step) => Math.max(step, Math.round(n / step) * step);
const hours = (h) => Math.max(0.25, Math.round(h * 4) / 4);

// All realistic intercity options between two districts, cheapest first
export function intercityOptions(from, to) {
  const straight = haversineKm(from.mapCenter, to.mapCenter);
  const road = straight * 1.4;
  const options = [];

  options.push({
    mode: 'bus',
    km: Math.round(road),
    hours: hours(road / 38 + 0.5),
    fare: { min: round(road * 2.2, 50), max: round(road * 4.5, 50) }, // non-AC → AC
  });
  if (RAIL.has(from.slug) && RAIL.has(to.slug) && straight > 40) {
    const rail = straight * 1.45;
    options.push({
      mode: 'train',
      km: Math.round(rail),
      hours: hours(rail / 42 + 0.5),
      fare: { min: round(rail * 1.1, 10), max: round(rail * 2.3, 10) }, // shovan chair → AC seat
    });
  }
  const pair = [from.slug, to.slug];
  if (pair.includes('dhaka') && LAUNCH.has(pair.find((s) => s !== 'dhaka'))) {
    const river = straight * 1.6;
    options.push({
      mode: 'launch',
      km: Math.round(river),
      hours: hours(river / 22 + 1),
      fare: { min: round(river * 1.8, 50), max: round(river * 9, 100) }, // deck → single cabin
      overnight: true,
    });
  }
  if (AIRPORTS[from.slug] && AIRPORTS[to.slug] && straight > 120) {
    options.push({
      mode: 'air',
      km: Math.round(straight),
      hours: hours(straight / 450 + 2.5), // incl. airport time
      fare: { min: round(3500 + straight * 4, 100), max: round(6500 + straight * 9, 100) },
      airports: [AIRPORTS[from.slug], AIRPORTS[to.slug]],
    });
  }
  return options.sort((a, b) => a.fare.min - b.fare.min);
}

function pickMain(options, pref) {
  if (pref && pref !== 'any') {
    const wanted = options.find((o) => o.mode === pref);
    if (wanted) return wanted;
  }
  // Default: train if available (comfort/price sweet spot), else cheapest
  return options.find((o) => o.mode === 'train') || options[0];
}

// Nearest-neighbour tour from the district town through every spot
function orderSpots(start, spots) {
  const left = spots.filter((s) => s.location?.lat != null);
  const ordered = [];
  let here = start;
  while (left.length) {
    left.sort((a, b) => haversineKm(here, a.location) - haversineKm(here, b.location));
    const next = left.shift();
    ordered.push(next);
    here = next.location;
  }
  return ordered;
}

function localLeg(fromPt, toPt, spot, districtSlug, members) {
  const km = haversineKm(fromPt, toPt) * 1.4;
  let mode = 'cng';
  if (km < 1.2) mode = 'walk';
  else if (spot && spot.category === 'haor' && HAOR.has(districtSlug)) mode = 'boat';
  else if (km > 6 && HILLS.has(districtSlug)) mode = 'jeep';
  const seats = { boat: 10, jeep: 12 }[mode] || 3;
  const vehicles = Math.ceil(members / seats);
  const perVehicle = { walk: 0, boat: round(1500 + km * 120, 100), jeep: round(1200 + km * 75, 100) }[mode] ?? round(80 + km * 28, 10);
  const group = perVehicle * vehicles;
  return {
    mode,
    km: Math.round(km * 10) / 10,
    hours: hours(km / ({ boat: 12, walk: 4, jeep: 18 }[mode] || 22)),
    groupCost: group,
  };
}

const point = (name, loc) => ({ name, lat: loc.lat, lng: loc.lng });

// origin/destination: District docs; spots: Spot docs; pref: 'any'|'bus'|'train'|'launch'|'air'
export function buildJourney({ origin, destination, spots, members, pref, lang }) {
  const L = (o) => (lang === 'en' ? o.en || o.bn : o.bn);
  const town = destination.mapCenter;
  const legs = [];
  let options = [];
  let main = null;

  if (origin && origin.slug !== destination.slug) {
    options = intercityOptions(origin, destination);
    main = pickMain(options, pref);
    legs.push({
      kind: 'main',
      mode: main.mode,
      modeLabel: L(LABEL[main.mode]),
      from: point(L(origin.name), origin.mapCenter),
      to: point(L(destination.name), town),
      km: main.km,
      hours: main.hours,
      costPerPerson: main.fare,
      groupCost: Math.round(((main.fare.min + main.fare.max) / 2) * members),
    });
  }

  const ordered = orderSpots(town, spots);
  let here = point(L(destination.name), town);
  for (const s of ordered) {
    const leg = localLeg(here, s.location, s, destination.slug, members);
    const to = point(L(s.name), s.location);
    legs.push({ kind: 'local', modeLabel: L(LABEL[leg.mode]), from: here, to, ...leg });
    here = to;
  }
  if (ordered.length) {
    const back = localLeg(here, town, null, destination.slug, members);
    legs.push({ kind: 'local', modeLabel: L(LABEL[back.mode]), from: here, to: point(L(destination.name), town), ...back });
  }
  if (main) {
    legs.push({
      kind: 'return',
      mode: main.mode,
      modeLabel: L(LABEL[main.mode]),
      from: point(L(destination.name), town),
      to: point(L(origin.name), origin.mapCenter),
      km: main.km,
      hours: main.hours,
      costPerPerson: main.fare,
      groupCost: Math.round(((main.fare.min + main.fare.max) / 2) * members),
    });
  }

  return {
    from: origin ? point(L(origin.name), origin.mapCenter) : null,
    to: point(L(destination.name), town),
    options: options.map((o) => ({ ...o, modeLabel: L(LABEL[o.mode]) })),
    chosenMode: main?.mode || null,
    legs,
    totalTransportCost: legs.reduce((sum, l) => sum + (l.groupCost || 0), 0),
    note:
      lang === 'en'
        ? 'Fares and travel times are approximate 2026 estimates — confirm locally before you go.'
        : 'ভাড়া ও সময় ২০২৬ সালের আনুমানিক হিসাব — যাওয়ার আগে স্থানীয়ভাবে যাচাই করে নিন।',
  };
}
