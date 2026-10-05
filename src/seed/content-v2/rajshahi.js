// Content v2 — Rajshahi division: Rajshahi, Natore, Naogaon, Chapainawabganj,
// Pabna, Sirajganj, Bogura, Joypurhat. Public-source facts; fares/GPS approximate.
export default [
  // ── Rajshahi ──
  {
    slug: 'rajshahi',
    en: {
      overview:
        'Rajshahi is a clean, green education city on the bank of the Padma — famous for sunsets at T-badh, the temple town of Puthia, the terracotta Bagha Mosque, and its wealth of mangoes and silk.',
      transport:
        'From Dhaka by train (Silk City, Padma or Banalata Express) in 5–6 hours; buses and domestic flights also run. For Puthia and Bagha, take buses on the Natore or Ishwardi roads.',
      food:
        'The capital of Fazli, Langra and Himsagar mangoes (May–July). Try kalai roti with begun bhorta, and browse the Rajshahi silk showrooms.',
      season:
        'Mango season is May–July; winter is the comfortable time for Padma char trips and heritage tours.',
    },
    warnings: [
      { bn: 'এপ্রিল–জুনে রাজশাহীর তাপমাত্রা প্রায়ই ৪০° সেলসিয়াস ছাড়ায় — দুপুরে বাইরে ঘোরা এড়িয়ে চলুন, পানি ও টুপি সাথে রাখুন।', en: 'In April–June Rajshahi often tops 40°C — avoid sightseeing at midday and carry water and a hat.' },
      { bn: 'পদ্মার চরে যাওয়ার নৌকায় লাইফ জ্যাকেট থাকে না বললেই চলে; সন্ধ্যার আগে ফিরুন এবং চরের ভেতরে স্রোতের পানিতে নামবেন না।', en: 'Boats to the Padma chars rarely carry life jackets; return before dusk and never wade into the current around the sandbars.' },
      { bn: 'গোদাগাড়ী ও বাঘার পদ্মাপাড় ভারত সীমান্তঘেঁষা — বিজিবির নির্দেশনা মানুন, অচেনা চরে একা যাবেন না।', en: 'The Padma banks at Godagari and Bagha lie along the Indian border — follow BGB instructions and do not wander onto unfamiliar chars alone.' },
      { bn: 'ডিসেম্বর–জানুয়ারিতে ঘন কুয়াশায় ভোরের বাস-ট্রেন দেরি করে — ভ্রমণসূচিতে বাড়তি সময় রাখুন।', en: 'Dense fog in December–January delays early buses and trains — leave slack in your schedule.' },
    ],
    hospital: { bn: 'রাজশাহী মেডিকেল কলেজ হাসপাতাল', en: 'Rajshahi Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'padma-garden-tbadh',
        descEn: 'A paved embankment overlooking the vast Padma and its sandbars, with one of the finest sunsets in the country — in the evening the whole city seems to gather here.',
        howEn: 'An auto-rickshaw from anywhere in the city to T-badh or Lalon Shah Park; boats to the char leave from the bank.',
        bestTime: { bn: 'বিকেল থেকে সূর্যাস্ত; শীতে চরভ্রমণ', en: 'Late afternoon to sunset; winter for char trips' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'puthia-temple',
        descEn: 'A royal palace and the country’s densest cluster of terracotta temples share one compound — the carving on the Govinda Temple is astonishing.',
        howEn: 'Take a Rajshahi–Natore road bus to Puthia bazaar (about 45 minutes); the complex is a short walk away.',
        bestTime: { bn: 'অক্টোবর–মার্চ, সকাল বা বিকেল', en: 'October–March, morning or afternoon' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'bagha-mosque',
        descEn: 'A 500-year-old Sultanate-era terracotta mosque, printed on the 50-taka note and treasured as national heritage.',
        howEn: 'A bus from Rajshahi to Bagha takes about 1.5 hours; an auto-rickshaw covers the last stretch.',
        bestTime: { bn: 'শীতকাল; ঈদের সময় বাঘার মেলা জমজমাট', en: 'Winter; the Bagha fair around Eid is lively' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'varendra-museum',
        descEn: 'Bangladesh’s first museum (1910), holding an invaluable collection of Pala- and Sena-era sculpture and old manuscripts.',
        howEn: 'At Hetem Khan in the city centre; easy by rickshaw.',
        bestTime: { bn: 'সারা বছর; ছুটির দিন জেনে যান', en: 'Year-round; check the weekly closing day before you go' },
        entry: [20, 50],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'shah-makhdum-dargah',
        bn: 'হযরত শাহ মখদুম রূপোশ (রহ.) মাজার',
        en: 'Shah Makhdum Dargah',
        cat: 'heritage',
        lat: 24.3655, lng: 88.5935,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'রাজশাহীতে ইসলাম প্রচারক সুফি সাধক শাহ মখদুমের পদ্মাপাড়ের মাজার — শহরের সবচেয়ে পরিচিত ধর্মীয় স্থান, বার্ষিক ওরসে ভক্তদের ভিড় জমে।',
          en: 'The Padma-side shrine of Sufi saint Shah Makhdum, who brought Islam to Rajshahi — the city’s best-known religious site, crowded with devotees during the annual urs.',
        },
        how: { bn: 'শহরের দরগাপাড়ায়; সাহেববাজার থেকে রিকশায় ১০ মিনিট।', en: 'In Dargapara near the river; a 10-minute rickshaw ride from Saheb Bazar.' },
        bestTime: { bn: 'সারা বছর, বিকেলে টি-বাঁধের সাথে মিলিয়ে', en: 'Year-round; pair it with an afternoon at T-badh' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'মাজার এলাকায় শালীন পোশাক পরুন এবং জুতা খুলে প্রবেশ করুন।', en: 'Dress modestly and remove your shoes inside the shrine area.' }],
      },
      {
        slug: 'barkuthi-rajshahi',
        bn: 'বড়কুঠি',
        en: 'Barkuthi',
        cat: 'heritage',
        lat: 24.3638, lng: 88.5968,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'পদ্মার তীরে আঠারো শতকের ওলন্দাজ রেশম কুঠি — রাজশাহীর সবচেয়ে পুরনো টিকে থাকা ইউরোপীয় স্থাপনাগুলোর একটি, পরে ইংরেজ কোম্পানিরও কুঠি হয়।',
          en: 'An 18th-century Dutch silk factory house on the Padma bank — one of the oldest surviving European buildings in Rajshahi, later used by the English East India Company.',
        },
        how: { bn: 'পদ্মা গার্ডেন লাগোয়া, রাজশাহী বিশ্ববিদ্যালয়ের তত্ত্বাবধানে; শহর থেকে রিকশায়।', en: 'Next to Padma Garden, under Rajshahi University’s care; by rickshaw from the city.' },
        bestTime: { bn: 'শীতের বিকেল', en: 'Winter afternoons' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'kamaruzzaman-central-park-zoo',
        bn: 'শহীদ এ এইচ এম কামারুজ্জামান কেন্দ্রীয় উদ্যান ও চিড়িয়াখানা',
        en: 'Shaheed A H M Kamaruzzaman Central Park & Zoo',
        cat: 'garden',
        lat: 24.3768, lng: 88.5832,
        tags: ['family'],
        hidden: false,
        desc: {
          bn: 'পুরনো ঘোড়দৌড় মাঠে গড়া বিশাল সবুজ উদ্যান — লেক, শিশুদের রাইড আর ছোট চিড়িয়াখানায় পরিবার নিয়ে একটা আরামের বিকেল।',
          en: 'A large green park on the old racecourse grounds — a lake, children’s rides and a small zoo make for an easy family afternoon.',
        },
        how: { bn: 'শহরের কেন্দ্রে নওদাপাড়া রোডে; যেকোনো জায়গা থেকে অটোতে।', en: 'Central Rajshahi; an auto-rickshaw from anywhere in town.' },
        bestTime: { bn: 'অক্টোবর–মার্চ, বিকেল', en: 'October–March, afternoons' },
        entry: [20, 50], hours: 2,
      },
    ],
  },

  // ── Natore ──
  {
    slug: 'natore',
    en: {
      overview:
        'Natore, the land of Rani Bhabani — the regal Uttara Ganabhaban, the ponds and palaces of the old Rajbari, the watery horizons of Chalan Beel, and the famous kachagolla sweet.',
      transport:
        'From Dhaka, 4–5 hours to Natore by train or bus; Rajshahi is only about an hour away.',
      food:
        'Kachagolla is synonymous with Natore — the original shops are around Lalbazar.',
      season:
        'Monsoon (July–September) to see Chalan Beel in flood; winter for palace visits.',
    },
    warnings: [
      { bn: 'বর্ষায় চলনবিলে খোলা নৌকায় বজ্রপাত ও দমকা হাওয়ার ঝুঁকি থাকে — আকাশ কালো হলে দ্রুত ঘাটে ফিরুন, লাইফ জ্যাকেট চেয়ে নিন।', en: 'In monsoon, open boats on Chalan Beel face lightning and squalls — head back to shore when the sky darkens and ask for life jackets.' },
      { bn: 'ঢাকা-রাজশাহী মহাসড়কে (বনপাড়া-সিংড়া অংশ) দ্রুতগতির বাস-ট্রাক চলে — রাস্তার পাশে দাঁড়িয়ে বিলের ছবি তোলার সময় সতর্ক থাকুন।', en: 'Fast buses and trucks use the Dhaka–Rajshahi highway (Bonpara–Singra stretch) — take care when stopping roadside to photograph the beel.' },
      { bn: 'উত্তরা গণভবন সরকারি স্থাপনা; ভিআইপি সফর থাকলে দর্শন বন্ধ থাকতে পারে — যাওয়ার আগে খোঁজ নিন।', en: 'Uttara Ganabhaban is a government facility and may close to visitors during VIP visits — check before you go.' },
    ],
    hospital: { bn: 'নাটোর সদর হাসপাতাল', en: 'Natore Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'uttara-ganabhaban',
        descEn: 'A moated palace with Italian-style gardens and a famous clock gate — the former Dighapatia Rajbari, now the government’s northern residence, open to visitors with a ticket.',
        howEn: 'An auto-rickshaw from Natore town to Dighapatia takes about 15 minutes.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, সকাল', en: 'November–February, mornings' },
        entry: [20, 50],
        hours: 2,
      },
      {
        slug: 'natore-rajbari',
        descEn: 'The seat of Rani Bhabani, the celebrated zamindar queen — the remains of a palace complex spread among ponds and gardens.',
        howEn: 'At Bangajal in town; easy by rickshaw.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [10, 30],
        hours: 1.5,
      },
      {
        slug: 'chalan-beel',
        descEn: 'North Bengal’s largest wetland — in monsoon boats glide between drowned paddy fields and island villages; in winter it becomes a kingdom of birds.',
        howEn: 'Hire a boat at Singra; the beel lies right beside the Dhaka–Rajshahi highway.',
        bestTime: { bn: 'বর্ষা (জুলাই–সেপ্টেম্বর); পাখির জন্য শীত', en: 'Monsoon (July–September); winter for birds' },
        entry: [0, 0],
        hours: 3,
      },
    ],
    newSpots: [
      {
        slug: 'shahid-sagar-lalpur',
        bn: 'শহীদ সাগর, লালপুর',
        en: 'Shahid Sagar, Lalpur',
        cat: 'heritage',
        lat: 24.2045, lng: 88.9885,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'নর্থ বেঙ্গল সুগার মিলের ভেতরের পুকুরপাড়ে ১৯৭১ সালের ৫ মে পাকিস্তানি বাহিনীর হাতে শহীদ মিলকর্মীদের স্মরণে গড়া স্মৃতিসৌধ ও জাদুঘর।',
          en: 'A memorial and museum beside the pond inside North Bengal Sugar Mills, honouring the mill workers killed by the Pakistani army on 5 May 1971.',
        },
        how: { bn: 'নাটোর থেকে বাসে লালপুরের গোপালপুর, সেখান থেকে হেঁটে বা রিকশায় মিল গেট।', en: 'Bus from Natore to Gopalpur in Lalpur, then walk or take a rickshaw to the mill gate.' },
        bestTime: { bn: 'সারা বছর; ৫ মে স্মরণ দিবস', en: 'Year-round; commemorations on 5 May' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'chalan-beel-museum',
        bn: 'চলনবিল জাদুঘর, খুবজীপুর',
        en: 'Chalan Beel Museum, Khubjipur',
        cat: 'heritage',
        lat: 24.3870, lng: 89.2440,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'গুরুদাসপুরের গ্রামে এক শিক্ষকের উদ্যোগে গড়া ছোট্ট জাদুঘর — চলনবিলের মাছ ধরার ফাঁদ, পুরনো মুদ্রা, পুঁথি আর গ্রামীণ জীবনের নানা নিদর্শন।',
          en: 'A small village museum in Gurudaspur, founded by a local teacher — Chalan Beel fishing traps, old coins, manuscripts and relics of rural life.',
        },
        how: { bn: 'নাটোর থেকে বাসে গুরুদাসপুর, সেখান থেকে অটোতে খুবজীপুর।', en: 'Bus from Natore to Gurudaspur, then an auto-rickshaw to Khubjipur.' },
        bestTime: { bn: 'বর্ষায় চলনবিল ভ্রমণের সাথে মিলিয়ে', en: 'Combine with a monsoon Chalan Beel trip' },
        entry: [0, 20], hours: 1,
      },
      {
        slug: 'bonpara-lourdes-church',
        bn: 'বনপাড়া লুর্দের রানী মা মারিয়া ধর্মপল্লী গির্জা',
        en: 'Bonpara Catholic Church',
        cat: 'heritage',
        lat: 24.2830, lng: 89.1180,
        tags: ['relaxed', 'family'],
        hidden: true,
        desc: {
          bn: 'বড়াইগ্রামের বনপাড়ায় উত্তরবঙ্গের অন্যতম বড় ক্যাথলিক গির্জা — শান্ত চত্বর আর বড়দিনে আলোকসজ্জায় ঝলমলে।',
          en: 'One of North Bengal’s larger Catholic churches, at Bonpara in Baraigram — a peaceful compound that glows with lights at Christmas.',
        },
        how: { bn: 'ঢাকা-রাজশাহী মহাসড়কের বনপাড়া বাসস্ট্যান্ড থেকে রিকশায় কয়েক মিনিট।', en: 'A few minutes by rickshaw from the Bonpara bus stand on the Dhaka–Rajshahi highway.' },
        bestTime: { bn: 'শীতকাল, বিশেষ করে বড়দিন', en: 'Winter, especially Christmas' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },

  // ── Naogaon ──
  {
    slug: 'naogaon',
    en: {
      overview:
        'Naogaon is the archaeological capital of the Barind tract — the UNESCO-listed Somapura Mahavihara at Paharpur, the black-stone Kusumba Mosque and the sal forest around Altadighi.',
      transport:
        'From Dhaka by bus to Naogaon in 5–6 hours; Paharpur is reached via Badalgachhi and is also close to Joypurhat.',
      food:
        'Para sandesh is Naogaon’s pride; as a rice district it also has a rich tradition of rice-flour pithas.',
      season:
        'October–March is ideal for touring the archaeological sites.',
    },
    warnings: [
      { bn: 'প্রত্নতত্ত্ব অধিদপ্তরের স্থান (পাহাড়পুর জাদুঘরসহ) সাধারণত রবিবার বন্ধ ও সোমবার বেলা দুইটার পর খোলে — দিন মিলিয়ে যান।', en: 'Department of Archaeology sites, including the Paharpur museum, are generally closed on Sunday and open only from early afternoon on Monday — plan your day accordingly.' },
      { bn: 'বরেন্দ্র অঞ্চলে গ্রীষ্মে প্রচণ্ড গরম ও খোলা প্রত্নক্ষেত্রে ছায়া কম — পানি, টুপি ও সানস্ক্রিন নিন।', en: 'The Barind tract gets very hot in summer and the open ruins have little shade — carry water, a hat and sunscreen.' },
      { bn: 'আলতাদিঘি ও ধামইরহাট এলাকা ভারত সীমান্তঘেঁষা — জাতীয় পরিচয়পত্র সাথে রাখুন, বিজিবির নির্দেশনা মানুন।', en: 'Altadighi and the Dhamoirhat area lie on the Indian border — carry your national ID and follow BGB instructions.' },
    ],
    hospital: { bn: 'নওগাঁ সদর হাসপাতাল', en: 'Naogaon Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'paharpur-vihara',
        descEn: 'The largest Buddhist monastery south of the Himalayas, built in the 8th century — a UNESCO World Heritage Site with a cruciform central temple lined by rows of terracotta plaques.',
        howEn: 'Bus or auto-rickshaw from Naogaon or Joypurhat to Paharpur; one ticket covers the site and museum.',
        bestTime: { bn: 'অক্টোবর–মার্চ, সকাল', en: 'October–March, mornings' },
        entry: [30, 50],
        hours: 3,
      },
      {
        slug: 'kusumba-mosque',
        descEn: 'A Sultanate-era jewel carved in black stone — the mosque pictured on the 5-taka note, beside a large old pond.',
        howEn: 'At Kusumba in Manda upazila, on the Rajshahi–Naogaon road; buses stop nearby.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'altadighi',
        descEn: 'A kilometre-long ancient pond inside a sal forest — quiet, border-side nature far from the crowds.',
        howEn: 'An auto-rickshaw from Dhamoirhat.',
        bestTime: { bn: 'শীতকাল; শাপলা ফোটা ভোরে', en: 'Winter; early morning when the lilies are open' },
        entry: [0, 0],
        hours: 2,
      },
    ],
    newSpots: [
      {
        slug: 'patisar-rabindra-kachharibari',
        bn: 'পতিসর রবীন্দ্র কাছারিবাড়ি',
        en: 'Patisar Rabindra Kachharibari',
        cat: 'heritage',
        lat: 24.6930, lng: 88.9950,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'আত্রাইয়ের নাগর নদীর তীরে রবীন্দ্রনাথের জমিদারির কাছারিবাড়ি — কবিগুরুর ব্যবহৃত জিনিসপত্র নিয়ে জাদুঘর, পঁচিশে বৈশাখে জমে উৎসব।',
          en: 'Tagore’s estate office beside the Nagar river at Atrai — now a museum of the poet’s belongings, with a festival on his birthday (25 Baishakh).',
        },
        how: { bn: 'নওগাঁ বা আত্রাই রেলস্টেশন থেকে সিএনজি/অটোতে পতিসর।', en: 'CNG or auto-rickshaw to Patisar from Naogaon town or Atrai railway station.' },
        bestTime: { bn: 'শীতকাল; রবীন্দ্রজয়ন্তী (মে)', en: 'Winter; Tagore’s birthday in May' },
        entry: [20, 30], hours: 1.5,
      },
      {
        slug: 'dibar-dighi',
        bn: 'দিবর দিঘি ও কৈবর্ত স্তম্ভ',
        en: 'Dibar Dighi & Kaibarta Pillar',
        cat: 'heritage',
        lat: 24.9420, lng: 88.7360,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'পত্নীতলার বিশাল দিঘির মাঝখানে দাঁড়িয়ে আছে একখণ্ড গ্রানাইটের অষ্টকোণী স্তম্ভ — কৈবর্ত বিদ্রোহের রাজা দিব্যকের স্মারক বলে প্রচলিত।',
          en: 'An octagonal granite pillar rises from the middle of a large pond in Patnitala — traditionally linked to Divya, leader of the Kaibarta revolt against the Palas.',
        },
        how: { bn: 'নওগাঁ থেকে বাসে পত্নীতলা/নজিপুর, সেখান থেকে অটোতে দিবর।', en: 'Bus from Naogaon to Patnitala (Nazipur), then an auto-rickshaw to Dibar.' },
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'jagaddala-vihara',
        bn: 'জগদ্দল মহাবিহার',
        en: 'Jagaddala Mahavihara',
        cat: 'heritage',
        lat: 25.1700, lng: 88.8350,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'পাল যুগের বিখ্যাত বৌদ্ধ শিক্ষাকেন্দ্রের খননকৃত ধ্বংসাবশেষ — সীমান্তঘেঁষা গ্রামের নিরিবিলি মাঠে ইতিহাসের নিঃশব্দ সাক্ষী।',
          en: 'Excavated ruins of a renowned Pala-era Buddhist learning centre — a silent witness to history in a quiet border village.',
        },
        how: { bn: 'ধামইরহাট থেকে অটোতে জগদ্দল গ্রাম; আলতাদিঘির সাথে একই দিনে ঘোরা যায়।', en: 'Auto-rickshaw from Dhamoirhat to Jagaddal village; easy to combine with Altadighi.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'সীমান্তের খুব কাছে — পরিচয়পত্র সাথে রাখুন।', en: 'Very close to the border — carry your ID.' }],
      },
    ],
  },

  // ── Chapainawabganj ──
  {
    slug: 'chapainawabganj',
    en: {
      overview:
        'Chapainawabganj is the mango capital — the ruined Sultanate city of Gaur, the golden past of the Choto Sona Mosque and the bustle of the Kansat mango market.',
      transport:
        'Direct train from Dhaka (Banalata Express) in about 6 hours; from Rajshahi 1.5–2 hours by bus.',
      food:
        'Paradise for Khirsapat and Langra mangoes (May–July); kalai roti with duck curry is the winter speciality.',
      season:
        'June if you want to drown in mangoes; winter for heritage tours.',
    },
    warnings: [
      { bn: 'শিবগঞ্জের সোনামসজিদ-গৌড় এলাকা ভারত সীমান্তঘেঁষা — জাতীয় পরিচয়পত্র রাখুন, সীমান্ত চৌকির ছবি তুলবেন না।', en: 'The Sona Masjid–Gaur area of Shibganj is right on the Indian border — carry your ID and do not photograph border posts.' },
      { bn: 'মে–জুনে প্রচণ্ড গরম ও লু হাওয়া বয় — আমবাজারে ভোরে যান, দুপুরে বিশ্রাম নিন।', en: 'May–June brings intense heat and hot winds — visit the mango markets at dawn and rest at midday.' },
      { bn: 'আমের মৌসুমে কেমিক্যালে পাকানো আম নিয়ে সতর্ক থাকুন — পরিচিত বাগান বা বিশ্বস্ত আড়ত থেকে কিনুন।', en: 'In mango season beware of chemically ripened fruit — buy from orchards or trusted wholesalers.' },
    ],
    hospital: { bn: 'চাঁপাইনবাবগঞ্জ সদর হাসপাতাল', en: 'Chapainawabganj Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'choto-sona-mosque',
        descEn: 'The “golden” jewel of the Sultanate era — a blend of stone and terracotta, and the finest surviving monument of the city of Gaur on the Bangladesh side.',
        howEn: 'Via Shibganj on the Sona Masjid land port road; buses and CNGs run from Chapainawabganj town.',
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'tohakhana',
        descEn: 'Shah Shuja’s cool-chamber palace, a mosque and a saint’s tomb in one compound — an intriguing example of Mughal engineering.',
        howEn: 'Walking distance from the Choto Sona Mosque area.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'kansat-mango-market',
        descEn: 'In season, the dawn market becomes a sea of mangoes by the hundreds of tonnes — one of the country’s biggest mango markets, heady with colour and scent.',
        howEn: 'At Kansat in Shibganj; in June go early in the morning.',
        bestTime: { bn: 'জুন–জুলাই, ভোর', en: 'June–July, at dawn' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'darasbari-mosque',
        bn: 'দারাসবাড়ি মসজিদ ও মাদ্রাসা',
        en: 'Darasbari Mosque & Madrasa',
        cat: 'heritage',
        lat: 24.8650, lng: 88.1330,
        tags: ['relaxed'],
        hidden: false,
        desc: {
          bn: 'পঞ্চদশ শতকের সুলতানি আমলের বিশাল ইটের মসজিদ আর পাশেই খননে পাওয়া মাদ্রাসার ভিত — গৌড়ের শিক্ষা ও স্থাপত্যের নীরব সাক্ষী।',
          en: 'A large 15th-century Sultanate brick mosque with the excavated foundations of a madrasa beside it — quiet witnesses to Gaur’s learning and architecture.',
        },
        how: { bn: 'ছোট সোনা মসজিদ থেকে অটো বা ভ্যানে কয়েক মিনিট।', en: 'A few minutes by auto or van-rickshaw from the Choto Sona Mosque.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'khaniadighi-mosque',
        bn: 'খনিয়াদিঘি মসজিদ',
        en: 'Khaniadighi Mosque',
        cat: 'heritage',
        lat: 24.8580, lng: 88.1390,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'আমবাগান আর দিঘির পাড়ে এক গম্বুজের সুলতানি মসজিদ, দেয়ালজুড়ে সূক্ষ্ম টেরাকোটার অলংকরণ — রাজবিবি মসজিদ নামেও পরিচিত।',
          en: 'A single-domed Sultanate mosque by a pond among mango orchards, its walls covered in fine terracotta — also known as the Rajbibi Mosque.',
        },
        how: { bn: 'সোনামসজিদ এলাকা থেকে অটো বা ভ্যানে; দারাসবাড়ির সাথে মিলিয়ে ঘুরুন।', en: 'By auto or van-rickshaw from the Sona Masjid area; combine with Darasbari.' },
        bestTime: { bn: 'শীতকাল; আমের মুকুলে মার্চ', en: 'Winter; March when the mango trees blossom' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'kotwali-darwaza',
        bn: 'কোতোয়ালি দরজা',
        en: 'Kotwali Darwaza',
        cat: 'heritage',
        lat: 24.8480, lng: 88.1350,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'প্রাচীন গৌড় নগরীর দক্ষিণ প্রবেশপথের বিশাল ইটের তোরণ — ঠিক বাংলাদেশ-ভারত সীমান্তরেখায় দাঁড়িয়ে।',
          en: 'The massive brick gateway that once guarded the southern entrance of the city of Gaur — it now stands right on the Bangladesh–India border line.',
        },
        how: { bn: 'শিবগঞ্জের সোনামসজিদ এলাকা থেকে অটোতে; সীমান্তের এপার থেকেই দেখতে হয়।', en: 'Auto-rickshaw from the Sona Masjid area; viewed only from the Bangladesh side.' },
        bestTime: { bn: 'শীতকাল, দিনের আলোয়', en: 'Winter, in daylight' },
        entry: [0, 0], hours: 0.5,
        warnings: [{ bn: 'সীমান্তরেখার কাছে বিজিবির অনুমতি ছাড়া এগোবেন না।', en: 'Do not approach the border line without BGB permission.' }],
      },
    ],
  },

  // ── Pabna ──
  {
    slug: 'pabna',
    en: {
      overview:
        'Pabna, where the Padma meets the Jamuna region — the century-old steel poetry of the Hardinge Bridge, the terracotta Jor Bangla Temple and the railway heritage of Ishwardi.',
      transport:
        'From Dhaka by bus to Pabna in 4–5 hours; by train via Ishwardi Junction.',
      food:
        'Para sandesh and ghee from the century-old Paradise sweet shop — a taste that has lasted a hundred years.',
      season:
        'Winter is best for the riverbanks and bridge views.',
    },
    warnings: [
      { bn: 'হার্ডিঞ্জ ব্রিজ সচল রেলসেতু — রেললাইনে হাঁটা বা ছবি তোলা বিপজ্জনক ও নিষিদ্ধ; নিচের পাড় বা লালন শাহ সেতু থেকে দেখুন।', en: 'The Hardinge Bridge is a working railway bridge — walking or posing on the tracks is dangerous and prohibited; view it from the bank below or from the Lalon Shah Bridge.' },
      { bn: 'পদ্মার পাকশী পাড়ে বালুচর ও হঠাৎ গভীর পানি — গোসল বা সাঁতারে নামবেন না।', en: 'The Padma at Paksey has shifting sandbars and sudden deep water — do not bathe or swim.' },
      { bn: 'রূপপুর পারমাণবিক বিদ্যুৎকেন্দ্র এলাকা সংরক্ষিত — ছবি তোলা বা ড্রোন ওড়ানো নিষেধ।', en: 'The Rooppur nuclear power plant area is restricted — no photography or drones.' },
    ],
    hospital: { bn: 'পাবনা জেনারেল হাসপাতাল', en: 'Pabna General Hospital' },
    spotUpdates: [
      {
        slug: 'hardinge-bridge',
        descEn: 'A 1.8 km steel giant opened in 1915 — from the neighbouring Lalon Shah Bridge you get both bridges in one frame, with a superb Padma sunset.',
        howEn: 'An auto-rickshaw from Paksey or Ishwardi to the bridge area.',
        bestTime: { bn: 'শীতের বিকেল ও সূর্যাস্ত', en: 'Winter afternoons and sunset' },
        entry: [0, 0],
        hours: 1.5,
      },
      {
        slug: 'jor-bangla-mandir',
        descEn: 'A terracotta temple with twin do-chala roofs joined together — a fine example of 18th-century craftsmanship.',
        howEn: 'In Pabna town; easy by rickshaw.',
        bestTime: { bn: 'সারা বছর, সকাল', en: 'Year-round, mornings' },
        entry: [0, 0],
        hours: 0.5,
      },
    ],
    newSpots: [
      {
        slug: 'suchitra-sen-house',
        bn: 'সুচিত্রা সেনের পৈতৃক বাড়ি',
        en: 'Suchitra Sen’s Ancestral House',
        cat: 'heritage',
        lat: 24.0045, lng: 89.2390,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'বাংলা চলচ্চিত্রের মহানায়িকা সুচিত্রা সেনের শৈশবের বাড়ি — এখন তাঁর স্মৃতি সংগ্রহশালা, পুরনো ছবি আর চলচ্চিত্রের স্মারকে সাজানো।',
          en: 'The childhood home of legendary Bengali film star Suchitra Sen — now a memorial collection of photos and film memorabilia.',
        },
        how: { bn: 'পাবনা শহরের গোপালপুর মহল্লায়; শহরের যেকোনো জায়গা থেকে রিকশায়।', en: 'In the Gopalpur neighbourhood of Pabna town; by rickshaw from anywhere in town.' },
        bestTime: { bn: 'সারা বছর', en: 'Year-round' },
        entry: [0, 20], hours: 0.5,
      },
      {
        slug: 'anukul-thakur-satsang-ashram',
        bn: 'শ্রীশ্রী অনুকূল ঠাকুরের সৎসঙ্গ আশ্রম, হিমাইতপুর',
        en: 'Anukul Thakur Satsang Ashram, Himaitpur',
        cat: 'heritage',
        lat: 24.0290, lng: 89.1950,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'সৎসঙ্গের প্রতিষ্ঠাতা অনুকূলচন্দ্র ঠাকুরের জন্মস্থান — মন্দির, বিশাল চত্বর আর জন্মোৎসবে দেশ-বিদেশের ভক্তদের ঢল।',
          en: 'Birthplace of Anukulchandra Thakur, founder of the Satsang movement — temples, a large compound, and crowds of devotees from home and abroad at his birth anniversary.',
        },
        how: { bn: 'পাবনা শহর থেকে অটোতে হিমাইতপুর, ২০ মিনিটের মতো।', en: 'About 20 minutes by auto-rickshaw from Pabna town to Himaitpur.' },
        bestTime: { bn: 'শীতকাল; ভাদ্র মাসে জন্মোৎসব', en: 'Winter; the birth festival falls in Bhadra (Aug–Sep)' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'chatmohar-shahi-mosque',
        bn: 'চাটমোহর শাহী মসজিদ',
        en: 'Chatmohar Shahi Mosque',
        cat: 'heritage',
        lat: 24.2290, lng: 89.2830,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'ষোড়শ শতকে নির্মিত তিন গম্বুজের মসজিদ — সুলতানি থেকে মুঘল যুগে রূপান্তরের ছাপ পড়া পাবনার প্রাচীনতম স্থাপনাগুলোর একটি।',
          en: 'A three-domed mosque built in the 16th century — one of Pabna’s oldest buildings, showing the transition from Sultanate to Mughal style.',
        },
        how: { bn: 'পাবনা থেকে বাসে চাটমোহর, বাজার থেকে রিকশায়; ট্রেনে চাটমোহর স্টেশনেও নামা যায়।', en: 'Bus from Pabna to Chatmohar, then a rickshaw from the bazar; trains also stop at Chatmohar station.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },

  // ── Sirajganj ──
  {
    slug: 'sirajganj',
    en: {
      overview:
        'Sirajganj is the handloom district on the Jamuna — the long horizon of Bangabandhu Bridge, Tagore’s estate office at Shahzadpur and the terracotta of the Nabaratna Temple.',
      transport:
        'From Dhaka by bus, just across the bridge, in 2.5–3 hours; trains also run.',
      food:
        'Rich ghee and fresh chhana from the weaving villages; boal and chital fish from the Jamuna.',
      season:
        'Winter for char trips; in monsoon the bridge point shows the Jamuna in full fury.',
    },
    warnings: [
      { bn: 'যমুনার চরে যাওয়ার নৌকায় লাইফ জ্যাকেট নিশ্চিত করুন — বর্ষায় স্রোত প্রবল, ভাঙনপ্রবণ পাড়ের কিনারে দাঁড়াবেন না।', en: 'Make sure there are life jackets on boats to the Jamuna chars — monsoon currents are strong, and do not stand at the edge of eroding banks.' },
      { bn: 'ঈদের আগে-পরে বঙ্গবন্ধু সেতু ও হাটিকুমরুল মোড়ে ঘণ্টার পর ঘণ্টা যানজট হয় — সময় হাতে রেখে বের হন।', en: 'Around Eid, traffic jams at Bangabandhu Bridge and Hatikumrul junction can last for hours — leave plenty of time.' },
      { bn: 'সেতু এলাকায় নিরাপত্তাজনিত কারণে ড্রোন ও কিছু জায়গায় ছবি তোলা সীমিত — নির্দেশনা মেনে চলুন।', en: 'Drones and photography are restricted at some points around the bridge for security — follow posted instructions.' },
    ],
    hospital: { bn: 'সিরাজগঞ্জ ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল', en: 'Sirajganj 250-Bed General Hospital' },
    spotUpdates: [
      {
        slug: 'jamuna-hard-point',
        descEn: 'From the town protection embankment you see the full length of Bangabandhu Bridge and the chars of the Jamuna — the town’s favourite afternoon breeze spot.',
        howEn: 'An auto-rickshaw from Sirajganj town to the cross-bar area.',
        bestTime: { bn: 'বিকেল ও সূর্যাস্ত; বর্ষায় যমুনার রুদ্ররূপ', en: 'Afternoon and sunset; monsoon for the river at full force' },
        entry: [0, 0],
        hours: 1.5,
      },
      {
        slug: 'rabindra-kachharibari',
        descEn: 'Tagore came here to manage his family estates and wrote many poems of Sonar Tori in this house — now a museum.',
        howEn: 'Bus from Sirajganj or Pabna to Shahzadpur, then a short rickshaw ride.',
        bestTime: { bn: 'শীতকাল; রবীন্দ্রজয়ন্তী (মে)', en: 'Winter; Tagore’s birthday in May' },
        entry: [20, 30],
        hours: 1,
      },
      {
        slug: 'nabaratna-mandir',
        descEn: 'The nine-spired terracotta temple of Hatikumrul — an 18th-century marvel just off the highway.',
        howEn: 'An auto-rickshaw from Hatikumrul junction.',
        bestTime: { bn: 'শীতকাল, সকাল', en: 'Winter, mornings' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'elliot-bridge-sirajganj',
        bn: 'ইলিয়ট ব্রিজ',
        en: 'Elliot Bridge',
        cat: 'heritage',
        lat: 24.4530, lng: 89.7010,
        tags: ['relaxed', 'family'],
        hidden: false,
        desc: {
          bn: 'কাটাখালী খালের ওপর ঊনিশ শতকের শেষে নির্মিত লোহা-ইটের খিলান সেতু — সিরাজগঞ্জ শহরের পুরনো প্রতীক, সন্ধ্যায় আলোয় সাজে।',
          en: 'An arched bridge over the Katakhali canal built in the late 19th century — an old emblem of Sirajganj town, lit up in the evenings.',
        },
        how: { bn: 'সিরাজগঞ্জ শহরের কেন্দ্রে; রিকশায় বা হেঁটে।', en: 'In the centre of Sirajganj town; walk or take a rickshaw.' },
        bestTime: { bn: 'সন্ধ্যা', en: 'Evening' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'makhdum-shah-mosque-shahzadpur',
        bn: 'মখদুম শাহদৌলা (রহ.) মাজার ও মসজিদ, শাহজাদপুর',
        en: 'Makhdum Shah Daula Shrine & Mosque, Shahzadpur',
        cat: 'heritage',
        lat: 24.1760, lng: 89.5960,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'সুফি সাধক মখদুম শাহদৌলার মাজার আর পাশে বহু গম্বুজের প্রাচীন মসজিদ — শাহজাদপুরের ইতিহাসের কেন্দ্রবিন্দু।',
          en: 'The shrine of Sufi saint Makhdum Shah Daula beside an old multi-domed mosque — the historic heart of Shahzadpur.',
        },
        how: { bn: 'শাহজাদপুর বাজার থেকে রিকশায়; রবীন্দ্র কাছারিবাড়ির সাথে একসাথে ঘোরা যায়।', en: 'By rickshaw from Shahzadpur bazar; easy to pair with the Rabindra Kachharibari.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'enayetpur-weaving-village',
        bn: 'এনায়েতপুর তাঁতপল্লি',
        en: 'Enayetpur weaving villages',
        cat: 'other',
        lat: 24.2250, lng: 89.6950,
        tags: ['family', 'relaxed'],
        hidden: true,
        desc: {
          bn: 'যমুনাপাড়ের গ্রামে গ্রামে খটখট তাঁতের শব্দ — লুঙ্গি, গামছা আর শাড়ি বোনা দেখা যায়, সরাসরি তাঁতির কাছ থেকে কেনাও যায়।',
          en: 'Villages along the Jamuna clatter with handlooms — watch lungis, gamchas and saris being woven and buy straight from the weavers.',
        },
        how: { bn: 'সিরাজগঞ্জ শহর থেকে সিএনজিতে এনায়েতপুর, প্রায় এক ঘণ্টা।', en: 'About an hour by CNG from Sirajganj town to Enayetpur.' },
        bestTime: { bn: 'ঈদের আগের মাসে তাঁতপল্লি সবচেয়ে ব্যস্ত', en: 'The month before Eid, when the looms are busiest' },
        entry: [0, 0], hours: 2,
      },
    ],
  },

  // ── Bogura ──
  {
    slug: 'bogura',
    en: {
      overview:
        'Bogura is the land of ancient Pundranagar — 2,500-year-old Mahasthangarh, the legend of Behula’s bridal chamber and the immortal taste of its doi (sweet yoghurt).',
      transport:
        'From Dhaka by bus to Bogura in 4–5 hours; Mahasthangarh is about 20 minutes from town by CNG.',
      food:
        'Bogura’s clay-pot doi is famous far and wide — try katkati, the local crunchy sweet, too.',
      season:
        'October–March is best for archaeological tours.',
    },
    warnings: [
      { bn: 'মহাস্থানগড় জাদুঘর রবিবার বন্ধ ও সোমবার দুপুরের পর খোলে — সপ্তাহের দিন মিলিয়ে যান।', en: 'The Mahasthangarh museum is closed on Sunday and opens only after midday on Monday — plan the day accordingly.' },
      { bn: 'মহাস্থানে মাজার ঘিরে ভিড় ও পকেটমার থাকে — মূল্যবান জিনিস সাবধানে রাখুন, ভুয়া গাইড এড়িয়ে চলুন।', en: 'Crowds and pickpockets gather around the shrine at Mahasthan — keep valuables close and avoid self-appointed guides.' },
      { bn: 'ঢাকা-রংপুর মহাসড়কে দ্রুতগতির যানবাহন — মহাস্থান মোড়ে রাস্তা পার হতে সতর্ক থাকুন।', en: 'Traffic on the Dhaka–Rangpur highway is fast — cross carefully at the Mahasthan junction.' },
    ],
    hospital: { bn: 'শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল', en: 'Shaheed Ziaur Rahman Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'mahasthangarh',
        descEn: 'Pundranagar, dating to the 3rd century BCE — the walls of the country’s oldest known fortified city, a site museum and history-laden ground beside the Karatoya.',
        howEn: 'Take a Rangpur-road bus from Bogura to the Mahasthan stand; note the museum is closed on Sunday.',
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [20, 30],
        hours: 3,
      },
      {
        slug: 'behular-bashor',
        descEn: 'A stepped archaeological mound tied to the folk tale of Behula and Lakhindar — where legend and archaeology meet.',
        howEn: 'An auto-rickshaw from Mahasthangarh to Gokul.',
        bestTime: { bn: 'শীতের বিকেল', en: 'Winter afternoons' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'vasu-bihar',
        bn: 'ভাসু বিহার',
        en: 'Vasu Bihar',
        cat: 'heritage',
        lat: 25.0270, lng: 89.3020,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'মহাস্থানগড়ের কাছে খননে উন্মোচিত বৌদ্ধ বিহার ও মন্দিরের ভিত — চীনা পরিব্রাজক হিউয়েন সাংয়ের বর্ণিত বিহার বলে অনেকে মনে করেন।',
          en: 'Excavated foundations of Buddhist monasteries and a shrine near Mahasthangarh — often identified with a vihara described by the Chinese pilgrim Xuanzang.',
        },
        how: { bn: 'মহাস্থান থেকে অটো বা সিএনজিতে শিবগঞ্জের বিহার গ্রাম, ২০–২৫ মিনিট।', en: 'Auto or CNG from Mahasthan to Bihar village in Shibganj, 20–25 minutes.' },
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [0, 20], hours: 1,
      },
      {
        slug: 'kherua-mosque',
        bn: 'খেরুয়া মসজিদ',
        en: 'Kherua Mosque',
        cat: 'heritage',
        lat: 24.6420, lng: 89.4200,
        tags: ['relaxed'],
        hidden: false,
        desc: {
          bn: '১৫৮২ সালে নির্মিত তিন গম্বুজের মসজিদ — সুলতানি ও মুঘল স্থাপত্যের সন্ধিক্ষণের দুর্লভ নিদর্শন, সবুজ ঘাসের চত্বরে শান্ত সৌন্দর্য।',
          en: 'A three-domed mosque built in 1582 — a rare example from the transition between Sultanate and Mughal architecture, serene on a green lawn.',
        },
        how: { bn: 'বগুড়া থেকে ঢাকা রোডের বাসে শেরপুর, সেখান থেকে রিকশায় খন্দকারটোলা।', en: 'Dhaka-road bus from Bogura to Sherpur, then a rickshaw to Khondokartola.' },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'bogura-nawab-palace',
        bn: 'নবাববাড়ি (নবাব প্যালেস), বগুড়া',
        en: 'Nawab Palace, Bogura',
        cat: 'heritage',
        lat: 24.8470, lng: 89.3720,
        tags: ['family'],
        hidden: false,
        desc: {
          bn: 'শহরের কেন্দ্রে বগুড়ার নবাবদের প্রাসাদ — এখন জাদুঘর ও বিনোদন পার্ক, নবাবি আসবাব আর ভাস্কর্যে সাজানো।',
          en: 'The palace of the Bogura Nawabs in the city centre — now a museum and amusement park with period furniture and sculptures.',
        },
        how: { bn: 'বগুড়া শহরের নবাববাড়ি রোডে; সাতমাথা থেকে রিকশায়।', en: 'On Nawab Bari Road; by rickshaw from Satmatha.' },
        bestTime: { bn: 'সারা বছর, বিকেল', en: 'Year-round, afternoons' },
        entry: [30, 100], hours: 1.5,
      },
    ],
  },

  // ── Joypurhat ──
  {
    slug: 'joypurhat',
    en: {
      overview:
        'Joypurhat is a calm border district — the lonely beauty of Lokma Rajbari, birds on Nandail Dighi and a heritage trail next door to Paharpur.',
      transport:
        'From Dhaka by train or bus to Joypurhat in 5–6 hours; Paharpur is only about 12 km away.',
      food:
        'Latiraj kochu (taro) is Joypurhat’s signature; pure ghee and chhana are also available.',
      season:
        'Winter, when migratory birds settle on the ponds, is the best time.',
    },
    warnings: [
      { bn: 'পাঁচবিবি ও সদরের অনেক এলাকা ভারত সীমান্তঘেঁষা — জাতীয় পরিচয়পত্র রাখুন, সন্ধ্যার পর সীমান্তের দিকে যাবেন না।', en: 'Much of Panchbibi and Sadar upazila borders India — carry your ID and avoid border areas after dark.' },
      { bn: 'শীতে দিঘির পাখি দেখতে গেলে শব্দ করবেন না ও পাখি ধরা-বিক্রি দেখলে উৎসাহ দেবেন না — অতিথি পাখি শিকার আইনত দণ্ডনীয়।', en: 'When birdwatching at the ponds in winter keep quiet, and never encourage bird trapping or sales — hunting migratory birds is illegal.' },
      { bn: 'জেলায় ভালো হোটেল কম — উৎসবের সময় আগেভাগে বুকিং দিন বা বগুড়ায় থাকার পরিকল্পনা রাখুন।', en: 'Good hotels are few — book ahead at festival times or plan to stay in Bogura.' },
    ],
    hospital: { bn: 'জয়পুরহাট জেলা আধুনিক হাসপাতাল', en: 'Joypurhat District Modern Hospital' },
    spotUpdates: [
      {
        slug: 'lokma-rajbari',
        descEn: 'An almost-forgotten zamindar palace right by the border — time seems to stand still on its moss-covered walls.',
        howEn: 'An auto-rickshaw from Panchbibi; carry ID in the BGB-patrolled area.',
        bestTime: { bn: 'শীতকাল, দিনের আলোয়', en: 'Winter, in daylight' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'nandail-dighi',
        descEn: 'An ancient pond of roughly sixty bighas — in winter it rings with thousands of migratory birds.',
        howEn: 'An auto-rickshaw from Kalai upazila.',
        bestTime: { bn: 'ডিসেম্বর–ফেব্রুয়ারি, ভোর', en: 'December–February, early morning' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'pagla-dewan-memorial',
        bn: 'পাগলা দেওয়ান বধ্যভূমি',
        en: 'Pagla Dewan Killing Field Memorial',
        cat: 'heritage',
        lat: 25.1260, lng: 88.9880,
        tags: ['relaxed'],
        hidden: false,
        desc: {
          bn: 'সীমান্তঘেঁষা গ্রামে ১৯৭১ সালে ভারতে আশ্রয় নিতে যাওয়া অসংখ্য মানুষকে হত্যা করা হয়েছিল — এখানকার স্মৃতিসৌধ ও জাদুঘর সেই শোকের সাক্ষী।',
          en: 'In this border village, countless people fleeing to India were killed in 1971 — the memorial and museum here bear witness to that grief.',
        },
        how: { bn: 'জয়পুরহাট শহর থেকে অটোতে প্রায় ২০ মিনিট।', en: 'About 20 minutes by auto-rickshaw from Joypurhat town.' },
        bestTime: { bn: 'সারা বছর; ডিসেম্বরে বিজয় দিবস', en: 'Year-round; Victory Day in December' },
        entry: [0, 0], hours: 1,
        warnings: [{ bn: 'সীমান্তের কাছাকাছি — পরিচয়পত্র সাথে রাখুন।', en: 'Close to the border — carry your ID.' }],
      },
      {
        slug: 'gopinath-mandir-akkelpur',
        bn: 'গোপীনাথপুর মন্দির, আক্কেলপুর',
        en: 'Gopinathpur Temple, Akkelpur',
        cat: 'heritage',
        lat: 24.9580, lng: 89.0360,
        tags: ['relaxed', 'family'],
        hidden: true,
        desc: {
          bn: 'কয়েকশ বছরের পুরনো গোপীনাথ মন্দির — দোলপূর্ণিমায় এখানকার মেলায় দূরদূরান্ত থেকে মানুষ আসে।',
          en: 'A centuries-old Gopinath temple whose Dol Purnima fair draws visitors from far and wide.',
        },
        how: { bn: 'জয়পুরহাট থেকে বাসে আক্কেলপুর, সেখান থেকে অটোতে গোপীনাথপুর।', en: 'Bus from Joypurhat to Akkelpur, then an auto-rickshaw to Gopinathpur.' },
        bestTime: { bn: 'দোলপূর্ণিমা (ফাল্গুন–চৈত্র) বা শীতকাল', en: 'Dol Purnima (Feb–Mar) or winter' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'barashivalaya-belamla',
        bn: 'বেলআমলা বারোশিবালয় মন্দির',
        en: 'Barashivalaya Temple, Belamla',
        cat: 'heritage',
        lat: 25.0700, lng: 89.0500,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'দিঘির পাড়ে প্রাচীন শিবমন্দির চত্বর, প্রচলিত আছে একসময় এখানে বারোটি শিবমন্দির ছিল — শিবচতুর্দশীতে জমে মেলা।',
          en: 'An old Shiva temple compound beside a pond, said once to have held twelve shrines — a fair gathers here on Shivaratri.',
        },
        how: { bn: 'জয়পুরহাট শহর থেকে অটোতে বেলআমলা।', en: 'Auto-rickshaw from Joypurhat town to Belamla.' },
        bestTime: { bn: 'শিবচতুর্দশী (ফেব্রুয়ারি–মার্চ) বা শীতকাল', en: 'Shivaratri (Feb–Mar) or winter' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },
];
