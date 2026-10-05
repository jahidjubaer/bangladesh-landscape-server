// Khulna division — English translations, warnings, hospitals, spot updates and 3 new spots per district.
// Facts compiled from public sources; fares and coordinates are approximate — verify on the next field visit.
export default [
  // ── Khulna ──
  {
    slug: 'khulna',
    en: {
      overview:
        'Khulna is the front door to the Sundarbans — an industrial city across the Rupsha, the floating fisher-life of Kalabogi and the salty breath of the mangrove forest. Expeditions into the kingdom of the Royal Bengal tiger begin here.',
      transport:
        'From Dhaka by train (Sundarban Express / Chitra Express) in 7–8 hours, or by bus over the Padma Bridge in 4–5 hours. Sundarbans tour launches and ships leave from the Khulna ghats.',
      food:
        'Chuijhal mutton or beef — meat slow-cooked with the pungent chui-jhal vine — is Khulna’s signature dish, best paired with golda (giant freshwater prawn) malaikari in coconut milk.',
      season: 'The Sundarbans safari season runs November–March, when the rivers are calm and the weather is cool.',
    },
    warnings: [
      { bn: 'সুন্দরবনে কখনো একা বা গাইড ছাড়া ঢুকবেন না — বন বিভাগের অনুমতি ও সশস্ত্র গার্ডসহ লাইসেন্সধারী ট্যুর অপারেটরের সঙ্গেই যান।', en: 'Never enter the Sundarbans alone or without a guide — go only with a licensed tour operator that arranges Forest Department permits and an armed guard.' },
      { bn: 'বনের খালে-নদীতে কুমির ও হাঙর থাকে — পানিতে নামবেন না, হাত-পা নৌকার বাইরে ঝুলিয়ে রাখবেন না।', en: 'Crocodiles and sharks live in the forest creeks and rivers — do not swim, and keep hands and feet inside the boat.' },
      { bn: 'এপ্রিল–মে ও অক্টোবর–নভেম্বরে ঘূর্ণিঝড়ের ঝুঁকি থাকে — রওনার আগে আবহাওয়া সতর্কসংকেত দেখে নিন।', en: 'April–May and October–November are cyclone seasons — check storm warning signals before setting out.' },
      { bn: 'জোয়ার-ভাটায় নদীর পানি দ্রুত ওঠানামা করে — ট্রলারে লাইফ জ্যাকেট আছে কিনা নিশ্চিত হোন।', en: 'Tides make river levels rise and fall fast — make sure your trawler carries life jackets.' },
    ],
    hospital: { bn: 'খুলনা মেডিকেল কলেজ হাসপাতাল', en: 'Khulna Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'rupsha-bridge',
        descEn: 'A graceful bridge over the Rupsha River — at dusk its lights frame a panorama of the river port and the city.',
        howEn: 'Easy-bike (auto) from Khulna city; boats from the ghat below the bridge offer short river rides.',
        bestTime: { bn: 'বিকেল থেকে সন্ধ্যা — সূর্যাস্ত আর আলোকসজ্জা', en: 'Late afternoon to evening — sunset and the bridge lights' },
        entry: [0, 0],
        hours: 1.5,
      },
      {
        slug: 'kalabogi-sundarban',
        descEn: 'A fishing village standing on stilts along the Shibsa River — a striking story of people surviving on the very edge of the forest, where tides wash beneath the houses.',
        howEn: 'Kalabogi is in Dacope upazila; take a bus from Khulna to Nalian/Dacope, then a trawler. Go with a local guide.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, শান্ত নদী ও শুকনো আবহাওয়ায়', en: 'November–February, when the river is calm and the weather dry' },
        entry: [0, 0],
        hours: 4,
      },
    ],
    newSpots: [
      {
        slug: 'dakshindihi-rabindra-complex', bn: 'দক্ষিণডিহি রবীন্দ্র কমপ্লেক্স', en: 'Dakshindihi Rabindra Complex',
        cat: 'heritage', lat: 22.985, lng: 89.465, tags: ['family', 'relaxed'], hidden: false,
        desc: {
          bn: 'ফুলতলার দক্ষিণডিহিতে রবীন্দ্রনাথের শ্বশুরবাড়ি — কবিপত্নী মৃণালিনী দেবীর পৈতৃক ভিটা এখন স্মৃতি-জাদুঘর।',
          en: 'Tagore’s in-laws’ home at Dakshindihi in Phultala — the ancestral house of his wife Mrinalini Devi, now a memorial museum.',
        },
        how: {
          bn: 'খুলনা শহর থেকে যশোর রোডে ফুলতলা পর্যন্ত বাসে, সেখান থেকে অটোতে দক্ষিণডিহি।',
          en: 'Bus from Khulna along the Jashore road to Phultala, then an easy-bike to Dakshindihi.',
        },
        bestTime: { bn: 'শীতকাল; ২৫শে বৈশাখে রবীন্দ্রজয়ন্তীর আয়োজন', en: 'Winter; Tagore’s birth anniversary (25 Baishakh, early May) brings cultural programmes' },
        entry: [0, 20], hours: 1,
      },
      {
        slug: 'pithabhog-rabindra-bhita', bn: 'পিঠাভোগ রবীন্দ্র পৈতৃক ভিটা', en: 'Pithabhog — Tagore ancestral homestead',
        cat: 'heritage', lat: 22.78, lng: 89.63, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'রূপসার পিঠাভোগ গ্রামে ঠাকুর পরিবারের আদি পূর্বপুরুষদের ভিটা — নিরিবিলি গ্রামের মাঝে ছোট্ট স্মৃতিচিহ্ন।',
          en: 'The village of Pithabhog in Rupsha is where the Tagore family’s earliest ancestors lived — a quiet memorial plot amid rural Khulna.',
        },
        how: {
          bn: 'রূপসা সেতু পার হয়ে অটো বা ভাড়া করা মোটরসাইকেলে পিঠাভোগ।',
          en: 'Cross the Rupsha Bridge and take an easy-bike or hired motorbike to Pithabhog.',
        },
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি', en: 'November–February' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'hiron-point-nilkamal', bn: 'হিরণ পয়েন্ট (নীলকমল), সুন্দরবন', en: 'Hiron Point (Nilkamal), Sundarbans',
        cat: 'garden', lat: 21.82, lng: 89.47, tags: ['adventure'], hidden: false,
        desc: {
          bn: 'সুন্দরবনের দক্ষিণ প্রান্তে সাগরঘেঁষা বন্যপ্রাণী অভয়ারণ্য — কাঠের ট্রেইলে চিত্রা হরিণের পাল, আর ভাগ্য ভালো থাকলে কাদায় বাঘের পায়ের ছাপ।',
          en: 'A wildlife sanctuary at the sea-facing southern edge of the Sundarbans — spotted deer herds along the boardwalk and, with luck, tiger pugmarks in the mud.',
        },
        how: {
          bn: 'কেবল খুলনা/মোংলা থেকে লাইসেন্সধারী ট্যুর অপারেটরের ২-৩ দিনের জাহাজ-প্যাকেজে যাওয়া যায়; বন বিভাগের পারমিট অপারেটরই করে দেয়।',
          en: 'Reachable only on a 2–3 day ship package run by licensed tour operators from Khulna or Mongla; the operator arranges the Forest Department permit.',
        },
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, সাগর শান্ত থাকে', en: 'November–February, when the sea is calm' },
        entry: [0, 0], hours: 4,
        warnings: [{ bn: 'বাঘের এলাকা — সশস্ত্র বনরক্ষী ছাড়া ট্রেইল থেকে সরে যাবেন না।', en: 'Tiger territory — never step off the trail or walk without the armed forest guard.' }],
      },
    ],
  },

  // ── Bagerhat ──
  {
    slug: 'bagerhat',
    en: {
      overview:
        'Bagerhat is the “Mosque City” — Khan Jahan Ali’s UNESCO-listed Sixty Dome Mosque, the crocodile legend of Ghora Dighi, and Karamjal, the easiest gateway into the Sundarbans.',
      transport:
        'Bagerhat is 1–1.5 hours from Khulna by bus. For Karamjal, take a trawler from Mongla ghat.',
      food:
        'This is shrimp country — prawn malaikari and coconut-milk bhuna are outstanding. Bagerhat is also famous for its betel nut (supari).',
      season:
        'November–March. At Karamjal, crocodiles and monkeys are easiest to spot at low tide.',
    },
    warnings: [
      { bn: 'করমজল ও কটকায় বানর খাবার-ব্যাগ ছিনিয়ে নেয় — খাবার খোলা রাখবেন না, বানরকে খাওয়াবেন না।', en: 'Monkeys at Karamjal and Kotka snatch food and bags — keep food packed away and do not feed them.' },
      { bn: 'মোংলা থেকে ট্রলারে উঠলে লাইফ জ্যাকেট পরুন; পশুর নদীতে বড় জাহাজের ঢেউ বিপজ্জনক হতে পারে।', en: 'Wear a life jacket on trawlers from Mongla — wash from big ships on the Pasur River can be dangerous.' },
      { bn: 'খানজাহানের মাজারের ঠাকুর দিঘি ও বনের খালে কুমির থাকে — পাড়ে বেশি কাছে যাবেন না, পানিতে নামবেন না।', en: 'Crocodiles live in Thakur Dighi beside Khan Jahan’s shrine and in the forest creeks — keep back from the edge and stay out of the water.' },
      { bn: 'ঘূর্ণিঝড় মৌসুমে (এপ্রিল–মে, অক্টোবর–নভেম্বর) সতর্কসংকেত থাকলে নৌভ্রমণ বাতিল করুন।', en: 'In cyclone season (April–May, October–November) cancel boat trips whenever a storm signal is up.' },
    ],
    hospital: { bn: 'বাগেরহাট সদর হাসপাতাল', en: 'Bagerhat Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'shat-gombuj',
        descEn: 'A colossal 15th-century mosque with 77 domes and 60 stone pillars — the crown of the UNESCO World Heritage “Mosque City of Bagerhat”.',
        howEn: 'Easy-bike from Bagerhat town; one ticket covers the mosque grounds and the site museum.',
        bestTime: { bn: 'নভেম্বর–মার্চ, সকাল বা বিকেলে', en: 'November–March, in the morning or late afternoon' },
        entry: [20, 50],
        hours: 2,
      },
      {
        slug: 'khan-jahan-mazar',
        descEn: 'The tomb of the saint who built the city, beside Thakur Dighi with its famous crocodiles — where devotion and folklore meet.',
        howEn: 'Five minutes by easy-bike from the Sixty Dome Mosque.',
        bestTime: { bn: 'সারা বছর; শীতে আরামদায়ক', en: 'Year-round; most comfortable in winter' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'karamjal',
        descEn: 'The easiest entry into the Sundarbans — a wooden boardwalk with spotted deer and monkeys, a crocodile breeding centre and the salty breath of the mangroves.',
        howEn: '30–40 minutes by trawler from Mongla ghat; an easy day trip there and back. Forest entry tickets are sold on site.',
        bestTime: { bn: 'নভেম্বর–মার্চ; ভাটার সময় বন্যপ্রাণী বেশি দেখা যায়', en: 'November–March; wildlife is easiest to see at low tide' },
        entry: [30, 100],
        hours: 3,
      },
    ],
    newSpots: [
      {
        slug: 'kotka-sundarbans', bn: 'কটকা, সুন্দরবন', en: 'Kotka, Sundarbans',
        cat: 'garden', lat: 21.87, lng: 89.77, tags: ['adventure'], hidden: false,
        desc: {
          bn: 'শরণখোলা রেঞ্জের কটকা — ঘাসবনে চিত্রা হরিণের পাল, ওয়াচ টাওয়ার আর জামতলা হয়ে সাগরসৈকত পর্যন্ত বনপথ; সুন্দরবন সাফারির সবচেয়ে জনপ্রিয় গন্তব্য।',
          en: 'Kotka in the Sarankhola range — deer herds on open grassland, a watchtower and a forest walk via Jamtola to the sea beach; the most popular stop on any Sundarbans safari.',
        },
        how: {
          bn: 'খুলনা বা মোংলা থেকে লাইসেন্সধারী অপারেটরের ২-৩ দিনের জাহাজ-ট্যুরে; বন বিভাগের পারমিট ও সশস্ত্র গার্ড বাধ্যতামূলক।',
          en: 'On a 2–3 day ship tour with a licensed operator from Khulna or Mongla; a Forest Department permit and armed guard are mandatory.',
        },
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি', en: 'November–February' },
        entry: [0, 0], hours: 4,
        warnings: [{ bn: 'বাঘের এলাকা — দলছুট হবেন না, গার্ডের নির্দেশ মেনে চলুন।', en: 'Tiger territory — stay with the group and follow the guard’s instructions.' }],
      },
      {
        slug: 'chunakhola-mosque', bn: 'চুনাখোলা মসজিদ', en: 'Chunakhola Mosque',
        cat: 'heritage', lat: 22.69, lng: 89.73, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'ধানখেতের মাঝে একলা দাঁড়িয়ে থাকা পনেরো শতকের এক গম্বুজের ইটের মসজিদ — পোড়ামাটির অলংকরণে মসজিদের শহরের নিভৃত রত্ন।',
          en: 'A 15th-century single-domed brick mosque standing alone among paddy fields — a quiet, terracotta-decorated gem of the Mosque City.',
        },
        how: {
          bn: 'ষাট গম্বুজ মসজিদ থেকে অটো নিয়ে কাছেই; শেষ অংশ খেতের আল ধরে হাঁটতে হয়।',
          en: 'A short easy-bike ride from the Sixty Dome Mosque; the last stretch is a walk along field ridges.',
        },
        bestTime: { bn: 'শুকনো মৌসুম, নভেম্বর–এপ্রিল', en: 'Dry season, November–April' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'kodla-math', bn: 'কোদলা মঠ', en: 'Kodla Math',
        cat: 'heritage', lat: 22.73, lng: 89.82, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'অযোধ্যা গ্রামে সতেরো শতকের উঁচু পিরামিড-আকৃতির ইটের মঠ — দেয়ালে পোড়ামাটির নকশা, চারপাশে নিস্তব্ধ গ্রাম।',
          en: 'A tall, pyramid-like 17th-century brick temple tower in Ajodhya village, its walls carved with terracotta motifs, surrounded by silent countryside.',
        },
        how: {
          bn: 'বাগেরহাট শহর থেকে অটো বা ভাড়া করা মোটরসাইকেলে অযোধ্যা গ্রাম।',
          en: 'Easy-bike or hired motorbike from Bagerhat town to Ajodhya village.',
        },
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },

  // ── Satkhira ──
  {
    slug: 'satkhira',
    en: {
      overview:
        'Satkhira is the western gateway to the Sundarbans — quiet forest trips from Munshiganj and Kalagachia, famous mangoes, and resilient communities living with salt water.',
      transport:
        'Satkhira is 6–7 hours from Dhaka by bus. To enter the forest, continue via Shyamnagar and Munshiganj to Nildumur ghat.',
      food: 'Satkhira is famous for both its Himsagar mangoes and chuijhal prawns.',
      season: 'November–March, when the forest is calm; mango season is May–June.',
    },
    warnings: [
      { bn: 'সুন্দরবনের পশ্চিমাংশে বাঘের আক্রমণের ইতিহাস আছে — বন বিভাগের পারমিট, গাইড ও গার্ড ছাড়া বনে নামবেন না।', en: 'The western Sundarbans has a history of tiger attacks — never land in the forest without a Forest Department permit, guide and guard.' },
      { bn: 'জেলাটি ভারত সীমান্তঘেঁষা (ভোমরা, কলারোয়া) — সীমান্ত এলাকায় বিজিবির নির্দেশনা মেনে চলুন।', en: 'The district borders India (Bhomra, Kalaroa) — follow BGB instructions in border areas.' },
      { bn: 'উপকূলে খাবার পানি লবণাক্ত — বোতলজাত পানি সঙ্গে রাখুন।', en: 'Drinking water on the coast is saline — carry bottled water.' },
      { bn: 'ঘূর্ণিঝড় মৌসুমে (এপ্রিল–মে, অক্টোবর–নভেম্বর) শ্যামনগর-উপকূলে ভ্রমণের আগে আবহাওয়া বার্তা দেখুন।', en: 'In cyclone season (April–May, October–November) check the weather bulletin before heading to the Shyamnagar coast.' },
    ],
    hospital: { bn: 'সাতক্ষীরা মেডিকেল কলেজ হাসপাতাল', en: 'Satkhira Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'kolagachia',
        descEn: 'A low-crowd entry into the Sundarbans — a trawler ride along tidal creeks leads to a forest trail in the realm of deer and monkeys.',
        howEn: 'Trawler from Nildumur ghat in Shyamnagar; forest permits are issued at the ghat/forest station.',
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [50, 150],
        hours: 3,
      },
      {
        slug: 'mandarbaria-beach',
        descEn: 'A deserted beach where the Sundarbans meets the Bay of Bengal — one of the wildest shorelines in the country, where tiger pugmarks are sometimes found in the sand.',
        howEn: 'A full-day trawler expedition from Nildumur; a guide and Forest Department permit are mandatory.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, সাগর শান্ত থাকলে', en: 'November–February, when the sea is calm' },
        entry: [0, 0],
        hours: 10,
      },
    ],
    newSpots: [
      {
        slug: 'jessoreswari-kali-temple', bn: 'যশোরেশ্বরী কালীমন্দির', en: 'Jessoreswari Kali Temple',
        cat: 'heritage', lat: 22.33, lng: 89.1, tags: ['family', 'relaxed'], hidden: false,
        desc: {
          bn: 'শ্যামনগরের ঈশ্বরীপুরে প্রাচীন শক্তিপীঠ — রাজা প্রতাপাদিত্যের যুগের স্মৃতিবাহী এই মন্দিরে দেশ-বিদেশের তীর্থযাত্রী আসেন।',
          en: 'An ancient Shakti Peetha at Ishwaripur in Shyamnagar, linked to the era of Raja Pratapaditya and visited by pilgrims from Bangladesh and abroad.',
        },
        how: {
          bn: 'সাতক্ষীরা থেকে বাসে শ্যামনগর, তারপর অটোতে ঈশ্বরীপুর।',
          en: 'Bus from Satkhira to Shyamnagar, then an easy-bike to Ishwaripur.',
        },
        bestTime: { bn: 'শীতকাল; কালীপূজায় বিশেষ ভিড়', en: 'Winter; busiest during Kali Puja' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'ishwaripur-hammamkhana', bn: 'ঈশ্বরীপুর হাম্মামখানা ও শাহী মসজিদ', en: 'Ishwaripur Hammamkhana & Shahi Mosque',
        cat: 'heritage', lat: 22.34, lng: 89.1, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'যশোরেশ্বরী মন্দিরের কাছেই মোগল আমলের গম্বুজওয়ালা স্নানাগার আর প্রাচীন মসজিদ — একসময়ের রাজধানী ধূমঘাট অঞ্চলের ধ্বংসাবশেষ।',
          en: 'Near the Jessoreswari temple stand a domed Mughal-era bathhouse and an old mosque — remnants of the once-thriving capital region of Dhumghat.',
        },
        how: {
          bn: 'যশোরেশ্বরী মন্দির থেকে হেঁটে বা ভ্যানে কয়েক মিনিট।',
          en: 'A few minutes on foot or by van from the Jessoreswari temple.',
        },
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'tetulia-jame-mosque-tala', bn: 'তেঁতুলিয়া জামে মসজিদ, তালা', en: 'Tetulia Jame Mosque, Tala',
        cat: 'heritage', lat: 22.75, lng: 89.25, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'তালা উপজেলার তেঁতুলিয়া গ্রামে উনিশ শতকের বহু গম্বুজের জমিদারি মসজিদ — খান বাহাদুর পরিবারের স্থাপত্য-স্মৃতি।',
          en: 'A multi-domed 19th-century mosque in Tetulia village, Tala upazila, built by a local landed family — a handsome piece of rural colonial-era architecture.',
        },
        how: {
          bn: 'সাতক্ষীরা থেকে বাসে তালা, সেখান থেকে অটো বা ভ্যানে তেঁতুলিয়া।',
          en: 'Bus from Satkhira to Tala, then an easy-bike or van to Tetulia.',
        },
        bestTime: { bn: 'শুকনো মৌসুম', en: 'Dry season' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },

  // ── Jashore ──
  {
    slug: 'jashore',
    en: {
      overview:
        'Jashore is a district of flowers and literature — the flower kingdom of Godkhali, poet Michael Madhusudan Dutt’s Sagardari, and the energy of the country’s first “digital district”.',
      transport:
        'Reach Jashore from Dhaka by air, train or bus — about 4–5 hours by bus over the Padma Bridge. Godkhali is 30 minutes away on the Benapole road.',
      food:
        'Jashore’s date-palm jaggery and patali are winter legends; Jamtala’s Sadek “golla” sweets are also famous.',
      season:
        'Peak flower season is December–February — just before Valentine’s Day and Pohela Falgun, Godkhali becomes a sea of colour.',
    },
    warnings: [
      { bn: 'বেনাপোল সীমান্ত এলাকায় দালাল ও অবৈধ মুদ্রা-বিনিময়কারী থেকে সাবধান — শুধু অনুমোদিত কাউন্টার ব্যবহার করুন।', en: 'At the Benapole border beware of touts and illegal money changers — use only authorised counters.' },
      { bn: 'গদখালীর ফুলখেতে চাষির অনুমতি ছাড়া ঢুকবেন না, ফুল ছিঁড়বেন না — এটি তাঁদের জীবিকা।', en: 'Do not enter Godkhali’s flower fields without the farmer’s permission or pick flowers — this is their livelihood.' },
      { bn: 'যশোর-বেনাপোল মহাসড়কে ভারী ট্রাক চলাচল বেশি — রাস্তা পার হতে ও অটোতে চলতে সতর্ক থাকুন।', en: 'The Jashore–Benapole highway carries heavy truck traffic — take care crossing and riding in easy-bikes.' },
    ],
    hospital: { bn: 'যশোর ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Jashore 250-bed General Hospital' },
    spotUpdates: [
      {
        slug: 'godkhali-flowers',
        descEn: 'Horizon-wide fields of roses, marigolds and gerberas — the dawn flower market in the capital of Bangladeshi floriculture is a festival of colour.',
        howEn: 'Bus or easy-bike from Jashore along the Benapole road to Godkhali bazaar; ask a farmer’s permission before walking into the fields.',
        bestTime: { bn: 'ডিসেম্বর–ফেব্রুয়ারি, ভোরের ফুলহাট', en: 'December–February, early-morning flower market' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'sagardari',
        descEn: 'The birthplace of the great poet Michael Madhusudan Dutt on the bank of the Kopotakkho — his family home, a museum and the river he immortalised in verse.',
        howEn: 'From Jashore go via Keshabpur to Sagardari by bus and easy-bike.',
        bestTime: { bn: 'শীতকাল; জানুয়ারির মধুমেলা', en: 'Winter; the Madhu Mela fair in late January' },
        entry: [10, 30],
        hours: 2,
      },
    ],
    newSpots: [
      {
        slug: 'benapole-border-ceremony', bn: 'বেনাপোল সীমান্ত ও রিট্রিট প্যারেড', en: 'Benapole border & retreat parade',
        cat: 'other', lat: 23.04, lng: 88.89, tags: ['family'], hidden: false,
        desc: {
          bn: 'দেশের সবচেয়ে ব্যস্ত স্থলবন্দর বেনাপোল — বিকেলে বিজিবি ও বিএসএফের যৌথ পতাকা নামানোর প্যারেড দেখতে ভিড় জমে।',
          en: 'Benapole is the country’s busiest land port; in the late afternoon crowds gather to watch the joint BGB–BSF flag-lowering retreat parade.',
        },
        how: {
          bn: 'যশোর থেকে বাস বা ট্রেনে বেনাপোল (প্রায় ১ ঘণ্টা), তারপর অটোতে চেকপোস্ট।',
          en: 'Bus or train from Jashore to Benapole (about an hour), then an easy-bike to the checkpost.',
        },
        bestTime: { bn: 'সূর্যাস্তের আগে, প্যারেডের সময়', en: 'Just before sunset, at parade time' },
        entry: [0, 0], hours: 1.5,
        warnings: [{ bn: 'সীমান্তে ছবি তোলায় নিষেধাজ্ঞা থাকতে পারে — নিরাপত্তারক্ষীদের নির্দেশ মানুন।', en: 'Photography may be restricted at the border — follow the security personnel’s instructions.' }],
      },
      {
        slug: 'chanchra-shiva-temple', bn: 'চাঁচড়া শিবমন্দির', en: 'Chanchra Shiva Temple',
        cat: 'heritage', lat: 23.14, lng: 89.21, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'যশোর শহরের কাছে সতেরো শতকের আটচালা শিবমন্দির — দেয়ালে সূক্ষ্ম পোড়ামাটির কাজ, চাঁচড়া রাজবংশের স্মৃতি।',
          en: 'A 17th-century at-chala Shiva temple on the edge of Jashore town, decorated with fine terracotta and tied to the Chanchra Raj family.',
        },
        how: {
          bn: 'যশোর শহর থেকে বেনাপোল/খুলনা সড়কের দিকে অটোতে চাঁচড়া।',
          en: 'Easy-bike from Jashore town to Chanchra.',
        },
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'mirzanagar-hammamkhana', bn: 'মির্জানগর হাম্মামখানা', en: 'Mirzanagar Hammamkhana',
        cat: 'heritage', lat: 22.95, lng: 89.17, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'কেশবপুরের মির্জানগরে মোগল ফৌজদারের গম্বুজওয়ালা স্নানাগার — কপোতাক্ষ-বুড়িভদ্রার কাছে প্রত্নতত্ত্ব অধিদপ্তরের সংরক্ষিত নিদর্শন।',
          en: 'The domed bathhouse of a Mughal faujdar at Mirzanagar, Keshabpur — a protected monument near the Kopotakkho and Buribhadra rivers.',
        },
        how: {
          bn: 'যশোর থেকে বাসে কেশবপুর, সেখান থেকে অটোতে মির্জানগর; সাগরদাঁড়ির সঙ্গে একদিনে ঘোরা যায়।',
          en: 'Bus from Jashore to Keshabpur, then an easy-bike to Mirzanagar; easily combined with Sagardari in one day.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 20], hours: 0.5,
      },
    ],
  },

  // ── Jhenaidah ──
  {
    slug: 'jhenaidah',
    en: {
      overview:
        'Jhenaidah is a district of ancient mosques and mystic songs — the Sultanate-era mosque city of Barobazar, the Noldanga temples and the melodies of the folk poet Pagla Kanai.',
      transport:
        'Jhenaidah is 5–6 hours from Dhaka by bus; Barobazar lies on the Kaliganj road towards Jashore.',
      food: 'The district has a long-standing reputation for chhana (cottage-cheese) sweets.',
      season: 'Winter makes the heritage trail most comfortable.',
    },
    warnings: [
      { bn: 'মহেশপুর উপজেলা ভারত সীমান্তঘেঁষা — সীমান্তের কাছে গেলে বিজিবির নির্দেশনা মেনে চলুন।', en: 'Maheshpur upazila borders India — follow BGB instructions near the border.' },
      { bn: 'বারোবাজারের মসজিদগুলো খোলা মাঠে ছড়ানো — গ্রীষ্মে প্রচণ্ড রোদ, পানি ও টুপি সঙ্গে রাখুন।', en: 'Barobazar’s mosques are scattered across open fields — summer sun is fierce, so carry water and a hat.' },
      { bn: 'ঢাকা-খুলনা মহাসড়কে দ্রুতগতির বাস চলে — অটো বা মোটরসাইকেলে চলতে সতর্ক থাকুন।', en: 'Fast intercity buses use the Dhaka–Khulna highway — be careful on easy-bikes and motorbikes.' },
    ],
    hospital: { bn: 'ঝিনাইদহ সদর হাসপাতাল', en: 'Jhenaidah Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'barobazar-mosques',
        descEn: 'A dozen 15th-century Sultanate mosques excavated from beneath the earth — relics of the lost city of Muhammadabad, including the Galakata and Jorbangla mosques.',
        howEn: 'At Barobazar in Kaliganj upazila; hire an easy-bike to tour the mosques.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি', en: 'November–February' },
        entry: [0, 0],
        hours: 2.5,
      },
      {
        slug: 'noldanga-mandir',
        descEn: 'A cluster of zamindari-era temples on the bank of the Begabati with a park beside it — history and a picnic in one stop.',
        howEn: 'Easy-bike from Kaliganj.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 20],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'shailkupa-shahi-mosque', bn: 'শৈলকুপা শাহী মসজিদ', en: 'Shailkupa Shahi Mosque',
        cat: 'heritage', lat: 23.68, lng: 89.24, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'কুমার নদের পাড়ে সুলতানি আমলের ছয় গম্বুজ মসজিদ — পাশেই সাধক শাহ মুহম্মদ আরিফের মাজার।',
          en: 'A Sultanate-era six-domed mosque on the bank of the Kumar River, beside the shrine of the saint Shah Muhammad Arif.',
        },
        how: {
          bn: 'ঝিনাইদহ শহর থেকে বাস বা অটোতে শৈলকুপা।',
          en: 'Bus or easy-bike from Jhenaidah town to Shailkupa.',
        },
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'dhol-samudra-dighi', bn: 'ঢোল সমুদ্র দিঘি', en: 'Dhol Samudra Dighi',
        cat: 'river', lat: 23.53, lng: 89.15, tags: ['relaxed', 'family'], hidden: true,
        desc: {
          bn: 'রাজা মুকুট রায়ের আমলের বিশাল দিঘি — খনন নিয়ে ঢোলের শব্দের লোককাহিনি, আর পাড়ে বসে নিরিবিলি বিকেল।',
          en: 'A vast tank from the time of Raja Mukut Ray, wrapped in a folk tale about drums beaten during its digging — a peaceful spot for an afternoon on the bank.',
        },
        how: {
          bn: 'ঝিনাইদহ শহর থেকে অটোতে অল্প দূরে।',
          en: 'A short easy-bike ride from Jhenaidah town.',
        },
        bestTime: { bn: 'বিকেল, শীতকাল', en: 'Afternoons in winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'dattanagar-agricultural-farm', bn: 'দত্তনগর কৃষি খামার', en: 'Dattanagar Agricultural Farm',
        cat: 'garden', lat: 23.31, lng: 88.86, tags: ['family', 'relaxed'], hidden: true,
        desc: {
          bn: 'মহেশপুরে বিএডিসির বিশাল বীজ উৎপাদন খামার — দিগন্তজোড়া সবুজ খেত, গাছের সারি আর পুরোনো ব্রিটিশ আমলের ভবন।',
          en: 'BADC’s huge seed-production farm in Maheshpur — horizon-wide green fields, avenues of trees and old colonial-era buildings.',
        },
        how: {
          bn: 'ঝিনাইদহ থেকে বাসে মহেশপুর, তারপর অটোতে দত্তনগর; খামারে ঢুকতে কর্তৃপক্ষের অনুমতি লাগতে পারে।',
          en: 'Bus from Jhenaidah to Maheshpur, then an easy-bike to Dattanagar; permission from the farm office may be needed to enter.',
        },
        bestTime: { bn: 'ডিসেম্বর–ফেব্রুয়ারি, সবুজ ফসলের মৌসুম', en: 'December–February, when the crops are green' },
        entry: [0, 0], hours: 1.5,
      },
    ],
  },

  // ── Magura ──
  {
    slug: 'magura',
    en: {
      overview:
        'Magura is a quiet district on the Gorai and Nabaganga rivers — memories of Raja Sitaram Ray’s fortified capital and unhurried scenes of rural Bengal.',
      transport: 'Magura is 4–5 hours from Dhaka by bus via the Padma Bridge.',
      food: 'Known for rasmalai and pure cow’s-milk ghee.',
      season: 'Winter and spring are the best times to travel.',
    },
    warnings: [
      { bn: 'মধুমতি ও গড়াই নদীতে বর্ষায় প্রবল স্রোত ও ভাঙন — নৌকায় লাইফ জ্যাকেট ছাড়া উঠবেন না, ভাঙা পাড়ে দাঁড়াবেন না।', en: 'The Madhumati and Gorai run strong with erosion in monsoon — wear a life jacket on boats and keep off crumbling banks.' },
      { bn: 'গ্রামীণ প্রত্নস্থলে খাবার-পানির দোকান কম — মাগুরা শহর থেকেই প্রয়োজনীয় জিনিস নিয়ে নিন।', en: 'Rural heritage sites have few food or water stalls — stock up in Magura town.' },
      { bn: 'ঢাকা-খুলনা মহাসড়কে দ্রুতগতির যান চলাচল — রাস্তা পারাপারে সতর্ক থাকুন।', en: 'Fast traffic runs on the Dhaka–Khulna highway — take care crossing the road.' },
    ],
    hospital: { bn: 'মাগুরা ২৫০ শয্যা জেলা হাসপাতাল', en: 'Magura 250-bed District Hospital' },
    spotUpdates: [
      {
        slug: 'sitaram-rajbari',
        descEn: 'The ruins of an independent raja’s fortified capital at Mohammadpur — a dol-mancha, old tanks and the air of history.',
        howEn: 'Bus from Magura to Mohammadpur, then a van (cycle-cart) to the site.',
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'sreepur-zamindar-bari', bn: 'শ্রীপুর জমিদার বাড়ি', en: 'Sreepur Zamindar Bari',
        cat: 'heritage', lat: 23.56, lng: 89.38, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'শ্রীপুর উপজেলায় জমিদারি আমলের জীর্ণ প্রাসাদ — খসে পড়া কারুকাজে পুরোনো বনেদিয়ানার ছাপ।',
          en: 'A weathered zamindari-era mansion in Sreepur upazila, its crumbling ornament still hinting at old aristocratic grandeur.',
        },
        how: {
          bn: 'মাগুরা শহর থেকে বাস বা অটোতে শ্রীপুর।',
          en: 'Bus or easy-bike from Magura town to Sreepur.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'ভবনটি জরাজীর্ণ — ভেতরে বা ছাদে উঠবেন না।', en: 'The building is dilapidated — do not go inside or climb onto the roof.' }],
      },
      {
        slug: 'nabaganga-riverfront-magura', bn: 'নবগঙ্গা নদীর পাড়, মাগুরা', en: 'Nabaganga riverfront, Magura',
        cat: 'river', lat: 23.49, lng: 89.42, tags: ['relaxed', 'family'], hidden: false,
        desc: {
          bn: 'মাগুরা শহরের বুক চিরে বয়ে চলা নবগঙ্গা — বিকেলে নদীপাড়ে হাঁটা আর নৌকায় ছোট্ট ভ্রমণ শহরবাসীর প্রিয় অবসর।',
          en: 'The Nabaganga flows right through Magura town — an evening stroll along the bank or a short boat ride is the townspeople’s favourite pastime.',
        },
        how: {
          bn: 'মাগুরা শহরের যেকোনো জায়গা থেকে রিকশা বা অটোতে নদীঘাট।',
          en: 'Rickshaw or easy-bike from anywhere in Magura town to the river ghat.',
        },
        bestTime: { bn: 'বিকেল, অক্টোবর–মার্চ', en: 'Late afternoon, October–March' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'madhumati-riverbank-mohammadpur', bn: 'মধুমতি নদীর তীর, মহম্মদপুর', en: 'Madhumati riverbank, Mohammadpur',
        cat: 'river', lat: 23.4, lng: 89.64, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'মাগুরার পূর্ব সীমানা ঘেঁষে বিস্তৃত মধুমতি — চর, পালতোলা নৌকা আর গ্রামীণ ঘাটের শান্ত দৃশ্য।',
          en: 'The broad Madhumati along Magura’s eastern edge — sandbars, country boats and quiet village ghats.',
        },
        how: {
          bn: 'সীতারামের রাজবাড়ি দেখে মহম্মদপুর থেকে অটো বা ভ্যানে নদীঘাট।',
          en: 'After visiting Sitaram’s palace, take an easy-bike or van from Mohammadpur to the river ghat.',
        },
        bestTime: { bn: 'শরৎ ও শীত', en: 'Autumn and winter' },
        entry: [0, 0], hours: 1,
      },
    ],
  },

  // ── Narail ──
  {
    slug: 'narail',
    en: {
      overview:
        'Narail is an art district on the Chitra River — the village Bengal of S M Sultan’s canvases, a strong boat-racing tradition and the bird-filled Arunima resort.',
      transport:
        'Narail is 3.5–4 hours from Dhaka by bus via the Padma Bridge and the Kalna (Madhumati) Bridge.',
      food: 'Fish from the Chitra and pitha made with date-palm juice are special winter treats.',
      season: 'Winter brings the Sultan Mela and the boat-race season.',
    },
    warnings: [
      { bn: 'নৌকাবাইচের দিনে নদীপাড়ে প্রচণ্ড ভিড় হয় — শিশুদের কাছে রাখুন, ভাঙা পাড়ের কিনারে দাঁড়াবেন না।', en: 'Boat-race days draw huge riverside crowds — keep children close and stay away from crumbling bank edges.' },
      { bn: 'চিত্রা ও মধুমতিতে নৌকাভ্রমণে লাইফ জ্যাকেট চেয়ে নিন; বর্ষায় স্রোত প্রবল।', en: 'Ask for life jackets on Chitra and Madhumati boat trips; currents are strong in monsoon.' },
      { bn: 'শীতের ভোরে ঘন কুয়াশায় মহাসড়কে দুর্ঘটনার ঝুঁকি বাড়ে — সকালে দূরপথ যাত্রায় সাবধান।', en: 'Dense winter-morning fog raises the risk of highway accidents — take care on early long-distance trips.' },
    ],
    hospital: { bn: 'নড়াইল সদর হাসপাতাল', en: 'Narail Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'sm-sultan-complex',
        descEn: 'The great painter’s grave, gallery and his “Shishu Swarga” boat-studio — an art pilgrimage on the bank of the Chitra.',
        howEn: 'At Kurigram in Narail town; reach it by rickshaw.',
        bestTime: { bn: 'শীতকাল; ১০ আগস্ট শিল্পীর জন্মদিনে ও সুলতান মেলায় বিশেষ আয়োজন', en: 'Winter; special events on the artist’s birthday (10 August) and during the Sultan Mela' },
        entry: [0, 20],
        hours: 1.5,
      },
      {
        slug: 'arunima-resort',
        descEn: 'A lake-ringed resort where thousands of birds return to the trees every evening — a package for bird lovers.',
        howEn: 'At Panipara in Kalia upazila; reach it by road from Narail or Gopalganj.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, পাখির মৌসুম', en: 'November–February, bird season' },
        entry: [50, 200],
        hours: 3,
      },
    ],
    newSpots: [
      {
        slug: 'kalna-madhumati-bridge', bn: 'কালনা মধুমতি সেতু', en: 'Kalna Madhumati Bridge',
        cat: 'river', lat: 23.13, lng: 89.7, tags: ['family', 'relaxed'], hidden: false,
        desc: {
          bn: 'লোহাগড়ার কালনায় মধুমতির ওপর দেশের প্রথম ছয় লেনের সেতু — বিকেলে নদীর বিস্তার আর সূর্যাস্তের দৃশ্য মনকাড়া।',
          en: 'The country’s first six-lane bridge spans the Madhumati at Kalna, Lohagara — sweeping river views and fine sunsets in the late afternoon.',
        },
        how: {
          bn: 'নড়াইল থেকে বাস বা অটোতে লোহাগড়া হয়ে কালনা।',
          en: 'Bus or easy-bike from Narail via Lohagara to Kalna.',
        },
        bestTime: { bn: 'বিকেল থেকে সূর্যাস্ত', en: 'Late afternoon to sunset' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'সেতুর ওপর গাড়ি থামিয়ে ছবি তোলা বিপজ্জনক — নিচের ঘাট বা পাড় থেকে দেখুন।', en: 'Stopping on the bridge deck for photos is dangerous — enjoy the view from the ghat or riverbank below.' }],
      },
      {
        slug: 'narail-victoria-college', bn: 'নড়াইল ভিক্টোরিয়া কলেজ', en: 'Narail Victoria College',
        cat: 'heritage', lat: 23.17, lng: 89.5, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'উনিশ শতকে নড়াইলের জমিদারদের প্রতিষ্ঠিত ঐতিহ্যবাহী কলেজ — লাল ইটের পুরোনো ভবন আর ছায়াঘেরা প্রাঙ্গণ।',
          en: 'A historic 19th-century college founded with the support of Narail’s zamindars — old red-brick buildings and a shady campus.',
        },
        how: {
          bn: 'নড়াইল শহর থেকে রিকশায়; শিক্ষা কার্যক্রম চলাকালে শালীনভাবে ঘুরে দেখুন।',
          en: 'By rickshaw within Narail town; visit respectfully as it is a working college.',
        },
        bestTime: { bn: 'ছুটির দিন বা বিকেল', en: 'Holidays or late afternoons' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'laxmipasha-kali-temple', bn: 'লক্ষ্মীপাশা কালীমন্দির', en: 'Laxmipasha Kali Temple',
        cat: 'heritage', lat: 23.19, lng: 89.66, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'লোহাগড়ার লক্ষ্মীপাশায় নবগঙ্গাপাড়ের প্রাচীন কালীমন্দির — অঞ্চলের অন্যতম পুরোনো তীর্থ, কালীপূজায় মেলা বসে।',
          en: 'An old Kali temple at Laxmipasha, Lohagara, near the Nabaganga — one of the region’s oldest places of worship, with a fair during Kali Puja.',
        },
        how: {
          bn: 'নড়াইল থেকে বাসে লোহাগড়া, তারপর অটো বা হেঁটে লক্ষ্মীপাশা।',
          en: 'Bus from Narail to Lohagara, then an easy-bike or a short walk to Laxmipasha.',
        },
        bestTime: { bn: 'শীতকাল; কালীপূজা', en: 'Winter; Kali Puja' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },

  // ── Kushtia ──
  {
    slug: 'kushtia',
    en: {
      overview:
        'Kushtia is the land of the Bauls and of Tagore memories — Lalon Shah’s akhra at Chheuria, the Kuthibari at Shilaidaha and a rich cultural heritage along the Gorai.',
      transport:
        'Kushtia is 4–5 hours from Dhaka by bus; by train, travel via Poradah junction. Shilaidaha is about 20 minutes from town by easy-bike.',
      food: 'Sesame khaja and kulfi malai are Kushtia’s signature treats.',
      season:
        'Hundreds of thousands of Bauls gather for the Lalon festivals at Dol Purnima (spring) and on 1 Kartik (mid-October, Lalon’s death anniversary); winter is pleasant for visiting the Kuthibari.',
    },
    warnings: [
      { bn: 'লালন উৎসবের সময় ছেঁউড়িয়ায় প্রচণ্ড ভিড় — পকেটমার থেকে সাবধান, মূল্যবান জিনিস কম রাখুন।', en: 'Chheuria gets extremely crowded during Lalon festivals — watch for pickpockets and carry few valuables.' },
      { bn: 'শিলাইদহের কাছে পদ্মায় প্রবল স্রোত ও চোরাবালি — নদীতে নামবেন না, লাইফ জ্যাকেট ছাড়া নৌকায় উঠবেন না।', en: 'The Padma near Shilaidaha has strong currents and soft sand — do not wade in, and wear a life jacket on boats.' },
      { bn: 'দৌলতপুর ও ভেড়ামারার কিছু অংশ ভারত সীমান্তঘেঁষা — সীমান্ত এলাকায় বিজিবির নির্দেশনা মানুন।', en: 'Parts of Daulatpur and Bheramara lie along the Indian border — follow BGB instructions there.' },
    ],
    hospital: { bn: 'কুষ্টিয়া ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Kushtia 250-bed General Hospital' },
    spotUpdates: [
      {
        slug: 'lalon-mazar',
        descEn: 'The shrine of the Baul master surrounded by the sound of the ektara and gatherings of sadhus — come at festival time and you will drown in a sea of song.',
        howEn: 'Easy-bike from Kushtia town to Chheuria.',
        bestTime: { bn: 'দোলপূর্ণিমা ও ১ কার্তিকের লালন উৎসব; সন্ধ্যার সাধুসঙ্গ', en: 'Lalon festivals at Dol Purnima and 1 Kartik (mid-October); evening gatherings year-round' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'shilaidaha-kuthibari',
        descEn: 'Tagore wrote many of the songs of Gitanjali at this Kuthibari near the Padma — memories of his river journeys and the shade of mango groves.',
        howEn: 'Easy-bike via Kumarkhali; closed on Mondays (government museum schedule).',
        bestTime: { bn: 'শীতকাল; ২৫শে বৈশাখ রবীন্দ্রজয়ন্তী', en: 'Winter; Tagore’s birth anniversary (25 Baishakh, early May)' },
        entry: [20, 50],
        hours: 2,
      },
    ],
    newSpots: [
      {
        slug: 'tagore-lodge-kushtia', bn: 'টেগর লজ, কুষ্টিয়া', en: 'Tagore Lodge, Kushtia',
        cat: 'heritage', lat: 23.905, lng: 89.125, tags: ['relaxed', 'family'], hidden: true,
        desc: {
          bn: 'কুষ্টিয়া শহরের মিলপাড়ায় রবীন্দ্রনাথের ব্যবসায়িক কাজে ব্যবহৃত দোতলা বাড়ি — এখন সংরক্ষিত স্মৃতি-জাদুঘর।',
          en: 'A two-storey house in Milpara, Kushtia town, that Tagore used for his business affairs — now a preserved memorial museum.',
        },
        how: {
          bn: 'কুষ্টিয়া শহর থেকে রিকশা বা অটোতে মিলপাড়া।',
          en: 'Rickshaw or easy-bike within Kushtia town to Milpara.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 20], hours: 0.5,
      },
      {
        slug: 'mir-mosharraf-hossain-homestead', bn: 'মীর মশাররফ হোসেনের বাস্তুভিটা, লাহিনীপাড়া', en: 'Mir Mosharraf Hossain’s homestead, Lahinipara',
        cat: 'heritage', lat: 23.86, lng: 89.24, tags: ['relaxed'], hidden: true,
        desc: {
          bn: '“বিষাদ-সিন্ধু”র লেখক মীর মশাররফ হোসেনের জন্মভিটা কুমারখালীর লাহিনীপাড়ায় — স্মৃতি-পাঠাগার ও স্মৃতিফলক।',
          en: 'The birthplace of Mir Mosharraf Hossain, author of “Bishad Sindhu”, at Lahinipara in Kumarkhali — with a memorial library and plaque.',
        },
        how: {
          bn: 'কুষ্টিয়া থেকে কুমারখালীর পথে অটোতে; শিলাইদহের সঙ্গে একদিনে ঘোরা যায়।',
          en: 'Easy-bike from Kushtia towards Kumarkhali; easy to combine with Shilaidaha in one day.',
        },
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'jhaudia-shahi-mosque', bn: 'ঝাউদিয়া শাহী মসজিদ', en: 'Jhaudia Shahi Mosque',
        cat: 'heritage', lat: 23.8, lng: 89.06, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'কুষ্টিয়া সদরের ঝাউদিয়ায় মোগল আমলের পাঁচ গম্বুজ মসজিদ — টেরাকোটা ও কারুকাজে সমৃদ্ধ, এখনো নামাজ হয়।',
          en: 'A Mughal-era five-domed mosque at Jhaudia in Kushtia Sadar, richly decorated and still in use for prayers.',
        },
        how: {
          bn: 'কুষ্টিয়া শহর থেকে অটো বা বাসে ঝাউদিয়া।',
          en: 'Easy-bike or bus from Kushtia town to Jhaudia.',
        },
        bestTime: { bn: 'শীতকাল; নামাজের সময় এড়িয়ে যান', en: 'Winter; avoid prayer times' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },

  // ── Chuadanga ──
  {
    slug: 'chuadanga',
    en: {
      overview:
        'Chuadanga is tied to the first days of the Liberation War — a railway station that witnessed history, century-old mosques and a memorial trail running on to neighbouring Meherpur.',
      transport: 'From Dhaka by train (Chitra / Sundarban Express) or bus, 5–6 hours.',
      food: 'Famous for black-cumin (kalojira) honey and betel leaf; it is also a major maize-growing district.',
      season: 'Winter is the best time to travel.',
    },
    warnings: [
      { bn: 'দর্শনা ও জীবননগর এলাকা ভারত সীমান্তঘেঁষা — সীমান্তের কাছে বিজিবির নির্দেশনা মেনে চলুন।', en: 'Darshana and Jibannagar lie along the Indian border — follow BGB instructions near the boundary.' },
      { bn: 'চুয়াডাঙ্গা দেশের অন্যতম উষ্ণ ও শীতলতম জেলা — গ্রীষ্মে তাপপ্রবাহ, শীতে শৈত্যপ্রবাহে প্রস্তুতি নিয়ে যান।', en: 'Chuadanga often records some of the country’s hottest and coldest temperatures — prepare for heatwaves in summer and cold spells in winter.' },
      { bn: 'গ্রামের পথে অটো-নছিমনই ভরসা — রাতে প্রত্যন্ত এলাকায় যানবাহন পাওয়া কঠিন।', en: 'Rural travel depends on easy-bikes and nosimon carts — transport is hard to find in remote areas after dark.' },
    ],
    hospital: { bn: 'চুয়াডাঙ্গা সদর হাসপাতাল', en: 'Chuadanga Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'gholdari-mosque',
        descEn: 'An ancient Sultanate-era mosque — one of the earliest witnesses of Islamic architecture in this region.',
        howEn: 'Easy-bike from Alamdanga to Gholdari.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি', en: 'November–February' },
        entry: [0, 0],
        hours: 0.5,
      },
    ],
    newSpots: [
      {
        slug: 'carew-and-co-darshana', bn: 'কেরু অ্যান্ড কোং, দর্শনা', en: 'Carew & Co., Darshana',
        cat: 'heritage', lat: 23.53, lng: 88.8, tags: ['family', 'relaxed'], hidden: false,
        desc: {
          bn: '১৯৩৮ সালে প্রতিষ্ঠিত দেশের বৃহৎ চিনিকল ও ডিস্টিলারি — বিশাল ছায়াঘেরা কারখানা-চত্বর, পুরোনো বাংলো আর আখের রেললাইন।',
          en: 'One of the country’s largest sugar mill and distillery complexes, founded in 1938 — a vast, tree-shaded campus with old bungalows and cane rail tracks.',
        },
        how: {
          bn: 'চুয়াডাঙ্গা থেকে বাস বা ট্রেনে দর্শনা; কারখানার ভেতরে ঢুকতে কর্তৃপক্ষের অনুমতি লাগে।',
          en: 'Bus or train from Chuadanga to Darshana; entering the factory area requires permission from the management.',
        },
        bestTime: { bn: 'আখমাড়াই মৌসুম, ডিসেম্বর–মার্চ', en: 'Cane-crushing season, December–March' },
        entry: [0, 0], hours: 1.5,
      },
      {
        slug: 'karpashdanga-nilkuthi', bn: 'কার্পাসডাঙ্গা নীলকুঠি', en: 'Karpashdanga Nilkuthi',
        cat: 'heritage', lat: 23.58, lng: 88.76, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'দামুড়হুদার কার্পাসডাঙ্গায় ভৈরব নদের ধারে নীলকরদের কুঠিবাড়ি — নীল বিদ্রোহের যুগের নীরব সাক্ষী।',
          en: 'An indigo planters’ house beside the Bhairab River at Karpashdanga, Damurhuda — a silent witness to the era of the Indigo Revolt.',
        },
        how: {
          bn: 'চুয়াডাঙ্গা থেকে বাসে দামুড়হুদা, তারপর অটোতে কার্পাসডাঙ্গা।',
          en: 'Bus from Chuadanga to Damurhuda, then an easy-bike to Karpashdanga.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'darshana-railway-station', bn: 'দর্শনা রেলস্টেশন', en: 'Darshana railway station',
        cat: 'other', lat: 23.5, lng: 88.79, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'ব্রিটিশ আমলের কলকাতা-রেলপথের ঐতিহাসিক সীমান্ত স্টেশন — ঢাকা-কলকাতা মৈত্রী এক্সপ্রেস এখান দিয়েই সীমান্ত পার হয়।',
          en: 'A historic border station on the colonial-era Calcutta railway line — the Dhaka–Kolkata Maitree Express crosses the border here.',
        },
        how: {
          bn: 'চুয়াডাঙ্গা স্টেশন থেকে লোকাল ট্রেন বা বাসে দর্শনা; কেরু থেকে অটোতে কয়েক মিনিট।',
          en: 'Local train or bus from Chuadanga to Darshana; a few minutes by easy-bike from Carew & Co.',
        },
        bestTime: { bn: 'সারা বছর', en: 'Year-round' },
        entry: [0, 0], hours: 0.5,
        warnings: [{ bn: 'সীমান্তঘেঁষা এলাকা — রেললাইন ধরে সীমান্তের দিকে হাঁটবেন না।', en: 'Border area — do not walk along the tracks towards the boundary.' }],
      },
    ],
  },

  // ── Meherpur ──
  {
    slug: 'meherpur',
    en: {
      overview:
        'Meherpur is where independence was sworn in — Bangladesh’s first government took its oath in the mango grove of Mujibnagar. Visit the memorial complex and the indigo-era Amjhupi Nilkuthi.',
      transport:
        'Meherpur is 6–7 hours from Dhaka by bus; Mujibnagar is about 30 minutes from town by easy-bike.',
      food: 'Meherpur’s sabitri and roshkadam sweets are famous, and mangoes are plentiful.',
      season: 'Special events are held around 17 April (Mujibnagar Day); winter is the most comfortable time to travel.',
    },
    warnings: [
      { bn: 'মুজিবনগর ও গাংনী এলাকা ভারত সীমান্তঘেঁষা — সীমান্তের কাছে যাবেন না, বিজিবির নির্দেশনা মেনে চলুন।', en: 'Mujibnagar and Gangni are right on the Indian border — keep away from the boundary and follow BGB instructions.' },
      { bn: '১৭ এপ্রিল মুজিবনগর দিবসে প্রচণ্ড ভিড় ও যানজট — আগেভাগে রওনা দিন।', en: 'Mujibnagar Day (17 April) brings heavy crowds and traffic — set out early.' },
      { bn: 'গ্রীষ্মে তাপমাত্রা অনেক বেড়ে যায় — দুপুরের রোদ এড়িয়ে চলুন, পর্যাপ্ত পানি সঙ্গে রাখুন।', en: 'Summer temperatures run very high — avoid the midday sun and carry plenty of water.' },
    ],
    hospital: { bn: 'মেহেরপুর ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Meherpur 250-bed General Hospital' },
    spotUpdates: [
      {
        slug: 'mujibnagar-complex',
        descEn: 'The mango grove where Bangladesh’s first government was sworn in on 17 April 1971 — a memorial of 23 pillars, with murals and a relief map telling the story of the Liberation War.',
        howEn: 'Bus or easy-bike from Meherpur to Mujibnagar.',
        bestTime: { bn: 'অক্টোবর–মার্চ; ১৭ এপ্রিল বিশেষ আয়োজন', en: 'October–March; special events on 17 April' },
        entry: [0, 20],
        hours: 2,
      },
      {
        slug: 'amjhupi-nilkuthi',
        descEn: 'An indigo-planter’s mansion beside the Kajla River — a shaded compound bearing the marks of colonial history.',
        howEn: 'Easy-bike from Meherpur town to Amjhupi.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'bhatpara-nilkuthi', bn: 'ভাটপাড়া নীলকুঠি', en: 'Bhatpara Nilkuthi',
        cat: 'heritage', lat: 23.83, lng: 88.76, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'গাংনীর ভাটপাড়ায় কাজলা নদীর পাড়ে নীলকরদের পরিত্যক্ত কুঠি — ইটের ধ্বংসাবশেষ আর গাছপালায় ঢাকা নীরব ইতিহাস।',
          en: 'An abandoned indigo planters’ house at Bhatpara in Gangni, by the Kajla River — brick ruins and silent history overgrown with trees.',
        },
        how: {
          bn: 'মেহেরপুর থেকে বাসে গাংনী, তারপর অটোতে ভাটপাড়া।',
          en: 'Bus from Meherpur to Gangni, then an easy-bike to Bhatpara.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'ভবন জরাজীর্ণ — দেয়াল বা ছাদের নিচে বেশিক্ষণ দাঁড়াবেন না।', en: 'The structure is crumbling — do not linger under walls or roofs.' }],
      },
      {
        slug: 'ballavpur-mission-church', bn: 'বল্লভপুর মিশন গির্জা', en: 'Ballavpur Mission Church',
        cat: 'heritage', lat: 23.66, lng: 88.6, tags: ['relaxed', 'family'], hidden: true,
        desc: {
          bn: 'মুজিবনগরের কাছে উনিশ শতকের খ্রিষ্টান মিশন — পুরোনো গির্জা, সমাধিক্ষেত্র আর শান্ত গ্রামীণ প্রাঙ্গণ।',
          en: 'A 19th-century Christian mission near Mujibnagar — an old church, a cemetery and a peaceful village compound.',
        },
        how: {
          bn: 'মুজিবনগর স্মৃতিসৌধ থেকে অটোতে অল্প দূরে।',
          en: 'A short easy-bike ride from the Mujibnagar memorial.',
        },
        bestTime: { bn: 'শীতকাল; বড়দিনে উৎসবমুখর', en: 'Winter; festive at Christmas' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'bhoborpara-rosary-church', bn: 'ভবরপাড়া রোজারি মাতার গির্জা', en: 'Bhoborpara Rosary Church',
        cat: 'heritage', lat: 23.68, lng: 88.62, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'মুজিবনগর উপজেলার ভবরপাড়ায় পুরোনো ক্যাথলিক মিশন ও গির্জা — বড়দিনে আলোকসজ্জা আর মেলায় মুখর হয়ে ওঠে।',
          en: 'An old Catholic mission and church at Bhoborpara in Mujibnagar upazila, which comes alive with lights and a fair at Christmas.',
        },
        how: {
          bn: 'মেহেরপুর বা মুজিবনগর থেকে অটোতে ভবরপাড়া; বল্লভপুরের সঙ্গে একসাথে ঘোরা যায়।',
          en: 'Easy-bike from Meherpur or Mujibnagar to Bhoborpara; easy to combine with Ballavpur.',
        },
        bestTime: { bn: 'ডিসেম্বর, বড়দিন', en: 'December, around Christmas' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },
];
