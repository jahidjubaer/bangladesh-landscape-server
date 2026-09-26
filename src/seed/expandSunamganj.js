// Expands the Sunamganj dataset: richer district info, English content,
// and 6 additional well-documented spots. Facts compiled from public
// sources — verify fares/GPS on the next field visit.
// Run: node src/seed/expandSunamganj.js
import mongoose from 'mongoose';
import env from '../config/env.js';
import District from '../models/District.js';
import Spot from '../models/Spot.js';

const districtUpdate = {
  'overview.en':
    'Nestled between the haors (freshwater wetlands) and the Meghalaya hills, Sunamganj is one of Bangladesh’s most beautiful destinations. Houseboat trips on Tanguar Haor, the blue-green water of Niladri Lake, the crystal current of the Jadukata River and the crimson bloom of Shimul Bagan make it unique. In monsoon the haors swell like a sea; in winter they become a kingdom of migratory birds.',
  'transportInfo.bn':
    'ঢাকা থেকে সুনামগঞ্জ: শ্যামলী, মামুন, এনা প্রভৃতি বাসে সরাসরি (নন-এসি আনু. ৮৫০–১,০০০ টাকা, এসি ১,২০০–১,৬০০ টাকা; সময় ৬–৭ ঘণ্টা)। বিকল্পে ট্রেনে ঢাকা→সিলেট (পারাবত/জয়ন্তিকা/উপবন/কালনী এক্সপ্রেস, শোভন চেয়ার আনু. ৩৭৫–৫০০ টাকা), সিলেট কুমারগাঁও থেকে বাসে সুনামগঞ্জ (আনু. ১২০–২০০ টাকা, ২ ঘণ্টা)। শহর থেকে তাহিরপুর (টাঙ্গুয়ার গেটওয়ে) মোটরসাইকেলে জনপ্রতি আনু. ২০০–৩০০ টাকা, সিএনজি রিজার্ভ ৫০০–৮০০ টাকা; বর্ষায় সাহেববাড়ি ঘাট থেকে সরাসরি নৌকা/হাউসবোট। তাহিরপুর থেকে টেকেরঘাট, বারিক টিলা, শিমুল বাগান এলাকায় মোটরসাইকেলই প্রধান বাহন (স্পটপ্রতি ১৫০–৩০০ টাকা)।',
  'transportInfo.en':
    'From Dhaka: direct buses (Shyamoli, Mamun, Ena; non-AC ~850–1,000 BDT, AC 1,200–1,600 BDT, 6–7 hrs). Alternatively take a train Dhaka→Sylhet (~375–500 BDT) then a bus from Sylhet Kumargaon to Sunamganj (~120–200 BDT, 2 hrs). From town, motorcycles run to Tahirpur — the Tanguar gateway (~200–300 BDT/person); in monsoon boats and houseboats leave directly from Saheb Bari Ghat. Around Tekerghat, Barik Tila and Shimul Bagan, motorbike is the main transport (150–300 BDT per hop).',
  'foodInfo.en':
    'Fresh haor fish is the star — boal, ayre, rui, chital. Houseboat packages usually include meals. Basic eateries exist at Tahirpur and Tekerghat bazaars; better restaurants in Sunamganj town. In the dry season remote spots have few food stalls — carry dry food and water.',
  'bestSeason.en':
    'Monsoon (June–September): the haor is in full glory — best for houseboats. Winter (November–February): migratory birds; Shimul Bagan blooms February–March. April–May carries storm risk (afal waves).',
  warnings: [
    { bn: 'বর্ষায় হাওরে আফাল (বড় ঢেউ) হয় — লাইফ জ্যাকেট ছাড়া নৌকায় উঠবেন না।', en: 'In monsoon the haor throws up big waves (afal) — never board a boat without a life jacket.' },
    { bn: 'সীমান্তবর্তী এলাকায় (নীলাদ্রি, বারিক টিলা, লাউড়েরগড়) বিজিবির নির্দেশনা মেনে চলুন, সীমান্তের ওপারে যাবেন না।', en: 'Near the border (Niladri, Barik Tila, Laurergarh) follow BGB instructions and never cross the boundary.' },
    { bn: 'যাদুকাটা ও নীলাদ্রিতে পানির গভীরতা হঠাৎ বাড়ে — সাঁতার না জানলে গভীর পানিতে নামবেন না।', en: 'Water depth changes suddenly at Jadukata and Niladri — do not wade deep if you cannot swim.' },
    { bn: 'হাউসবোট বুকিংয়ের আগে রিভিউ, লাইফ জ্যাকেট ও লাইসেন্স আছে কি না যাচাই করুন।', en: 'Before booking a houseboat, check reviews, life jackets and licensing.' },
    { bn: 'প্রত্যন্ত স্পটে মোবাইল নেটওয়ার্ক দুর্বল ও এটিএম নেই — পর্যাপ্ত নগদ টাকা ও পাওয়ার ব্যাংক সাথে রাখুন।', en: 'Remote spots have weak mobile network and no ATMs — carry enough cash and a power bank.' },
    { bn: 'বর্ষায় বজ্রপাত হাওর এলাকার বড় ঝুঁকি — আকাশ খারাপ দেখলে খোলা নৌকা ও ফাঁকা মাঠ এড়িয়ে চলুন।', en: 'Lightning is a serious monsoon hazard on open haors — avoid open boats and fields when a storm builds.' },
  ],
  'emergency.fireService': '৯৯৯ (জাতীয় জরুরি সেবা)',
};

