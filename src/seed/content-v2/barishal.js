// Content v2 — Barishal division (barishal, bhola, patuakhali, pirojpur, barguna, jhalokathi)
// Fares and entry fees are conservative approximations — verify on the next field visit.
export default [
  // ── Barishal ──
  {
    slug: 'barishal',
    en: {
      overview:
        'The “Venice of Bengal” — Barishal is woven from a web of canals and rivers. The minaret of Guthia Mosque, the banks of Durga Sagar and the romance of overnight launch journeys are part of everyday life here.',
      transport:
        'The classic way in is an overnight launch from Dhaka’s Sadarghat (about 8 hours on the river; deck and cabin classes available). By bus via the Padma Bridge it takes 4–5 hours.',
      food:
        'A district of amra (hog plum) and hilsa — rice, fresh hilsa and dal at a riverside hotel is pure bliss.',
      season:
        'The floating guava markets run July–September; launch trips are enjoyable all year, but winter (November–February) is calmest on the rivers.',
    },
    warnings: [
      { bn: 'লঞ্চে লাইফ জ্যাকেট ও জরুরি বহির্গমন কোথায় আছে উঠেই দেখে নিন; অতিরিক্ত যাত্রী বোঝাই লঞ্চে উঠবেন না।', en: 'On a launch, locate the life jackets and emergency exits as soon as you board; never take an overloaded vessel.' },
      { bn: 'ঝড়ের মৌসুমে (এপ্রিল–মে) ও সতর্কসংকেত জারি থাকলে নৌযাত্রা বাতিল হতে পারে — রওনার আগে আবহাওয়া বার্তা দেখুন।', en: 'In the storm season (April–May) and whenever a river warning signal is up, launches may be cancelled — check the weather bulletin before setting out.' },
      { bn: 'সদরঘাট ও বরিশাল লঞ্চঘাটের ভিড়ে মোবাইল-মানিব্যাগ সামলে রাখুন; কেবিন অনলাইনে বা কাউন্টার থেকে আগেভাগে বুক করুন।', en: 'Watch your phone and wallet in the crowds at Sadarghat and Barishal launch terminal; book cabins in advance online or at the counter.' },
    ],
    hospital: { bn: 'শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল', en: 'Sher-e-Bangla Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'durga-sagar',
        descEn: 'A royal tank dug some 250 years ago — with an island in the middle, coconut palms along its banks and migratory birds in winter.',
        howEn: 'From Barishal town take a bus or auto-rickshaw along the Banaripara road to Madhabpasha (about 30 minutes).',
        bestTime: { bn: 'শীতকাল (নভেম্বর–ফেব্রুয়ারি), পরিযায়ী পাখির সময়', en: 'Winter (Nov–Feb), when migratory birds arrive' },
        entry: [20, 50],
        hours: 2,
      },
      {
        slug: 'guthia-mosque',
        descEn: 'A showpiece of modern mosque architecture on a 20-acre landscaped complex, crowned by a 193-foot minaret and ringed by ponds and gardens.',
        howEn: 'At Guthia on the Barishal–Banaripara road; easy by auto-rickshaw from town (about 40 minutes).',
        bestTime: { bn: 'বিকেল ও সন্ধ্যা — আলোকসজ্জায় মসজিদ সবচেয়ে সুন্দর', en: 'Late afternoon into evening, when the mosque is lit up' },
        entry: [0, 0],
        hours: 1.5,
      },
      {
        slug: 'oxford-mission-church',
        descEn: 'The century-old red-brick Church of the Epiphany — one of the finest Gothic-style churches in the subcontinent, set among quiet lawns and trees.',
        howEn: 'On Bogura Road in Barishal town; ask permission at the gate before going inside.',
        bestTime: { bn: 'সারা বছর, দিনের বেলায়; বড়দিনে বিশেষ সাজ', en: 'Year-round in daylight; specially decorated at Christmas' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'bibir-pukur',
        bn: 'বিবির পুকুর',
        en: 'Bibir Pukur',
        cat: 'other',
        lat: 22.701,
        lng: 90.37,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'শহরের প্রাণকেন্দ্রে দুইশ বছরের পুরোনো দিঘি — সন্ধ্যায় আলো-ঝলমলে পাড়ে হাঁটা আর ফুচকা-চায়ের আড্ডা বরিশালের নিত্যদিনের ছবি।',
          en: 'A two-century-old pond in the heart of the city — strolling its lit-up banks with fuchka and tea in the evening is a slice of everyday Barishal.',
        },
        how: { bn: 'সদর রোডের পাশেই; শহরের যেকোনো জায়গা থেকে রিকশায় কয়েক মিনিট।', en: 'Right beside Sadar Road; a few minutes by rickshaw from anywhere in town.' },
        bestTime: { bn: 'সন্ধ্যাবেলা', en: 'Evening' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'satla-shapla-bil',
        bn: 'সাতলা শাপলা বিল',
        en: 'Satla Shapla Bil',
        cat: 'river',
        lat: 22.86,
        lng: 90.13,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'উজিরপুরের সাতলায় দিগন্তজোড়া বিলে হাজারো লাল শাপলা ফোটে — ভোরের আলোয় ডিঙিতে বসে দেখা লাল গালিচা অবিস্মরণীয়।',
          en: 'In Satla, Uzirpur, a vast wetland blooms with thousands of red water lilies — gliding through the red carpet by dinghy at dawn is unforgettable.',
        },
        how: { bn: 'বরিশাল থেকে বাসে উজিরপুর/শিকারপুর, সেখান থেকে অটোতে সাতলা; বিলে স্থানীয় ডিঙি ভাড়া পাওয়া যায়।', en: 'Bus from Barishal to Uzirpur/Shikarpur, then auto-rickshaw to Satla; hire a local dinghy at the bil.' },
        bestTime: { bn: 'আগস্ট–অক্টোবর, ভোর থেকে সকাল ৯টা (বেলা বাড়লে শাপলা বুজে যায়)', en: 'August–October, dawn to about 9 am (the lilies close as the sun climbs)' },
        entry: [0, 0],
        hours: 3,
        warnings: [{ bn: 'ছোট ডিঙিতে নড়াচড়া কম করুন; সাঁতার না জানলে লাইফ জ্যাকেট সাথে নিন।', en: 'Keep still in the small dinghies; carry a life jacket if you cannot swim.' }],
      },
      {
        slug: 'lakutia-zamindar-bari',
        bn: 'লাকুটিয়া জমিদার বাড়ি',
        en: 'Lakutia Zamindar Bari',
        cat: 'heritage',
        lat: 22.735,
        lng: 90.335,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'শহরের অদূরে লাকুটিয়ায় জমিদার রূপচন্দ্র রায়ের বংশধরদের পুরোনো প্রাসাদ, মঠ আর দিঘি — জীর্ণ হলেও ইতিহাসের গন্ধ মেলে প্রতিটি দেয়ালে।',
          en: 'Just outside town at Lakutia, the old palace, temple spires and tank of a zamindar family — crumbling now, but history clings to every wall.',
        },
        how: { bn: 'বরিশাল শহর থেকে লাকুটিয়া সড়ক ধরে অটোতে ২০-২৫ মিনিট।', en: 'About 20–25 minutes by auto-rickshaw along the Lakutia road from Barishal town.' },
        bestTime: { bn: 'শীতকাল, দিনের বেলা', en: 'Winter, in daylight' },
        entry: [0, 0],
        hours: 1,
        warnings: [{ bn: 'ভবনগুলো জরাজীর্ণ — ভাঙা অংশে ঢুকবেন না বা ছাদে উঠবেন না।', en: 'The buildings are dilapidated — do not enter broken sections or climb onto roofs.' }],
      },
    ],
  },

  // ── Bhola ──
  {
    slug: 'bhola',
    en: {
      overview:
        'Bhola, the country’s largest island district, is a different world one launch ride from the mainland — deer in the mangroves of Char Kukri-Mukri, sunsets over Monpura and the taste of buffalo-milk curd.',
      transport:
        'Overnight launches run from Dhaka to Bhola and Monpura. For Char Kukri-Mukri, travel to Char Fasson and continue by trawler. From Barishal there are also regular launches and speedboats to Bhola via Laharhat/Bheduria.',
      food:
        'Curd made from raw buffalo milk (moishher doi) is Bhola’s signature; duck curry from the chars is famous too.',
      season:
        'November–February, when the rivers are calm; winter also brings a festival of birds.',
    },
    warnings: [
      { bn: 'মেঘনা মোহনা বর্ষা ও ঝড়ের মৌসুমে ভয়ংকর উত্তাল হয় — সতর্কসংকেত থাকলে ট্রলার বা স্পিডবোটে উঠবেন না।', en: 'The Meghna estuary turns violent in monsoon and storm season — do not take a trawler or speedboat while a warning signal is up.' },
      { bn: 'স্পিডবোটে অবশ্যই লাইফ জ্যাকেট পরুন এবং সন্ধ্যার পর নদী পারাপার এড়িয়ে চলুন।', en: 'Always wear a life jacket on speedboats and avoid river crossings after dark.' },
      { bn: 'চরাঞ্চলে জোয়ার-ভাটায় পথ ডুবে যায়; ট্রলারের ফেরার সময় মাঝির সাথে আগেই ঠিক করে নিন।', en: 'Tides flood paths on the chars; fix the return time with the boatman before you set off.' },
      { bn: 'দ্বীপগুলোতে এটিএম ও ভালো হোটেল কম — নগদ টাকা, পানি আর প্রয়োজনীয় ওষুধ সাথে রাখুন।', en: 'The islands have few ATMs and few good hotels — carry cash, water and essential medicines.' },
    ],
    hospital: { bn: 'ভোলা সদর হাসপাতাল', en: 'Bhola Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'char-kukri-mukri',
        descEn: 'Glimpses of deer and monkeys among the mangroves and the solitude of Tarua beach — a hidden gem of coastal eco-tourism.',
        howEn: 'Trawler from Kacchopia ghat in Char Fasson (about 1–1.5 hours); if staying overnight, book the union rest house in advance.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি', en: 'November–February' },
        entry: [0, 0],
        hours: 6,
      },
      {
        slug: 'monpura',
        descEn: 'A quiet island made famous by the film “Monpura” — both sunrise and sunset stretch across the open Meghna horizon.',
        howEn: 'Launch from Dhaka or Bhola to Monpura ghat; on the island, get around by motorbike or auto-rickshaw.',
        bestTime: { bn: 'শীতকাল, নদী শান্ত থাকার সময়', en: 'Winter, when the river is calm' },
        entry: [0, 0],
        hours: 5,
      },
    ],
    newSpots: [
      {
        slug: 'jacob-tower',
        bn: 'জ্যাকব টাওয়ার, চরফ্যাশন',
        en: 'Jacob Tower, Char Fasson',
        cat: 'other',
        lat: 22.19,
        lng: 90.755,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'চরফ্যাশন শহরের মাঝখানে প্রায় ২২৫ ফুট উঁচু পর্যবেক্ষণ টাওয়ার — চূড়া থেকে দেখা যায় সবুজ চর, নদী আর দূরের মেঘনা।',
          en: 'A roughly 225-foot observation tower in the middle of Char Fasson town — from the top you see green chars, rivers and the distant Meghna.',
        },
        how: { bn: 'ভোলা শহর থেকে বাসে চরফ্যাশন (২-২.৫ ঘণ্টা); টাওয়ার শহরের কেন্দ্রেই, রিকশায় পৌঁছানো যায়।', en: 'Bus from Bhola town to Char Fasson (2–2.5 hours); the tower is in the town centre, reachable by rickshaw.' },
        bestTime: { bn: 'পরিষ্কার আকাশের দিনে বিকেল', en: 'Late afternoon on a clear day' },
        entry: [20, 100],
        hours: 1,
      },
      {
        slug: 'mostafa-kamal-memorial',
        bn: 'বীরশ্রেষ্ঠ মোস্তফা কামাল স্মৃতি জাদুঘর',
        en: 'Bir Shreshtha Mostafa Kamal Memorial Museum',
        cat: 'heritage',
        lat: 22.73,
        lng: 90.66,
        tags: ['family'],
        hidden: true,
        desc: {
          bn: 'মুক্তিযুদ্ধের সর্বোচ্চ বীরত্বের খেতাবপ্রাপ্ত সিপাহী মোস্তফা কামালের স্মরণে গ্রন্থাগার ও জাদুঘর — শিশুদের নিয়ে ইতিহাস জানার শান্ত জায়গা।',
          en: 'A library and museum honouring Sepoy Mostafa Kamal, awarded Bangladesh’s highest gallantry title in the Liberation War — a quiet place to learn history with children.',
        },
        how: { bn: 'ভোলা শহর থেকে অটোতে আলীনগর ইউনিয়নের মোস্তফা কামাল গ্রাম।', en: 'Auto-rickshaw from Bhola town to Mostafa Kamal village in Alinagar union.' },
        bestTime: { bn: 'সারা বছর, অফিস সময়ে; ১৮ এপ্রিল তাঁর শাহাদাতবার্ষিকী', en: 'Year-round during office hours; 18 April is his martyrdom anniversary' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'dhal-char',
        bn: 'ঢালচর',
        en: 'Dhal Char',
        cat: 'other',
        lat: 21.98,
        lng: 90.85,
        tags: ['adventure'],
        hidden: true,
        desc: {
          bn: 'বঙ্গোপসাগরের কোলে চরফ্যাশনের শেষ সীমানার দ্বীপ — কেওড়া বন, হরিণের পায়ের ছাপ আর নির্জন বালুচর মিলে এক অভিযানের নাম।',
          en: 'An island at the very southern edge of Char Fasson facing the Bay of Bengal — keora forest, deer tracks and empty sandbars make it a true expedition.',
        },
        how: { bn: 'চরফ্যাশনের কচ্ছপিয়া বা বেতুয়া ঘাট থেকে ট্রলারে কয়েক ঘণ্টা; স্থানীয় গাইড নেওয়া ভালো।', en: 'Several hours by trawler from Kacchopia or Betua ghat in Char Fasson; a local guide is recommended.' },
        bestTime: { bn: 'ডিসেম্বর–ফেব্রুয়ারি, সাগর শান্ত থাকলে', en: 'December–February, when the sea is calm' },
        entry: [0, 0],
        hours: 8,
        warnings: [{ bn: 'থাকার ব্যবস্থা প্রায় নেই এবং ফেরার ট্রলার জোয়ারের ওপর নির্ভরশীল — খাবার-পানি নিয়ে দিনের আলোয় যাতায়াত করুন।', en: 'There is almost no accommodation and return trawlers depend on the tide — carry food and water and travel in daylight.' }],
      },
    ],
  },

  // ── Patuakhali ──
  {
    slug: 'patuakhali',
    en: {
      overview:
        'Patuakhali, the district of the “daughter of the sea” — sunrise and sunset from the same beach at Kuakata, the Lebur forest and Gangamati char, and the handloom weaving of the Rakhine villages.',
      transport:
        'Direct buses from Dhaka to Kuakata via the Padma Bridge take 6–7 hours. You can also take an overnight launch to Patuakhali and continue by bus to Kuakata (about 2 hours).',
      food:
        'Fresh fish and crab barbecued on the beachfront, plus green coconuts; Rakhine pitha (rice cakes) are worth trying too.',
      season:
        'November–February is best; on a full-moon night the beach is magical.',
    },
    warnings: [
      { bn: 'কুয়াকাটায় ভাটার টান ও গর্তে স্রোত বিপজ্জনক — লাল পতাকা থাকলে বা সন্ধ্যার পর সাগরে নামবেন না, কোমরপানির বেশি যাবেন না।', en: 'Ebb-tide pull and rip currents at Kuakata are dangerous — never swim when red flags are up or after dark, and stay within waist depth.' },
      { bn: 'ঘূর্ণিঝড়ের সংকেত (বিশেষত ৪ বা তার বেশি) জারি হলে সৈকত ছেড়ে নিকটস্থ আশ্রয়কেন্দ্র বা হোটেলে থাকুন।', en: 'If a cyclone signal (especially no. 4 or higher) is raised, leave the beach and stay at a cyclone shelter or your hotel.' },
      { bn: 'সৈকতে বাইক ভাড়ার আগে পুরো ট্যুরের দাম ও স্পটের তালিকা ঠিক করে নিন; জোয়ারের সময় বালুপথে বাইক চলে না।', en: 'Agree the full price and list of stops before hiring a beach motorbike; bikes cannot use the sand track at high tide.' },
    ],
    hospital: { bn: 'পটুয়াখালী ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Patuakhali 250-Bed General Hospital' },
    spotUpdates: [
      {
        slug: 'kuakata-beach',
        descEn: 'An 18-km beach where the sun rises at one end and sets at the other — the only place in Bangladesh to watch both over the open sea.',
        howEn: 'The beach is a short walk from the bus stand; for the sunrise point, take a van or motorbike east to Gangamati.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি; সূর্যোদয় ও সূর্যাস্তের সময়', en: 'November–February, at sunrise and sunset' },
        entry: [0, 0],
        hours: 4,
      },
      {
        slug: 'gangamoti-lebur-bon',
        descEn: 'A lonely beach in the shade of jhau and keora trees, patterned by red crabs — the best stage for sunrise.',
        howEn: 'By motorbike or van east along the beach from Kuakata Zero Point (about 30–40 minutes depending on tide).',
        bestTime: { bn: 'ভোরে সূর্যোদয়ের আগে, ভাটার সময়', en: 'Before sunrise, at low tide' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'misripara-buddhist',
        descEn: 'Home to one of the largest Buddha statues in the subcontinent and the handloom life of the Rakhine community — Kuakata beyond the beach.',
        howEn: 'About 15 minutes by motorbike from Kuakata.',
        bestTime: { bn: 'সারা বছর, দিনের বেলা', en: 'Year-round, in daylight' },
        entry: [0, 20],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'kuakata-rakhine-well',
        bn: 'কুয়াকাটার কুয়া ও সীমা বৌদ্ধ বিহার',
        en: 'Kuakata Well & Sima Buddhist Temple',
        cat: 'heritage',
        lat: 21.822,
        lng: 90.12,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'যে প্রাচীন কুয়ার নামে কুয়াকাটার নাম, সেই রাখাইনদের খোঁড়া কুয়া আর পাশেই অষ্টধাতুর বিশাল বুদ্ধমূর্তির সীমা বৌদ্ধ বিহার।',
          en: 'The old well dug by Rakhine settlers that gave Kuakata its name, beside the Sima Buddhist temple with its large eight-metal Buddha statue.',
        },
        how: { bn: 'জিরো পয়েন্ট থেকে হেঁটে বা রিকশায় ৫-১০ মিনিট, রাখাইন পাড়ায়।', en: '5–10 minutes on foot or by rickshaw from Zero Point, in the Rakhine quarter.' },
        bestTime: { bn: 'সারা বছর, দিনের বেলা', en: 'Year-round, in daylight' },
        entry: [0, 20],
        hours: 1,
      },
      {
        slug: 'kuakata-shutki-palli',
        bn: 'কুয়াকাটা শুটকি পল্লি',
        en: 'Kuakata Dry Fish Village',
        cat: 'other',
        lat: 21.812,
        lng: 90.095,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'সৈকতের পশ্চিম প্রান্তে মাচায় মাচায় রোদে শুকানো লইট্টা-ছুরি মাছ — জেলেদের ব্যস্ত জীবন দেখার আর টাটকা শুটকি কেনার জায়গা।',
          en: 'At the western end of the beach, racks of loitta and ribbonfish drying in the sun — a place to watch fishing life up close and buy fresh shutki.',
        },
        how: { bn: 'জিরো পয়েন্ট থেকে সৈকত ধরে পশ্চিমে হেঁটে বা বাইকে।', en: 'Walk or ride a motorbike west along the beach from Zero Point.' },
        bestTime: { bn: 'নভেম্বর–মার্চ, শুটকি মৌসুম', en: 'November–March, the dry-fish season' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'sonar-char',
        bn: 'সোনার চর',
        en: 'Sonar Char',
        cat: 'other',
        lat: 21.8,
        lng: 90.47,
        tags: ['adventure'],
        hidden: true,
        desc: {
          bn: 'রাঙ্গাবালীর দক্ষিণে বঙ্গোপসাগরের বুকে ম্যানগ্রোভ-ঘেরা চর — দুপুরের রোদে সোনালি বালু আর লাল কাঁকড়ার রাজত্ব।',
          en: 'A mangrove-fringed char in the Bay of Bengal south of Rangabali — golden sand under the midday sun and a kingdom of red crabs.',
        },
        how: { bn: 'পটুয়াখালী থেকে গলাচিপা হয়ে রাঙ্গাবালী, তারপর ট্রলারে; কুয়াকাটা থেকেও রিজার্ভ ট্রলারে যাওয়া যায়।', en: 'From Patuakhali via Galachipa to Rangabali, then by trawler; reserved trawlers also run from Kuakata.' },
        bestTime: { bn: 'ডিসেম্বর–ফেব্রুয়ারি, সাগর শান্ত থাকলে', en: 'December–February, when the sea is calm' },
        entry: [0, 0],
        hours: 6,
        warnings: [{ bn: 'খোলা সাগরে ট্রলারযাত্রা — লাইফ জ্যাকেট ছাড়া যাবেন না, আবহাওয়া খারাপ হলে যাত্রা বাতিল করুন।', en: 'This is an open-sea trawler trip — do not go without life jackets, and cancel if the weather turns.' }],
      },
    ],
  },

  // ── Pirojpur ──
  {
    slug: 'pirojpur',
    en: {
      overview:
        'The guava capital — floating guava markets on the canals of Swarupkathi, rows of orchards at Kuriana and a floating timber market; in monsoon Pirojpur becomes a festival on the water.',
      transport:
        'Buses from Dhaka to Pirojpur or Swarupkathi take 5–6 hours. To tour the guava market, hire a dinghy boat from Kuriana ghat.',
      food:
        'Tree-ripened guava and amra, of course — along with coconut naru (sweet coconut balls).',
      season:
        'Peak guava season is July–August, when the market is in full colour.',
    },
    warnings: [
      { bn: 'ভাসমান বাজারের সরু খালে নৌকা ভিড় করে — ছবি তোলার সময় ডিঙিতে দাঁড়াবেন না, ভারসাম্য রাখুন।', en: 'Boats crowd the narrow canals of the floating market — do not stand up in the dinghy to take photos; keep your balance.' },
      { bn: 'নৌকা ভাড়া ঘণ্টা হিসেবে আগেই দরদাম করে ঠিক করুন; বর্ষায় ভিড়ের দিনে দাম বেড়ে যায়।', en: 'Agree the hourly boat fare before setting off; prices rise on crowded monsoon days.' },
      { bn: 'বাগানের পেয়ারা মালিকের অনুমতি ছাড়া ছিঁড়বেন না — কিনে খান, কৃষকরাও খুশি হবেন।', en: 'Do not pick guavas from orchards without the owner’s permission — buy them; the farmers will be glad.' },
    ],
    hospital: { bn: 'পিরোজপুর জেলা হাসপাতাল', en: 'Pirojpur District Hospital' },
    spotUpdates: [
      {
        slug: 'kuriana-guava',
        descEn: 'Hundreds of guava-laden dinghies buying and selling along the canal — touring this unique floating farm market by boat is an unforgettable experience.',
        howEn: 'Hire a boat by the hour from Swarupkathi or Kuriana ghat; go early in the morning for the real market.',
        bestTime: { bn: 'জুলাই–আগস্ট, সকাল ৭টা–১১টা', en: 'July–August, 7–11 am' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'rayerkathi-zamindar',
        descEn: 'The ruins of a palace-and-temple complex some 350 years old — moss-covered history in quiet countryside.',
        howEn: 'By auto-rickshaw from Pirojpur town (about 15–20 minutes).',
        bestTime: { bn: 'শীতকাল, দিনের বেলা', en: 'Winter, in daylight' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'swarupkathi-timber-market',
        bn: 'স্বরূপকাঠির ভাসমান কাঠের হাট',
        en: 'Swarupkathi Floating Timber Market',
        cat: 'river',
        lat: 22.755,
        lng: 90.11,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'সন্ধ্যা নদী আর খালে ভেসে থাকা সারি সারি গাছের গুঁড়ি, নৌকায় নৌকায় কাঠ আর নারকেলের কেনাবেচা — দেশের অন্যতম বড় ভাসমান কাঠের বাজার।',
          en: 'Rows of logs floating on the Sandhya river and canals, with timber and coconuts traded boat to boat — one of the largest floating timber markets in the country.',
        },
        how: { bn: 'স্বরূপকাঠি (নেছারাবাদ) বাজার ঘাট থেকে নৌকায় ঘুরে দেখুন; পেয়ারা বাজারের সাথে একই দিনে মেলানো যায়।', en: 'Explore by boat from Swarupkathi (Nesarabad) bazaar ghat; easy to combine with the guava market on the same day.' },
        bestTime: { bn: 'সারা বছর, হাটবারের সকাল', en: 'Year-round, on market-day mornings' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'bekutia-bridge',
        bn: 'বেকুটিয়া সেতু (অষ্টম বাংলাদেশ-চীন মৈত্রী সেতু)',
        en: 'Bekutia Bridge',
        cat: 'river',
        lat: 22.6,
        lng: 90.0,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'কচা নদীর ওপর প্রায় দেড় কিলোমিটার লম্বা মৈত্রী সেতু — বিকেলে সেতুর নিচের নদীতীর থেকে সূর্যাস্ত আর চলমান নৌযান দেখার জনপ্রিয় জায়গা।',
          en: 'A roughly 1.5-km friendship bridge over the Kocha river — a popular spot to watch sunset and passing river traffic from the banks below.',
        },
        how: { bn: 'পিরোজপুর শহর থেকে অটো বা বাসে বেকুটিয়া (১৫-২০ মিনিট)।', en: 'Auto-rickshaw or bus from Pirojpur town to Bekutia (15–20 minutes).' },
        bestTime: { bn: 'বিকেল থেকে সন্ধ্যা', en: 'Late afternoon to dusk' },
        entry: [0, 0],
        hours: 1,
        warnings: [{ bn: 'সেতুর ওপর দাঁড়িয়ে ছবি তোলা বিপজ্জনক — দ্রুতগামী যানবাহন চলে; নদীতীর থেকে দেখুন।', en: 'Stopping on the bridge deck for photos is dangerous with fast traffic — enjoy the view from the riverbank.' }],
      },
      {
        slug: 'nazirpur-floating-gardens',
        bn: 'নাজিরপুরের ভাসমান সবজি বাগান',
        en: 'Nazirpur Floating Gardens',
        cat: 'river',
        lat: 22.75,
        lng: 89.95,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'জলাবদ্ধ বিলে কচুরিপানার ধাপে চাষ হয় সবজি আর চারা — শত বছরের পুরোনো এই ভাসমান কৃষি জাতিসংঘের খাদ্য ও কৃষি সংস্থার স্বীকৃতিও পেয়েছে।',
          en: 'Vegetables and seedlings grown on rafts of water hyacinth in flooded wetlands — a centuries-old floating agriculture recognised by the UN Food and Agriculture Organization.',
        },
        how: { bn: 'পিরোজপুর থেকে বাসে নাজিরপুর, তারপর অটোতে দেউলবাড়ী-দোবড়া বা বৈঠাকাটা এলাকায়; ছোট নৌকায় বিল ঘোরা যায়।', en: 'Bus from Pirojpur to Nazirpur, then auto-rickshaw to the Deulbari-Dobra or Boithakata area; tour the wetland by small boat.' },
        bestTime: { bn: 'জুলাই–অক্টোবর, বর্ষার ভরা বিলে', en: 'July–October, when the wetlands are full' },
        entry: [0, 0],
        hours: 3,
      },
    ],
  },

  // ── Barguna ──
  {
    slug: 'barguna',
    en: {
      overview:
        'Coastal Barguna on the edge of the Sundarbans — breathe the forest from the trails and tower at Haringhata, walk the lonely beach at Laldia, and watch the Payra and Bishkhali meet the sea.',
      transport:
        'Barguna is 6–7 hours from Dhaka by launch or bus. Reach Haringhata via Patharghata by auto-rickshaw.',
      food:
        'Fresh hilsa and prawns from the estuary, and fish fried in coconut oil.',
      season:
        'Both the forest and beaches are pleasant in winter; in monsoon the estuary turns rough.',
    },
    warnings: [
      { bn: 'বলেশ্বর-বিষখালী-পায়রার মোহনায় বর্ষায় প্রবল স্রোত ও ঢেউ — ঘূর্ণিঝড় সংকেত থাকলে নৌকায় উঠবেন না, সৈকতে যাবেন না।', en: 'The Baleshwar–Bishkhali–Payra estuary has strong currents and waves in monsoon — stay off boats and beaches whenever a cyclone signal is raised.' },
      { bn: 'সৈকতে জোয়ারের সময় পানি দ্রুত উঠে আসে; ভাটায় কাদায় আটকে যাওয়ার ঝুঁকি — জোয়ারের সময়সূচি জেনে নামুন।', en: 'The tide comes in fast on these beaches and the mudflats can trap you at low tide — check tide times before walking out.' },
      { bn: 'ম্যানগ্রোভ বনে সাপ ও মৌমাছি থাকতে পারে — নির্দিষ্ট ওয়াকওয়ে ছেড়ে ভেতরে যাবেন না, বন্যপ্রাণীকে খাবার দেবেন না।', en: 'Snakes and bees can be found in the mangroves — stay on the walkways and never feed wildlife.' },
    ],
    hospital: { bn: 'বরগুনা জেনারেল হাসপাতাল', en: 'Barguna General Hospital' },
    spotUpdates: [
      {
        slug: 'haringhata',
        descEn: 'Wooden walkways and a watchtower through mangrove forest where three rivers meet — with luck you may spot deer and monkeys.',
        howEn: 'Auto-rickshaw from Patharghata to the eco-park gate (about 20–30 minutes).',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, সকালবেলা', en: 'November–February, in the morning' },
        entry: [20, 50],
        hours: 3,
      },
      {
        slug: 'bibichini-mosque',
        descEn: 'A single-domed Mughal mosque some 350 years old, standing on a raised mound where prayers are still held today.',
        howEn: 'Auto-rickshaw from Betagi upazila town to Bibichini.',
        bestTime: { bn: 'সারা বছর, নামাজের সময় বাদে', en: 'Year-round, outside prayer times' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'shubhosondha-beach',
        bn: 'শুভসন্ধ্যা সৈকত',
        en: 'Shubhosondha Beach',
        cat: 'other',
        lat: 21.94,
        lng: 90.06,
        tags: ['relaxed', 'family'],
        hidden: false,
        desc: {
          bn: 'তালতলীর নিশানবাড়িয়ায় পায়রা মোহনার ঝাউবনঘেরা নিরিবিলি সৈকত — নামের মতোই সন্ধ্যাটা এখানে সবচেয়ে সুন্দর।',
          en: 'A quiet beach lined with casuarina trees on the Payra estuary at Nishanbaria, Taltoli — true to its name (“good evening”), dusk is its finest hour.',
        },
        how: { bn: 'বরগুনা থেকে বাস/অটোতে তালতলী, সেখান থেকে বাইক বা অটোতে নিশানবাড়িয়া।', en: 'Bus or auto-rickshaw from Barguna to Taltoli, then motorbike or auto-rickshaw to Nishanbaria.' },
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, সূর্যাস্তের সময়', en: 'November–February, at sunset' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'tengragiri-sanctuary',
        bn: 'টেংরাগিরি বন্যপ্রাণী অভয়ারণ্য',
        en: 'Tengragiri Wildlife Sanctuary',
        cat: 'garden',
        lat: 21.92,
        lng: 90.02,
        tags: ['adventure', 'relaxed'],
        hidden: true,
        desc: {
          bn: 'তালতলীর সখিনায় সাগরঘেঁষা বিশাল ম্যানগ্রোভ বন — কেওড়া-গেওয়ার ভেতর দিয়ে হাঁটা, পাখির ডাক আর বনের শেষে সাগরের গর্জন।',
          en: 'A large sea-facing mangrove forest at Sakhina, Taltoli — walk among keora and gewa trees to birdsong, with the roar of the sea at the forest’s edge.',
        },
        how: { bn: 'তালতলী থেকে বাইকে সখিনা বনের প্রবেশপথ; শুভসন্ধ্যা সৈকতের সাথে একই দিনে ঘোরা যায়।', en: 'Motorbike from Taltoli to the Sakhina forest entrance; easy to combine with Shubhosondha Beach in one day.' },
        bestTime: { bn: 'শীতকাল, সকালবেলা', en: 'Winter mornings' },
        entry: [0, 0],
        hours: 3,
        warnings: [{ bn: 'বনের গভীরে একা যাবেন না — স্থানীয় গাইড বা বন বিভাগের কর্মীর পরামর্শ নিন।', en: 'Do not go deep into the forest alone — take a local guide or ask the Forest Department staff.' }],
      },
      {
        slug: 'laldia-beach',
        bn: 'লালদিয়া সৈকত',
        en: 'Laldia Beach',
        cat: 'other',
        lat: 21.985,
        lng: 89.97,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'পাথরঘাটায় বলেশ্বর মোহনার নির্জন সৈকত, একপাশে বন আর অন্যপাশে খোলা জল — ভিড়হীন সূর্যাস্ত দেখার আদর্শ জায়গা।',
          en: 'A lonely beach on the Baleshwar estuary at Patharghata, with forest on one side and open water on the other — ideal for a crowd-free sunset.',
        },
        how: { bn: 'পাথরঘাটা থেকে অটোতে; হরিণঘাটা ইকোপার্কের ভেতর দিয়ে হেঁটেও পৌঁছানো যায়।', en: 'By auto-rickshaw from Patharghata; you can also walk there through Haringhata Eco Park.' },
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, বিকেল', en: 'November–February, in the afternoon' },
        entry: [0, 0],
        hours: 2,
      },
    ],
  },

  // ── Jhalokathi ──
  {
    slug: 'jhalokathi',
    en: {
      overview:
        'Jhalokathi is a peaceful district of canals and wetlands — the floating guava market at Bhimruli, the Gabkhan Channel known as the “Suez of Bengal”, and memories of the zamindar estates.',
      transport:
        'Jhalokathi is 5–6 hours from Dhaka by launch or bus (only about 30 minutes by road from Barishal). Reach Bhimruli from town by auto-rickshaw and then boat.',
      food:
        'Alongside guava and amra, try Jhalokathi’s well-known roshogolla.',
      season:
        'July–August, when the floating markets are at their fullest.',
    },
    warnings: [
      { bn: 'ভীমরুলির খালে ছোট ডিঙিতে ভিড় হয় — সাঁতার না জানলে লাইফ জ্যাকেট নিন, শিশুদের নৌকার কিনারায় বসতে দেবেন না।', en: 'The Bhimruli canals get crowded with small dinghies — take a life jacket if you cannot swim and keep children away from the boat’s edge.' },
      { bn: 'গাবখান চ্যানেলে বড় জাহাজ চলাচল করে — ছোট নৌকায় চ্যানেলের মাঝখানে যাবেন না।', en: 'Large vessels use the Gabkhan Channel — do not take small boats into the middle of the channel.' },
      { bn: 'জমিদারবাড়িগুলো জরাজীর্ণ — ভাঙা দেয়াল ও ছাদের নিচে দাঁড়াবেন না।', en: 'The zamindar houses are dilapidated — do not stand beneath broken walls or roofs.' },
    ],
    hospital: { bn: 'ঝালকাঠি সদর হাসপাতাল', en: 'Jhalokathi Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'bhimruli-floating-market',
        descEn: 'A floating market of guavas and vegetables where canals meet — bargain from a dinghy, take photos and taste guavas fresh from the orchard.',
        howEn: 'Auto-rickshaw from Jhalokathi town to Bhimruli (about 30 minutes), then hire a boat at the ghat.',
        bestTime: { bn: 'জুলাই–আগস্ট, সকাল ৭টা–১১টা', en: 'July–August, 7–11 am' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'gabkhan-bridge',
        descEn: 'A striking bridge over one of the country’s deepest navigation channels — watch the parade of ships through the “Suez Canal of Bengal”.',
        howEn: 'By auto-rickshaw from town to the bridge; boat trips along the channel are also possible.',
        bestTime: { bn: 'বিকেল ও সূর্যাস্ত', en: 'Afternoon and sunset' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'kirtipasha-zamindar',
        descEn: 'A two-century-old zamindar complex with a theatre hall and temples — a historic stop on the way to Bhimruli.',
        howEn: 'At Kirtipasha bazaar on the road to Bhimruli.',
        bestTime: { bn: 'সারা বছর, দিনের বেলা; ভীমরুলির সাথে মিলিয়ে', en: 'Year-round in daylight; combine with Bhimruli' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'sher-e-bangla-ancestral-home',
        bn: 'শেরেবাংলা এ কে ফজলুল হকের পৈতৃক বাড়ি, সাতুরিয়া',
        en: 'Sher-e-Bangla’s Ancestral Home, Saturia',
        cat: 'heritage',
        lat: 22.45,
        lng: 90.12,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'রাজাপুরের সাতুরিয়ায় অবিভক্ত বাংলার প্রধানমন্ত্রী শেরেবাংলা এ কে ফজলুল হকের মামাবাড়ি ও জন্মস্থান — স্মৃতি জাদুঘর ও গ্রন্থাগারে তাঁর জীবনের নানা স্মারক।',
          en: 'Saturia in Rajapur, the birthplace of Sher-e-Bangla A. K. Fazlul Huq, Prime Minister of undivided Bengal — a memorial museum and library display relics of his life.',
        },
        how: { bn: 'ঝালকাঠি শহর থেকে বাসে রাজাপুর, তারপর অটোতে সাতুরিয়া।', en: 'Bus from Jhalokathi town to Rajapur, then auto-rickshaw to Saturia.' },
        bestTime: { bn: 'সারা বছর, অফিস সময়ে', en: 'Year-round during office hours' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'sujabad-fort',
        bn: 'সুজাবাদ কেল্লা',
        en: 'Sujabad Fort',
        cat: 'heritage',
        lat: 22.63,
        lng: 90.24,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'মুঘল সুবাদার শাহ সুজার আমলের নদীতীরের দুর্গের ধ্বংসাবশেষ — মাটির উঁচু ঢিবি আর ইতিহাসের গল্প ছাড়া আজ প্রায় কিছুই নেই, তবু ইতিহাসপ্রেমীদের জন্য আকর্ষণীয়।',
          en: 'The remains of a riverside fort from the era of Mughal governor Shah Shuja — little more than raised mounds and stories today, but rewarding for history lovers.',
        },
        how: { bn: 'ঝালকাঠি শহর থেকে অটোতে সুজাবাদ গ্রাম; স্থানীয়দের কাছে কেল্লার ঢিবি জেনে নিন।', en: 'Auto-rickshaw from Jhalokathi town to Sujabad village; ask locals for the fort mound.' },
        bestTime: { bn: 'শীতকাল, দিনের বেলা', en: 'Winter, in daylight' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'ponabalia-shiva-temple',
        bn: 'পোনাবালিয়া শিবমন্দির (শ্যামরাইল)',
        en: 'Ponabalia Shiva Temple, Shamrail',
        cat: 'heritage',
        lat: 22.67,
        lng: 90.27,
        tags: ['relaxed', 'family'],
        hidden: true,
        desc: {
          bn: 'শ্যামরাইলের প্রাচীন শিবমন্দির — শিবচতুর্দশীতে এখানে দক্ষিণবঙ্গের অন্যতম বড় মেলা বসে, হাজারো পুণ্যার্থীর ভিড়ে জমে ওঠে।',
          en: 'An old Shiva temple at Shamrail — during Shiva Chaturdashi it hosts one of the largest fairs in southern Bengal, drawing thousands of pilgrims.',
        },
        how: { bn: 'ঝালকাঠি শহর থেকে অটোতে পোনাবালিয়া ইউনিয়নের শ্যামরাইল।', en: 'Auto-rickshaw from Jhalokathi town to Shamrail in Ponabalia union.' },
        bestTime: { bn: 'ফাল্গুনের শিবচতুর্দশী মেলা (ফেব্রুয়ারি–মার্চ); অন্য সময় নিরিবিলি', en: 'The Shiva Chaturdashi fair (February–March); quiet at other times' },
        entry: [0, 0],
        hours: 1,
      },
    ],
  },
];
