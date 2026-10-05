// Content v2 — Sylhet division (except Sunamganj) and Mymensingh division.
// English versions of the existing Bangla text, practical warnings, and 3 new spots per district.
// Fares/fees are conservative approximations — verify on the next field visit.

export default [
  // ── সিলেট বিভাগ ──
  {
    slug: 'sylhet',
    en: {
      overview:
        'Sylhet is the city of hills, stones and saints — the clear Piyain at Jaflong, the drowned forest of Ratargul, the stone beds of Bisnakandi, and the spiritual air around the shrine of Hazrat Shah Jalal (R.).',
      transport:
        'From Dhaka: about 45 minutes by air, 6–7 hours by train (Parabat, Jayantika, Upaban Express) or 5–6 hours by bus. To reach the spots, reserve a CNG auto-rickshaw or microbus from the city.',
      food:
        'Beef cooked with satkora (a local wild citrus) is Sylhet’s signature dish; also try akhni (spiced rice) and fresh tea straight from the gardens.',
      season:
        'In monsoon (June–September) Jaflong, Bisnakandi and Ratargul are at their fullest; winter is the comfortable time for tea-garden walks.',
    },
    warnings: [
      {
        bn: 'জাফলং, বিছনাকান্দি ও সাদা পাথর ভারত সীমান্তঘেঁষা — বিজিবির নির্দেশনা মেনে চলুন, সীমান্ত চিহ্ন পেরোবেন না।',
        en: 'Jaflong, Bisnakandi and Shada Pathor sit right on the Indian border — follow BGB instructions and never cross the border markers.',
      },
      {
        bn: 'পিয়াইন ও ধলাই নদীর স্রোত পাথরের নিচে প্রবল, প্রতি বছর ডুবে মৃত্যুর ঘটনা ঘটে — সাঁতার না জানলে হাঁটুপানির বেশি নামবেন না।',
        en: 'The currents of the Piyain and Dholai run strong beneath the stones and drownings happen every year — if you can’t swim, don’t go deeper than knee-high.',
      },
      {
        bn: 'মেঘালয়ে ভারী বৃষ্টি হলে পাহাড়ি ঢল নেমে কয়েক মিনিটেই পানি বাড়ে — বর্ষায় আবহাওয়ার খবর দেখে বের হোন।',
        en: 'Heavy rain over Meghalaya sends flash floods down within minutes — check the weather forecast before heading out in monsoon.',
      },
      {
        bn: 'ভেজা পাথর খুব পিচ্ছিল — গ্রিপওয়ালা স্যান্ডেল পরুন, আর মোবাইল-ক্যামেরা ওয়াটারপ্রুফ ব্যাগে রাখুন।',
        en: 'Wet stones are very slippery — wear sandals with good grip and keep phones and cameras in a waterproof bag.',
      },
    ],
    hospital: { bn: 'এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল', en: 'MAG Osmani Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'jaflong',
        descEn:
          'A realm of clear Piyain water and pebbles at the foot of the Meghalaya hills, with a view of the Dawki suspension bridge — Sylhet’s signature spot.',
        howEn:
          'CNG or microbus from Sylhet city, 1.5–2 hours. Take a boat across to visit the Sangrampunji waterfall and the Khasia village.',
        bestTime: { bn: 'বর্ষা ও বর্ষার পরপর (জুন–অক্টোবর)', en: 'Monsoon and just after (June–October)' },
        entry: [0, 0],
        hours: 4,
      },
      {
        slug: 'ratargul',
        descEn:
          'A mysterious forest of hijal and koroch trees half-submerged in monsoon — gliding between the trunks in a small dinghy is Bangladesh’s only freshwater swamp-forest safari.',
        howEn:
          'From the city to Motorghat in Gowainghat (about 1–1.5 hours by CNG), then a hired boat. The forest is only truly flooded in monsoon.',
        bestTime: { bn: 'বর্ষা (জুলাই–সেপ্টেম্বর)', en: 'Monsoon (July–September)' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'bisnakandi',
        descEn:
          'A bed of stones under cold streams pouring off the hills — where clouds, hills and water meet, it is the best place in Sylhet for a dip.',
        howEn: 'CNG to Hadarpar bazaar (about 1.5 hours), then a boat or a walk to the stone beds.',
        bestTime: { bn: 'বর্ষা ও শরৎ (জুন–অক্টোবর)', en: 'Monsoon and autumn (June–October)' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'shahjalal-mazar',
        descEn:
          'For about six and a half centuries one of the subcontinent’s great spiritual centres — with a pond of sacred gajar fish and flocks of Jalali pigeons.',
        howEn: 'At Dargah Gate in Sylhet city, a short rickshaw ride from anywhere in town; open through the night.',
        bestTime: { bn: 'সারা বছর; সন্ধ্যা ও বৃহস্পতিবার রাতে বেশি ভিড়', en: 'Year-round; busiest in the evening and on Thursday nights' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'sada-pathor',
        descEn:
          'A bed of bright white stones in the Dholai river with the green wall of Meghalaya beyond — a favourite of the younger generation.',
        howEn: 'From the city to Bholaganj in Companiganj (about 1–1.5 hours by CNG), then a boat from the ghat.',
        bestTime: { bn: 'বর্ষা ও বর্ষার পরপর (জুন–অক্টোবর)', en: 'Monsoon and just after (June–October)' },
        entry: [0, 0],
        hours: 3,
      },
    ],
    newSpots: [
      {
        slug: 'lalakhal',
        bn: 'লালাখাল',
        en: 'Lalakhal',
        cat: 'river',
        lat: 25.095,
        lng: 92.15,
        tags: ['relaxed', 'family'],
        hidden: false,
        desc: {
          bn: 'জৈন্তাপুরে সারী নদীর নীলচে-সবুজ জল, দুই পাড়ে চা-বাগান আর দূরে মেঘালয়ের পাহাড় — নৌকায় ভেসে বেড়ানোর জন্য অপূর্ব।',
          en: 'The turquoise-green water of the Sari river at Jaintiapur, flanked by tea gardens with the Meghalaya hills behind — perfect for a slow boat ride.',
        },
        how: {
          bn: 'সিলেট-তামাবিল সড়কে সারীঘাট পর্যন্ত বাস/সিএনজিতে প্রায় ১ ঘণ্টা, সেখান থেকে ইঞ্জিন নৌকায় লালাখাল।',
          en: 'Bus or CNG along the Sylhet–Tamabil road to Sarighat (about 1 hour), then an engine boat up to Lalakhal.',
        },
        bestTime: { bn: 'শীত ও শরৎ (অক্টোবর–মার্চ) — পানি সবচেয়ে স্বচ্ছ নীল', en: 'Autumn and winter (October–March), when the water is clearest' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'malnicherra-tea-estate',
        bn: 'মালনীছড়া চা-বাগান',
        en: 'Malnicherra Tea Estate',
        cat: 'garden',
        lat: 24.935,
        lng: 91.875,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: '১৮৫৪ সালে প্রতিষ্ঠিত উপমহাদেশের প্রথম বাণিজ্যিক চা-বাগান — শহরের একদম পাশেই টিলার ঢালে সবুজ চা-গালিচা।',
          en: 'Founded in 1854, it is the first commercial tea garden in the subcontinent — rolling green tea slopes right on the edge of the city.',
        },
        how: {
          bn: 'সিলেট শহর থেকে বিমানবন্দর সড়কে রিকশা/সিএনজিতে ১৫-২০ মিনিট।',
          en: 'A 15–20 minute rickshaw or CNG ride from the city along the airport road.',
        },
        bestTime: { bn: 'সকাল বা বিকেল; বর্ষা-পরবর্তী সময়ে সবুজ সবচেয়ে গাঢ়', en: 'Morning or late afternoon; greenest after the monsoon' },
        entry: [0, 0],
        hours: 1.5,
        warnings: [
          {
            bn: 'এটি চালু বাগান — শ্রমিকদের কাজে বাধা দেবেন না, চা-গাছ ছিঁড়বেন না এবং কারখানায় ঢুকতে অনুমতি নিন।',
            en: 'This is a working estate — don’t disturb the workers or pluck the bushes, and ask permission before entering the factory area.',
          },
        ],
      },
      {
        slug: 'pangthumai-waterfall',
        bn: 'পাংথুমাই ঝর্ণা',
        en: 'Pangthumai Waterfall',
        cat: 'waterfall',
        lat: 25.19,
        lng: 91.89,
        tags: ['adventure', 'relaxed'],
        hidden: true,
        desc: {
          bn: 'গোয়াইনঘাটের সীমান্তঘেঁষা গ্রাম পাংথুমাই থেকে দেখা মেঘালয়ের পাহাড় বেয়ে নামা বিশাল ঝর্ণা — নিচের পিয়াইন ধারায় শান্ত নৌকাভ্রমণ।',
          en: 'From the border village of Pangthumai in Gowainghat you face a tall waterfall tumbling down the Meghalaya hills, with a quiet boat ride on the stream below.',
        },
        how: {
          bn: 'সিলেট থেকে সিএনজিতে গোয়াইনঘাট হয়ে পাংথুমাই, প্রায় ২ ঘণ্টা; বিছনাকান্দির সাথে একদিনে ঘোরা যায়।',
          en: 'CNG from Sylhet via Gowainghat to Pangthumai, about 2 hours; easy to combine with Bisnakandi in one day.',
        },
        bestTime: { bn: 'বর্ষা (জুন–সেপ্টেম্বর) — তখনই ঝর্ণা পূর্ণ', en: 'Monsoon (June–September), when the falls are full' },
        entry: [0, 0],
        hours: 2,
        warnings: [
          {
            bn: 'ঝর্ণাটি ভারতের অংশে — বাংলাদেশ পাশ থেকেই দেখুন, ঝর্ণার দিকে এগোবেন না।',
            en: 'The waterfall itself is on the Indian side — view it from Bangladesh and don’t walk towards it.',
          },
        ],
      },
    ],
  },
  {
    slug: 'moulvibazar',
    en: {
      overview:
        'The tea capital — Sreemangal’s carpet-green gardens, the hoolock-gibbon calls of Lawachara, the Madhabkunda waterfall and Hakaluki Haor make Moulvibazar a complete nature package.',
      transport:
        'From Dhaka: train to Sreemangal (Parabat, Jayantika) in 5–6 hours, or a direct bus. Reserve a jeep or CNG to tour the gardens and forests.',
      food:
        'Nilkantha’s seven-layer tea is Sreemangal’s icon; also try Manipuri sidol (fermented fish paste) and the local para sandesh sweet.',
      season:
        'October–March, when the tea gardens are at their crispest; in monsoon Madhabkunda and Hum Hum falls are at full force.',
    },
    warnings: [
      {
        bn: 'লাউয়াছড়া ও হামহামের বনে বর্ষায় প্রচুর জোঁক — লম্বা মোজা পরুন, সাথে লবণ রাখুন।',
        en: 'Leeches are plentiful in the Lawachara and Hum Hum forests in monsoon — wear long socks and carry salt.',
      },
      {
        bn: 'লাউয়াছড়ার ভেতর দিয়ে নিয়মিত ট্রেন চলে — রেললাইনে দাঁড়িয়ে ছবি তুলবেন না।',
        en: 'Trains run regularly through Lawachara — don’t stand on the railway track for photos.',
      },
      {
        bn: 'মাধবকুণ্ড ও হামহামের নিচের পাথর পিচ্ছিল ও কুণ্ড গভীর — জলপ্রপাতের নিচে গোসলে নামবেন না।',
        en: 'The rocks below Madhabkunda and Hum Hum are slippery and the plunge pools deep — don’t bathe under the falls.',
      },
      {
        bn: 'বনের ট্রেইলে একা না গিয়ে স্থানীয় গাইড নিন এবং সন্ধ্যার আগে ফিরে আসুন।',
        en: 'Don’t walk forest trails alone — hire a local guide and be back before dusk.',
      },
    ],
    hospital: { bn: 'মৌলভীবাজার জেলা সদর হাসপাতাল', en: 'Moulvibazar District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'srimangal-tea',
        descEn:
          'Waves of carpet-green tea stretching to the horizon — don’t miss a misty dawn walk or a cycle ride through the gardens.',
        howEn: 'The gardens surround Sreemangal town; they begin as soon as you turn onto the Bhanugachh road.',
        bestTime: { bn: 'অক্টোবর–মার্চ; ভোর ও বিকেল', en: 'October–March; early morning and late afternoon' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'lawachara',
        descEn:
          'A rainforest ringing with the calls of the rare hoolock gibbon — the railway line cutting through it is one of the most photogenic frames in the country.',
        howEn: 'About 20 minutes by CNG from Sreemangal; walk the trails with a guide.',
        bestTime: { bn: 'অক্টোবর–মার্চ; সকালে পাখি ও উল্লুক দেখার সম্ভাবনা বেশি', en: 'October–March; mornings give the best chance of birds and gibbons' },
        entry: [20, 60],
        hours: 3,
      },
      {
        slug: 'madhabkunda',
        descEn:
          'Plunging roughly 200 feet, Madhabkunda is the country’s best-known waterfall — in monsoon its roar is deafening.',
        howEn: 'Reach the eco-park gate at Kathaltali in Barlekha by bus from Sylhet or Moulvibazar, then a short CNG ride.',
        bestTime: { bn: 'বর্ষা ও বর্ষার পরপর (জুন–অক্টোবর)', en: 'Monsoon and just after (June–October)' },
        entry: [20, 50],
        hours: 2,
      },
      {
        slug: 'hakaluki-haor',
        descEn:
          'One of the country’s largest haors — a Ramsar-listed wetland alive with hundreds of thousands of migratory birds in winter.',
        howEn: 'Go to a ghat from Barlekha or Kulaura, then hire a boat.',
        bestTime: { bn: 'শীত (ডিসেম্বর–ফেব্রুয়ারি) পরিযায়ী পাখির জন্য; বর্ষায় হাওর পূর্ণ', en: 'Winter (December–February) for migratory birds; monsoon for the full haor' },
        entry: [0, 0],
        hours: 4,
      },
    ],
    newSpots: [
      {
        slug: 'hum-hum-waterfall',
        bn: 'হামহাম জলপ্রপাত',
        en: 'Hum Hum Waterfall',
        cat: 'waterfall',
        lat: 24.14,
        lng: 91.89,
        tags: ['adventure'],
        hidden: false,
        desc: {
          bn: 'কমলগঞ্জের রাজকান্দি সংরক্ষিত বনের গভীরে লুকানো জলপ্রপাত — বাঁশবন, ছড়া আর টিলা পেরিয়ে কয়েক ঘণ্টার ট্রেকের পুরস্কার।',
          en: 'A waterfall hidden deep in the Rajkandi Reserve Forest of Kamalganj — the reward for a trek of a few hours through bamboo groves, streams and hillocks.',
        },
        how: {
          bn: 'শ্রীমঙ্গল থেকে জিপ/সিএনজিতে কলাবনপাড়া (চাম্পারায় চা-বাগান হয়ে), সেখান থেকে গাইডসহ হেঁটে একদিকে ২-৩ ঘণ্টা।',
          en: 'Jeep or CNG from Sreemangal to Kalabonpara (via Champarai tea estate), then a guided walk of 2–3 hours each way.',
        },
        bestTime: { bn: 'বর্ষার শেষভাগ থেকে শরৎ (আগস্ট–অক্টোবর)', en: 'Late monsoon to autumn (August–October)' },
        entry: [0, 0],
        hours: 7,
        warnings: [
          {
            bn: 'ট্রেইল কাদাময় ও জোঁকে ভরা — ভোরে রওনা দিন, স্থানীয় গাইড নিন এবং লাঠি সাথে রাখুন।',
            en: 'The trail is muddy and full of leeches — start at dawn, take a local guide and carry a walking stick.',
          },
        ],
      },
      {
        slug: 'baikka-beel',
        bn: 'বাইক্কা বিল',
        en: 'Baikka Beel',
        cat: 'haor',
        lat: 24.36,
        lng: 91.66,
        tags: ['relaxed', 'family'],
        hidden: true,
        desc: {
          bn: 'হাইল হাওরের স্থায়ী মৎস্য ও পাখির অভয়াশ্রম — পর্যবেক্ষণ টাওয়ার থেকে শাপলা-পদ্মের জলে পানকৌড়ি, বেগুনি কালেম আর শীতের হাঁসের ঝাঁক।',
          en: 'A permanent fish and bird sanctuary in Hail Haor — from the watchtower you see cormorants, purple swamphens and winter duck flocks among water lilies.',
        },
        how: {
          bn: 'শ্রীমঙ্গল শহর থেকে সিএনজিতে প্রায় ৪০-৫০ মিনিট, বড়গাঙিনা হয়ে বিলের পাড়।',
          en: 'About 40–50 minutes by CNG from Sreemangal town, via Baragangina to the edge of the beel.',
        },
        bestTime: { bn: 'শীত (ডিসেম্বর–ফেব্রুয়ারি), ভোরবেলা', en: 'Winter (December–February), early morning' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'madhabpur-lake',
        bn: 'মাধবপুর লেক',
        en: 'Madhabpur Lake',
        cat: 'garden',
        lat: 24.22,
        lng: 91.87,
        tags: ['relaxed', 'family'],
        hidden: false,
        desc: {
          bn: 'কমলগঞ্জের চা-টিলার ভাঁজে আঁকাবাঁকা লেক — শীত-বসন্তে বেগুনি শাপলায় ঢাকা জল আর চারপাশে চা-বাগানের শান্তি।',
          en: 'A winding lake folded between the tea hills of Kamalganj — in winter and spring its water is covered with purple lilies, ringed by quiet tea gardens.',
        },
        how: {
          bn: 'শ্রীমঙ্গল থেকে ভানুগাছ হয়ে সিএনজিতে প্রায় ৪৫ মিনিট।',
          en: 'About 45 minutes by CNG from Sreemangal via Bhanugachh.',
        },
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
  },
  {
    slug: 'habiganj',
    en: {
      overview:
        'Habiganj is a district of tea gardens and forest — the trails of Satchari, the deep woods of Rema-Kalenga and the quiet of its tea estates.',
      transport:
        'From Dhaka: 4–5 hours by train or bus to Shaistaganj or Habiganj town. Satchari lies on the Madhabpur road (Dhaka–Sylhet highway).',
      food: 'Fresh garden tea and fish from the haor country are the main draws.',
      season: 'Winter is best for forest and garden trips; in monsoon the green is at its deepest.',
    },
    warnings: [
      {
        bn: 'সাতছড়ি ও রেমা-কালেঙ্গার ট্রেইলে বর্ষায় জোঁক ও পিচ্ছিল কাদা — গাইড ছাড়া গভীর বনে ঢুকবেন না।',
        en: 'Satchari and Rema-Kalenga trails bring leeches and slippery mud in monsoon — don’t go deep into the forest without a guide.',
      },
      {
        bn: 'রেমা-কালেঙ্গা ও সাতছড়ির পূর্ব প্রান্ত ত্রিপুরা সীমান্তঘেঁষা — সীমান্ত এলাকায় ঘোরাঘুরি এড়িয়ে চলুন।',
        en: 'The eastern edges of Rema-Kalenga and Satchari run along the Tripura border — avoid wandering into border areas.',
      },
      {
        bn: 'বর্ষায় ভাটি অঞ্চলের হাওরে নৌকা চলাচলে লাইফ জ্যাকেট নিন এবং বজ্রপাতের সময় খোলা নৌকায় থাকবেন না।',
        en: 'On the haors of the low-lying north, wear a life jacket in monsoon and avoid open boats during lightning.',
      },
    ],
    hospital: { bn: 'হবিগঞ্জ জেলা সদর হাসপাতাল', en: 'Habiganj District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'satchari',
        descEn:
          'The forest of “seven streams”, home to hoolock gibbons and barking deer — three marked trails offer jungle walks from half an hour to a few hours.',
        howEn: 'From Jagadishpur in Madhabpur, take an auto to the park gate on the Dhaka–Sylhet highway.',
        bestTime: { bn: 'নভেম্বর–মার্চ; সকালের দিকে', en: 'November–March; in the morning' },
        entry: [20, 60],
        hours: 3,
      },
      {
        slug: 'rema-kalenga',
        descEn:
          'One of the country’s largest remaining natural forests — a remote realm of bears and yellow-throated martens and a genuinely offbeat trek.',
        howEn: 'Best reached from Chunarughat with a guide; get permission from the Forest Department.',
        bestTime: { bn: 'শীত (নভেম্বর–ফেব্রুয়ারি)', en: 'Winter (November–February)' },
        entry: [20, 60],
        hours: 5,
      },
    ],
    newSpots: [
      {
        slug: 'teliapara-muktijuddha-memorial',
        bn: 'তেলিয়াপাড়া চা-বাগান ও মুক্তিযুদ্ধ স্মৃতিসৌধ',
        en: 'Teliapara Tea Estate & Liberation War Memorial',
        cat: 'heritage',
        lat: 24.11,
        lng: 91.42,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: '১৯৭১ সালের ৪ এপ্রিল এই চা-বাগানের ম্যানেজার বাংলোতে সেক্টর কমান্ডারদের প্রথম বৈঠক হয়েছিল — বুলেট আকৃতির স্মৃতিসৌধ আর চারপাশে চা-টিলার সবুজ।',
          en: 'On 4 April 1971 the first meeting of Liberation War commanders was held in this estate’s manager’s bungalow — today a bullet-shaped memorial stands amid green tea hills.',
        },
        how: {
          bn: 'মাধবপুর বা শায়েস্তাগঞ্জ থেকে ঢাকা-সিলেট মহাসড়ক ধরে সিএনজিতে; সাতছড়ি থেকে খুব কাছে।',
          en: 'CNG along the Dhaka–Sylhet highway from Madhabpur or Shaistaganj; very close to Satchari.',
        },
        bestTime: { bn: 'সারা বছর; শীতে আরামদায়ক', en: 'Year-round; most comfortable in winter' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'shankarpasha-shahi-mosque',
        bn: 'শংকরপাশা শাহী মসজিদ',
        en: 'Shankarpasha Shahi Mosque',
        cat: 'heritage',
        lat: 24.33,
        lng: 91.39,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'সদর উপজেলার উচাইলে সুলতানি আমলের পোড়ামাটির অলংকরণে সাজানো প্রাচীন মসজিদ — নিরিবিলি গ্রামীণ পরিবেশে ইতিহাসের ছোঁয়া।',
          en: 'An old Sultanate-era mosque at Uchail in Sadar upazila, decorated with terracotta ornament — a touch of history in a quiet village setting.',
        },
        how: {
          bn: 'হবিগঞ্জ শহর থেকে সিএনজিতে প্রায় ৩০-৪০ মিনিট।',
          en: 'About 30–40 minutes by CNG from Habiganj town.',
        },
        bestTime: { bn: 'শীতকাল; নামাজের সময় এড়িয়ে যান', en: 'Winter; avoid prayer times' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'bithangal-akhra',
        bn: 'বিথঙ্গল আখড়া',
        en: 'Bithangal Akhra',
        cat: 'haor',
        lat: 24.47,
        lng: 91.27,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'বানিয়াচংয়ের হাওরবেষ্টিত গ্রামে সতেরো শতকের বৈষ্ণব আখড়া — বর্ষায় চারপাশ পানিতে ডুবে গেলে আখড়াটি যেন দ্বীপে ভাসে।',
          en: 'A 17th-century Vaishnava monastery in a haor village of Baniachong — in monsoon, when the water rises all around, it seems to float on an island.',
        },
        how: {
          bn: 'হবিগঞ্জ শহর থেকে সুজাতপুর/খোয়াই ঘাট পর্যন্ত গিয়ে বর্ষায় ট্রলারে, শুকনো মৌসুমে সড়ক ও হেঁটে।',
          en: 'From Habiganj town go to the river ghat and take a trawler in monsoon; in the dry season it is reached by road and on foot.',
        },
        bestTime: { bn: 'বর্ষা (জুলাই–সেপ্টেম্বর) — হাওরের রূপে', en: 'Monsoon (July–September), when the haor is full' },
        entry: [0, 0],
        hours: 4,
      },
    ],
  },

  // ── ময়মনসিংহ বিভাগ ──
  {
    slug: 'mymensingh',
    en: {
      overview:
        'Mymensingh, on the banks of the Brahmaputra, is a city of learning and art — the royal grandeur of Shashi Lodge, the canvases of Zainul Abedin and the famous monda sweet of Muktagacha.',
      transport:
        'From Dhaka (Mohakhali) 3–4 hours by bus, or by train on the Tista, Agnibina or Brahmaputra Express.',
      food:
        'Gopal Pal’s 200-year-old monda from Muktagacha is legendary; pair it with fish from the Brahmaputra.',
      season: 'October–March; in monsoon the Brahmaputra runs full.',
    },
    warnings: [
      {
        bn: 'ব্রহ্মপুত্রে নৌকাভ্রমণে লাইফ জ্যাকেট চেয়ে নিন; বর্ষায় স্রোত প্রবল, অতিরিক্ত যাত্রী নেওয়া নৌকায় উঠবেন না।',
        en: 'Ask for a life jacket on Brahmaputra boat rides; the monsoon current is strong, so avoid overloaded boats.',
      },
      {
        bn: 'শশী লজ ও আলেকজান্ডার ক্যাসল সরকারি প্রতিষ্ঠানের চত্বরে — খোলার সময় ও ছবি তোলার নিয়ম মেনে চলুন।',
        en: 'Shashi Lodge and Alexander Castle stand on government college campuses — respect opening hours and photography rules.',
      },
      {
        bn: 'ঢাকা-ময়মনসিংহ মহাসড়ক ও শহরের সড়কে যানজট বেশি — সন্ধ্যার পর অটো-সিএনজিতে ভাড়া আগে ঠিক করে নিন।',
        en: 'Traffic on the Dhaka–Mymensingh highway and in town is heavy — agree auto or CNG fares before setting off, especially after dark.',
      },
    ],
    hospital: { bn: 'ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল', en: 'Mymensingh Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'shashi-lodge',
        descEn:
          'The pink palace of the Muktagacha maharajas — with its Venus fountain and ornate detail, the most photogenic address in Mymensingh.',
        howEn: 'In the city centre (inside the Women’s Teachers’ Training College campus); easy by rickshaw.',
        bestTime: { bn: 'সারা বছর; শীতের বিকেল', en: 'Year-round; winter afternoons' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'zainul-abedin-park',
        descEn:
          'A museum of the master painter Zainul Abedin’s rare works, with a riverside park next door for boat rides and sunsets.',
        howEn: 'In the Kachari Ghat area by the Brahmaputra; the museum is closed on Mondays.',
        bestTime: { bn: 'অক্টোবর–মার্চ; সূর্যাস্তের সময় নদীপাড়', en: 'October–March; the riverside at sunset' },
        entry: [20, 30],
        hours: 2,
      },
      {
        slug: 'muktagacha-rajbari',
        descEn:
          'The vast palace complex of the zamindars of Muktagacha — and the original monda shop is in the same bazaar.',
        howEn: '30–40 minutes by bus or CNG from Mymensingh city.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0],
        hours: 2,
      },
    ],
    newSpots: [
      {
        slug: 'alexander-castle',
        bn: 'আলেকজান্ডার ক্যাসল',
        en: 'Alexander Castle',
        cat: 'heritage',
        lat: 24.757,
        lng: 90.409,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: '১৮৭৯ সালে মহারাজা সূর্যকান্ত আচার্য চৌধুরীর নির্মিত লোহার কারুকাজের দুর্গসদৃশ ভবন — রবীন্দ্রনাথ ঠাকুরসহ অনেক বরেণ্য অতিথি এখানে এসেছিলেন।',
          en: 'A castle-like mansion with ironwork detail built in 1879 by Maharaja Suryakanta Acharya Chowdhury — Rabindranath Tagore and other eminent guests once stayed here.',
        },
        how: {
          bn: 'ময়মনসিংহ শহরের টিচার্স ট্রেনিং কলেজ চত্বরে; শহরের যেকোনো জায়গা থেকে রিকশায়।',
          en: 'On the Teachers’ Training College campus in Mymensingh city; a rickshaw ride from anywhere in town.',
        },
        bestTime: { bn: 'সারা বছর; ছুটির দিন এড়িয়ে কর্মদিবসের দিনে', en: 'Year-round; on working days rather than holidays' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'bau-botanical-garden',
        bn: 'বাংলাদেশ কৃষি বিশ্ববিদ্যালয় বোটানিক্যাল গার্ডেন',
        en: 'Bangladesh Agricultural University Botanical Garden',
        cat: 'garden',
        lat: 24.724,
        lng: 90.428,
        tags: ['family', 'relaxed'],
        hidden: false,
        desc: {
          bn: 'ব্রহ্মপুত্রের তীরে বিস্তৃত কৃষি বিশ্ববিদ্যালয় ক্যাম্পাসের উদ্ভিদ উদ্যান — দেশি-বিদেশি হাজারো প্রজাতির গাছের সমৃদ্ধ সংগ্রহ।',
          en: 'The botanical garden of the sprawling Agricultural University campus on the Brahmaputra — a rich collection of native and exotic plant species.',
        },
        how: {
          bn: 'শহর থেকে অটো/রিকশায় ১৫-২০ মিনিটে বাকৃবি ক্যাম্পাস।',
          en: '15–20 minutes by auto or rickshaw from the city to the BAU campus.',
        },
        bestTime: { bn: 'শীত ও বসন্ত (নভেম্বর–মার্চ)', en: 'Winter and spring (November–March)' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'trishal-nazrul-smriti',
        bn: 'ত্রিশালের নজরুল স্মৃতিকেন্দ্র',
        en: 'Nazrul Memorial, Trishal',
        cat: 'heritage',
        lat: 24.58,
        lng: 90.39,
        tags: ['relaxed', 'family'],
        hidden: true,
        desc: {
          bn: 'কৈশোরে জাতীয় কবি কাজী নজরুল ইসলাম ত্রিশালের দরিরামপুর স্কুলে পড়েছিলেন — তাঁর স্মৃতিবিজড়িত স্থান আর স্মৃতিকেন্দ্রে কবির জীবনের নানা নিদর্শন।',
          en: 'As a boy, national poet Kazi Nazrul Islam studied at Darirampur school in Trishal — the memorial and the places linked to him display mementos of the poet’s life.',
        },
        how: {
          bn: 'ঢাকা-ময়মনসিংহ মহাসড়কে ত্রিশালে নেমে রিকশায় দরিরামপুর; ময়মনসিংহ শহর থেকে বাসে প্রায় ৪৫ মিনিট।',
          en: 'Get off at Trishal on the Dhaka–Mymensingh highway and take a rickshaw to Darirampur; about 45 minutes by bus from Mymensingh city.',
        },
        bestTime: { bn: 'সারা বছর; মে মাসে নজরুলজয়ন্তীর অনুষ্ঠান', en: 'Year-round; Nazrul’s birth anniversary events in May' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
  },
  {
    slug: 'jamalpur',
    en: {
      overview:
        'Jamalpur, cradled by the Jamuna and the Brahmaputra, is the district of nakshi kantha embroidery — with the scenery of Lauchapra by the Garo hills and the age-old Doyamoyee Temple.',
      transport:
        'From Dhaka 4–5 hours by train (Tista, Brahmaputra Express) or bus; Lauchapra is reached via Bakshiganj.',
      food: 'Chhanar polao and chhanar payesh (sweet cottage-cheese dishes) are Jamalpur’s own sweet tradition.',
      season: 'Winter is the best time for the hill forests.',
    },
    warnings: [
      {
        bn: 'লাউচাপড়া-বকশীগঞ্জের গারো পাহাড় এলাকায় মাঝে মাঝে বন্য হাতির পাল নামে — সন্ধ্যার পর বনপথে চলাচল করবেন না।',
        en: 'Wild elephant herds sometimes come down into the Garo hills around Lauchapra and Bakshiganj — don’t travel on forest roads after dark.',
      },
      {
        bn: 'লাউচাপড়া ভারত সীমান্তের কাছে — বিজিবির নির্দেশনা মানুন, সীমান্তের দিকে ট্রেক করবেন না।',
        en: 'Lauchapra is close to the Indian border — follow BGB instructions and don’t trek towards the border.',
      },
      {
        bn: 'যমুনা-ব্রহ্মপুত্রের চরে নৌকায় যাতায়াতে লাইফ জ্যাকেট নিন; বর্ষায় নদীভাঙন ও প্রবল স্রোত থাকে।',
        en: 'Wear a life jacket on boats to the Jamuna–Brahmaputra chars; monsoon brings strong currents and riverbank erosion.',
      },
    ],
    hospital: { bn: 'জামালপুর ২৫০ শয্যা জেনারেল হাসপাতাল', en: 'Jamalpur 250-bed General Hospital' },
    spotUpdates: [
      {
        slug: 'lauchapra',
        descEn:
          'From the watchtower amid the green swells of the Garo hills the horizon stretches to the Indian border — a quiet hill getaway.',
        howEn: 'From Jamalpur or Sherpur go to Bakshiganj, then an auto to Lauchapra.',
        bestTime: { bn: 'শীত (নভেম্বর–ফেব্রুয়ারি)', en: 'Winter (November–February)' },
        entry: [10, 30],
        hours: 3,
      },
      {
        slug: 'doyamoyee-mandir',
        descEn: 'A temple several centuries old in the heart of town, bearing the marks of a terracotta tradition.',
        howEn: 'By rickshaw within Jamalpur town.',
        bestTime: { bn: 'সারা বছর; দুর্গাপূজার সময় জমজমাট', en: 'Year-round; lively during Durga Puja' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'gandhi-ashram-melandaha',
        bn: 'গান্ধী আশ্রম, মেলান্দহ',
        en: 'Gandhi Ashram, Melandaha',
        cat: 'heritage',
        lat: 24.99,
        lng: 89.85,
        tags: ['relaxed', 'family'],
        hidden: true,
        desc: {
          bn: '১৯৩৪ সালে মহাত্মা গান্ধীর আদর্শে কাপাসহাটিয়ায় গড়ে ওঠা আশ্রম — এখন এখানে ব্রিটিশবিরোধী আন্দোলন ও মুক্তিযুদ্ধের স্মৃতি জাদুঘর।',
          en: 'An ashram founded at Kapashatia in 1934 on Gandhian ideals — it now houses a museum of the anti-colonial movement and the Liberation War.',
        },
        how: {
          bn: 'জামালপুর শহর থেকে মেলান্দহ হয়ে সিএনজি/অটোতে কাপাসহাটিয়া, প্রায় ৪০ মিনিট।',
          en: 'CNG or auto from Jamalpur town via Melandaha to Kapashatia, about 40 minutes.',
        },
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0],
        hours: 1.5,
      },
      {
        slug: 'shah-jamal-mazar',
        bn: 'হজরত শাহ জামাল (রহ.)-এর মাজার',
        en: 'Shrine of Hazrat Shah Jamal (R.)',
        cat: 'heritage',
        lat: 24.92,
        lng: 89.95,
        tags: ['relaxed', 'family'],
        hidden: false,
        desc: {
          bn: 'যে সুফি সাধকের নামে জামালপুর জেলার নাম, শহরের প্রাণকেন্দ্রে তাঁর মাজার — দেশের নানা প্রান্তের ভক্তদের আনাগোনা।',
          en: 'The shrine of the Sufi saint after whom Jamalpur is named, in the heart of town — visited by devotees from across the country.',
        },
        how: {
          bn: 'জামালপুর শহরের ভেতরে; রিকশায় সহজে যাওয়া যায়।',
          en: 'Inside Jamalpur town; easily reached by rickshaw.',
        },
        bestTime: { bn: 'সারা বছর', en: 'Year-round' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'bahadurabad-ghat',
        bn: 'বাহাদুরাবাদ ঘাট',
        en: 'Bahadurabad Ghat',
        cat: 'river',
        lat: 25.18,
        lng: 89.69,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'দেওয়ানগঞ্জে যমুনার পাড়ের ঐতিহাসিক রেল-ফেরিঘাট — বিশাল নদী, বালুচর আর সূর্যাস্তে নৌকার সারির দৃশ্য অনবদ্য।',
          en: 'A historic rail-ferry ghat on the Jamuna at Dewanganj — the vast river, sandbars and lines of boats at sunset make a memorable sight.',
        },
        how: {
          bn: 'জামালপুর থেকে ট্রেন বা বাসে দেওয়ানগঞ্জ, সেখান থেকে অটোতে ঘাট।',
          en: 'Train or bus from Jamalpur to Dewanganj, then an auto to the ghat.',
        },
        bestTime: { bn: 'শরৎ ও শীত (অক্টোবর–ফেব্রুয়ারি)', en: 'Autumn and winter (October–February)' },
        entry: [0, 0],
        hours: 2,
      },
    ],
  },
  {
    slug: 'netrokona',
    en: {
      overview:
        'A land of the clear Someshwari and blue china-clay hills — Netrokona is home to the coloured hillocks of Birishiri and Durgapur, Hajong and Garo culture, and wide haors.',
      transport:
        'From Dhaka (Mohakhali) 4–5 hours by bus to Netrokona or Durgapur; the last stretch by auto or motorbike.',
      food: 'Balish mishti (the “pillow” sweet) is Netrokona’s pride; the haor fish is excellent too.',
      season:
        'Just after the monsoon (September–November) the Someshwari is at its bluest; winter is lovely too.',
    },
    warnings: [
      {
        bn: 'দুর্গাপুর-বিজয়পুর এলাকা ভারত সীমান্তঘেঁষা — বিজিবি ক্যাম্পের নির্দেশনা মানুন, সীমান্ত পিলারের কাছে যাবেন না।',
        en: 'The Durgapur–Bijoypur area is right on the Indian border — follow BGB camp instructions and stay away from the border pillars.',
      },
      {
        bn: 'সোমেশ্বরীতে বালু-কয়লা তোলার নৌকা চলে এবং কোথাও কোথাও হঠাৎ গভীর গর্ত — সাঁতার না জানলে নদীতে নামবেন না।',
        en: 'Sand and coal dredging boats work the Someshwari and the bed has sudden deep holes — don’t enter the river if you can’t swim.',
      },
      {
        bn: 'চীনামাটির টিলার ঢাল বৃষ্টিতে কাদা হয়ে খুব পিচ্ছিল হয় — লেকের ধারে সাবধানে হাঁটুন।',
        en: 'The china-clay slopes turn to slick mud in the rain — walk carefully along the lake edges.',
      },
      {
        bn: 'হাওরে বর্ষায় ঝড়-ঢেউ ও বজ্রপাতের ঝুঁকি — লাইফ জ্যাকেট নিন এবং আকাশ কালো হলে তীরে ফিরে আসুন।',
        en: 'Monsoon haors bring storms, waves and lightning — wear a life jacket and head back to shore when the sky darkens.',
      },
    ],
    hospital: { bn: 'নেত্রকোনা জেলা সদর হাসপাতাল', en: 'Netrokona District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'birishiri',
        descEn:
          'Turquoise lakes cradled by white and pink china-clay hillocks — one of the most surreal landscapes in the country.',
        howEn: 'From Durgapur cross the Someshwari and go by auto or motorbike to Bijoypur.',
        bestTime: { bn: 'সেপ্টেম্বর–ফেব্রুয়ারি', en: 'September–February' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'someshwari-river',
        descEn:
          'A crystal-clear river flowing down from the Garo hills — drift by boat and enjoy the green banks and sandbars on either side.',
        howEn: 'Boats are available right at the Durgapur ghat.',
        bestTime: { bn: 'বর্ষা-পরবর্তী সময় (সেপ্টেম্বর–নভেম্বর)', en: 'After the monsoon (September–November)' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'komola-ranir-dighi',
        descEn:
          'The legendary queen’s pond and a memorial to the Hajong uprising — a blend of history and folklore.',
        howEn: 'It lies on the way to Birishiri.',
        bestTime: { bn: 'শীতকাল', en: 'Winter' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'ranikhong-mission',
        bn: 'রানীখং মিশন ও গির্জা',
        en: 'Ranikhong Mission & Church',
        cat: 'hill',
        lat: 25.13,
        lng: 90.65,
        tags: ['relaxed', 'family'],
        hidden: false,
        desc: {
          bn: 'সোমেশ্বরীর তীরে টিলার ওপর ১৯১২ সালে প্রতিষ্ঠিত ক্যাথলিক মিশন — চূড়া থেকে নদী আর গারো পাহাড়ের নিসর্গ চোখ জুড়ায়।',
          en: 'A Catholic mission founded in 1912 on a hillock above the Someshwari — the view of the river and the Garo hills from the top is captivating.',
        },
        how: {
          bn: 'দুর্গাপুর থেকে সোমেশ্বরী পার হয়ে অটো/বাইকে ২০-৩০ মিনিট; বিজয়পুরের পথেই পড়ে।',
          en: 'From Durgapur cross the Someshwari and take an auto or bike for 20–30 minutes; it lies on the way to Bijoypur.',
        },
        bestTime: { bn: 'অক্টোবর–ফেব্রুয়ারি; ডিসেম্বরে বড়দিনের উৎসব', en: 'October–February; Christmas celebrations in December' },
        entry: [0, 0],
        hours: 1,
        warnings: [
          {
            bn: 'এটি সক্রিয় উপাসনালয় — প্রার্থনার সময় নীরবতা বজায় রাখুন ও শালীন পোশাক পরুন।',
            en: 'This is an active place of worship — keep quiet during services and dress modestly.',
          },
        ],
      },
      {
        slug: 'birishiri-cultural-academy',
        bn: 'বিরিশিরি ক্ষুদ্র নৃগোষ্ঠী কালচারাল একাডেমি',
        en: 'Birishiri Indigenous Cultural Academy',
        cat: 'heritage',
        lat: 25.105,
        lng: 90.655,
        tags: ['family', 'relaxed'],
        hidden: true,
        desc: {
          bn: 'গারো, হাজংসহ এ অঞ্চলের আদিবাসী সংস্কৃতির চর্চাকেন্দ্র — ছোট জাদুঘরে ঐতিহ্যবাহী পোশাক, বাদ্যযন্ত্র ও ব্যবহার্য সামগ্রী।',
          en: 'A centre for the indigenous cultures of the region, including the Garo and Hajong — its small museum shows traditional dress, instruments and household objects.',
        },
        how: {
          bn: 'বিরিশিরি বাজারের কাছে; দুর্গাপুর থেকে রিকশা/অটোতে কয়েক মিনিট।',
          en: 'Near Birishiri bazaar; a few minutes by rickshaw or auto from Durgapur.',
        },
        bestTime: { bn: 'সারা বছর; শীতে উৎসবের মৌসুম', en: 'Year-round; festival season in winter' },
        entry: [0, 0],
        hours: 1,
      },
      {
        slug: 'dingaputa-haor',
        bn: 'ডিঙ্গাপোতা হাওর',
        en: 'Dingaputa Haor',
        cat: 'haor',
        lat: 24.86,
        lng: 90.98,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'মোহনগঞ্জের বিশাল হাওর — বর্ষায় দিগন্তজোড়া জলের মাঝে দ্বীপের মতো ভাসমান গ্রাম, শীতে সবুজ বোরো ক্ষেত আর পাখি।',
          en: 'A vast haor at Mohanganj — in monsoon villages float like islands in water stretching to the horizon; in winter it turns to green boro paddy and birds.',
        },
        how: {
          bn: 'ঢাকা থেকে ট্রেনে (হাওর এক্সপ্রেস) বা বাসে মোহনগঞ্জ, সেখান থেকে ঘাটে গিয়ে নৌকা ভাড়া।',
          en: 'Train (Haor Express) or bus from Dhaka to Mohanganj, then hire a boat from the ghat.',
        },
        bestTime: { bn: 'বর্ষা (জুলাই–সেপ্টেম্বর)', en: 'Monsoon (July–September)' },
        entry: [0, 0],
        hours: 4,
      },
    ],
  },
  {
    slug: 'sherpur',
    en: {
      overview:
        'Sherpur lies at the foot of the Garo hills — Gajni’s suspension bridge and watchtower, Madhutila’s forest trails, and the culture of the Koch and Garo communities.',
      transport:
        'From Dhaka (Mohakhali) 3.5–4 hours by bus to Sherpur; Gajni and Madhutila are reached by CNG via Jhenaigati and Nalitabari.',
      food: 'Chhanar payesh and chhanar chop are Sherpur’s famous sweets; vegetables from hill jhum farms are wonderfully fresh.',
      season: 'Winter (November–February) — the season for picnics and hill trails.',
    },
    warnings: [
      {
        bn: 'গারো পাহাড়ে প্রায়ই বন্য হাতির পাল লোকালয়ে নামে — সন্ধ্যার পর বনপথে চলবেন না, হাতি দেখলে দূরত্ব বজায় রাখুন।',
        en: 'Wild elephant herds often come down from the Garo hills — avoid forest roads after dark and keep your distance if you see elephants.',
      },
      {
        bn: 'গজনী, মধুটিলা ও পানিহাটা ভারত সীমান্তঘেঁষা — বিজিবির নির্দেশনা মেনে চলুন।',
        en: 'Gajni, Madhutila and Panihata sit on the Indian border — follow BGB instructions.',
      },
      {
        bn: 'শীতের ছুটিতে পিকনিকের ভিড়ে গজনী-মধুটিলা খুব জমজমাট হয় — শান্তিতে ঘুরতে কর্মদিবসে যান।',
        en: 'Gajni and Madhutila get very crowded with picnic parties on winter holidays — go on a weekday for a quieter visit.',
      },
    ],
    hospital: { bn: 'শেরপুর জেলা সদর হাসপাতাল', en: 'Sherpur District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'gajni-obokash',
        descEn:
          'A hill recreation centre laid out with hillocks, a lake, a suspension bridge and sculptures — the watchtower gives a panorama of the Garo hills.',
        howEn: 'Auto from Jhenaigati to Gajni.',
        bestTime: { bn: 'শীত (নভেম্বর–ফেব্রুয়ারি)', en: 'Winter (November–February)' },
        entry: [10, 30],
        hours: 3,
      },
      {
        slug: 'modhutila-ecopark',
        descEn:
          'Trails, a lake and a hilltop tower inside sal forest — with Meghalaya beckoning across the border.',
        howEn: 'Auto from Nonni bazaar in Nalitabari.',
        bestTime: { bn: 'শীত (নভেম্বর–ফেব্রুয়ারি)', en: 'Winter (November–February)' },
        entry: [10, 30],
        hours: 3,
      },
    ],
    newSpots: [
      {
        slug: 'rajar-pahar',
        bn: 'রাজার পাহাড়',
        en: 'Rajar Pahar',
        cat: 'hill',
        lat: 25.2,
        lng: 89.97,
        tags: ['adventure', 'relaxed'],
        hidden: true,
        desc: {
          bn: 'শ্রীবরদীর সমতল চূড়ার উঁচু পাহাড় — শেরপুরের অন্যতম সর্বোচ্চ বিন্দু থেকে গারো পাহাড় আর আশপাশের গারো গ্রামের বিস্তৃত দৃশ্য।',
          en: 'A tall flat-topped hill in Sreebardi — from one of Sherpur’s highest points you look out over the Garo hills and the Garo villages around.',
        },
        how: {
          bn: 'শেরপুর থেকে বাসে শ্রীবরদী, সেখান থেকে অটো/বাইকে কর্ণঝোরা হয়ে রাজার পাহাড়।',
          en: 'Bus from Sherpur to Sreebardi, then an auto or bike via Karnajhora to Rajar Pahar.',
        },
        bestTime: { bn: 'শীত (নভেম্বর–ফেব্রুয়ারি)', en: 'Winter (November–February)' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'panihata',
        bn: 'পানিহাটা-তারানি',
        en: 'Panihata–Tarani',
        cat: 'river',
        lat: 25.17,
        lng: 90.24,
        tags: ['relaxed', 'adventure'],
        hidden: true,
        desc: {
          bn: 'নালিতাবাড়ীর সীমান্তঘেঁষা পাহাড়ি নদী, পাথুরে চর আর ঠিক ওপারে মেঘালয়ের সবুজ পাহাড় — অনেকে একে শেরপুরের ছোট জাফলং বলেন।',
          en: 'A hill river with stony banks on the Nalitabari border, with Meghalaya’s green hills right across — many call it Sherpur’s little Jaflong.',
        },
        how: {
          bn: 'শেরপুর থেকে নালিতাবাড়ী, সেখান থেকে অটো/বাইকে পানিহাটা, প্রায় ৪০ মিনিট।',
          en: 'From Sherpur to Nalitabari, then an auto or bike to Panihata, about 40 minutes.',
        },
        bestTime: { bn: 'শরৎ ও শীত (অক্টোবর–ফেব্রুয়ারি)', en: 'Autumn and winter (October–February)' },
        entry: [0, 0],
        hours: 2,
        warnings: [
          {
            bn: 'নদীর ওপারই ভারত — নদী পার হয়ে ওপারে যাবেন না।',
            en: 'The far bank is India — don’t cross the river.',
          },
        ],
      },
      {
        slug: 'ghagra-laskar-bari-mosque',
        bn: 'ঘাগড়া লস্কর বাড়ি মসজিদ',
        en: 'Ghagra Laskar Bari Mosque',
        cat: 'heritage',
        lat: 25.06,
        lng: 90.08,
        tags: ['relaxed'],
        hidden: true,
        desc: {
          bn: 'ঝিনাইগাতীর ঘাগড়ায় মোগল আমলের এক গম্বুজ বিশিষ্ট ছোট মসজিদ — পোড়ামাটির কারুকাজে প্রাচীন স্থাপত্যের নিদর্শন।',
          en: 'A small single-domed Mughal-era mosque at Ghagra in Jhenaigati — a fine example of old architecture with terracotta detailing.',
        },
        how: {
          bn: 'শেরপুর শহর থেকে ঝিনাইগাতী সড়কে সিএনজিতে প্রায় ৩০ মিনিট।',
          en: 'About 30 minutes by CNG from Sherpur town along the Jhenaigati road.',
        },
        bestTime: { bn: 'সারা বছর; নামাজের সময় এড়িয়ে যান', en: 'Year-round; avoid prayer times' },
        entry: [0, 0],
        hours: 1,
      },
    ],
  },
];