// English enrichment for the 7 existing spots (bn content untouched)
const enExisting = {
  'tanguar-haor': {
    'description.en':
      'Spanning ~100 sq km, Tanguar Haor is Bangladesh’s second-largest freshwater wetland and a Ramsar site. Overnight houseboat stays in monsoon, rows of hijal-koroch trees standing in clear water, and hundreds of thousands of migratory birds in winter. Swimming by the Watch Tower is a favourite.',
    'howToGo.en':
      'Motorcycle/CNG from Sunamganj town to Tahirpur ghat (~100–200 BDT). In monsoon, day boats cost ~3,000–5,000 BDT and houseboat packages ~3,500–8,000 BDT per person per night.',
    'bestTime.en': 'Monsoon (Jun–Sep) for houseboats; winter for birdwatching',
  },
  'niladri-lake': {
    'description.en':
      'Formed in an abandoned limestone quarry at Tekerghat, its blue-green water against the Meghalaya hills earns it the nickname “Kashmir of Bangladesh”. Officially Shaheed Siraj Lake, named after freedom fighter Sirajul Islam.',
    'howToGo.en': 'Motorcycle from Tahirpur to Tekerghat (~150–300 BDT); usually included in Tanguar houseboat packages.',
    'bestTime.en': 'Year-round; bluest in monsoon',
  },
  'jadukata-river': {
    'description.en':
      'Flowing down from the Khasi hills, the Jadukata is famed for its transparent bluish water and white sandbanks — “the river of beauty”. Laurergarh bazaar and the Shah Arefin shrine are nearby.',
    'howToGo.en': 'Motorcycle from town or Tahirpur to Laurergarh/Barik Tila ghat (~200–300 BDT). Combine with Barik Tila and Shimul Bagan in one day.',
    'bestTime.en': 'Monsoon and just after (Jun–Oct) when the water is clearest',
  },
  'barik-tila': {
    'description.en':
      'A ~40-acre hillock on the Jadukata’s bank. From the top you see the river’s blue water, white sandbars and the green Meghalaya hills at once — Sunamganj’s best viewpoint.',
    'howToGo.en': 'Motorcycle from Tahirpur (~150–250 BDT); cross the Jadukata by boat. 10–15 minutes from Shimul Bagan.',
    'bestTime.en': 'Afternoon — the sunset view is best',
  },
  'shimul-bagan': {
    'description.en':
      'Over 3,000 silk-cotton (shimul) trees across ~33 acres at Manigaon on the Jadukata bank — the country’s largest shimul garden. In Feb–March the whole garden turns crimson.',
    'howToGo.en': 'Motorcycle from Tahirpur to Manigaon (~150–250 BDT); same trip as Barik Tila and the Jadukata.',
    'bestTime.en': 'February–March (bloom); early morning or late afternoon',
  },
  lakmachhara: {
    'description.en':
      'A hidden gem by the Meghalaya border near Tekerghat — a clear hill stream, small limestone knolls and deep green surroundings, with far fewer crowds.',
    'howToGo.en': 'Motorcycle or a 15–20 minute walk from Tekerghat/Niladri Lake.',
    'bestTime.en': 'Monsoon and just after, when the stream runs full',
  },
  'hason-raja-museum': {
    'description.en':
      'A museum on the Surma riverbank in town devoted to the mystic poet Hason Raja — his belongings, manuscripts and rare photographs. An easy one-hour stop at the start or end of a haor trip.',
    'howToGo.en': 'In the Teghoria area of Sunamganj town; any rickshaw (20–50 BDT).',
    'bestTime.en': 'Year-round; may close Fridays — check before visiting',
  },
};

