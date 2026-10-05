// Content v2 — Chattogram division (11 districts).
// English versions of existing bn fields, traveller warnings, hospital names,
// spot updates and 3 new well-known spots per district.
// Fares/entry fees are conservative approximations — verify on field.
export default [
  // ── চট্টগ্রাম ──
  {
    slug: 'chattogram',
    en: {
      overview:
        'Chattogram is the port city of hills and sea — Patenga’s sunsets, the Chandranath peak at Sitakunda, the waterfall trails of Mirsarai and the green carpet of Guliakhali together make one district a complete adventure package.',
      transport:
        'From Dhaka it is a 45-minute flight, 5.5–6.5 hours by train (Suborno, Sonar Bangla, Turna) or 5–7 hours by bus. For the Sitakunda–Mirsarai spots, get off a Dhaka–Chattogram highway bus at the nearest bazaar and take a CNG auto-rickshaw.',
      food:
        'Mezbani beef is Chattogram’s signature, along with kala bhuna (slow-cooked dark beef), shutki (dried fish) bhorta and the local Bela biscuit.',
      season:
        'Monsoon and just after (July–October) for the waterfall trails; winter for the beaches and hill walks.',
    },
    warnings: [
      { bn: 'মীরসরাই-সীতাকুণ্ডের ঝর্ণা-ট্রেইলে বর্ষায় হঠাৎ ঢল নামে ও পাথর খুব পিচ্ছিল থাকে — ঝর্ণার গভীর কুণ্ডে নামবেন না, দলছুট হবেন না।', en: 'On the Mirsarai–Sitakunda waterfall trails flash floods come suddenly in monsoon and rocks are very slippery — stay out of the deep plunge pools and keep with your group.' },
      { bn: 'গুলিয়াখালী ও পতেঙ্গায় জোয়ার-ভাটার সময় জেনে নামুন — জোয়ারে নালা দ্রুত ভরে যায়, কাদায় আটকে পড়ার ঝুঁকি থাকে।', en: 'Check tide times at Guliakhali and Patenga — creeks fill fast on the rising tide and the mudflats can trap you.' },
      { bn: 'বর্ষায় শহরের পাহাড়ি এলাকায় ভূমিধস ও নিম্নাঞ্চলে জলাবদ্ধতা হয় — ভারী বৃষ্টির সতর্কবার্তা থাকলে পাহাড়ঘেঁষা পথ এড়িয়ে চলুন।', en: 'Heavy monsoon rain brings landslides on the city’s hill slopes and waterlogging in low areas — avoid hillside roads during heavy-rain alerts.' },
      { bn: 'চন্দ্রনাথে সন্ধ্যার আগেই নেমে আসুন; নির্জন পথে একা না গিয়ে দল বেঁধে যান।', en: 'Come down from Chandranath well before dark and avoid walking the lonely stretches alone.' },
    ],
    hospital: { bn: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল', en: 'Chattogram Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'patenga-beach',
        descEn: 'A paved sea-front at the mouth of the Karnaphuli with sunsets, speedboats and passing ships — together with the evening stroll along Naval Road, it is the city’s favourite hangout.',
        howEn: 'CNG or local bus from the city to Patenga (about 45–60 minutes from the centre); go in the afternoon to catch the sunset.',
        bestTime: { bn: 'বিকেল থেকে সন্ধ্যা; শীতে আকাশ পরিষ্কার থাকে', en: 'Late afternoon to dusk; clearest skies in winter' },
        entry: [0, 0], hours: 2,
      },
      {
        slug: 'chandranath-hill',
        descEn: 'The Chandranath temple sits on a summit of roughly 1,150 ft — after a two-hour climb up steps and trail you see the sea on one side and rolling hills on the other.',
        howEn: 'CNG from Sitakunda bazaar to the trailhead; start at dawn and carry water.',
        bestTime: { bn: 'অক্টোবর–ফেব্রুয়ারি, ভোরবেলা', en: 'October–February, starting at dawn' },
        entry: [0, 0], hours: 4,
      },
      {
        slug: 'guliakhali-beach',
        descEn: 'An unusual beach of green grass carpets, mangrove breathing roots and winding creeks — a strange friendship between swamp and sea.',
        howEn: 'CNG from Sitakunda bazaar to the embankment, then walk.',
        bestTime: { bn: 'শীতকাল, ভাটার সময় বিকেলে', en: 'Winter afternoons at low tide' },
        entry: [0, 0], hours: 2,
      },
      {
        slug: 'khoiyachora',
        descEn: 'A nine-tiered waterfall — climbing tier by tier after a slippery stream-bed walk makes it the star of the Mirsarai trails.',
        howEn: 'Get off at Khoiyachora (near the Ideal School) on the Dhaka–Chattogram highway and follow the stream; take a local guide and shoes with good grip.',
        bestTime: { bn: 'জুলাই–অক্টোবর (বর্ষা ও পরবর্তী)', en: 'July–October (monsoon and after)' },
        entry: [0, 20], hours: 4,
      },
      {
        slug: 'foys-lake',
        descEn: 'A century-old lake ringed by hills with boating, an amusement park and a resort — a full day out for families.',
        howEn: 'In Khulshi inside the city; an easy CNG ride.',
        bestTime: { bn: 'সারা বছর; শীতে আরামদায়ক', en: 'Year-round; most pleasant in winter' },
        entry: [300, 600], hours: 4,
      },
    ],
    newSpots: [
      {
        slug: 'bayazid-bostami-shrine', bn: 'বায়েজিদ বোস্তামীর মাজার', en: 'Bayazid Bostami Shrine',
        cat: 'heritage', lat: 22.3876, lng: 91.8157, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'নাসিরাবাদের টিলায় সুফি সাধকের নামে মাজার ও মোগল আমলের তিন গম্বুজ মসজিদ; নিচের পুকুরের বিরল বোস্তামী কাছিম দেখতে সবাই ভিড় করে।', en: 'A hilltop Sufi shrine and Mughal-era three-domed mosque in Nasirabad; visitors gather at the pond below to see the rare black softshell (Bostami) turtles.' },
        how: { bn: 'শহরের যেকোনো জায়গা থেকে সিএনজি বা বাসে বায়েজিদ বোস্তামী সড়ক।', en: 'CNG or city bus to Bayazid Bostami Road from anywhere in the city.' },
        bestTime: { bn: 'সারা বছর; সকাল বা বিকেল', en: 'Year-round; morning or late afternoon' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'কাছিমকে পাউরুটি-বিস্কুট খাওয়াবেন না, শালীন পোশাক পরুন।', en: 'Do not feed bread or biscuits to the turtles, and dress modestly.' }],
      },
      {
        slug: 'chittagong-war-cemetery', bn: 'চট্টগ্রাম ওয়ার সিমেট্রি', en: 'Chittagong War Cemetery',
        cat: 'heritage', lat: 22.3594, lng: 91.8262, tags: ['relaxed'], hidden: false,
        desc: { bn: 'দ্বিতীয় বিশ্বযুদ্ধে নিহত সাতশোর বেশি সৈনিকের সমাধি — ছাঁটা সবুজ ঘাস আর সারি সারি সমাধিফলকে শহরের মাঝেই এক নিস্তব্ধ বাগান।', en: 'The resting place of over 700 Second World War servicemen — neat lawns and rows of headstones form a hushed garden in the middle of the city.' },
        how: { bn: 'মেহেদীবাগের বাদশা মিয়া সড়কে; শহর থেকে রিকশা বা সিএনজি।', en: 'On Badsha Mia Road, Mehedibag; rickshaw or CNG from anywhere in the city.' },
        bestTime: { bn: 'সারা বছর, দিনের বেলা', en: 'Year-round, daytime' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'napittachora-waterfall', bn: 'নাপিত্তাছড়া ঝর্ণা', en: 'Napittachora Waterfall',
        cat: 'waterfall', lat: 22.7965, lng: 91.5662, tags: ['adventure'], hidden: true,
        desc: { bn: 'মীরসরাইয়ের নয়দুয়ার থেকে ঝিরিপথ ধরে কুপিকাটাখুম, মিঠাছড়ি আর বান্দরখুম — কয়েকটি ঝর্ণা একসাথে দেখার ছোট্ট কিন্তু রোমাঞ্চকর ট্রেইল।', en: 'A short but thrilling stream trail from Nayduar in Mirsarai that links several cascades — Kupikatakhum, Mithachhari and Bandarkhum.' },
        how: { bn: 'ঢাকা-চট্টগ্রাম মহাসড়কে নয়দুয়ার বাজারে নেমে গ্রামের পথ ধরে ঝিরিতে; স্থানীয় গাইড নিন।', en: 'Get off at Nayduar bazaar on the Dhaka–Chattogram highway and walk through the village to the stream; hire a local guide.' },
        bestTime: { bn: 'জুলাই–অক্টোবর', en: 'July–October' },
        entry: [0, 0], hours: 4,
        warnings: [{ bn: 'বান্দরখুমের কুণ্ড গভীর — সাঁতার না জানলে নামবেন না।', en: 'The pool at Bandarkhum is deep — stay out unless you are a strong swimmer.' }],
      },
    ],
  },

  // ── কক্সবাজার ──
  {
    slug: 'coxs-bazar',
    en: {
      overview:
        'Home of the world’s longest natural sea beach — 120 km of sand from Laboni to Teknaf, the coral-studded rocks of Inani, the hills and waterfall of Himchari and the Buddhist heritage of Ramu.',
      transport:
        'From Dhaka it is a 1-hour flight, 8–9 hours by train (Cox’s Bazar Express) or 9–10 hours by bus. Riding an open jeep along the Marine Drive to Inani and Teknaf is a treat of its own.',
      food:
        'Fried rupchanda (pomfret), loitta shutki (dried Bombay duck) and fresh coconut water — evenings by the beach come alive with seafood stalls.',
      season:
        'November–February is peak season, and the only time the ships to Saint Martin’s Island run.',
    },
    warnings: [
      { bn: 'সৈকতে প্রবল উল্টো স্রোত (রিপ কারেন্ট) প্রতি বছর প্রাণ কাড়ে — শুধু লাইফগার্ডের পতাকা দেওয়া এলাকায় নামুন, লাল পতাকা ও ভাটার সময় পানিতে নামবেন না।', en: 'Strong rip currents claim lives every year — swim only between the lifeguard flags, and never when a red flag is up or the tide is going out.' },
      { bn: 'সেন্টমার্টিন ভ্রমণে সরকারি বিধিনিষেধ আছে (নির্দিষ্ট মাস, দৈনিক পর্যটক সীমা, অনলাইন নিবন্ধন) — যাওয়ার আগে সর্বশেষ নিয়ম জেনে নিন।', en: 'Travel to Saint Martin’s Island is restricted by the government (set months, a daily visitor cap, online registration) — check the latest rules before you plan.' },
      { bn: 'উখিয়া-টেকনাফের রোহিঙ্গা ক্যাম্প এলাকায় অনুমতি ছাড়া প্রবেশ নিষেধ; মেরিন ড্রাইভে রাতে চলাচল এড়িয়ে চলুন।', en: 'The Rohingya camp areas of Ukhiya–Teknaf are off-limits without permission; avoid driving the Marine Drive late at night.' },
      { bn: 'ছুটির মৌসুমে হোটেল ভাড়া কয়েক গুণ বাড়ে — আগে বুক করুন এবং সৈকতের ফটোগ্রাফার, ঘোড়া ও বিচ-চেয়ারের দাম আগেই ঠিক করুন।', en: 'Hotel rates jump several-fold in holiday season — book ahead, and agree prices first with beach photographers, horse riders and deck-chair hirers.' },
    ],
    hospital: { bn: 'কক্সবাজার জেলা সদর হাসপাতাল', en: 'Cox’s Bazar District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'coxs-bazar-beach',
        descEn: 'Crashing waves at the Laboni, Sugandha and Kolatoli points, horse rides and sunsets — the first name in Bangladeshi travel.',
        howEn: 'The beach is within walking distance from most hotels; easy-bikes connect the points.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি; সূর্যাস্তের সময়', en: 'November–February; at sunset' },
        entry: [0, 0], hours: 3,
      },
      {
        slug: 'inani-beach',
        descEn: 'Rows of coral-like rocks exposed at low tide and calmer, quieter water — the jewel of the Marine Drive.',
        howEn: 'About 40 minutes from Kolatoli along the Marine Drive by jeep or CNG.',
        bestTime: { bn: 'শীতকাল, ভাটার সময়', en: 'Winter, at low tide' },
        entry: [0, 0], hours: 2,
      },
      {
        slug: 'himchori',
        descEn: 'A waterfall tumbling from the hills towards the sea and a long stairway to a viewpoint — from the top the beach runs on endlessly.',
        howEn: 'About 20 minutes from Kolatoli along the Marine Drive.',
        bestTime: { bn: 'ঝর্ণার জন্য বর্ষা-শেষ; ভিউপয়েন্টের জন্য শীত', en: 'End of monsoon for the waterfall; winter for the viewpoint' },
        entry: [20, 50], hours: 2,
      },
      {
        slug: 'ramu-buddhist',
        descEn: 'A cluster of Rakhine-heritage monasteries including a hundred-foot golden reclining Buddha — an afternoon’s cultural break from the beach crowds.',
        howEn: 'About 30 minutes by CNG from Cox’s Bazar town to Ramu.',
        bestTime: { bn: 'সারা বছর; প্রবারণা পূর্ণিমায় ফানুস উৎসব', en: 'Year-round; the lantern festival at Probarona Purnima is special' },
        entry: [0, 0], hours: 2,
      },
      {
        slug: 'saint-martin',
        descEn: 'The country’s only coral island — turquoise water, rows of coconut palms and the solitude of Chhera Dwip; stay overnight for a sky full of stars.',
        howEn: 'In the permitted season, ships run from Cox’s Bazar (and Teknaf when allowed); buy tickets and complete any required registration in advance.',
        bestTime: { bn: 'সরকার-অনুমোদিত মৌসুমে (সাধারণত নভেম্বর–জানুয়ারি)', en: 'During the government-permitted window (usually November–January)' },
        entry: [0, 0], hours: 24,
      },
    ],
    newSpots: [
      {
        slug: 'maheshkhali-adinath-temple', bn: 'মহেশখালী আদিনাথ মন্দির', en: 'Adinath Temple, Maheshkhali',
        cat: 'heritage', lat: 21.5357, lng: 91.9517, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'দেশের একমাত্র পাহাড়ি দ্বীপ মহেশখালীর মৈনাক টিলায় প্রাচীন শিবমন্দির — চূড়া থেকে প্যারাবন, লবণমাঠ আর সাগরের দৃশ্য; পাশেই রাখাইন বৌদ্ধ বিহার।', en: 'An old Shiva temple on Mainak hill on Maheshkhali, the country’s only hilly island — views over mangroves, salt fields and the sea, with Rakhine monasteries nearby.' },
        how: { bn: 'কক্সবাজারের ৬ নম্বর জেটিঘাট থেকে স্পিডবোটে ১৫-২০ মিনিটে মহেশখালী, তারপর রিকশা/অটোতে মন্দির।', en: 'Speedboat from Cox’s Bazar’s No. 6 jetty to Maheshkhali (15–20 minutes), then a rickshaw or auto to the temple.' },
        bestTime: { bn: 'নভেম্বর–মার্চ; শিবচতুর্দশীর মেলায় ভিড় বেশি', en: 'November–March; very crowded during the Shiva Chaturdashi fair' },
        entry: [0, 0], hours: 3,
        warnings: [{ bn: 'স্পিডবোটে লাইফ জ্যাকেট পরুন; সাগর উত্তাল থাকলে পারাপার এড়িয়ে চলুন।', en: 'Wear a life jacket on the speedboat and skip the crossing when the channel is rough.' }],
      },
      {
        slug: 'dulahazra-safari-park', bn: 'ডুলাহাজারা সাফারি পার্ক', en: 'Dulahazra Safari Park',
        cat: 'garden', lat: 21.7457, lng: 92.0806, tags: ['family'], hidden: false,
        desc: { bn: 'চকরিয়ার প্রাকৃতিক বনে গড়া দেশের প্রথম সাফারি পার্ক — বাঘ, সিংহ, হাতি, হরিণসহ নানা প্রাণী খোলা বেষ্টনীতে।', en: 'The country’s first safari park, set in natural forest at Chakaria — tigers, lions, elephants, deer and more in open enclosures.' },
        how: { bn: 'চট্টগ্রাম-কক্সবাজার মহাসড়কের ডুলাহাজারায়; কক্সবাজার থেকে বাসে প্রায় ১-১.৫ ঘণ্টা।', en: 'At Dulahazra on the Chattogram–Cox’s Bazar highway; about 1–1.5 hours by bus from Cox’s Bazar.' },
        bestTime: { bn: 'শীতকাল, সকালবেলা', en: 'Winter mornings' },
        entry: [50, 100], hours: 3,
      },
      {
        slug: 'sonadia-island', bn: 'সোনাদিয়া দ্বীপ', en: 'Sonadia Island',
        cat: 'other', lat: 21.4867, lng: 91.8794, tags: ['adventure', 'relaxed'], hidden: true,
        desc: { bn: 'প্যারাবন, লাল কাঁকড়া আর পরিযায়ী পাখির নির্জন দ্বীপ — জেলে নৌকা আর শুঁটকির মাচা ছাড়া চারপাশে শুধু বালু আর সাগর।', en: 'A lonely island of mangroves, red crabs and migratory birds — beyond the fishing boats and dried-fish racks there is only sand and sea.' },
        how: { bn: 'মহেশখালীর ঘটিভাঙা থেকে নৌকায়, অথবা কক্সবাজার থেকে রিজার্ভ স্পিডবোট/ট্রলারে।', en: 'By boat from Ghatibhanga on Maheshkhali, or a reserved speedboat or trawler from Cox’s Bazar.' },
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি', en: 'November–February' },
        entry: [0, 0], hours: 5,
        warnings: [{ bn: 'দ্বীপে দোকান-আশ্রয় প্রায় নেই — পানি-খাবার নিয়ে যান, জোয়ার-ভাটা বুঝে ফেরার নৌকা ঠিক রাখুন।', en: 'There are almost no shops or shelter — carry water and food, and fix your return boat around the tide.' }],
      },
    ],
  },

  // ── কুমিল্লা ──
  {
    slug: 'cumilla',
    en: {
      overview:
        'The ancient capital of Samatata — Cumilla is the town of Mainamati’s Buddhist relics at Shalban Vihara, the calm water of Dharmasagar and the famous rasmalai.',
      transport:
        '2–3 hours from Dhaka by bus or train — it sits midway on the Dhaka–Chattogram route. Shalban Vihara is at Kotbari, a CNG ride from town.',
      food:
        'The rasmalai of Matribhandar is legendary — and do not forget to buy some khadi cloth.',
      season:
        'Year-round; winter is most comfortable for exploring the archaeological sites.',
    },
    warnings: [
      { bn: 'ময়নামতির কিছু প্রত্নস্থল (কোটিলা মুড়া, চারপত্র মুড়া) সেনানিবাস এলাকায় — অনুমতি ছাড়া ঢুকবেন না, ছবি তোলায় সতর্ক থাকুন।', en: 'Some Mainamati sites (Kotila Mura, Charpatra Mura) lie inside the cantonment — do not enter without permission and be careful with photography.' },
      { bn: 'ঢাকা-চট্টগ্রাম মহাসড়কে কুমিল্লা অংশে দ্রুতগতির যান চলাচল ও ঈদের সময় তীব্র যানজট — রাস্তা পারাপারে সাবধান।', en: 'The Dhaka–Chattogram highway through Cumilla carries fast traffic and severe Eid jams — take care crossing.' },
      { bn: '“মাতৃভাণ্ডার” নামে অনেক নকল দোকান আছে — আসল রসমালাই কিনতে মনোহরপুরের মূল দোকান চিনে কিনুন।', en: 'Many shops copy the “Matribhandar” name — for the genuine rasmalai, buy from the original shop at Monoharpur.' },
    ],
    hospital: { bn: 'কুমিল্লা মেডিকেল কলেজ হাসপাতাল', en: 'Cumilla Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'shalban-vihara',
        descEn: 'An eighth-century Buddhist monastery with 115 cells — at the foot of the Lalmai hills, one of the best-kept archaeological sites in the country.',
        howEn: 'At Kotbari, a CNG ride from Cumilla town; ticketed together with the nearby museum area. Closed on Sundays.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, সকাল বা বিকেল', en: 'November–February, morning or late afternoon' },
        entry: [20, 30], hours: 2,
      },
      {
        slug: 'moynamoti-museum',
        descEn: 'An outstanding collection of bronze images, terracotta plaques and copper-plate inscriptions found at the Mainamati monasteries.',
        howEn: 'Right next to the Shalban Vihara gate at Kotbari.',
        bestTime: { bn: 'সারা বছর; রবিবার বন্ধ', en: 'Year-round; closed Sundays' },
        entry: [20, 30], hours: 1,
      },
      {
        slug: 'dharmasagar',
        descEn: 'A vast tank dug in the fifteenth century — sit on its banks and let the city’s fatigue wash away.',
        howEn: 'In the centre of Cumilla town; rickshaw from anywhere.',
        bestTime: { bn: 'সারা বছর, বিকেলবেলা', en: 'Year-round, in the afternoon' },
        entry: [0, 0], hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'mainamati-war-cemetery', bn: 'ময়নামতি ওয়ার সিমেট্রি', en: 'Mainamati War Cemetery',
        cat: 'heritage', lat: 23.4805, lng: 91.1196, tags: ['relaxed'], hidden: false,
        desc: { bn: 'দ্বিতীয় বিশ্বযুদ্ধের বার্মা ফ্রন্টে নিহত সৈনিকদের সমাধিক্ষেত্র — টিলাঘেরা সবুজ ঢালে নীরব, পরিপাটি এক স্মৃতিবাগান।', en: 'The cemetery of soldiers who died on the Second World War Burma front — a quiet, immaculate memorial garden on a green slope.' },
        how: { bn: 'কুমিল্লা-সিলেট সড়কের টিপরা বাজারের কাছে; শহর থেকে সিএনজিতে ২০-৩০ মিনিট।', en: 'Near Tipra Bazar on the Cumilla–Sylhet road; 20–30 minutes by CNG from town.' },
        bestTime: { bn: 'সারা বছর, দিনের বেলা', en: 'Year-round, daytime' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'rupban-mura', bn: 'রূপবান মুড়া', en: 'Rupban Mura',
        cat: 'heritage', lat: 23.4256, lng: 91.1376, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'লালমাই পাহাড়ের টিলায় খননে পাওয়া বৌদ্ধ বিহার ও মন্দিরের ভিত — শালবন বিহারের কাছেই, টিলার ওপর থেকে চারপাশের সবুজ চমৎকার দেখায়।', en: 'Excavated foundations of a Buddhist monastery and shrine on a Lalmai hillock close to Shalban Vihara, with fine views over the green countryside.' },
        how: { bn: 'কোটবাড়ি এলাকায়; শালবন বিহার থেকে অটো বা হেঁটে।', en: 'In the Kotbari area; a short auto ride or walk from Shalban Vihara.' },
        bestTime: { bn: 'শীতকাল, বিকেলবেলা', en: 'Winter afternoons' },
        entry: [20, 30], hours: 1,
      },
      {
        slug: 'rani-moynamoti-palace', bn: 'রানী ময়নামতির প্রাসাদ', en: 'Rani Mainamati’s Palace',
        cat: 'heritage', lat: 23.5048, lng: 91.1104, tags: ['relaxed', 'adventure'], hidden: true,
        desc: { bn: 'ময়নামতি পাহাড়ের উত্তর প্রান্তে লোককাহিনির রানী ময়নামতির নামে প্রাচীন স্থাপনার ধ্বংসাবশেষ — টিলাচূড়ার নিরিবিলি প্রত্নস্থল।', en: 'Ruins of an ancient structure named after the legendary Queen Mainamati at the northern end of the Mainamati ridge — a quiet hilltop site.' },
        how: { bn: 'কুমিল্লা-সিলেট সড়কে বুড়িচংয়ের দিকে; শহর থেকে সিএনজিতে, শেষে অল্প হাঁটা।', en: 'Towards Burichang on the Cumilla–Sylhet road; CNG from town and a short walk at the end.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
    ],
  },

  // ── ব্রাহ্মণবাড়িয়া ──
  {
    slug: 'brahmanbaria',
    en: {
      overview:
        'A district of music on the banks of the Titas — birthplace of sarod maestro Ustad Alauddin Khan, with old mosques and temples and a life shaped by its rivers.',
      transport:
        '1.5–2 hours from Dhaka by train (Mohanagar, Upakul and others); direct buses also run.',
      food:
        'Chhanamukhi is Brahmanbaria’s own sweet; fresh fish from the Titas is famous too.',
      season:
        'Year-round; river trips are most comfortable in winter.',
    },
    warnings: [
      { bn: 'আখাউড়া-কসবা এলাকা ভারত সীমান্তঘেঁষা — বিজিবির নির্দেশনা মানুন, সীমান্তরেখার কাছে যাবেন না।', en: 'The Akhaura–Kasba area hugs the Indian border — follow BGB instructions and keep away from the boundary line.' },
      { bn: 'বর্ষায় তিতাস ও মেঘনায় ছোট নৌকা ঝুঁকিপূর্ণ — লাইফ জ্যাকেট ছাড়া নৌকাভ্রমণ করবেন না।', en: 'Small boats on the Titas and Meghna are risky in monsoon — do not go out without a life jacket.' },
      { bn: 'জেলার কিছু এলাকায় মাঝে মাঝে গোষ্ঠীগত সংঘর্ষ হয় — উত্তেজনার খবর থাকলে স্থানীয়দের পরামর্শ নিয়ে চলুন।', en: 'Some rural areas see occasional clan clashes — if there is news of tension, take local advice before going.' },
    ],
    hospital: { bn: 'ব্রাহ্মণবাড়িয়া জেলা সদর হাসপাতাল', en: 'Brahmanbaria District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'alauddin-khan-bari',
        descEn: 'The ancestral home and music centre of the maestro at Shibpur — a pilgrimage site for South Asian classical music.',
        howEn: 'CNG from town along the Nabinagar road.',
        bestTime: { bn: 'সারা বছর; শীতে সংগীত-উৎসব হলে আরও ভালো', en: 'Year-round; best if you catch a winter music festival' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'arifail-mosque',
        descEn: 'An elegant seventeenth-century twin-domed mosque with an old graveyard beside it — Sarail’s quiet heritage.',
        howEn: 'Auto-rickshaw from Sarail upazila town.',
        bestTime: { bn: 'শীতকাল, দিনের বেলা', en: 'Winter, daytime' },
        entry: [0, 0], hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'kal-bhairab-temple', bn: 'কাল ভৈরব মন্দির', en: 'Kal Bhairab Temple',
        cat: 'heritage', lat: 23.9606, lng: 91.1151, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'শহরের মেড্ডায় প্রায় ২৮ ফুট উঁচু কাল ভৈরবের মূর্তির জন্য বিখ্যাত প্রাচীন মন্দির — তিতাসপাড়ের ধর্মীয় ঐতিহ্যের বড় নিদর্শন।', en: 'An old temple at Medda in town, famous for its towering image of Kal Bhairab, roughly 28 ft tall — a landmark of the Titas region’s religious heritage.' },
        how: { bn: 'ব্রাহ্মণবাড়িয়া শহর থেকে রিকশা বা অটোতে মেড্ডা।', en: 'Rickshaw or auto from Brahmanbaria town to Medda.' },
        bestTime: { bn: 'সারা বছর; শিবচতুর্দশীতে মেলা', en: 'Year-round; a fair is held at Shiva Chaturdashi' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'haripur-zamindar-bari', bn: 'হরিপুর জমিদার বাড়ি', en: 'Haripur Zamindar Bari',
        cat: 'heritage', lat: 24.1132, lng: 91.1937, tags: ['relaxed', 'adventure'], hidden: true,
        desc: { bn: 'নাসিরনগরে তিতাসের পাড়ে উনিশ শতকের বিশাল জমিদারবাড়ি — জীর্ণ দালান, ঘাট আর নদীর দৃশ্যে অনেক নাটক-সিনেমার শুটিং হয়েছে।', en: 'A sprawling nineteenth-century zamindar mansion on the Titas at Nasirnagar — its crumbling halls, bathing ghat and river views have appeared in many films and TV dramas.' },
        how: { bn: 'শহর থেকে সিএনজিতে নাসিরনগরের হরিপুর; বর্ষায় নৌপথেও যাওয়া যায়।', en: 'CNG from town to Haripur in Nasirnagar; in monsoon it can also be reached by boat.' },
        bestTime: { bn: 'বর্ষা-শেষ থেকে শীত', en: 'Late monsoon to winter' },
        entry: [0, 0], hours: 2,
        warnings: [{ bn: 'ভবন জরাজীর্ণ — ভাঙা ছাদ ও সিঁড়িতে উঠবেন না।', en: 'The building is decaying — do not climb broken stairs or roofs.' }],
      },
      {
        slug: 'ulchapara-mosque', bn: 'উলচাপাড়া জামে মসজিদ', en: 'Ulchapara Mosque',
        cat: 'heritage', lat: 23.9512, lng: 91.1253, tags: ['relaxed'], hidden: true,
        desc: { bn: 'শহরের কাছে মোগল আমলের তিন গম্বুজের ছোট মসজিদ — পোড়ামাটির অলংকরণ আর শান্ত পরিবেশ।', en: 'A small three-domed Mughal-period mosque near town, with terracotta ornament and a peaceful setting.' },
        how: { bn: 'ব্রাহ্মণবাড়িয়া শহর থেকে রিকশা বা অটোতে উলচাপাড়া।', en: 'Rickshaw or auto from Brahmanbaria town to Ulchapara.' },
        bestTime: { bn: 'সারা বছর; নামাজের সময় এড়িয়ে যান', en: 'Year-round; avoid prayer times' },
        entry: [0, 0], hours: 1,
      },
    ],
  },

  // ── চাঁদপুর ──
  {
    slug: 'chandpur',
    en: {
      overview:
        'Chandpur is the home of hilsa — the river horizon at Boro Station Molhead, where the Padma, Meghna and Dakatia meet, and the taste of freshly landed ilish.',
      transport:
        'The most pleasant way is a 3–4 hour launch trip from Sadarghat in Dhaka; trains and buses also run.',
      food:
        'Buy fresh hilsa at the ghat and have it fried on the spot — no hilsa experience is complete without eating it in Chandpur.',
      season:
        'Hilsa season is Bhadra–Ashwin (August–October); the Molhead sunset is lovely all year.',
    },
    warnings: [
      { bn: 'তিন নদীর মোহনায় স্রোত ও ঘূর্ণি প্রবল — মোলহেডে পানিতে নামবেন না, ধারে বসে ছবি তুলতে সাবধান।', en: 'Currents and whirlpools at the three-river confluence are fierce — do not enter the water at Molhead and be careful taking photos on the edge.' },
      { bn: 'ঝড়ের সংকেত বা খারাপ আবহাওয়ায় লঞ্চে উঠবেন না; ছোট লঞ্চ ও ট্রলারে অতিরিক্ত যাত্রী থাকলে এড়িয়ে চলুন।', en: 'Do not board a launch under a storm signal; avoid small launches and trawlers that are overloaded.' },
      { bn: 'ইলিশ প্রজনন মৌসুমে (সাধারণত অক্টোবরে প্রায় তিন সপ্তাহ) ইলিশ ধরা-বিক্রি নিষিদ্ধ — তখন ঘাটে ইলিশ মিলবে না।', en: 'During the hilsa breeding ban (usually about three weeks in October) catching and selling hilsa is illegal — the ghats will have none.' },
      { bn: 'মাছঘাটে “চাঁদপুরের ইলিশ” বলে অন্য জায়গার মাছ গছানো হতে পারে — দরদাম করে, চিনে কিনুন।', en: 'Fish from elsewhere is sometimes passed off as “Chandpur hilsa” at the ghat — bargain and buy carefully.' },
    ],
    hospital: { bn: 'চাঁদপুর ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Chandpur 250-Bed General Hospital' },
    spotUpdates: [
      {
        slug: 'boro-station-molhead',
        descEn: 'A triangular spit at the meeting of three rivers — the Raktadhara memorial, the roar of the water and one of the finest sunsets in the country.',
        howEn: 'Auto-rickshaw from the launch terminal or town to Boro Station.',
        bestTime: { bn: 'সারা বছর, সূর্যাস্তের সময়', en: 'Year-round, at sunset' },
        entry: [0, 0], hours: 2,
      },
      {
        slug: 'lohagor-moth',
        descEn: 'A three-spired zamindar-era monument on the bank of the Dakatia — a quiet ruin wrapped in local legend.',
        howEn: 'CNG along the Faridganj road.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'hajiganj-boro-mosque', bn: 'হাজীগঞ্জ বড় মসজিদ', en: 'Hajiganj Boro Mosque',
        cat: 'heritage', lat: 23.2513, lng: 90.8511, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'বিশ শতকের গোড়ায় গড়া উপমহাদেশের বড় মসজিদগুলোর একটি — বিশাল নামাজঘর, সুউচ্চ মিনার আর কারুকাজে দেশজুড়ে খ্যাত।', en: 'One of the subcontinent’s larger early-twentieth-century mosques, known nationwide for its huge prayer hall, tall minaret and ornamentation.' },
        how: { bn: 'চাঁদপুর-কুমিল্লা সড়কে হাজীগঞ্জ বাজার; চাঁদপুর শহর থেকে বাস/সিএনজিতে ৪০-৫০ মিনিট।', en: 'At Hajiganj bazaar on the Chandpur–Cumilla road; 40–50 minutes by bus or CNG from Chandpur town.' },
        bestTime: { bn: 'সারা বছর; জুমার সময় খুব ভিড় হয়', en: 'Year-round; very crowded at Friday prayers' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'chandpur-fish-ghat', bn: 'চাঁদপুর মাছঘাট (বড় স্টেশন)', en: 'Chandpur Fish Ghat',
        cat: 'river', lat: 23.2341, lng: 90.6468, tags: ['family', 'adventure'], hidden: false,
        desc: { bn: 'ভোর থেকে ট্রলারভর্তি ইলিশ নামে আর হাঁকডাকে নিলাম চলে — দেশের অন্যতম বড় ইলিশ আড়তের প্রাণচঞ্চল ব্যস্ততা।', en: 'From dawn trawlers unload hilsa and auctions run amid the shouting — the lively bustle of one of the country’s biggest hilsa markets.' },
        how: { bn: 'বড় স্টেশন এলাকায়, মোলহেডের পাশেই; শহর থেকে অটোতে।', en: 'In the Boro Station area right beside the Molhead; auto from town.' },
        bestTime: { bn: 'আগস্ট–অক্টোবর (নিষেধাজ্ঞার সময় বাদে), ভোরবেলা', en: 'August–October (outside the ban period), early morning' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'rupsha-zamindar-bari', bn: 'রূপসা জমিদার বাড়ি', en: 'Rupsha Zamindar Bari',
        cat: 'heritage', lat: 23.1123, lng: 90.7581, tags: ['relaxed'], hidden: true,
        desc: { bn: 'ফরিদগঞ্জের রূপসায় আঠারো-উনিশ শতকের জমিদারবাড়ি, মসজিদ ও দিঘি — গ্রামবাংলার মাঝে টিকে থাকা পুরোনো আভিজাত্য।', en: 'An eighteenth–nineteenth-century zamindar house with mosque and pond at Rupsha in Faridganj — old grandeur surviving in the village.' },
        how: { bn: 'চাঁদপুর শহর থেকে সিএনজিতে ফরিদগঞ্জ হয়ে রূপসা বাজার।', en: 'CNG from Chandpur town via Faridganj to Rupsha bazaar.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
    ],
  },

  // ── ফেনী ──
  {
    slug: 'feni',
    en: {
      overview:
        'The border district of Feni — the calm water of Bijoy Singh Dighi, the dammed expanse of the Muhuri irrigation project and towns that remember the rebel chief Shamsher Gazi.',
      transport:
        '4–5 hours from Dhaka by bus on the Dhaka–Chattogram highway; the Muhuri project is at Sonagazi, reached by CNG.',
      food:
        'Thick buffalo-milk yogurt (doi) is the pride of the Feni–Noakhali region.',
      season:
        'Winter and spring bring both birds and breezes to the dam area.',
    },
    warnings: [
      { bn: 'বর্ষায় উজানের ঢলে মুহুরী ও ফেনী নদীর বাঁধ ভেঙে আকস্মিক বন্যা হয় (যেমন ২০২৪ সালে) — ভারী বৃষ্টির সতর্কতা থাকলে ফুলগাজী-পরশুরামে যাবেন না।', en: 'Monsoon run-off from upstream can breach the Muhuri and Feni river embankments and cause flash floods (as in 2024) — avoid Fulgazi and Parshuram during heavy-rain warnings.' },
      { bn: 'মুহুরী প্রকল্পের স্লুইসগেটের কাছে স্রোত প্রবল — বাঁধের কিনারে বা পানিতে নামবেন না।', en: 'The current near the Muhuri sluice gates is strong — keep off the edge and out of the water.' },
      { bn: 'পরশুরাম-ছাগলনাইয়া ভারত সীমান্তঘেঁষা — বিজিবির নির্দেশনা মেনে চলুন।', en: 'Parshuram and Chhagalnaiya border India — follow BGB instructions.' },
    ],
    hospital: { bn: 'ফেনী ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Feni 250-Bed General Hospital' },
    spotUpdates: [
      {
        slug: 'muhuri-project',
        descEn: 'The roar of water through a 40-gate regulator, wind turbines and a wide-open breeze — the place for a late afternoon.',
        howEn: 'CNG from Feni via Sonagazi.',
        bestTime: { bn: 'নভেম্বর–মার্চ, বিকেলবেলা', en: 'November–March, late afternoon' },
        entry: [0, 0], hours: 2,
      },
      {
        slug: 'bijoy-singh-dighi',
        descEn: 'The paved banks of an old tank on the edge of town — Feni’s favourite evening hangout.',
        howEn: 'Rickshaw within Feni town.',
        bestTime: { bn: 'সারা বছর, বিকেলবেলা', en: 'Year-round, in the afternoon' },
        entry: [0, 0], hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'shamsher-gazi-killa', bn: 'শমসের গাজীর কেল্লা', en: 'Shamsher Gazi’s Fort',
        cat: 'heritage', lat: 23.0287, lng: 91.5136, tags: ['relaxed', 'adventure'], hidden: true,
        desc: { bn: 'আঠারো শতকের বিদ্রোহী ভাটির বাঘ শমসের গাজীর স্মৃতিবিজড়িত কেল্লা ও সুড়ঙ্গের ধ্বংসাবশেষ — ছাগলনাইয়ার জগন্নাথ সোনাপুরে ইতিহাসের নীরব সাক্ষী।', en: 'Ruins of the fort and tunnel linked to Shamsher Gazi, the eighteenth-century rebel ruler — a silent witness to history at Jagannath Sonapur, Chhagalnaiya.' },
        how: { bn: 'ফেনী থেকে বাস/সিএনজিতে ছাগলনাইয়া, তারপর অটোতে।', en: 'Bus or CNG from Feni to Chhagalnaiya, then an auto-rickshaw.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'chand-gazi-mosque', bn: 'চাঁদগাজী ভূঁইয়া মসজিদ', en: 'Chand Gazi Bhuiyan Mosque',
        cat: 'heritage', lat: 23.0423, lng: 91.4958, tags: ['relaxed'], hidden: true,
        desc: { bn: 'ছাগলনাইয়ার চাঁদগাজীতে আঠারো শতকের তিন গম্বুজ মসজিদ — মোগল-রীতির খিলান আর পুরোনো ইটের সৌন্দর্য।', en: 'An eighteenth-century three-domed mosque at Chandgazi, Chhagalnaiya — Mughal-style arches and the beauty of old brick.' },
        how: { bn: 'ফেনী-ছাগলনাইয়া সড়কে চাঁদগাজী বাজার; সিএনজিতে।', en: 'At Chandgazi bazaar on the Feni–Chhagalnaiya road; by CNG.' },
        bestTime: { bn: 'সারা বছর; নামাজের সময় এড়িয়ে যান', en: 'Year-round; avoid prayer times' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'rajajhir-dighi', bn: 'রাজাঝির দিঘি', en: 'Rajajhir Dighi',
        cat: 'other', lat: 23.0128, lng: 91.3972, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'রাজকন্যার নামে খনন করা বলে লোককথা — শহরের কেন্দ্রে আদালতপাড়া-ঘেঁষা বিশাল দিঘি, সন্ধ্যায় হাঁটার প্রিয় জায়গা।', en: 'A large tank in the heart of town by the court area, said in local lore to have been dug for a king’s daughter — a favourite evening walk.' },
        how: { bn: 'ফেনী শহরে রিকশায়।', en: 'Rickshaw within Feni town.' },
        bestTime: { bn: 'সারা বছর, বিকেলবেলা', en: 'Year-round, in the afternoon' },
        entry: [0, 0], hours: 1,
      },
    ],
  },

  // ── লক্ষ্মীপুর ──
  {
    slug: 'lakshmipur',
    en: {
      overview:
        'A lap of the Meghna lined with betel-nut and coconut palms — Lakshmipur is the district of Khoa Sagar Dighi, the legend of the Jinn’s Mosque and life on the Meghna’s chars.',
      transport:
        '4–5 hours from Dhaka by bus to Lakshmipur; auto-rickshaw to the Moju Chowdhury Hat ghat.',
      food:
        'Betel nut and coconut country — try narkel naru and pitha, plus fresh hilsa and prawns from the Meghna.',
      season:
        'Winter is best for char trips and the riverside.',
    },
    warnings: [
      { bn: 'মেঘনায় ঝড়ের মৌসুমে (এপ্রিল–অক্টোবর) ট্রলার ও ফেরি পারাপার ঝুঁকিপূর্ণ — সংকেত থাকলে নদীতে নামবেন না, লাইফ জ্যাকেট রাখুন।', en: 'Trawler and ferry crossings on the Meghna are risky in the storm season (April–October) — stay off the river under a signal and wear a life jacket.' },
      { bn: 'রামগতি-কমলনগরে নদীভাঙন তীব্র — ভাঙনপ্রবণ পাড়ের কিনারে দাঁড়াবেন না।', en: 'River erosion is severe at Ramgati and Kamalnagar — do not stand on the edge of eroding banks.' },
      { bn: 'চরাঞ্চলে দোকান-যানবাহন কম, সন্ধ্যার আগে মূল ভূখণ্ডে ফিরুন।', en: 'Shops and transport are scarce on the chars — return to the mainland before dusk.' },
    ],
    hospital: { bn: 'লক্ষ্মীপুর সদর হাসপাতাল', en: 'Lakshmipur Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'khoa-sagar-dighi',
        descEn: 'A huge tank whose name evokes mist, beside the gateway and palace ruins of a zamindar house — history and water views in one afternoon.',
        howEn: 'At Dalal Bazar on the Lakshmipur–Raipur road; by auto-rickshaw.',
        bestTime: { bn: 'শীতকাল, বিকেলবেলা', en: 'Winter afternoons' },
        entry: [0, 0], hours: 2,
      },
      {
        slug: 'meghna-mojib-hat',
        descEn: 'Ferry-ghat bustle, rows of fishing boats and the wide-open Meghna horizon — stunning at sunset.',
        howEn: 'Auto-rickshaw from town to the ghat.',
        bestTime: { bn: 'নভেম্বর–মার্চ, সূর্যাস্তের সময়', en: 'November–March, at sunset' },
        entry: [0, 0], hours: 2,
      },
    ],
    newSpots: [
      {
        slug: 'raipur-jiner-mosque', bn: 'রায়পুরের জ্বীনের মসজিদ', en: 'Jinn’s Mosque, Raipur',
        cat: 'heritage', lat: 23.0387, lng: 90.7672, tags: ['relaxed'], hidden: true,
        desc: { bn: 'এক রাতে জ্বীনেরা গড়েছিল — এমন লোককাহিনিতে ঘেরা প্রাচীন গম্বুজ মসজিদ; কিংবদন্তির টানেই দূরদূরান্ত থেকে মানুষ আসে।', en: 'An old domed mosque wrapped in the legend that jinns built it in a single night — the story alone draws visitors from far away.' },
        how: { bn: 'লক্ষ্মীপুর থেকে বাস/সিএনজিতে রায়পুর, তারপর অটোতে।', en: 'Bus or CNG from Lakshmipur to Raipur, then an auto-rickshaw.' },
        bestTime: { bn: 'সারা বছর; নামাজের সময় এড়িয়ে যান', en: 'Year-round; avoid prayer times' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'alexander-meghna-embankment', bn: 'আলেকজান্ডার মেঘনা পাড় (রামগতি)', en: 'Alexander Meghna Embankment, Ramgati',
        cat: 'river', lat: 22.6043, lng: 90.9978, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'রামগতির আলেকজান্ডারে মেঘনার ব্লক-বাঁধানো তীর — সাগরের মতো বিশাল নদী, ঢেউ আর হাওয়ায় বিকেলে জমজমাট বিনোদনকেন্দ্র।', en: 'The block-lined Meghna bank at Alexander in Ramgati — a sea-like river, waves and wind make it a busy afternoon spot.' },
        how: { bn: 'লক্ষ্মীপুর থেকে বাস/সিএনজিতে প্রায় দেড়-দুই ঘণ্টায় আলেকজান্ডার বাজার।', en: 'About 1.5–2 hours by bus or CNG from Lakshmipur to Alexander bazaar.' },
        bestTime: { bn: 'নভেম্বর–মার্চ, বিকেলবেলা', en: 'November–March, late afternoon' },
        entry: [0, 0], hours: 2,
        warnings: [{ bn: 'ব্লকের ওপর শ্যাওলা পিচ্ছিল, নিচে স্রোত প্রবল — পানিতে নামবেন না।', en: 'The blocks are slick with algae and the current below is strong — stay out of the water.' }],
      },
      {
        slug: 'raipur-fish-hatchery', bn: 'রায়পুর মৎস্য প্রজনন কেন্দ্র', en: 'Raipur Fish Hatchery',
        cat: 'other', lat: 23.0301, lng: 90.7529, tags: ['family', 'relaxed'], hidden: true,
        desc: { bn: 'ডাকাতিয়া-মেঘনা অঞ্চলে সরকারি বিশাল মৎস্য হ্যাচারি — সারি সারি পুকুর, গাছঘেরা বাঁধ আর নিরিবিলি পরিবেশে বিকেলের হাঁটা।', en: 'A large government fish hatchery in the Dakatia–Meghna area — rows of ponds, tree-lined embankments and a quiet afternoon walk.' },
        how: { bn: 'রায়পুর উপজেলা সদর থেকে অটোতে।', en: 'Auto-rickshaw from Raipur upazila town.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
    ],
  },

  // ── নোয়াখালী ──
  {
    slug: 'noakhali',
    en: {
      overview:
        'The coastal district of Noakhali — deer and mangroves on Nijhum Dwip, the wide chars of Hatiya and the ashram blessed by Gandhi’s visit.',
      transport:
        '5–6 hours from Dhaka by bus to Maijdee or Sonapur. For Nijhum Dwip: Chairman Ghat → Hatiya (sea-truck or trawler) → Moktaria Ghat.',
      food:
        'Buffalo-milk yogurt and pure honey; on the island, a barbecue of fresh-caught fish.',
      season:
        'November–February — calm rivers and the best time to see deer.',
    },
    warnings: [
      { bn: 'হাতিয়া-নিঝুম দ্বীপের নৌপথ মেঘনার মোহনায় — বর্ষা ও ঝড়ের সংকেতে ট্রলার/সি-ট্রাক ঝুঁকিপূর্ণ বা বন্ধ থাকে; শীতে যাওয়াই নিরাপদ।', en: 'The Hatiya–Nijhum Dwip route crosses the Meghna estuary — trawlers and sea-trucks are risky or suspended in monsoon and under storm signals; winter is the safe season.' },
      { bn: 'নিঝুম দ্বীপে বিদ্যুৎ, নেটওয়ার্ক ও এটিএম সীমিত — নগদ টাকা, পাওয়ার ব্যাংক আর প্রয়োজনীয় ওষুধ সাথে নিন।', en: 'Electricity, phone signal and ATMs are limited on Nijhum Dwip — carry cash, a power bank and any medicines you need.' },
      { bn: 'উপকূলে ঘূর্ণিঝড় মৌসুমে (এপ্রিল–মে, অক্টোবর–নভেম্বর) আবহাওয়া বার্তা দেখে বের হন, কাছের সাইক্লোন শেল্টার চিনে রাখুন।', en: 'In cyclone season (April–May, October–November) watch the forecasts and know where the nearest cyclone shelter is.' },
      { bn: 'হরিণ দেখতে বনে গাইড ছাড়া ঢুকবেন না, হরিণকে খাবার দেবেন না।', en: 'Do not enter the forest to look for deer without a guide, and never feed the deer.' },
    ],
    hospital: { bn: 'নোয়াখালী ২৫০ শয্যা জেনারেল হাসপাতাল, মাইজদী', en: 'Noakhali 250-Bed General Hospital, Maijdee' },
    spotUpdates: [
      {
        slug: 'nijhum-dwip',
        descEn: 'Herds of spotted deer in keora forest, empty beaches and the simple life of fishing villages — a national-park island as quiet as its name.',
        howEn: 'Via Hatiya by trawler or motorbike to Namar Bazar; if staying overnight, book an eco-resort in advance.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি', en: 'November–February' },
        entry: [0, 0], hours: 24,
      },
      {
        slug: 'gandhi-ashram',
        descEn: 'Still an active ashram with a museum that preserves the memory of Mahatma Gandhi’s 1946–47 peace mission.',
        howEn: 'At Joyag in Sonaimuri; take a train to Sonaimuri, then an auto-rickshaw.',
        bestTime: { bn: 'সারা বছর, দিনের বেলা', en: 'Year-round, daytime' },
        entry: [0, 0], hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'bajra-shahi-mosque', bn: 'বজরা শাহী মসজিদ', en: 'Bajra Shahi Mosque',
        cat: 'heritage', lat: 22.9806, lng: 91.0757, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: '১৭৪১ সালে মোগল আমলে নির্মিত তিন গম্বুজ মসজিদ — চীনামাটির টুকরো দিয়ে সাজানো দেয়াল আর বিশাল দিঘি মিলিয়ে নোয়াখালীর সেরা প্রত্নস্থাপনা।', en: 'A three-domed Mughal mosque built in 1741 — walls decorated with porcelain chips and a large pond in front make it Noakhali’s finest monument.' },
        how: { bn: 'মাইজদী থেকে সোনাইমুড়ি সড়কে বজরা বাজার; বাস বা সিএনজিতে।', en: 'At Bajra bazaar on the Maijdee–Sonaimuri road; by bus or CNG.' },
        bestTime: { bn: 'সারা বছর; নামাজের সময় এড়িয়ে যান', en: 'Year-round; avoid prayer times' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'musapur-closure', bn: 'মুছাপুর ক্লোজার ও সৈকত', en: 'Musapur Closure & Beach',
        cat: 'river', lat: 22.7312, lng: 91.2654, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'কোম্পানীগঞ্জে ছোট ফেনী নদীর মোহনায় ক্লোজার-বাঁধ, ঝাউবন আর খোলা চর — নোয়াখালীর মানুষের প্রিয় “সমুদ্রসৈকত”।', en: 'A closure dam, casuarina grove and open shoals at the mouth of the Little Feni river in Companiganj — Noakhali’s favourite stand-in for a beach.' },
        how: { bn: 'মাইজদী থেকে বসুরহাট হয়ে সিএনজিতে মুছাপুর।', en: 'CNG from Maijdee via Basurhat to Musapur.' },
        bestTime: { bn: 'নভেম্বর–মার্চ, বিকেলবেলা', en: 'November–March, late afternoon' },
        entry: [0, 0], hours: 2,
        warnings: [{ bn: '২০২৪ সালের বন্যায় রেগুলেটর ভেঙে গেছে — ভাঙা কাঠামোর কাছে যাবেন না, স্রোতে নামবেন না।', en: 'The regulator was damaged in the 2024 floods — keep away from broken structures and out of the current.' }],
      },
      {
        slug: 'ruhul-amin-memorial', bn: 'বীরশ্রেষ্ঠ রুহুল আমিন গ্রন্থাগার ও স্মৃতি জাদুঘর', en: 'Bir Sreshtho Ruhul Amin Memorial Museum',
        cat: 'heritage', lat: 22.9895, lng: 91.0874, tags: ['family'], hidden: true,
        desc: { bn: 'সোনাইমুড়ির বাগপাঁচড়ায় (রুহুল আমিন নগর) বীরশ্রেষ্ঠ নৌ-বীরের জন্মভিটায় গ্রন্থাগার ও স্মৃতি জাদুঘর — মুক্তিযুদ্ধের ইতিহাস জানার ছোট্ট কেন্দ্র।', en: 'A library and memorial museum at the birthplace of the naval war hero at Bagpanchra (Ruhul Amin Nagar), Sonaimuri — a small window on the Liberation War.' },
        how: { bn: 'সোনাইমুড়ি থেকে অটোতে রুহুল আমিন নগর।', en: 'Auto-rickshaw from Sonaimuri to Ruhul Amin Nagar.' },
        bestTime: { bn: 'সারা বছর; সাপ্তাহিক বন্ধের দিন জেনে যান', en: 'Year-round; check the weekly closing day' },
        entry: [0, 0], hours: 1,
      },
    ],
  },

  // ── খাগড়াছড়ি ──
  {
    slug: 'khagrachhari',
    en: {
      overview:
        'The hill district of Khagrachhari — the mysterious Alutila cave, the slippery chute of Risang falls and the gateway to Sajek; a mosaic of Chakma, Marma and Tripura cultures.',
      transport:
        '7–8 hours by bus from Dhaka (Kalabagan or Sayedabad) to Khagrachhari. For Sajek, chander gari (open jeeps) leave Shapla Chattar to join the morning or midday army escort.',
      food:
        'Bamboo chicken and the hill dish pachon — the pot-cooked food at System restaurant is famous.',
      season:
        'October–March; for waterfalls the end of monsoon (September–October) is ideal.',
    },
    warnings: [
      { bn: 'সাজেক রুটে নির্দিষ্ট সময়ের সেনা এসকর্টেই যেতে হয় — দেরি করলে পরের এসকর্ট পর্যন্ত অপেক্ষা; এনআইডি/পরিচয়পত্রের কপি সাথে রাখুন। বিদেশিদের পার্বত্য চট্টগ্রামে আগাম অনুমতি লাগে।', en: 'Vehicles to Sajek travel only with the scheduled army escort — miss it and you wait for the next one; carry your NID or ID copies. Foreigners need prior permission to visit the Chittagong Hill Tracts.' },
      { bn: 'বর্ষায় পাহাড়ি রাস্তায় ভূমিধস ও পিচ্ছিল বাঁক — ভারী বৃষ্টিতে চান্দের গাড়ির ছাদে চড়বেন না।', en: 'Monsoon brings landslides and slick bends on hill roads — never ride on a jeep roof in heavy rain.' },
      { bn: 'আঞ্চলিক পরিস্থিতির কারণে মাঝে মাঝে পর্যটন সাময়িক বন্ধ হয় — যাওয়ার আগে প্রশাসনের সর্বশেষ নির্দেশনা জেনে নিন।', en: 'Tourism is occasionally suspended for local security reasons — check the latest administrative notices before you travel.' },
      { bn: 'পাহাড়িদের ছবি তোলার আগে অনুমতি নিন, পাড়া ও উপাসনালয়ের রীতি মেনে চলুন।', en: 'Ask before photographing people, and respect village and temple customs.' },
    ],
    hospital: { bn: 'খাগড়াছড়ি জেলা সদর হাসপাতাল', en: 'Khagrachhari District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'alutila-cave',
        descEn: 'A 350-foot dark tunnel through the belly of the hill — crossing it by torchlight while wading a cold stream is a spine-tingling experience.',
        howEn: 'CNG from town to the Alutila gate; torches or flaming brands are sold at the gate.',
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [20, 50], hours: 2,
      },
      {
        slug: 'risang-jhorna',
        descEn: 'A waterfall sliding down a sloping rock face into a natural water slide — come prepared to get soaked.',
        howEn: 'Close to Alutila; reached down a flight of steps.',
        bestTime: { bn: 'সেপ্টেম্বর–অক্টোবর', en: 'September–October' },
        entry: [10, 30], hours: 2,
      },
      {
        slug: 'sajek-gateway',
        descEn: 'Sajek, the kingdom of clouds — sunrise from Konglak peak and star-filled nights; it is administratively in Rangamati, but the journey runs through Khagrachhari.',
        howEn: 'Chander gari with the army escort from Khagrachhari, 2.5–3 hours; book your cottage in advance.',
        bestTime: { bn: 'মেঘের জন্য জুলাই–অক্টোবর; পরিষ্কার আকাশে নভেম্বর–ফেব্রুয়ারি', en: 'July–October for clouds; November–February for clear skies' },
        entry: [0, 0], hours: 24,
      },
    ],
    newSpots: [
      {
        slug: 'hazachora-waterfall', bn: 'হাজাছড়া ঝর্ণা', en: 'Hazachora Waterfall',
        cat: 'waterfall', lat: 23.2105, lng: 92.0302, tags: ['adventure', 'family'], hidden: false,
        desc: { bn: 'দীঘিনালার পাহাড়ি ছড়ার শেষে প্রায় ৫০-৬০ ফুট উঁচু থেকে নামা ঝর্ণা — সাজেকের পথে অল্প হাঁটায় পৌঁছানো যায়।', en: 'A waterfall dropping some 50–60 ft at the end of a hill stream in Dighinala — a short walk from the road to Sajek.' },
        how: { bn: 'খাগড়াছড়ি-সাজেক সড়কে দীঘিনালার কাছে নেমে ১৫-২০ মিনিট হাঁটা; সাজেকের গাড়ি অনেক সময় এখানে থামে।', en: 'Stop near Dighinala on the Khagrachhari–Sajek road and walk 15–20 minutes; Sajek jeeps often pause here.' },
        bestTime: { bn: 'জুলাই–অক্টোবর', en: 'July–October' },
        entry: [0, 20], hours: 1,
      },
      {
        slug: 'debota-pukur', bn: 'দেবতা পুকুর', en: 'Debota Pukur',
        cat: 'hill', lat: 23.0598, lng: 91.8672, tags: ['adventure'], hidden: true,
        desc: { bn: 'মাটিরাঙ্গার নুনছড়িতে প্রায় ৭০০ ফুট উঁচু পাহাড়চূড়ায় সারা বছর পানিভরা পুকুর — ত্রিপুরাদের পবিত্র স্থান, সিঁড়ি ভেঙে ওঠার পর চারপাশে পাহাড়ের ঢেউ।', en: 'A pond that stays full all year on a hilltop roughly 700 ft high at Nunchhari, Matiranga — sacred to the Tripura people, reached by a long stairway with rolling hills all round.' },
        how: { bn: 'খাগড়াছড়ি থেকে মাটিরাঙ্গা সড়কে সিএনজি/মোটরসাইকেলে নুনছড়ি, তারপর প্রায় এক ঘণ্টা হাঁটা ও সিঁড়ি।', en: 'CNG or motorbike from Khagrachhari towards Matiranga to Nunchhari, then about an hour of walking and steps.' },
        bestTime: { bn: 'অক্টোবর–ফেব্রুয়ারি; চৈত্র সংক্রান্তির মেলায় ভিড়', en: 'October–February; crowded at the Chaitra Sankranti fair' },
        entry: [0, 20], hours: 3,
        warnings: [{ bn: 'পবিত্র পুকুরে জুতা পরে নামা বা সাঁতার কাটা নিষেধ — স্থানীয় রীতি মানুন।', en: 'Wearing shoes or swimming in the sacred pond is forbidden — respect local custom.' }],
      },
      {
        slug: 'mayung-kopal', bn: 'মায়ুং কপাল (হাতিমাথা)', en: 'Mayung Kopal (Hatimatha)',
        cat: 'hill', lat: 23.0884, lng: 91.9879, tags: ['adventure'], hidden: true,
        desc: { bn: 'হাতির কপালের মতো খাড়া পাহাড়ে লোহার লম্বা সিঁড়ি — পেরাছড়া পেরিয়ে চূড়ায় উঠলে খাগড়াছড়ি শহর আর পাহাড়সারির অবাধ দৃশ্য।', en: 'A long iron stairway up a cliff shaped like an elephant’s forehead — from the top past Perachhara you get open views over Khagrachhari town and the ranges.' },
        how: { bn: 'শহর থেকে সিএনজিতে পেরাছড়া/জামতলী, তারপর গাইডসহ প্রায় দেড়-দুই ঘণ্টা হাঁটা।', en: 'CNG from town to Perachhara/Jamtoli, then about 1.5–2 hours on foot with a guide.' },
        bestTime: { bn: 'অক্টোবর–ফেব্রুয়ারি', en: 'October–February' },
        entry: [0, 0], hours: 4,
        warnings: [{ bn: 'খাড়া সিঁড়ি বৃষ্টিতে বিপজ্জনক — বর্ষায় এড়িয়ে চলুন, উচ্চতাভীতি থাকলে যাবেন না।', en: 'The steep stairway is dangerous in the rain — skip it in monsoon, and avoid it if you fear heights.' }],
      },
    ],
  },

  // ── রাঙ্গামাটি ──
  {
    slug: 'rangamati',
    en: {
      overview:
        'Rangamati of lakes and hills — the blue sweep of Kaptai Lake, the hanging bridge, Shuvolong falls and the culture of the Chakma royal court; drifting by boat is the real way to travel here.',
      transport:
        '7–8 hours by bus from Dhaka to Rangamati; hire a full-day boat from Reserve Bazar ghat to explore the lake.',
      food:
        'Fried kachki and chapila fish from Kaptai Lake and bamboo chicken; the floating pineapple and banana markets are wonderful too.',
      season:
        'October–April for a calm lake and clear skies; Shuvolong falls are at their liveliest in monsoon.',
    },
    warnings: [
      { bn: 'লেকে বোটে সবসময় লাইফ জ্যাকেট পরুন; ঝড়-বৃষ্টিতে খোলা লেকে বোট চালাতে দেবেন না, সন্ধ্যার আগে ঘাটে ফিরুন।', en: 'Always wear a life jacket on the lake; do not let the boat cross open water in a storm, and be back at the ghat before dark.' },
      { bn: 'বর্ষায় রাঙ্গামাটিতে ভূমিধস প্রাণঘাতী (যেমন ২০১৭) — ভারী বৃষ্টির সতর্কতায় পাহাড়ি সড়ক ও ঢালের ঘরবাড়ি এড়িয়ে চলুন।', en: 'Monsoon landslides in Rangamati can be deadly (as in 2017) — during heavy-rain alerts avoid hill roads and slope-side buildings.' },
      { bn: 'উপজেলাগুলোতে (বিলাইছড়ি, বরকল ইত্যাদি) যেতে চেকপোস্টে এনআইডি দেখাতে ও তথ্য দিতে হয়; বিদেশিদের আগাম অনুমতি লাগে।', en: 'Trips to outlying upazilas (Bilaichhari, Barkal, etc.) require showing NID and registering at checkposts; foreigners need prior permission.' },
      { bn: 'শুকনো মৌসুমের শেষে লেকের পানি কমে গেলে কিছু নৌপথ ও শুভলং ঝর্ণা প্রায় শুকিয়ে যায়।', en: 'Late in the dry season the lake drops and some boat routes — and Shuvolong falls — nearly dry up.' },
    ],
    hospital: { bn: 'রাঙ্গামাটি জেনারেল হাসপাতাল', en: 'Rangamati General Hospital' },
    spotUpdates: [
      {
        slug: 'kaptai-lake',
        descEn: 'The country’s largest man-made lake, formed by drowning the hills — green islets, floating restaurants and all of Rangamati reachable by water.',
        howEn: 'Boats by the hour or for the day from Reserve Bazar or Tobolchhari ghat.',
        bestTime: { bn: 'অক্টোবর–এপ্রিল', en: 'October–April' },
        entry: [0, 0], hours: 6,
      },
      {
        slug: 'jhulonto-bridge',
        descEn: 'The iconic 335-ft bridge linking two hillocks over the lake — Rangamati’s postcard picture.',
        howEn: 'Auto-rickshaw from town to the Parjatan (tourism) complex.',
        bestTime: { bn: 'বর্ষা-পরবর্তী সময়ে (সেতু পানির ওপরে থাকে); বিকেলবেলা', en: 'After the monsoon, when the bridge is clear of the water; late afternoon' },
        entry: [20, 30], hours: 1,
      },
      {
        slug: 'shuvolong-jhorna',
        descEn: 'A waterfall pouring down the hillside along the lake route — boats pull right up to its foot.',
        howEn: 'Visited as part of a Kaptai Lake boat trip.',
        bestTime: { bn: 'জুন–অক্টোবর', en: 'June–October' },
        entry: [10, 30], hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'rajban-vihara', bn: 'রাজবন বিহার', en: 'Rajban Vihara',
        cat: 'heritage', lat: 22.6417, lng: 92.1985, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'চাকমা রাজবাড়ির পাশে লেকঘেরা উপদ্বীপে দেশের বৌদ্ধদের অন্যতম প্রধান বিহার — প্যাগোডা, ধ্যানকেন্দ্র আর নভেম্বরের কঠিন চীবর দানের বিশাল উৎসব।', en: 'One of the country’s foremost Buddhist monasteries, on a lake-girt peninsula beside the Chakma royal palace — pagodas, a meditation centre and the great Kathin Chibar Dan festival in November.' },
        how: { bn: 'রাঙ্গামাটি শহর থেকে অটোতে রাজবাড়ি এলাকা, অথবা নৌকায়।', en: 'Auto-rickshaw from Rangamati town to the Rajbari area, or by boat.' },
        bestTime: { bn: 'অক্টোবর–ফেব্রুয়ারি', en: 'October–February' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'বিহারে শালীন পোশাক পরুন, জুতা বাইরে রাখুন ও নীরবতা বজায় রাখুন।', en: 'Dress modestly, leave your shoes outside and keep quiet inside the monastery.' }],
      },
      {
        slug: 'kaptai-national-park', bn: 'কাপ্তাই জাতীয় উদ্যান', en: 'Kaptai National Park',
        cat: 'garden', lat: 22.5021, lng: 92.2196, tags: ['adventure', 'relaxed'], hidden: false,
        desc: { bn: 'কর্ণফুলীর পাড়ে শতবর্ষী সেগুন বাগান আর মিশ্র চিরসবুজ বন — পাখি, বানর আর নদীর ধারে নিরিবিলি পিকনিক।', en: 'Century-old teak plantations and mixed evergreen forest on the Karnaphuli — birds, monkeys and quiet riverside picnics.' },
        how: { bn: 'চট্টগ্রাম বা রাঙ্গামাটি থেকে বাসে কাপ্তাই, তারপর অটোতে উদ্যানের গেট।', en: 'Bus from Chattogram or Rangamati to Kaptai, then an auto-rickshaw to the park gate.' },
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [20, 50], hours: 3,
      },
      {
        slug: 'rangamati-tribal-museum', bn: 'ক্ষুদ্র নৃগোষ্ঠীর সাংস্কৃতিক ইনস্টিটিউট জাদুঘর', en: 'Tribal Cultural Institute Museum',
        cat: 'heritage', lat: 22.6505, lng: 92.1765, tags: ['family'], hidden: true,
        desc: { bn: 'পার্বত্য চট্টগ্রামের চাকমা, মারমা, ত্রিপুরাসহ নানা জাতিগোষ্ঠীর পোশাক, অলংকার, বাদ্যযন্ত্র ও দৈনন্দিন জিনিসপত্রের ছোট কিন্তু সমৃদ্ধ সংগ্রহ।', en: 'A small but rich collection of dress, jewellery, musical instruments and household items of the Chakma, Marma, Tripura and other peoples of the Hill Tracts.' },
        how: { bn: 'রাঙ্গামাটি শহরের ভেদভেদী এলাকায়; অটোতে।', en: 'In the Bhedvedi area of Rangamati town; by auto-rickshaw.' },
        bestTime: { bn: 'সারা বছর; সরকারি ছুটির দিনে বন্ধ থাকতে পারে', en: 'Year-round; may be closed on government holidays' },
        entry: [10, 30], hours: 1,
      },
    ],
  },

  // ── বান্দরবান ──
  {
    slug: 'bandarban',
    en: {
      overview:
        'Bandarban, the realm of cloud and mountain — seas of cloud at Nilgiri and Nilachal, the blue mystery of Boga Lake, the trek to conquer Keokradong and the golden spire of the Golden Temple; Bangladesh’s adventure capital.',
      transport:
        '8–9 hours by bus from Dhaka to Bandarban; reserve a chander gari or jeep for the Nilgiri–Thanchi road, and go to Boga Lake and Keokradong via Ruma with a registered guide.',
      food:
        'Bamboo chicken, sticky binni rice from the jhum fields and hill-grown papaya and pineapple.',
      season:
        'For clouds, from the end of monsoon through winter (September–February); trekking is most comfortable in winter.',
    },
    warnings: [
      { bn: 'রুমা, থানচি ও রোয়াংছড়িতে নিরাপত্তাজনিত কারণে প্রায়ই পর্যটক চলাচল বন্ধ বা সীমিত থাকে — যাওয়ার আগে জেলা প্রশাসনের সর্বশেষ নির্দেশনা নিশ্চিত হন।', en: 'Tourist movement in Ruma, Thanchi and Rowangchhari is often closed or restricted for security reasons — confirm the district administration’s latest notice before going.' },
      { bn: 'দুর্গম রুটে নিবন্ধিত গাইড বাধ্যতামূলক; সেনা/পুলিশ চেকপোস্টে এনআইডির কপি ও ভ্রমণ-তালিকা জমা দিতে হয়। বিদেশিদের আগাম অনুমতি লাগে।', en: 'A registered guide is mandatory on remote routes, and you must hand NID copies and a group list at army and police checkposts. Foreigners need prior permission.' },
      { bn: 'ঝিরিপথ ও খুমে বর্ষায় হঠাৎ পানি বাড়ে — বৃষ্টির মধ্যে ট্রেক করবেন না, ভেলা/নৌকায় লাইফ জ্যাকেট পরুন।', en: 'Streams and gorges rise suddenly in the rains — do not trek in heavy rain, and wear a life jacket on rafts and boats.' },
      { bn: 'পাহাড়ি রাস্তা খাড়া ও আঁকাবাঁকা — অভিজ্ঞ চালক নিন, রাতে পাহাড়ি পথে চলাচল এড়িয়ে চলুন; ম্যালেরিয়া থেকে বাঁচতে মশারি ও রিপেলেন্ট রাখুন।', en: 'Hill roads are steep and twisting — use experienced drivers and avoid night driving; carry a net and repellent against malaria.' },
    ],
    hospital: { bn: 'বান্দরবান জেলা সদর হাসপাতাল', en: 'Bandarban District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'nilgiri',
        descEn: 'A resort summit at about 2,200 ft floating on a sea of cloud — watching the sunrise with the morning clouds beneath your feet is a once-in-a-lifetime experience.',
        howEn: '2–2.5 hours by chander gari from Bandarban town, passing Chimbuk and Shoilo Propat on the way.',
        bestTime: { bn: 'জুলাই–নভেম্বর (মেঘ); ভোরবেলা', en: 'July–November for clouds; at dawn' },
        entry: [50, 100], hours: 3,
      },
      {
        slug: 'nilachal',
        descEn: 'The closest cloud balcony to town — a 360° panorama of town, river and hills at sunset.',
        howEn: '20–30 minutes from town by CNG or jeep.',
        bestTime: { bn: 'সারা বছর; সূর্যাস্ত বা ভোরের মেঘ', en: 'Year-round; sunset or early-morning clouds' },
        entry: [30, 50], hours: 2,
      },
      {
        slug: 'boga-lake',
        descEn: 'A mysterious blue lake at about 2,400 ft — stay overnight in the Bawm village and use it as base camp for the dawn trek to Keokradong.',
        howEn: 'From Ruma bazaar by jeep or on foot with a guide; entries must be made at army checkposts.',
        bestTime: { bn: 'অক্টোবর–ফেব্রুয়ারি (অনুমতি সাপেক্ষে)', en: 'October–February (subject to access being open)' },
        entry: [0, 0], hours: 24,
      },
      {
        slug: 'buddha-dhatu-jadi',
        descEn: 'A Myanmar-style golden pagoda on a hilltop — the most radiant landmark of Bandarban town.',
        howEn: 'Auto-rickshaw from town to Balaghata; dress modestly.',
        bestTime: { bn: 'সারা বছর, বিকেলবেলা', en: 'Year-round, late afternoon' },
        entry: [20, 50], hours: 1,
      },
      {
        slug: 'debotakhum',
        descEn: 'A 50–60 ft deep gorge of green water between two hills — the thrill of slicing through the silence on a bamboo raft.',
        howEn: 'Trek and raft with a guide from Kochchhoptoli in Rowangchhari; permission is required.',
        bestTime: { bn: 'অক্টোবর–মার্চ (অনুমতি সাপেক্ষে)', en: 'October–March (subject to permission)' },
        entry: [0, 0], hours: 5,
      },
    ],
    newSpots: [
      {
        slug: 'nafakhum-waterfall', bn: 'নাফাখুম জলপ্রপাত', en: 'Nafakhum Waterfall',
        cat: 'waterfall', lat: 21.7266, lng: 92.4949, tags: ['adventure'], hidden: false,
        desc: { bn: 'থানচির রেমাক্রিতে সাঙ্গু নদীর শাখায় চওড়া ধাপে নামা জলপ্রপাত — বর্ষা-শেষে গর্জনে কাঁপে, যাত্রাপথের নৌকাভ্রমণও সমান রোমাঞ্চকর।', en: 'A broad stepped waterfall on a tributary of the Sangu at Remakri, Thanchi — thundering at the end of monsoon, with a boat journey just as thrilling as the falls.' },
        how: { bn: 'থানচি থেকে নিবন্ধিত গাইডসহ নৌকায় রেমাক্রি, তারপর ২-৩ ঘণ্টা ঝিরিপথে হাঁটা; থানা ও বিজিবি চেকপোস্টে নাম নিবন্ধন করতে হয়।', en: 'Boat from Thanchi to Remakri with a registered guide, then a 2–3 hour stream walk; register at the police and BGB checkposts.' },
        bestTime: { bn: 'সেপ্টেম্বর–নভেম্বর (অনুমতি খোলা থাকলে)', en: 'September–November (when access is open)' },
        entry: [0, 0], hours: 24,
        warnings: [{ bn: 'সাঙ্গুর পাথুরে বাঁকে স্রোত মারাত্মক — নৌকায় লাইফ জ্যাকেট বাধ্যতামূলক, খুমে সাঁতার কাটবেন না।', en: 'The rocky bends of the Sangu have deadly currents — life jackets are a must on the boat, and do not swim in the falls’ pool.' }],
      },
      {
        slug: 'chimbuk-hill', bn: 'চিম্বুক পাহাড়', en: 'Chimbuk Hill',
        cat: 'hill', lat: 22.0712, lng: 92.3305, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'থানচি সড়কের পাশে প্রায় ২৫০০ ফুট উঁচু চূড়া — একসময় দেশের অন্যতম উঁচু স্পট, আজও মেঘ আর ম্রো পাড়ার দৃশ্যে বান্দরবানের ক্লাসিক ভিউপয়েন্ট।', en: 'A roughly 2,500-ft summit beside the Thanchi road — once one of the country’s best-known heights, still a classic Bandarban viewpoint over clouds and Mro villages.' },
        how: { bn: 'বান্দরবান শহর থেকে চান্দের গাড়ি/জিপে প্রায় ১ ঘণ্টা; নীলগিরি যাওয়ার পথে থামা যায়।', en: 'About an hour by chander gari or jeep from town; an easy stop on the way to Nilgiri.' },
        bestTime: { bn: 'আগস্ট–ফেব্রুয়ারি, সকালবেলা', en: 'August–February, morning' },
        entry: [20, 50], hours: 1,
      },
      {
        slug: 'shoilo-propat', bn: 'শৈলপ্রপাত', en: 'Shoilo Propat Waterfall',
        cat: 'waterfall', lat: 22.1556, lng: 92.2457, tags: ['family'], hidden: false,
        desc: { bn: 'মিলনছড়ির কাছে রাস্তাঘেঁষা পাথুরে ঝর্ণা — পাশেই বম নারীদের হাতে বোনা কাপড় আর পাহাড়ি ফলের ছোট বাজার।', en: 'A rocky roadside waterfall near Milonchhari, with a small market of Bawm hand-woven textiles and hill fruit beside it.' },
        how: { bn: 'বান্দরবান শহর থেকে থানচি সড়কে প্রায় ৮ কিমি; সিএনজি/জিপে ২০ মিনিট।', en: 'About 8 km from town on the Thanchi road; 20 minutes by CNG or jeep.' },
        bestTime: { bn: 'জুলাই–অক্টোবর', en: 'July–October' },
        entry: [10, 30], hours: 1,
        warnings: [{ bn: 'ঝর্ণার পাথর খুব পিচ্ছিল — ওপরের ধাপে উঠবেন না।', en: 'The rocks are very slippery — do not climb onto the upper ledges.' }],
      },
    ],
  },
];
