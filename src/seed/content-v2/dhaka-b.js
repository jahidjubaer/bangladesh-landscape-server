// Content v2 — Dhaka division (part B): Tangail, Faridpur, Gopalganj, Madaripur, Rajbari, Shariatpur.
// Fares/fees are conservative approximations — verify on field visits.
export default [
  {
    slug: 'tangail',
    en: {
      overview:
        'Tangail pairs heritage with nature: the red-soil sal forests of Madhupur, the remarkable 201-Dome Mosque and the famous handloom Tangail saree. Terracotta-decorated mosques and old zamindar palaces are scattered across the district.',
      transport:
        'Buses from Dhaka (Mohakhali) reach Tangail in 2–2.5 hours, traffic permitting. For Madhupur and Gopalpur take a Mymensingh- or Jamalpur-bound bus; CNG auto-rickshaws and autos cover short local hops.',
      food:
        'The chomchom of Porabari is famous across the country — buy it fresh in town. Pure ghee from the weaving villages is another local speciality.',
      season:
        'Winter (November–February) is the most comfortable time for forest walks. In pineapple season (June–July) Madhupur is an extra treat, with roadside stalls selling fruit straight from the gardens.',
    },
    warnings: [
      { bn: 'ঢাকা-টাঙ্গাইল মহাসড়কে (চন্দ্রা–এলেঙ্গা অংশ) প্রায়ই তীব্র যানজট হয়, ঈদের আগে-পরে বিশেষ করে — ভোরে রওনা দিন।', en: 'The Dhaka–Tangail highway (Chandra–Elenga stretch) often jams badly, especially around Eid — leave early in the morning.' },
      { bn: 'মধুপুর বনের ভেতরে একা বা সন্ধ্যার পর ঘুরবেন না; বনের পথ গুলিয়ে যায় এবং মোবাইল নেটওয়ার্ক দুর্বল।', en: 'Do not wander deep into Madhupur forest alone or after dusk; trails are confusing and mobile signal is weak.' },
      { bn: '"পোড়াবাড়ির চমচম" নামে সব দোকানেই মিষ্টি বিক্রি হয় — মান যাচাই করে পরিচিত দোকান থেকে কিনুন।', en: 'Almost every shop sells sweets labelled "Porabari chomchom" — check quality and buy from well-reviewed shops.' },
    ],
    hospital: { bn: 'টাঙ্গাইল জেনারেল হাসপাতাল', en: 'Tangail General Hospital' },
    spotUpdates: [
      {
        slug: 'modhupur-forest',
        descEn: 'A realm of gajari (sal) forest on red-soil ridges — Garo villages, pineapple gardens and the quiet Dokhola rest house.',
        howEn: 'Madhupur lies on the Tangail–Mymensingh road; enter the forest from the Rasulpur gate by CNG or auto from Madhupur town.',
        bestTime: { bn: 'শীতকাল (নভেম্বর–ফেব্রুয়ারি); আনারসের জন্য জুন–জুলাই', en: 'Winter (Nov–Feb); June–July for pineapples' },
        entry: [0, 50],
        hours: 4,
      },
      {
        slug: 'atia-mosque',
        descEn: 'A roughly 400-year-old mosque covered in terracotta ornament — it once appeared on the 10-taka note.',
        howEn: 'About 20 minutes by CNG from Tangail town along the Delduar road.',
        bestTime: { bn: 'সারা বছর; সকাল বা বিকেলের আলোয় ছবি ভালো আসে', en: 'Year-round; morning or afternoon light is best for photos' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'mohera-palace',
        descEn: 'Four elegant mansions, a large pond and landscaped gardens — now a police training centre, but open to visitors with a ticket and superb for photos.',
        howEn: 'Get off at Natiapara on the Dhaka–Tangail highway and take an auto to Mohera.',
        bestTime: { bn: 'শীতকাল; ছুটির দিনে ভিড় বেশি', en: 'Winter; crowded on weekends and holidays' },
        entry: [50, 100],
        hours: 2,
      },
      {
        slug: 'gombuj-mosque-201',
        descEn: 'Billed as the mosque with the most domes in the world; a 451-foot minaret is under construction and visitors come from far and wide.',
        howEn: 'At Pathalia in Gopalpur upazila; take a CNG from Tangail town or Madhupur.',
        bestTime: { bn: 'সারা বছর; নামাজের সময় এড়িয়ে যান', en: 'Year-round; avoid prayer times' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'dhanbari-nawab-palace', bn: 'ধনবাড়ী নবাব মঞ্জিল', en: 'Dhanbari Nawab Manzil',
        cat: 'heritage', lat: 24.6795, lng: 89.9585, tags: ['family', 'relaxed'], hidden: false,
        desc: {
          bn: 'নবাব সৈয়দ নওয়াব আলী চৌধুরীর স্মৃতিবিজড়িত প্রাসাদ, প্রাচীন মসজিদ আর বিশাল দিঘি — প্রাসাদের অংশ এখন হেরিটেজ রিসোর্ট।',
          en: 'The palace associated with Nawab Syed Nawab Ali Chowdhury, with an old mosque and a large pond — part of the palace now runs as a heritage resort.',
        },
        how: {
          bn: 'টাঙ্গাইল থেকে মধুপুর হয়ে ধনবাড়ীগামী বাসে, তারপর অটোতে নবাব বাড়ি।',
          en: 'Take a bus from Tangail via Madhupur to Dhanbari, then an auto to the Nawab palace.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 100], hours: 2,
        warnings: [{ bn: 'প্রাসাদের রিসোর্ট অংশে বাইরের দর্শনার্থীদের প্রবেশ সীমিত হতে পারে — আগে খোঁজ নিন।', en: 'Access to the resort section of the palace may be limited for non-guests — check before you go.' }],
      },
      {
        slug: 'jamuna-bridge-bhuapur', bn: 'যমুনা সেতু পূর্ব প্রান্ত (ভূঞাপুর)', en: 'Jamuna Bridge east end, Bhuapur',
        cat: 'river', lat: 24.4, lng: 89.78, tags: ['family', 'relaxed'], hidden: false,
        desc: {
          bn: 'প্রায় ৪.৮ কিমি দীর্ঘ যমুনা সেতু আর পাশের নতুন রেলসেতুর দৃশ্য — নদীপাড়ের রিসোর্ট এলাকা থেকে সূর্যাস্ত দেখার মতো।',
          en: 'Views of the roughly 4.8 km Jamuna road bridge and the new parallel rail bridge — the riverside around the east end is a good sunset spot.',
        },
        how: {
          bn: 'টাঙ্গাইল থেকে এলেঙ্গা হয়ে বাস/সিএনজিতে সেতুর পূর্ব প্রান্ত, প্রায় ৪৫ মিনিট।',
          en: 'Bus or CNG from Tangail via Elenga to the bridge’s east end, about 45 minutes.',
        },
        bestTime: { bn: 'বিকেল ও সূর্যাস্ত; বর্ষায় নদী সবচেয়ে প্রশস্ত', en: 'Late afternoon and sunset; the river is widest in monsoon' },
        entry: [0, 0], hours: 1.5,
        warnings: [{ bn: 'সেতুর ওপর গাড়ি থামানো ও হেঁটে চলা নিষিদ্ধ — শুধু পাড় থেকে দেখুন।', en: 'Stopping or walking on the bridge is prohibited — view it from the riverbank only.' }],
      },
      {
        slug: 'nagarpur-zamindar-bari', bn: 'নাগরপুর জমিদার বাড়ি', en: 'Nagarpur Zamindar Bari',
        cat: 'heritage', lat: 24.06, lng: 89.88, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'চৌধুরী জমিদারদের কারুকার্যময় পুরোনো ভবন ও প্রাঙ্গণ — এখন সরকারি কলেজের অংশ, তবু স্থাপত্য দেখার মতো।',
          en: 'The ornate old buildings of the Chowdhury zamindars — now part of a government college campus, but the architecture is still worth seeing.',
        },
        how: {
          bn: 'টাঙ্গাইল শহর থেকে বাস বা সিএনজিতে নাগরপুর সদর, প্রায় এক ঘণ্টা।',
          en: 'Bus or CNG from Tangail town to Nagarpur, about an hour.',
        },
        bestTime: { bn: 'শীতকাল, ছুটির দিন (কলেজ বন্ধ থাকলে)', en: 'Winter, ideally on a day the college is closed' },
        entry: [0, 0], hours: 1,
      },
    ],
  },
  {
    slug: 'faridpur',
    en: {
      overview:
        'Faridpur is the land of the "Nakshi Kanthar Math" of folk poet Jasimuddin — a district wrapped in Padma chars, the Kumar river and literary memories.',
      transport:
        'Buses from Dhaka cross the Padma Bridge and reach Faridpur in 2.5–3 hours. Autos and rickshaws cover the town and nearby villages.',
      food:
        'Faridpur is date-palm molasses country — in winter, khejur gur and the pithas made with it are unbeatable.',
      season:
        'Winter, the molasses season, is the best time; it is also the most comfortable season for exploring the Padma chars.',
    },
    warnings: [
      { bn: 'পদ্মার চরে নৌকায় যাওয়ার আগে লাইফ জ্যাকেট নিশ্চিত করুন; বর্ষায় স্রোত প্রবল ও পাড় ভাঙনপ্রবণ।', en: 'Make sure there are life jackets before taking a boat to the Padma chars; in monsoon the current is strong and banks collapse.' },
      { bn: 'ঢাকা-ফরিদপুর (ভাঙ্গা) মহাসড়কে দ্রুতগতির বাস ও দুর্ঘটনা বেশি — বিশ্বস্ত পরিবহন বেছে নিন।', en: 'The Dhaka–Bhanga–Faridpur expressway sees fast buses and frequent accidents — choose a reputable operator.' },
      { bn: 'খাঁটি খেজুর গুড় বলে ভেজাল গুড় বিক্রি হয় — পরিচিত উৎস থেকে কিনুন।', en: 'Adulterated molasses is often sold as "pure khejur gur" — buy from a trusted source.' },
    ],
    hospital: { bn: 'ফরিদপুর মেডিকেল কলেজ হাসপাতাল', en: 'Faridpur Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'jasimuddin-bari',
        descEn: 'The folk poet’s family home, grave and memorial museum on the bank of the Kumar river — the house of "Asmani" from his poem is close by.',
        howEn: 'At Ambikapur, about 15 minutes by rickshaw or auto from Faridpur town.',
        bestTime: { bn: 'শীতকাল; জানুয়ারিতে জসীম মেলার সময় জমজমাট', en: 'Winter; lively during the Jasim Mela in January' },
        entry: [0, 30],
        hours: 1.5,
      },
      {
        slug: 'dholar-mor-padma',
        descEn: 'Open Padma breezes, sandbars and sunsets — the townspeople’s favourite afternoon hangout.',
        howEn: 'By auto from town along the C&B Ghat road.',
        bestTime: { bn: 'বিকেল ও সূর্যাস্ত; শীত-বসন্ত', en: 'Late afternoon and sunset; winter and spring' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'mathurapur-deul', bn: 'মথুরাপুর দেউল', en: 'Mathurapur Deul',
        cat: 'heritage', lat: 23.53, lng: 89.63, tags: ['relaxed', 'family'], hidden: true,
        desc: {
          bn: 'মধুখালীর মাঠে দাঁড়িয়ে থাকা প্রায় ৯০ ফুট উঁচু পোড়ামাটির অলংকৃত দেউল — সংরক্ষিত প্রত্নস্থান, কারুকাজ মুগ্ধ করে।',
          en: 'A terracotta-decorated tower temple about 90 feet tall rising from the fields of Madhukhali — a protected monument with striking ornamentation.',
        },
        how: {
          bn: 'ফরিদপুর থেকে মাগুরা/ঝিনাইদহগামী বাসে মধুখালী, তারপর অটো বা ভ্যানে মথুরাপুর।',
          en: 'Take a Magura- or Jhenaidah-bound bus from Faridpur to Madhukhali, then an auto or van to Mathurapur.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'satair-mosque', bn: 'সাতৈর শাহী মসজিদ', en: 'Satair Shahi Mosque',
        cat: 'heritage', lat: 23.4, lng: 89.65, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'বোয়ালমারীর সাতৈর গ্রামে সুলতানি আমলের বহু গম্বুজের প্রাচীন মসজিদ — সাতৈরের নকশি পাটিও এখানকার গর্ব।',
          en: 'An old multi-domed Sultanate-era mosque in Satair village, Boalmari — the village is also known for its patterned mats (nakshi pati).',
        },
        how: {
          bn: 'ফরিদপুর থেকে বাসে বোয়ালমারী, সেখান থেকে অটোতে সাতৈর।',
          en: 'Bus from Faridpur to Boalmari, then an auto to Satair.',
        },
        bestTime: { bn: 'সারা বছর; নামাজের সময় এড়িয়ে যান', en: 'Year-round; avoid prayer times' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'faridpur-sri-angan', bn: 'শ্রীধাম শ্রীঅঙ্গন, ফরিদপুর', en: 'Sri Angan, Faridpur',
        cat: 'heritage', lat: 23.6, lng: 89.84, tags: ['relaxed', 'family'], hidden: false,
        desc: {
          bn: 'প্রভু জগদ্বন্ধু সুন্দরের স্মৃতিবিজড়িত আশ্রম ও মন্দির — নিরবচ্ছিন্ন কীর্তনের জন্য খ্যাত, সারা দেশের ভক্তদের তীর্থ।',
          en: 'The ashram and temple of Prabhu Jagadbandhu Sundar, known for its continuous kirtan and a pilgrimage site for devotees from across the country.',
        },
        how: {
          bn: 'ফরিদপুর শহরের গোয়ালচামট এলাকায়; রিকশা বা অটোতে কয়েক মিনিট।',
          en: 'In the Goalchamot area of Faridpur town; a few minutes by rickshaw or auto.',
        },
        bestTime: { bn: 'সারা বছর; উৎসবের সময় ভিড় বেশি', en: 'Year-round; crowded during festivals' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'উপাসনালয় — শালীন পোশাক পরুন এবং ছবি তোলার আগে অনুমতি নিন।', en: 'A place of worship — dress modestly and ask before taking photos.' }],
      },
    ],
  },
  {
    slug: 'gopalganj',
    en: {
      overview:
        'The birthplace of Bangabandhu Sheikh Mujibur Rahman — Gopalganj is a quiet district on the Madhumati river, home to the mausoleum complex at Tungipara.',
      transport:
        'Buses from Dhaka via the Padma Bridge reach Gopalganj in 3–3.5 hours; Tungipara is another 30 minutes by bus or auto.',
      food:
        'Fish from the Madhumati, fresh date-palm juice in winter and home-set curd (doi).',
      season:
        'Year-round; special programmes have traditionally been held at Tungipara on 17 March and 15 August, when it gets very crowded.',
    },
    warnings: [
      { bn: 'টুঙ্গিপাড়া কমপ্লেক্সে নিরাপত্তা তল্লাশি ও খোলার সময়সূচিতে পরিবর্তন হতে পারে — রাজনৈতিক কর্মসূচির দিনে যাওয়ার আগে খোঁজ নিন।', en: 'Security checks and opening hours at the Tungipara complex can change — check before visiting on days of political events.' },
      { bn: 'বর্ষায় বিল ও নিচু এলাকার রাস্তা ডুবে যায় — কোটালীপাড়া-মুকসুদপুরের দিকে যাওয়ার আগে পথের অবস্থা জেনে নিন।', en: 'In monsoon, roads through the low-lying beels flood — ask about road conditions before heading towards Kotalipara or Muksudpur.' },
      { bn: 'মধুমতিতে ছোট নৌকায় লাইফ জ্যাকেট থাকে না বললেই চলে — সাঁতার না জানলে সাবধান থাকুন।', en: 'Small boats on the Madhumati rarely carry life jackets — take care if you cannot swim.' },
    ],
    hospital: { bn: 'গোপালগঞ্জ ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Gopalganj 250-Bed General Hospital' },
    spotUpdates: [
      {
        slug: 'tungipara-mausoleum',
        descEn: 'An architecturally striking complex around the grave of Bangabandhu Sheikh Mujibur Rahman, with a library, museum and his ancestral home.',
        howEn: 'Bus or auto from Gopalganj town to Tungipara, about 30 minutes.',
        bestTime: { bn: 'সারা বছর; শীতে আরামদায়ক', en: 'Year-round; most comfortable in winter' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'ulpur-zamindar',
        descEn: 'A row of old zamindari buildings scattered through the village — a little-known favourite of photographers.',
        howEn: 'By auto from Gopalganj town to Ulpur.',
        bestTime: { bn: 'শীতকাল; সকালের আলো', en: 'Winter; morning light' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'orakandi-thakurbari', bn: 'ওড়াকান্দি ঠাকুরবাড়ি', en: 'Orakandi Thakurbari',
        cat: 'heritage', lat: 23.2, lng: 89.78, tags: ['relaxed', 'family'], hidden: false,
        desc: {
          bn: 'মতুয়া ধর্মের প্রবর্তক হরিচাঁদ ঠাকুরের স্মৃতিধন্য তীর্থ — বারুণী স্নান মেলায় দেশ-বিদেশের লাখো ভক্ত আসেন।',
          en: 'The pilgrimage centre of Harichand Thakur, founder of the Matua faith — the Baruni bathing fair draws huge crowds of devotees from home and abroad.',
        },
        how: {
          bn: 'গোপালগঞ্জ থেকে কাশিয়ানী উপজেলায় বাস/অটোতে, সেখান থেকে ওড়াকান্দি।',
          en: 'Bus or auto from Gopalganj to Kashiani upazila, then on to Orakandi.',
        },
        bestTime: { bn: 'সারা বছর; বারুণী মেলা (চৈত্র মাস) সবচেয়ে জমজমাট', en: 'Year-round; the Baruni fair (around March–April) is the liveliest time' },
        entry: [0, 0], hours: 1.5,
        warnings: [{ bn: 'মেলার সময় প্রচণ্ড ভিড় হয় — মূল্যবান জিনিস সাবধানে রাখুন।', en: 'The fair is extremely crowded — keep valuables secure.' }],
      },
      {
        slug: 'kotalipara-floating-gardens', bn: 'কোটালীপাড়ার ভাসমান সবজি বাগান', en: 'Kotalipara Floating Gardens',
        cat: 'haor', lat: 22.98, lng: 90.0, tags: ['adventure', 'relaxed'], hidden: true,
        desc: {
          bn: 'কচুরিপানার ধাপের ওপর ভাসমান সবজি ও চারা চাষ — বিলজুড়ে নৌকায় ঘুরে দেখা যায় শতাব্দীপ্রাচীন এই কৃষিকৌশল।',
          en: 'Vegetables and seedlings grown on rafts of water hyacinth — tour the beels by boat to see this centuries-old farming technique.',
        },
        how: {
          bn: 'গোপালগঞ্জ বা টুঙ্গিপাড়া থেকে অটোতে কোটালীপাড়া, তারপর স্থানীয় নৌকা ভাড়া করে বিলে।',
          en: 'Auto from Gopalganj or Tungipara to Kotalipara, then hire a local boat into the beels.',
        },
        bestTime: { bn: 'বর্ষা ও বর্ষা-পরবর্তী সময় (জুলাই–অক্টোবর)', en: 'Monsoon and just after (July–October)' },
        entry: [0, 0], hours: 3,
      },
      {
        slug: 'madhumati-river-gopalganj', bn: 'মধুমতি নদী (মানিকদাহ–ভাটিয়াপাড়া)', en: 'Madhumati River, Gopalganj',
        cat: 'river', lat: 23.17, lng: 89.72, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'গোপালগঞ্জের পশ্চিম সীমানা ধরে বয়ে চলা মধুমতি — শান্ত পাড়, নৌকা আর গ্রামীণ বিকেল উপভোগের জায়গা।',
          en: 'The Madhumati traces Gopalganj’s western edge — calm banks, country boats and quiet village afternoons.',
        },
        how: {
          bn: 'গোপালগঞ্জ থেকে কাশিয়ানীর দিকে বাস/অটোতে; নদীপাড়ের ঘাটে নেমে নৌকা ভাড়া করা যায়।',
          en: 'Bus or auto from Gopalganj towards Kashiani; get off at a riverside ghat and hire a boat.',
        },
        bestTime: { bn: 'শীত ও বসন্তের বিকেল', en: 'Winter and spring afternoons' },
        entry: [0, 0], hours: 2,
      },
    ],
  },
  {
    slug: 'madaripur',
    en: {
      overview:
        'Madaripur, the district of the Arial Khan river — evening gatherings by Shakuni Lake, memories of the indigo kuthis and the scent of date-palm molasses.',
      transport:
        'Buses from Dhaka via the Padma Bridge reach Madaripur in 2–2.5 hours. Autos and rickshaws cover the town; CNGs go to the upazilas.',
      food:
        'Rajoir’s date-palm molasses and bananas are famous — and fresh river fish, of course.',
      season:
        'Winter is when the lakeside and the molasses season are at their liveliest.',
    },
    warnings: [
      { bn: 'আড়িয়াল খাঁ ও পদ্মায় বর্ষায় প্রবল স্রোত ও ভাঙন — ছোট নৌকা বা স্পিডবোটে লাইফ জ্যাকেট ছাড়া উঠবেন না।', en: 'The Arial Khan and Padma run fast and erode their banks in monsoon — never board a small boat or speedboat without a life jacket.' },
      { bn: 'ভাঙ্গা-মাদারীপুর-বরিশাল মহাসড়কে দ্রুতগতির যানবাহন ও তিন চাকার গাড়ির সংঘর্ষ বেশি — রাতে ভ্রমণ এড়িয়ে চলুন।', en: 'The Bhanga–Madaripur–Barishal highway sees fast traffic and frequent crashes involving three-wheelers — avoid travelling at night.' },
      { bn: 'চরমুগুরিয়ার বানরকে হাতে খাবার দেবেন না; ব্যাগ ও চশমা সামলে রাখুন।', en: 'Do not hand-feed the monkeys at Charmuguria; keep bags and glasses secure.' },
    ],
    hospital: { bn: 'মাদারীপুর ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Madaripur 250-Bed General Hospital' },
    spotUpdates: [
      {
        slug: 'shakuni-lake',
        descEn: 'A large lake in the heart of town ringed by walkways, a hanging bridge and evening fountains — the living centre of Madaripur.',
        howEn: 'Right in the town centre; walk or take a rickshaw.',
        bestTime: { bn: 'বিকেল ও সন্ধ্যা; শীতকাল', en: 'Late afternoon and evening; winter' },
        entry: [0, 0],
        hours: 1.5,
      },
      {
        slug: 'auliapur-nilkuthi',
        descEn: 'Ruins of a 19th-century indigo planters’ house — a witness to the brutal history of forced indigo cultivation.',
        howEn: 'By auto from town along the Chhilarchar road.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'khalia-rajaram-mandir', bn: 'খালিয়া রাজারাম মন্দির', en: 'Khalia Rajaram Temple',
        cat: 'heritage', lat: 23.17, lng: 90.05, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'রাজৈরের খালিয়ায় জমিদার রাজারাম রায়ের নির্মিত পোড়ামাটির অলংকৃত প্রাচীন মন্দির — গ্রামীণ পরিবেশে নিরিবিলি প্রত্নস্থান।',
          en: 'An old terracotta-ornamented temple at Khalia in Rajoir, built by the zamindar Rajaram Roy — a quiet heritage site in a village setting.',
        },
        how: {
          bn: 'মাদারীপুর থেকে বাসে রাজৈর, তারপর অটোতে খালিয়া।',
          en: 'Bus from Madaripur to Rajoir, then an auto to Khalia.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'charmuguria-port', bn: 'চরমুগুরিয়া', en: 'Charmuguria',
        cat: 'other', lat: 23.19, lng: 90.15, tags: ['family', 'relaxed'], hidden: true,
        desc: {
          bn: 'আড়িয়াল খাঁর পাড়ে একসময়ের ব্যস্ত পাটের বন্দর — পুরোনো গুদাম-বাড়ি আর এলাকাজুড়ে অবাধে ঘোরা বানরের দলের জন্য পরিচিত।',
          en: 'Once a busy jute port on the Arial Khan, now known for its old warehouses and the troops of monkeys that roam freely around the area.',
        },
        how: {
          bn: 'মাদারীপুর শহর থেকে অটোতে ১৫–২০ মিনিট।',
          en: '15–20 minutes by auto from Madaripur town.',
        },
        bestTime: { bn: 'সকাল বা বিকেল, সারা বছর', en: 'Morning or afternoon, year-round' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'banglabazar-padma-ghat', bn: 'বাংলাবাজার ঘাট, শিবচর', en: 'Banglabazar Ghat, Shibchar',
        cat: 'river', lat: 23.42, lng: 90.18, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'পদ্মা সেতুর আগে দক্ষিণবঙ্গের প্রধান ফেরিঘাট — এখন অনেকটা নিরিবিলি, পদ্মার বিস্তার আর টাটকা ইলিশ ভাজার জন্য আসেন অনেকে।',
          en: 'Before the Padma Bridge this was the main ferry ghat for the south; now much quieter, people come for the wide Padma views and fresh fried hilsa.',
        },
        how: {
          bn: 'মাদারীপুর থেকে শিবচর হয়ে বাস/অটোতে বাংলাবাজার, প্রায় এক ঘণ্টা।',
          en: 'Bus or auto from Madaripur via Shibchar to Banglabazar, about an hour.',
        },
        bestTime: { bn: 'বিকেল; ইলিশের মৌসুম (জুলাই–অক্টোবর)', en: 'Late afternoon; hilsa season (July–October)' },
        entry: [0, 0], hours: 1.5,
        warnings: [{ bn: 'ঘাটের হোটেলে ইলিশের দাম ও ওজন আগে ঠিক করে নিন।', en: 'At ghat eateries, agree on the price and weight of the hilsa before it is cooked.' }],
      },
    ],
  },
  {
    slug: 'rajbari',
    en: {
      overview:
        'Rajbari is a railway town on the Padma — riverside afternoons at Godar Bazar, zamindari memories and the bustle of Daulatdia ghat.',
      transport:
        'From Dhaka by bus (via the Paturia–Daulatdia ferry) or by train; either way takes 3–4 hours depending on the ferry queue.',
      food:
        'Chomchom and kheer-based sweets, plus Padma hilsa and boal.',
      season:
        'Winter and spring are the most pleasant times on the riverbank.',
    },
    warnings: [
      { bn: 'পাটুরিয়া-দৌলতদিয়া ফেরিঘাটে ঈদ ও কুয়াশার সময় ঘণ্টার পর ঘণ্টা আটকে থাকতে হয় — শীতের ভোরে ঘন কুয়াশায় ফেরি বন্ধ থাকে।', en: 'Queues at the Paturia–Daulatdia ferry can last hours around Eid, and ferries stop in dense winter fog — plan extra time.' },
      { bn: 'দৌলতদিয়া ঘাট এলাকায় দালাল ও পকেটমার সক্রিয় — অচেনা লোকের সাহায্য নিন না, টিকিট কাউন্টার থেকেই কিনুন।', en: 'Touts and pickpockets operate around Daulatdia ghat — decline help from strangers and buy tickets only at the counter.' },
      { bn: 'বর্ষায় পদ্মার পাড় ভাঙনপ্রবণ — গোদার বাজারে পাড়ের একেবারে কিনারে যাবেন না।', en: 'Padma banks erode in monsoon — keep back from the edge at Godar Bazar.' },
    ],
    hospital: { bn: 'রাজবাড়ী সদর হাসপাতাল', en: 'Rajbari Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'godar-bazar-padma',
        descEn: 'A paved embankment overlooking the vast Padma and its sunsets — the evening meeting place for locals.',
        howEn: 'About 10 minutes by auto from Rajbari town.',
        bestTime: { bn: 'বিকেল ও সূর্যাস্ত; শীত-বসন্ত', en: 'Late afternoon and sunset; winter and spring' },
        entry: [0, 0],
        hours: 1.5,
      },
      {
        slug: 'nalia-zamindar',
        descEn: 'An almost forgotten zamindari mansion and temple in Baliakandi — for off-beat history lovers.',
        howEn: 'By van or auto from Baliakandi upazila town.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'mir-mosharraf-memorial', bn: 'মীর মশাররফ হোসেনের সমাধি ও স্মৃতি কেন্দ্র, পদমদী', en: 'Mir Mosharraf Hossain Memorial, Padamdi',
        cat: 'heritage', lat: 23.64, lng: 89.55, tags: ['relaxed', 'family'], hidden: false,
        desc: {
          bn: '"বিষাদ-সিন্ধু"র লেখক মীর মশাররফ হোসেনের সমাধি ও স্মৃতি কেন্দ্র — গ্রন্থাগার ও স্মারক সংগ্রহে সাহিত্যপ্রেমীদের প্রিয় গন্তব্য।',
          en: 'The grave and memorial centre of Mir Mosharraf Hossain, author of "Bishad Sindhu" — with a library and memorabilia, a favourite for literature lovers.',
        },
        how: {
          bn: 'রাজবাড়ী থেকে বালিয়াকান্দিগামী বাস/অটোতে পদমদী।',
          en: 'Bus or auto from Rajbari towards Baliakandi, getting off at Padamdi.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 20], hours: 1,
      },
      {
        slug: 'daulatdia-padma-ferry', bn: 'দৌলতদিয়া–পাটুরিয়া পদ্মা ফেরি পারাপার', en: 'Daulatdia–Paturia Padma ferry crossing',
        cat: 'river', lat: 23.78, lng: 89.78, tags: ['adventure', 'family'], hidden: false,
        desc: {
          bn: 'পদ্মা-যমুনার মিলনস্থলের কাছে ফেরিতে নদী পারাপার — ডেক থেকে বিশাল জলরাশি, চর আর জেলে নৌকার দৃশ্য।',
          en: 'A ferry crossing near the confluence of the Padma and Jamuna — from the deck you see a vast expanse of water, sandbars and fishing boats.',
        },
        how: {
          bn: 'রাজবাড়ী শহর থেকে বাস/অটোতে গোয়ালন্দ হয়ে দৌলতদিয়া ঘাট, প্রায় ৪০ মিনিট।',
          en: 'Bus or auto from Rajbari town via Goalanda to Daulatdia ghat, about 40 minutes.',
        },
        bestTime: { bn: 'শীত-বসন্তের দিনের বেলা (কুয়াশামুক্ত সময়)', en: 'Daytime in winter and spring, once any fog has lifted' },
        entry: [30, 100], hours: 2,
        warnings: [{ bn: 'লঞ্চ বা স্পিডবোটে ওভারলোড দেখলে উঠবেন না; ঝড়ের পূর্বাভাসে পারাপার এড়িয়ে চলুন।', en: 'Do not board an overloaded launch or speedboat, and avoid crossing when a storm is forecast.' }],
      },
      {
        slug: 'samadhinagar-math', bn: 'সমাধিনগর মঠ (অনাদি আশ্রম)', en: 'Samadhinagar Math (Anadi Ashram)',
        cat: 'heritage', lat: 23.66, lng: 89.6, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'বালিয়াকান্দির গ্রামীণ প্রান্তরে সুউচ্চ মঠ ও আশ্রম — অল্প পরিচিত হলেও স্থাপত্যপ্রেমীদের কাছে আকর্ষণীয়।',
          en: 'A tall math (temple tower) and ashram in the countryside of Baliakandi — little known, but rewarding for architecture lovers.',
        },
        how: {
          bn: 'রাজবাড়ী থেকে বাসে বালিয়াকান্দি, তারপর ভ্যান বা অটোতে সমাধিনগর।',
          en: 'Bus from Rajbari to Baliakandi, then a van or auto to Samadhinagar.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
    ],
  },
  {
    slug: 'shariatpur',
    en: {
      overview:
        'Shariatpur is the southern gateway of the Padma Bridge — panoramic bridge views from the Jajira end, the Sureshwar Darbar and the resilience of people who live with river erosion.',
      transport:
        'Buses from Dhaka via the Padma Bridge reach Shariatpur in 1.5–2 hours. Autos and CNGs connect the upazilas.',
      food:
        'Fresh river hilsa, and rice from aromatic kalijira paddy with mashed bhortas.',
      season:
        'Year-round; the bridge view is most beautiful in the evening.',
    },
    warnings: [
      { bn: 'নড়িয়া-জাজিরায় পদ্মার ভাঙন তীব্র — বর্ষায় নদীপাড়ের কিনারে দাঁড়াবেন না।', en: 'River erosion is severe around Naria and Jajira — do not stand at the edge of the bank in monsoon.' },
      { bn: 'পদ্মা সেতুর ওপর থামা, হাঁটা বা ছবি তোলা নিষিদ্ধ; সেতুর অ্যাপ্রোচ সড়কে গাড়ি থামাবেন না।', en: 'Stopping, walking or taking photos on the Padma Bridge is prohibited; do not park on the approach roads either.' },
      { bn: 'সুরেশ্বর ওরসের সময় প্রচণ্ড ভিড় — ছোট শিশু ও মূল্যবান জিনিস সামলে রাখুন।', en: 'The Sureshwar urs draws enormous crowds — keep a close eye on children and valuables.' },
    ],
    hospital: { bn: 'শরীয়তপুর সদর হাসপাতাল', en: 'Shariatpur Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'padma-bridge-jajira',
        descEn: 'The full 6.15 km span of the bridge seen from the Jajira end — an outstanding photo spot at sunset.',
        howEn: 'At the viewpoint on the service road before the toll plaza.',
        bestTime: { bn: 'বিকেল ও সূর্যাস্ত; সন্ধ্যার আলোকসজ্জা', en: 'Late afternoon and sunset; the evening lights' },
        entry: [0, 0],
        hours: 1.5,
      },
      {
        slug: 'sureshwar-darbar',
        descEn: 'An old Sufi shrine on the Padma — hundreds of thousands of devotees gather for its annual urs.',
        howEn: 'By auto from Naria upazila to Sureshwar ghat.',
        bestTime: { bn: 'সারা বছর; ওরসের সময় সবচেয়ে জমজমাট', en: 'Year-round; liveliest during the urs' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'rudrakar-math', bn: 'রুদ্রকর মঠ', en: 'Rudrakar Math',
        cat: 'heritage', lat: 23.2, lng: 90.33, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'সদর উপজেলার রুদ্রকরে জমিদার আমলের সুউচ্চ স্মৃতি-মঠ — জেলার সবচেয়ে পরিচিত প্রাচীন স্থাপনাগুলোর একটি।',
          en: 'A tall memorial math from the zamindari era at Rudrakar in Sadar upazila — one of the district’s best-known old structures.',
        },
        how: {
          bn: 'শরীয়তপুর শহর থেকে অটো বা রিকশায় ১৫–২০ মিনিট।',
          en: '15–20 minutes by auto or rickshaw from Shariatpur town.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'dhanuka-manasa-bari', bn: 'ধানুকা মনসা বাড়ি', en: 'Dhanuka Manasa Bari',
        cat: 'heritage', lat: 23.22, lng: 90.36, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'কয়েকশ বছরের পুরোনো মনসা মন্দির ও বাড়ির ধ্বংসাবশেষ — শ্যাওলা-ধরা দেয়ালে ইতিহাসের গন্ধ।',
          en: 'The remains of a centuries-old Manasa temple and homestead — moss-covered walls that breathe history.',
        },
        how: {
          bn: 'শরীয়তপুর শহর থেকে অটোতে ধানুকা, প্রায় ১৫ মিনিট।',
          en: 'About 15 minutes by auto from Shariatpur town to Dhanuka.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'kartikpur-zamindar-bari', bn: 'কার্তিকপুর জমিদার বাড়ি', en: 'Kartikpur Zamindar Bari',
        cat: 'heritage', lat: 23.27, lng: 90.47, tags: ['relaxed'], hidden: true,
        desc: {
          bn: 'ভেদরগঞ্জের কার্তিকপুরে পুরোনো জমিদার বাড়ি — জীর্ণ হলেও কারুকাজের ছাপ এখনো স্পষ্ট, কাছেই কার্তিকপুরের মৃৎশিল্প।',
          en: 'An old zamindar house at Kartikpur in Bhedarganj — weathered, but its decorative work is still visible; Kartikpur is also known for its pottery.',
        },
        how: {
          bn: 'শরীয়তপুর থেকে বাস/সিএনজিতে ভেদরগঞ্জ, তারপর অটোতে কার্তিকপুর।',
          en: 'Bus or CNG from Shariatpur to Bhedarganj, then an auto to Kartikpur.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'জীর্ণ ভবনের ভেতরে ঢুকবেন না — ছাদ ও দেয়াল ধসে পড়ার ঝুঁকি আছে।', en: 'Do not enter the decaying buildings — roofs and walls may collapse.' }],
      },
    ],
  },
];