// Six additional well-documented spots (coordinates approximate — verify on field)
const newSpots = [
  {
    slug: 'pagla-boro-mosque',
    name: { bn: 'পাগলা বড় জামে মসজিদ', en: 'Pagla Boro Jame Mosque' },
    category: 'heritage',
    images: ['/uploads/spot-pagla-mosque.jpg'],
    description: {
      bn: 'মহাসিং নদীর তীরে রায়পুর গ্রামে ১৯৩১ সালের দিকে নির্মিত দৃষ্টিনন্দন মসজিদ — স্থানীয়ভাবে রায়পুর বড় মসজিদ নামেও পরিচিত। চুন-সুরকি, মার্বেল আর মোজাইকের নিখুঁত কারুকাজ এবং নদীর ধারের অবস্থান একে সুনামগঞ্জের অন্যতম স্থাপত্য নিদর্শন করেছে।',
      en: 'An exquisite early-20th-century mosque (c. 1931) at Raipur village on the Mohashing river, also known as Raipur Boro Masjid. Its lime-mortar, marble and mosaic craftsmanship and riverside setting make it one of Sunamganj’s finest pieces of architecture.',
    },
    howToGo: {
      bn: 'সুনামগঞ্জ শহর থেকে সিলেট রোডে পাগলা বাজার (আনু. ২০ কিমি) — বাস/সিএনজিতে ৪০–৮০ টাকা; বাজার থেকে রিকশা/অটোতে রায়পুর মসজিদ।',
      en: 'From Sunamganj town take the Sylhet road to Pagla bazar (~20 km, 40–80 BDT by bus/CNG), then a rickshaw to Raipur mosque.',
    },
    location: { lat: 24.965, lng: 91.44 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 1.5,
    bestTime: { bn: 'সারা বছর; জুমার সময় ভিড় থাকে', en: 'Year-round; busy at Friday prayers' },
    isHidden: false,
    tags: ['family', 'relaxed'],
    warnings: [{ bn: 'এটি সক্রিয় ধর্মীয় স্থাপনা — শালীন পোশাকে ও নামাজের সময়সূচি মেনে ঘুরুন।', en: 'An active place of worship — dress modestly and respect prayer times.' }],
    obstacles: [],
  },
  {
    slug: 'gourarong-zamindar-bari',
    name: { bn: 'গৌরারং জমিদার বাড়ি', en: 'Gourarong Zamindar Bari' },
    category: 'heritage',
    images: [],
    description: {
      bn: 'শহর থেকে অল্প দূরে গৌরারং গ্রামে প্রায় দুইশ বছরের পুরোনো জমিদার বাড়ির ধ্বংসাবশেষ — পুকুরঘাট, খিলান আর কারুকাজ করা দেয়ালে পুরোনো দিনের আবহ। ইতিহাস ও ফটোগ্রাফিপ্রেমীদের প্রিয় জায়গা।',
      en: 'The ~200-year-old ruins of a zamindar (landlord) estate at Gourarong village near town — arched halls, ponds and ornamented walls full of atmosphere. A favourite of history and photography lovers.',
    },
    howToGo: {
      bn: 'সুনামগঞ্জ শহর থেকে সিএনজি/অটোতে গৌরারং (আনু. ৫–৭ কিমি, রিজার্ভ ১৫০–২৫০ টাকা)।',
      en: 'CNG/auto from Sunamganj town to Gourarong (~5–7 km, 150–250 BDT reserve).',
    },
    location: { lat: 25.05, lng: 91.35 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 1.5,
    bestTime: { bn: 'শুকনো মৌসুমে (নভেম্বর–মার্চ) যাতায়াত সহজ', en: 'Easiest in the dry season (Nov–Mar)' },
    isHidden: true,
    tags: ['relaxed'],
    warnings: [{ bn: 'পুরোনো জরাজীর্ণ ভবন — দেয়ালে বা ছাদে ওঠা বিপজ্জনক।', en: 'The structures are decayed — climbing walls or roofs is dangerous.' }],
    obstacles: [{ bn: 'শেষ অংশের রাস্তা কাঁচা, বর্ষায় কাদা হয়।', en: 'The last stretch is unpaved and muddy in monsoon.' }],
  },
  {
    slug: 'shah-arefin-mazar',
    name: { bn: 'শাহ আরেফিন (রহ.)-এর আস্তানা', en: 'Shah Arefin Shrine' },
    category: 'heritage',
    images: [],
    description: {
      bn: 'যাদুকাটার তীরে লাউড়েরগড়ে হজরত শাহ আরেফিন (রহ.)-এর স্মৃতিবিজড়িত আস্তানা — হজরত শাহজালাল (রহ.)-এর সঙ্গী এই সাধকের ওরসে প্রতি বছর চৈত্র মাসে লাখো ভক্তের সমাগম হয়; একই সময়ে ওপারে পণাতীর্থ স্নান উপলক্ষে দুই ধর্মের মিলনমেলা বসে।',
      en: 'At Laurergarh on the Jadukata bank stands the shrine of Shah Arefin (R.), a companion of Shah Jalal (R.). His annual urs each Chaitra draws hundreds of thousands, coinciding with the Hindu Panatirtha bathing festival — a rare meeting of two faiths on one riverbank.',
    },
    howToGo: {
      bn: 'বারিক টিলা/যাদুকাটা ঘাট থেকেই হাঁটা দূরত্ব; তাহিরপুর থেকে মোটরসাইকেলে লাউড়েরগড় আনু. ১৫০–২৫০ টাকা।',
      en: 'Walking distance from the Barik Tila/Jadukata ghat; motorcycle from Tahirpur to Laurergarh ~150–250 BDT.',
    },
    location: { lat: 25.19, lng: 91.255 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 1,
    bestTime: { bn: 'চৈত্র মাসে ওরস ও পণাতীর্থের সময় উৎসবমুখর; অন্য সময় নিরিবিলি', en: 'Festive during the Chaitra urs; quiet the rest of the year' },
    isHidden: false,
    tags: ['relaxed', 'family'],
    warnings: [{ bn: 'ওরসের সময় প্রচণ্ড ভিড় হয় — মূল্যবান জিনিস সাবধানে রাখুন।', en: 'Extremely crowded during the urs — mind your valuables.' }],
    obstacles: [],
  },
  {
    slug: 'dolura-shohid-somadhi',
    name: { bn: 'ডলুরা শহীদদের সমাধিসৌধ', en: 'Dolura Martyrs’ Cemetery' },
    category: 'heritage',
    images: [],
    description: {
      bn: 'শহরের উত্তরে সীমান্তঘেঁষা ডলুরায় মুক্তিযুদ্ধের ৪৮ জন শহীদ মুক্তিযোদ্ধার সমাধিসৌধ — সবুজ পাহাড়ের পটভূমিতে ইতিহাসের শ্রদ্ধাঞ্জলি। পাশের নারায়ণতলায় শতবর্ষী মিশনারি গির্জা ও চা-জনপদের আবহ ঘুরে দেখা যায়।',
      en: 'By the border north of town, the cemetery of 48 freedom fighters of 1971 rests against green hills. Nearby Narayantala offers a century-old missionary church and tea-country scenery.',
    },
    howToGo: {
      bn: 'সুনামগঞ্জ শহর থেকে মোটরসাইকেল/সিএনজিতে নারায়ণতলা-ডলুরা (আনু. ১২ কিমি, রিজার্ভ ২০০–৩৫০ টাকা)।',
      en: 'Motorcycle/CNG from town to Narayantala–Dolura (~12 km, 200–350 BDT reserve).',
    },
    location: { lat: 25.14, lng: 91.38 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 2,
    bestTime: { bn: 'শীত ও শুকনো মৌসুম', en: 'Winter and the dry season' },
    isHidden: true,
    tags: ['relaxed', 'family'],
    warnings: [{ bn: 'সীমান্ত এলাকা — বিজিবির নির্দেশনা মেনে চলুন।', en: 'Border area — follow BGB instructions.' }],
    obstacles: [],
  },
  {
    slug: 'matian-haor',
    name: { bn: 'মাটিয়ান হাওর', en: 'Matian Haor' },
    category: 'haor',
    images: ['/uploads/spot-matian-haor.jpg'],
    description: {
      bn: 'তাহিরপুরের আরেক বিশাল হাওর — টাঙ্গুয়ার পথেই পড়ে, অথচ ভিড় অনেক কম। বর্ষায় দিগন্তজোড়া জলরাশি আর ভাসমান গ্রামের দৃশ্য; অনেক হাউসবোট এখন টাঙ্গুয়ার সাথে মাটিয়ানেও রাত কাটায়।',
      en: 'Another vast haor of Tahirpur on the way to Tanguar, with far fewer crowds. Horizon-wide water and floating villages in monsoon; many houseboats now anchor overnight here as well.',
    },
    howToGo: {
      bn: 'তাহিরপুর ঘাট থেকেই নৌকা/হাউসবোটে; টাঙ্গুয়া ট্রিপের প্যাকেজে বলে নিলে মাটিয়ানও ঘোরানো হয়।',
      en: 'Boats/houseboats leave from Tahirpur ghat; ask your Tanguar package to include Matian.',
    },
    location: { lat: 25.06, lng: 91.1 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 4,
    bestTime: { bn: 'বর্ষা (জুন–সেপ্টেম্বর)', en: 'Monsoon (June–September)' },
    isHidden: true,
    tags: ['relaxed', 'adventure'],
    warnings: [{ bn: 'আফালের সময় ছোট নৌকা এড়িয়ে চলুন; লাইফ জ্যাকেট বাধ্যতামূলক।', en: 'Avoid small boats during afal waves; life jackets are a must.' }],
    obstacles: [{ bn: 'শুকনো মৌসুমে পানি কমে গেলে নৌপথ সীমিত।', en: 'Boat routes shrink in the dry season.' }],
  },
  {
    slug: 'bashtala-smritisoudho',
    name: { bn: 'বাঁশতলা শহীদ স্মৃতিসৌধ ও হকনগর', en: 'Bashtala Martyrs’ Monument & Hoknagar' },
    category: 'hill',
    images: [],
    description: {
      bn: 'দোয়ারাবাজারের সীমান্তঘেঁষা বাঁশতলায় মুক্তিযুদ্ধের ৫ নম্বর সেক্টরের সাব-সেক্টর সদর দপ্তর ছিল — টিলার ওপর শহীদ স্মৃতিসৌধ, পাশে হকনগর বাজার আর পাহাড়ি ছড়ার (জুমগাঁও/চিলাই) নিরিবিলি প্রকৃতি।',
      en: 'Bashtala in Duarabazar, by the border, housed a sub-sector HQ of Sector 5 in the 1971 war. A martyrs’ monument crowns the hillock, with Hoknagar bazar and quiet hill streams around it.',
    },
    howToGo: {
      bn: 'সুনামগঞ্জ শহর থেকে সিএনজি/বাসে দোয়ারাবাজার, সেখান থেকে মোটরসাইকেলে বাঁশতলা (মোট আনু. ২.৫–৩ ঘণ্টা, ২৫০–৪০০ টাকা)।',
      en: 'CNG/bus from town to Duarabazar, then motorcycle to Bashtala (total ~2.5–3 hrs, 250–400 BDT).',
    },
    location: { lat: 25.08, lng: 91.52 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 3,
    bestTime: { bn: 'শীত ও বর্ষা-পরবর্তী সময়', en: 'Winter and right after monsoon' },
    isHidden: true,
    tags: ['adventure', 'relaxed'],
    warnings: [{ bn: 'সীমান্ত এলাকা — বিজিবির নির্দেশনা মানুন।', en: 'Border area — follow BGB instructions.' }],
    obstacles: [{ bn: 'রাস্তার কিছু অংশ ভাঙা ও কাঁচা।', en: 'Parts of the road are broken/unpaved.' }],
  },
];

async function run() {
  await mongoose.connect(env.mongodbUri);
  console.log('Connected:', mongoose.connection.name);

  const district = await District.findOne({ slug: 'sunamganj' });
  if (!district) throw new Error('Sunamganj not found — run seed.js first');

  await District.updateOne({ _id: district._id }, { $set: districtUpdate });
  console.log('District enriched (en content, transport, warnings x6, 999)');

  for (const [slug, fields] of Object.entries(enExisting)) {
    const r = await Spot.updateOne({ slug }, { $set: fields });
    console.log(`Spot en: ${slug} (${r.matchedCount ? 'ok' : 'MISSING'})`);
  }

  for (const s of newSpots) {
    await Spot.findOneAndUpdate(
      { slug: s.slug },
      { ...s, district: district._id, isActive: true },
      { upsert: true, setDefaultsOnInsert: true, returnDocument: 'after' }
    );
    console.log(`Spot upserted: ${s.slug}`);
  }

  const total = await Spot.countDocuments({ district: district._id, isActive: true });
  console.log(`Done. Active Sunamganj spots: ${total}`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
