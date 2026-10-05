// Content v2 — Dhaka division, part A: Dhaka, Gazipur, Kishoreganj, Manikganj,
// Munshiganj, Narayanganj, Narsingdi. Public-source facts; fares, fees and
// coordinates are approximate — verify on the next field visit.
export default [
  {
    slug: 'dhaka',
    en: {
      overview:
        'Dhaka, a capital some four hundred years old, is a museum in itself — Mughal forts and mosques, a Nawab palace, endless streams of rickshaws and the legendary food of Old Dhaka. From the banks of the Buriganga to the modernist Parliament House, you can cross several centuries in a single day.',
      transport:
        'Buses, trains and flights connect Dhaka directly with the whole country. Within the city use the Metro Rail (Uttara–Motijheel), buses, CNG auto-rickshaws and ride-sharing apps; in Old Dhaka a cycle rickshaw is by far the best way around.',
      food:
        'A pilgrimage for food lovers: Haji’s biryani and Nanna Miah’s morog polao in Old Dhaka, bakarkhani flatbread, kacchi at Star Hotel, and the famous Ramadan iftar bazaar at Chawkbazar.',
      season:
        'October to March is the most comfortable. The Chawkbazar iftar market during Ramadan and the Pohela Boishakh celebrations at Ramna and the Faculty of Fine Arts are special experiences.',
    },
    warnings: [
      { bn: 'ঢাকার যানজট অনিশ্চিত — অফিস সময়ে (সকাল ৮–১১টা, বিকেল ৫–৮টা) দূরের যাত্রায় বাড়তি সময় রাখুন, সম্ভব হলে মেট্রোরেল ব্যবহার করুন।', en: 'Dhaka traffic is unpredictable — allow extra time during rush hours (8–11 am, 5–8 pm) and use the Metro Rail wherever possible.' },
      { bn: 'পুরান ঢাকা ও সদরঘাটের ভিড়ে মোবাইল-মানিব্যাগ সাবধানে রাখুন; রিকশা-সিএনজির ভাড়া ওঠার আগেই ঠিক করে নিন।', en: 'Watch your phone and wallet in the crowds of Old Dhaka and Sadarghat, and agree rickshaw or CNG fares before you get in.' },
      { bn: 'জাদুঘর ও ঐতিহাসিক স্থাপনার সাপ্তাহিক ছুটি আলাদা (লালবাগ রবিবার, আহসান মঞ্জিল ও জাতীয় জাদুঘর বৃহস্পতিবার) — যাওয়ার আগে দেখে নিন।', en: 'Museums and monuments have different weekly closures (Lalbagh on Sunday, Ahsan Manzil and the National Museum on Thursday) — check before you go.' },
      { bn: 'বর্ষায় ভারী বৃষ্টির পর পুরান ঢাকা ও নিচু এলাকার রাস্তায় জলাবদ্ধতা হয়; শুকনো মৌসুমে বায়ুদূষণ বেশি থাকে, মাস্ক সঙ্গে রাখুন।', en: 'Heavy monsoon rain waterlogs Old Dhaka and low-lying streets; in the dry season air pollution is high, so carry a mask.' },
    ],
    hospital: { bn: 'ঢাকা মেডিকেল কলেজ হাসপাতাল', en: 'Dhaka Medical College Hospital' },
    spotUpdates: [
      {
        slug: 'lalbagh-fort',
        descEn: 'An unfinished 17th-century Mughal fort — the tomb of Pari Bibi, the Diwan-i-Aam audience hall and fountain gardens make it the most vivid memory of Mughal Dhaka.',
        howEn: 'Rickshaw or CNG to Lalbagh from anywhere in the city; the entry ticket is nominal. Closed on Sundays.',
        bestTime: { bn: 'অক্টোবর–মার্চ, সকাল বা পড়ন্ত বিকেল', en: 'October–March, morning or late afternoon' },
        entry: [20, 30],
        hours: 1.5,
      },
      {
        slug: 'ahsan-manzil',
        descEn: 'The pink palace of the Nawabs on the bank of the Buriganga — once their court, now a museum packed with history.',
        howEn: 'Close to Sadarghat; take a rickshaw via Islampur. Closed on Thursdays.',
        bestTime: { bn: 'অক্টোবর–মার্চ, সকালের দিকে (ভিড় কম)', en: 'October–March, in the morning when crowds are thinner' },
        entry: [20, 40],
        hours: 1.5,
      },
      {
        slug: 'jatiya-sangsad',
        descEn: 'Louis Kahn’s world-famous masterpiece of architecture — the building, ringed by a lake and lawns, is a favourite place for an afternoon walk (access inside is restricted).',
        howEn: 'Take the Metro Rail to Agargaon or Farmgate, then a rickshaw to Manik Mia Avenue.',
        bestTime: { bn: 'সারা বছর, বিকেল থেকে সন্ধ্যা', en: 'Year-round, late afternoon to dusk' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'star-mosque', bn: 'তারা মসজিদ', en: 'Star Mosque',
        cat: 'heritage', lat: 23.7153, lng: 90.4013, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'আরমানিটোলার আঠারো শতকের মসজিদ, যার দেয়াল-গম্বুজ জুড়ে চীনামাটির টুকরোয় গাঁথা অসংখ্য নীল তারা — পুরান ঢাকার সবচেয়ে ছবিময় স্থাপনাগুলোর একটি।', en: 'An 18th-century mosque in Armanitola whose walls and domes are covered in blue stars made from broken china tiles — one of Old Dhaka’s most photogenic buildings.' },
        how: { bn: 'লালবাগ বা আহসান মঞ্জিল থেকে রিকশায় ১০–১৫ মিনিট, আবুল খয়রাত রোডে।', en: 'A 10–15 minute rickshaw ride from Lalbagh or Ahsan Manzil, on Abul Khairat Road.' },
        bestTime: { bn: 'সারা বছর; নামাজের সময় বাদে সকাল-বিকেল', en: 'Year-round; mornings or afternoons outside prayer times' },
        entry: [0, 0], hours: 0.5,
        warnings: [{ bn: 'শালীন পোশাক পরুন, নারীরা মাথা ঢেকে নিন; জামাতের সময় ভেতরে ঘোরাঘুরি করবেন না।', en: 'Dress modestly and women should cover their heads; do not walk around inside during congregational prayers.' }],
      },
      {
        slug: 'bangladesh-national-museum', bn: 'বাংলাদেশ জাতীয় জাদুঘর', en: 'Bangladesh National Museum',
        cat: 'heritage', lat: 23.7377, lng: 90.3947, tags: ['family', 'relaxed'], hidden: false,
        desc: { bn: 'শাহবাগের চারতলা জাদুঘরে প্রাচীন ভাস্কর্য, মুদ্রা, নকশিকাঁথা থেকে মুক্তিযুদ্ধের দলিল — এক ছাদের নিচে গোটা দেশের ইতিহাস।', en: 'Four floors in Shahbag holding ancient sculpture, coins and nakshi kantha quilts through to Liberation War records — the whole country’s story under one roof.' },
        how: { bn: 'মেট্রোরেলে শাহবাগ স্টেশনে নেমে কয়েক মিনিট হাঁটা।', en: 'Take the Metro Rail to Shahbag station and walk a few minutes.' },
        bestTime: { bn: 'সারা বছর; বৃহস্পতিবার বন্ধ, শুক্রবার শুধু বিকেলে খোলা', en: 'Year-round; closed Thursdays, open only in the afternoon on Fridays' },
        entry: [20, 40], hours: 2,
      },
      {
        slug: 'dhakeshwari-temple', bn: 'ঢাকেশ্বরী জাতীয় মন্দির', en: 'Dhakeshwari National Temple',
        cat: 'heritage', lat: 23.7233, lng: 90.3925, tags: ['relaxed'], hidden: false,
        desc: { bn: 'বহু শতাব্দী পুরোনো এই মন্দিরকে ঘিরেই ঢাকা নামের লোককথা — দুর্গাপূজায় এখানকার আয়োজন দেশের সবচেয়ে বড়গুলোর একটি।', en: 'A centuries-old temple tied to the folk story of Dhaka’s very name — its Durga Puja is one of the largest in the country.' },
        how: { bn: 'লালবাগ কেল্লা থেকে রিকশায় অল্প দূরে, বকশীবাজার-পলাশী এলাকায়।', en: 'A short rickshaw ride from Lalbagh Fort, near Bakshibazar and Palashi.' },
        bestTime: { bn: 'সারা বছর; দুর্গাপূজায় (সেপ্টেম্বর–অক্টোবর) উৎসবমুখর তবে ভিড় বেশি', en: 'Year-round; festive but very crowded during Durga Puja (September–October)' },
        entry: [0, 0], hours: 0.75,
        warnings: [{ bn: 'মূল মন্দিরে ঢোকার আগে জুতা খুলুন এবং পূজার সময় ছবি তোলার আগে অনুমতি নিন।', en: 'Remove your shoes before the main shrine and ask before photographing during worship.' }],
      },
    ],
  },
  {
    slug: 'gazipur',
    en: {
      overview:
        'Gazipur, the sal-forest district on Dhaka’s doorstep — the gajari woods of Bhawal, Humayun Ahmed’s Nuhash Polli and well over a hundred resorts make it the day-trip capital for people from Dhaka.',
      transport:
        'Buses and trains from Dhaka reach Joydebpur in 1–1.5 hours; hire a CNG or auto-rickshaw to get to the resorts and the forest.',
      food:
        'Beyond the resort buffets, free-range country chicken curry with rice-flour roti is a local favourite around the sal forest.',
      season:
        'Winter (November–February) is picnic season; Belai Beel is at its most beautiful in the monsoon.',
    },
    warnings: [
      { bn: 'ঢাকা–ময়মনসিংহ মহাসড়ক ও টঙ্গী-চৌরাস্তা এলাকায় দীর্ঘ যানজট হয়, বিশেষ করে শুক্র-শনিবার ও কারখানা ছুটির সময় — ভোরে রওনা দিন।', en: 'The Dhaka–Mymensingh highway around Tongi and Chowrasta jams badly, especially on Fridays, Saturdays and at factory shift changes — leave early in the morning.' },
      { bn: 'শীতের পিকনিক মৌসুমে ভাওয়াল উদ্যান ও রিসোর্টে প্রচণ্ড ভিড় — ছুটির দিনে রিসোর্ট আগেই বুক করুন এবং প্যাকেজে কী আছে লিখিত নিন।', en: 'Bhawal park and the resorts are packed in winter picnic season — book resorts ahead on holidays and get what the package includes in writing.' },
      { bn: 'বনের গভীরে একা বা সন্ধ্যার পর হাঁটবেন না; নির্ধারিত ট্রেইলে থাকুন।', en: 'Do not walk deep into the forest alone or after dusk; stay on the marked trails.' },
    ],
    hospital: { bn: 'শহীদ তাজউদ্দীন আহমদ মেডিকেল কলেজ হাসপাতাল, গাজীপুর', en: 'Shaheed Tajuddin Ahmad Medical College Hospital, Gazipur' },
    spotUpdates: [
      {
        slug: 'bhawal-national-park',
        descEn: 'A wide forest of gajari (sal) trees with walking trails, picnic spots and cottages — the closest woodland picnic to Dhaka.',
        howEn: 'From Joydebpur Chowrasta take a bus up the Mymensingh road to the National Park gate.',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি; বর্ষায় বন সবচেয়ে সবুজ', en: 'November–February; greenest in the monsoon' },
        entry: [20, 50],
        hours: 3,
      },
      {
        slug: 'nuhash-polli',
        descEn: 'Novelist Humayun Ahmed’s dream garden retreat — the lychee grove, the “Bhoot Bilash” house, a medicinal plant garden and the writer’s grave.',
        howEn: 'From Hotapara bazar take a CNG to Piruzali; entry is by ticket.',
        bestTime: { bn: 'অক্টোবর–মার্চ; ১৩ নভেম্বর লেখকের জন্মদিনে বিশেষ ভিড়', en: 'October–March; especially crowded on 13 November, the author’s birthday' },
        entry: [100, 200],
        hours: 2,
      },
      {
        slug: 'belai-beel',
        descEn: 'A horizon-wide wetland carpeted with water lilies and lotus in the monsoon — drifting by boat at dawn to pick shapla flowers is Gazipur’s hidden gem.',
        howEn: 'Hire a boat for the day from Kanaiya bazar ghat (bargain first).',
        bestTime: { bn: 'আগস্ট–অক্টোবর, ভোরবেলা (শাপলা ফোটে সকালে)', en: 'August–October at dawn, when the water lilies are open' },
        entry: [0, 0],
        hours: 3,
      },
    ],
    newSpots: [
      {
        slug: 'gazipur-safari-park', bn: 'সাফারি পার্ক, গাজীপুর', en: 'Gazipur Safari Park',
        cat: 'garden', lat: 24.1806, lng: 90.4011, tags: ['family'], hidden: false,
        desc: { bn: 'শ্রীপুরের বাঘের বাজারে কয়েক হাজার একরের বনে গড়া সাফারি পার্ক — বাসে চড়ে খোলা বনে বাঘ, সিংহ, ভাল্লুক দেখা আর পাখিশালা-প্রজাপতি বাগান।', en: 'A safari park spread over several thousand acres of forest at Bagher Bazar, Sreepur — ride a bus through enclosures with tigers, lions and bears, plus an aviary and butterfly garden.' },
        how: { bn: 'জয়দেবপুর চৌরাস্তা থেকে ময়মনসিংহগামী বাসে বাঘের বাজার নেমে অটোতে পার্ক গেট।', en: 'From Joydebpur Chowrasta take a Mymensingh-bound bus to Bagher Bazar, then an auto-rickshaw to the gate.' },
        bestTime: { bn: 'নভেম্বর–মার্চ, সকাল (প্রাণীরা তখন বেশি সক্রিয়)', en: 'November–March, in the morning when animals are most active' },
        entry: [100, 300], hours: 4,
        warnings: [{ bn: 'কোর সাফারি ও অন্যান্য অংশের টিকিট আলাদা; সাপ্তাহিক বন্ধের দিন যাওয়ার আগে জেনে নিন।', en: 'The core safari and other sections are ticketed separately; check the weekly closing day before you go.' }],
      },
      {
        slug: 'bhawal-rajbari', bn: 'ভাওয়াল রাজবাড়ি', en: 'Bhawal Rajbari',
        cat: 'heritage', lat: 23.9969, lng: 90.4204, tags: ['relaxed'], hidden: true,
        desc: { bn: 'জয়দেবপুরের বিশাল জমিদার প্রাসাদ — বিখ্যাত ভাওয়াল সন্ন্যাসী মামলার কেন্দ্র, এখন সরকারি দপ্তর হিসেবে ব্যবহৃত।', en: 'The sprawling zamindar palace of Joydebpur, centre of the famous Bhawal Sannyasi case, now used as government offices.' },
        how: { bn: 'জয়দেবপুর রেলস্টেশন বা বাজার থেকে রিকশায় কয়েক মিনিট।', en: 'A few minutes by rickshaw from Joydebpur railway station or bazar.' },
        bestTime: { bn: 'সারা বছর, অফিস দিনের দিনের বেলা', en: 'Year-round, during daytime on working days' },
        entry: [0, 0], hours: 0.75,
        warnings: [{ bn: 'ভবনটি সরকারি অফিস — ভেতরে ঢোকা সীমিত, নিরাপত্তাকর্মীর অনুমতি নিয়ে বাইরে থেকে দেখুন।', en: 'It is a working government office — entry is restricted, so view it from the grounds with the guards’ permission.' }],
      },
      {
        slug: 'jagroto-chowrongi', bn: 'জাগ্রত চৌরঙ্গী', en: 'Jagroto Chowrongi',
        cat: 'heritage', lat: 23.9985, lng: 90.4153, tags: ['relaxed', 'family'], hidden: false,
        desc: { bn: 'জয়দেবপুর চৌরাস্তার মোড়ে হাতে গ্রেনেড-রাইফেল নিয়ে দাঁড়ানো মুক্তিযোদ্ধার ভাস্কর্য — মুক্তিযুদ্ধের প্রথম দিকের স্মারক ভাস্কর্যগুলোর একটি।', en: 'A sculpture of a freedom fighter holding a grenade and rifle at Joydebpur Chowrasta — one of the earliest Liberation War memorial sculptures.' },
        how: { bn: 'ঢাকা থেকে গাজীপুরগামী যেকোনো বাসে চৌরাস্তা নামলেই সামনে।', en: 'Any Gazipur-bound bus from Dhaka stops at Chowrasta, right beside it.' },
        bestTime: { bn: 'সারা বছর; ২৬ মার্চ ও ১৬ ডিসেম্বর ফুলে সাজানো', en: 'Year-round; decked with flowers on 26 March and 16 December' },
        entry: [0, 0], hours: 0.25,
      },
    ],
  },
  {
    slug: 'kishoreganj',
    en: {
      overview:
        'Kishoreganj is haor country — in the monsoon, when the roads of Nikli and Ashtagram slip under water, the submersible roads and island villages create scenery found nowhere else in Bangladesh. The district also holds Isa Khan’s fort and the historic Sholakia Eidgah.',
      transport:
        'Buses from Dhaka (Golapbag/Mohakhali) reach Kishoreganj in 3–4 hours, or take the Egarosindhur or Kishoreganj Express train. Nikli is 1–1.5 hours from town by CNG.',
      food:
        'Fresh haor fish, the giant “balish” (pillow) sweet and Nikli’s doi-chira (yoghurt with flattened rice) are the local specialities.',
      season:
        'Come in the full monsoon (July–September) to see the haor at its best — that is also when the submersible roads go under water.',
    },
    warnings: [
      { bn: 'হাওরে নৌকায় ওঠার আগে লাইফ জ্যাকেট নিশ্চিত করুন; বর্ষার বিকেলে হঠাৎ ঝড়-ঢেউ ওঠে, খোলা পানিতে বজ্রপাতের ঝুঁকিও বেশি।', en: 'Make sure there are life jackets before boarding on the haor; monsoon afternoons bring sudden squalls and waves, and lightning is a real risk on open water.' },
      { bn: 'বর্ষায় ডুবন্ত সাবমার্সিবল সড়কে হেঁটে বা গাড়ি নিয়ে নামবেন না — স্রোত ও গর্ত দেখা যায় না।', en: 'Do not walk or drive onto submerged roads in the monsoon — currents and potholes are invisible.' },
      { bn: 'অলওয়েদার সড়কে বাইক ও অটোর গতি বেশি, রেলিং কম — রাস্তার ধারে ছবি তোলার সময় সতর্ক থাকুন।', en: 'Bikes and autos speed along the all-weather road, which has few railings — take care when stopping for photos at the edge.' },
      { bn: 'ঈদের দিন শোলাকিয়ায় লাখো মানুষের ভিড় ও কড়া নিরাপত্তা থাকে — সেদিন শহরে যানবাহন নিয়ন্ত্রিত।', en: 'On Eid day Sholakia draws hundreds of thousands of worshippers under tight security, and traffic into town is restricted.' },
    ],
    hospital: { bn: 'শহীদ সৈয়দ নজরুল ইসলাম মেডিকেল কলেজ হাসপাতাল, কিশোরগঞ্জ', en: 'Shahid Syed Nazrul Islam Medical College Hospital, Kishoreganj' },
    spotUpdates: [
      {
        slug: 'nikli-haor',
        descEn: 'In the monsoon a sea-like expanse of water, floating koroch trees and the submersible road — a single afternoon boat ride is enough to win you over.',
        howEn: 'CNG from Kishoreganj town to the Nikli embankment; hire a boat by the hour at the ghat.',
        bestTime: { bn: 'জুলাই–সেপ্টেম্বর, বিকেল থেকে সূর্যাস্ত', en: 'July–September, afternoon to sunset' },
        entry: [0, 0],
        hours: 3,
      },
      {
        slug: 'oshtogram-haor',
        descEn: 'The famous all-weather road linking Itna, Mithamain and Ashtagram — riding a bike or auto along a road that runs straight through endless water is unforgettable.',
        howEn: 'In the monsoon take a trawler from Balikhola or Chamraghat; in the dry season go by road to Mithamain.',
        bestTime: { bn: 'জুলাই–অক্টোবর, যখন সড়কের দুই পাশে পানি থাকে', en: 'July–October, when water stretches on both sides of the road' },
        entry: [0, 0],
        hours: 5,
      },
      {
        slug: 'jongolbari-fort',
        descEn: 'The remains of the fort and mosque of Isa Khan’s second capital — the leader of the Baro Bhuiyan chieftains — a quiet destination for history lovers.',
        howEn: 'Auto-rickshaw from Karimganj upazila to Jangalbari.',
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'sholakia-eidgah', bn: 'শোলাকিয়া ঈদগাহ', en: 'Sholakia Eidgah',
        cat: 'heritage', lat: 24.4333, lng: 90.7925, tags: ['relaxed'], hidden: false,
        desc: { bn: 'নরসুন্দা নদীর তীরে প্রায় দুই শতাব্দী পুরোনো ঈদগাহ, যেখানে দেশের সবচেয়ে বড় ঈদ জামাত হয় — অন্য দিনগুলোতে খোলা মাঠ শান্ত ও নিরিবিলি।', en: 'A nearly two-century-old Eid ground on the Narasunda river that hosts the country’s largest Eid congregation — on ordinary days the open field is calm and quiet.' },
        how: { bn: 'কিশোরগঞ্জ শহরের কেন্দ্র থেকে রিকশায় ১০ মিনিট।', en: 'Ten minutes by rickshaw from central Kishoreganj town.' },
        bestTime: { bn: 'সারা বছর; ঈদের জামাত দেখতে চাইলে খুব ভোরে পৌঁছান', en: 'Year-round; arrive very early if you want to witness the Eid prayer' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'egarosindur-fort', bn: 'এগারসিন্দুর দুর্গ', en: 'Egarosindur Fort',
        cat: 'heritage', lat: 24.2645, lng: 90.7240, tags: ['relaxed'], hidden: true,
        desc: { bn: 'পাকুন্দিয়ার এগারসিন্দুরে ঈশা খাঁর দুর্গের মাটির প্রাচীর আর পাশের মুঘল আমলের শাহ মাহমুদ মসজিদ — মানসিংহের সঙ্গে যুদ্ধের কিংবদন্তিমাখা গ্রাম।', en: 'Earthen ramparts of Isa Khan’s fort at Egarosindur, Pakundia, beside the Mughal-era Shah Mahmud Mosque — a village steeped in legends of his battle with Man Singh.' },
        how: { bn: 'কিশোরগঞ্জ শহর থেকে সিএনজিতে পাকুন্দিয়া হয়ে এগারসিন্দুর, প্রায় ১ ঘণ্টা।', en: 'CNG from Kishoreganj town via Pakundia to Egarosindur, about an hour.' },
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0], hours: 1.5,
      },
      {
        slug: 'chandrabati-temple', bn: 'চন্দ্রাবতীর শিবমন্দির', en: 'Chandrabati’s Shiva Temple',
        cat: 'heritage', lat: 24.4700, lng: 90.8020, tags: ['relaxed'], hidden: true,
        desc: { bn: 'ফুলেশ্বরী নদীর পাড়ে বাংলার প্রথম নারী কবি চন্দ্রাবতীর স্মৃতিবিজড়িত ষোড়শ শতকের মন্দির — পাশেই কবির পিতা দ্বিজ বংশীদাসের ভিটা।', en: 'A 16th-century temple linked to Chandrabati, the first woman poet of Bengali, near the old Phuleshwari river — her father Dwija Bangshidas’s homestead stands beside it.' },
        how: { bn: 'কিশোরগঞ্জ শহর থেকে অটোতে পাতুয়ারী গ্রাম, ২০–৩০ মিনিট।', en: 'Auto-rickshaw from Kishoreganj town to Patuari village, 20–30 minutes.' },
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [0, 0], hours: 1,
      },
    ],
  },
  {
    slug: 'manikganj',
    en: {
      overview:
        'Nestled where the Padma and Jamuna meet, Manikganj preserves some of the finest zamindari architecture in Bengal — Baliati Palace and the Teota Rajbari — along with the hilsa of Aricha ghat.',
      transport:
        'Buses from Dhaka (Gabtoli) reach Manikganj in 1.5–2 hours; for Baliati take a Saturia bus or a CNG.',
      food:
        'Fresh fried hilsa at the Aricha–Paturia ghats and the local sweets of Ghior are famous.',
      season:
        'Winter is the comfortable time to tour the palaces; hilsa tastes best in the full monsoon.',
    },
    warnings: [
      { bn: 'ঢাকা–আরিচা মহাসড়কে দ্রুতগতির বাস-ট্রাক ও দুর্ঘটনার ঝুঁকি বেশি — রাস্তা পার হতে ও অটোতে চড়তে সাবধান।', en: 'The Dhaka–Aricha highway carries fast buses and trucks and has a poor accident record — take care crossing the road and riding autos.' },
      { bn: 'বর্ষায় পদ্মা-যমুনায় প্রবল স্রোত ও ভাঙন — ঘাটে নদীর কিনারায় বা ছোট নৌকায় সতর্ক থাকুন, লাইফ জ্যাকেট নিন।', en: 'In the monsoon the Padma and Jamuna run fast and banks erode — stay back from the edge at the ghats and wear a life jacket in small boats.' },
      { bn: 'পুরোনো জমিদার বাড়িগুলোর অনেক অংশ জরাজীর্ণ — ভাঙা সিঁড়ি বা ছাদে উঠবেন না।', en: 'Many old zamindar houses are crumbling — do not climb broken stairs or onto roofs.' },
    ],
    hospital: { bn: 'কর্নেল মালেক মেডিকেল কলেজ হাসপাতাল, মানিকগঞ্জ', en: 'Colonel Malek Medical College Hospital, Manikganj' },
    spotUpdates: [
      {
        slug: 'baliati-palace',
        descEn: 'A two-hundred-year-old zamindar palace complex of seven blocks — its rows of Corinthian columns rank among the finest zamindari architecture in Bengal.',
        howEn: 'Five minutes by auto-rickshaw from Saturia bus stand. Closed on the weekly holiday of the Archaeology Department (check before going).',
        bestTime: { bn: 'নভেম্বর–ফেব্রুয়ারি, সকাল বা বিকেল', en: 'November–February, morning or afternoon' },
        entry: [20, 30],
        hours: 1.5,
      },
      {
        slug: 'teota-palace',
        descEn: 'A crumbling but still aristocratic palace on the bank of the Jamuna, linked to memories of the poet Nazrul and Pramila Devi.',
        howEn: 'Auto-rickshaw from Shibalaya or Aricha to Teota.',
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0],
        hours: 1,
      },
    ],
    newSpots: [
      {
        slug: 'aricha-ghat', bn: 'আরিচা ঘাট ও যমুনার পাড়', en: 'Aricha Ghat & Jamuna riverside',
        cat: 'river', lat: 23.8600, lng: 89.7950, tags: ['relaxed', 'family'], hidden: false,
        desc: { bn: 'একসময়ের দেশের ব্যস্ততম ফেরিঘাট, এখন যমুনার বিশাল বিস্তার, নৌকা-লঞ্চের আনাগোনা আর ঘাটের হোটেলে গরম ইলিশ ভাজার জায়গা।', en: 'Once the country’s busiest ferry ghat, now a place to take in the vast Jamuna, watch boats and launches, and eat hot fried hilsa at the ghat-side eateries.' },
        how: { bn: 'ঢাকা (গাবতলী) থেকে আরিচাগামী বাসে সরাসরি, অথবা মানিকগঞ্জ শহর থেকে বাস/সিএনজিতে ৪৫ মিনিট।', en: 'Direct Aricha-bound bus from Dhaka (Gabtoli), or 45 minutes by bus/CNG from Manikganj town.' },
        bestTime: { bn: 'আগস্ট–অক্টোবর (ইলিশ মৌসুম), বিকেলে সূর্যাস্তের সময়', en: 'August–October (hilsa season), late afternoon for sunset' },
        entry: [0, 0], hours: 2,
        warnings: [{ bn: 'ঘাটের হোটেলে ইলিশের দাম ও ওজন খাওয়ার আগেই ঠিক করে নিন।', en: 'At ghat eateries, agree the price and weight of the hilsa before it is cooked.' }],
      },
      {
        slug: 'betila-zamindar-bari', bn: 'বেতিলা জমিদার বাড়ি', en: 'Betila Zamindar Bari',
        cat: 'heritage', lat: 23.8450, lng: 89.9800, tags: ['relaxed'], hidden: true,
        desc: { bn: 'মানিকগঞ্জ সদরের কাছে নদীঘেঁষা পুরোনো জমিদার বাড়ি — কারুকাজ করা খিলান আর শ্যাওলা ধরা দেয়ালে নীরব আভিজাত্য।', en: 'An old riverside zamindar house near Manikganj Sadar — carved arches and moss-covered walls with a quiet, faded grandeur.' },
        how: { bn: 'মানিকগঞ্জ শহর থেকে অটো বা সিএনজিতে বেতিলা, প্রায় ২০–৩০ মিনিট।', en: 'Auto-rickshaw or CNG from Manikganj town to Betila, about 20–30 minutes.' },
        bestTime: { bn: 'নভেম্বর–মার্চ', en: 'November–March' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'dhankora-zamindar-bari', bn: 'ধানকোড়া জমিদার বাড়ি', en: 'Dhankora Zamindar Bari',
        cat: 'heritage', lat: 23.9600, lng: 90.0500, tags: ['relaxed'], hidden: true,
        desc: { bn: 'সাটুরিয়ার ধানকোড়ায় ঊনিশ শতকের জমিদার প্রাসাদ, যার একাংশে এখন স্কুল চলে — বালিয়াটির সাথে একই দিনে ঘুরে আসা যায়।', en: 'A 19th-century zamindar palace at Dhankora in Saturia, part of which now houses a school — easy to combine with Baliati on the same day.' },
        how: { bn: 'সাটুরিয়া বাসস্ট্যান্ড থেকে অটোতে ধানকোড়া।', en: 'Auto-rickshaw from Saturia bus stand to Dhankora.' },
        bestTime: { bn: 'নভেম্বর–মার্চ; স্কুল চলাকালে নিরিবিলি থাকুন', en: 'November–March; keep quiet during school hours' },
        entry: [0, 0], hours: 1,
      },
    ],
  },
  {
    slug: 'munshiganj',
    en: {
      overview:
        'Ancient Bikrampur — birthplace of Atish Dipankar, home of Idrakpur Fort, and a district steeped in the smell of hilsa frying at Mawa ghat on the bank of the Padma.',
      transport:
        'Buses from Dhaka (Gulistan) reach Munshiganj town or Mawa in 1–1.5 hours; Mawa lies right on the expressway to the Padma Bridge.',
      food:
        'Fresh fried hilsa with mashed hilsa tail at Mawa ghat stays busy late into the night; the sweets of Bhagyakul are famous.',
      season:
        'Good year-round; Mawa is liveliest in the hilsa season (mid-August to mid-October).',
    },
    warnings: [
      { bn: 'মাওয়ার ইলিশের দোকানে দাম ওজন ধরে আগে ঠিক না করলে বিল অনেক বেড়ে যায় — মাছ বেছে, দাম জেনে তবেই অর্ডার দিন।', en: 'At Mawa’s hilsa stalls the bill can balloon unless the price is fixed by weight first — choose your fish and confirm the price before ordering.' },
      { bn: 'পদ্মা সেতুতে ও এক্সপ্রেসওয়েতে গাড়ি থামানো, হাঁটা বা ছবি তোলা নিষিদ্ধ — সেতু দেখতে মাওয়া বা জাজিরা প্রান্তের নির্ধারিত জায়গা ব্যবহার করুন।', en: 'Stopping, walking or taking photos on the Padma Bridge and the expressway is prohibited — view the bridge from the designated areas at Mawa or the Jajira end.' },
      { bn: 'বর্ষায় পদ্মায় তীব্র স্রোত — স্পিডবোট বা ছোট নৌকায় লাইফ জ্যাকেট ছাড়া উঠবেন না।', en: 'The Padma runs very fast in the monsoon — never board a speedboat or small boat without a life jacket.' },
    ],
    hospital: { bn: 'মুন্সীগঞ্জ জেনারেল হাসপাতাল', en: 'Munshiganj General Hospital' },
    spotUpdates: [
      {
        slug: 'idrakpur-fort',
        descEn: 'A 17th-century Mughal water fort built to repel Magh and Portuguese pirates — a silent witness of history in the middle of town.',
        howEn: 'By rickshaw within Munshiganj town.',
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [0, 20],
        hours: 0.75,
      },
      {
        slug: 'mawa-ghat',
        descEn: 'A panorama of the Padma Bridge, the river breeze and rows of fried-hilsa stalls — a favourite evening outing from Dhaka.',
        howEn: 'Take a Mawa-bound bus straight from Dhaka; go in the evening to see the bridge lit up.',
        bestTime: { bn: 'আগস্ট–অক্টোবর (ইলিশ মৌসুম), সন্ধ্যা', en: 'August–October (hilsa season), at dusk' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'bajrajogini',
        descEn: 'The ancestral home of the great scholar Atish Dipankar, born over a thousand years ago, and the nearby Nateshwar Buddhist archaeological site — ongoing excavations keep revealing Bikrampur’s Buddhist past.',
        howEn: 'Auto-rickshaw from Munshiganj town along the Tongibari road.',
        bestTime: { bn: 'নভেম্বর–মার্চ (খনন মৌসুম)', en: 'November–March (excavation season)' },
        entry: [0, 0],
        hours: 1.5,
      },
    ],
    newSpots: [
      {
        slug: 'baba-adam-mosque', bn: 'বাবা আদম শহীদ মসজিদ', en: 'Baba Adam Shahid Mosque',
        cat: 'heritage', lat: 23.5370, lng: 90.4960, tags: ['relaxed'], hidden: false,
        desc: { bn: 'রামপালের কাদিবাড়িতে ১৪৮৩ সালে সুলতানি আমলে নির্মিত ছয় গম্বুজ মসজিদ — পোড়ামাটির অলংকরণে বিক্রমপুরের প্রাচীনতম মুসলিম স্থাপনাগুলোর একটি।', en: 'A six-domed mosque built in 1483 in the Sultanate era at Rampal — with its terracotta ornament, one of Bikrampur’s oldest Muslim monuments.' },
        how: { bn: 'মুন্সিগঞ্জ শহর থেকে অটো বা রিকশায় রামপাল, ১৫–২০ মিনিট।', en: 'Auto-rickshaw or rickshaw from Munshiganj town to Rampal, 15–20 minutes.' },
        bestTime: { bn: 'অক্টোবর–মার্চ; নামাজের সময় এড়িয়ে', en: 'October–March, outside prayer times' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'sonarang-twin-temple', bn: 'সোনারং জোড়া মঠ', en: 'Sonarang Twin Temples',
        cat: 'heritage', lat: 23.4930, lng: 90.4380, tags: ['relaxed'], hidden: true,
        desc: { bn: 'টঙ্গিবাড়ীর সোনারং গ্রামে পুকুরপাড়ে পাশাপাশি দাঁড়ানো দুটি উঁচু মঠ — উনিশ শতকের এই যুগল মন্দির বিক্রমপুরের চেনা প্রতীক।', en: 'Two tall temple towers standing side by side by a pond in Sonarang village, Tongibari — this 19th-century pair is a landmark of Bikrampur.' },
        how: { bn: 'মুন্সিগঞ্জ শহর থেকে সিএনজিতে টঙ্গিবাড়ী হয়ে সোনারং, প্রায় ৩০ মিনিট।', en: 'CNG from Munshiganj town via Tongibari to Sonarang, about 30 minutes.' },
        bestTime: { bn: 'নভেম্বর–মার্চ, বিকেলের আলোয়', en: 'November–March, in the afternoon light' },
        entry: [0, 0], hours: 0.75,
      },
      {
        slug: 'shyam-siddhi-math', bn: 'শ্যামসিদ্ধির মঠ', en: 'Shyamsiddhi Math',
        cat: 'heritage', lat: 23.5280, lng: 90.2900, tags: ['relaxed'], hidden: true,
        desc: { bn: 'শ্রীনগরের শ্যামসিদ্ধি গ্রামের আঠারো শতকের সুউচ্চ স্মৃতিমঠ — উপমহাদেশের সবচেয়ে উঁচু মঠগুলোর একটি বলে পরিচিত।', en: 'A soaring 18th-century memorial temple tower in Shyamsiddhi village, Sreenagar — reputed to be among the tallest of its kind in the subcontinent.' },
        how: { bn: 'ঢাকা-মাওয়া এক্সপ্রেসওয়ের শ্রীনগর মোড়ে নেমে অটোতে শ্যামসিদ্ধি।', en: 'Get off at Sreenagar on the Dhaka–Mawa expressway and take an auto-rickshaw to Shyamsiddhi.' },
        bestTime: { bn: 'নভেম্বর–মার্চ; মাওয়া ঘোরার পথে', en: 'November–March; easy to add to a Mawa trip' },
        entry: [0, 0], hours: 0.5,
      },
    ],
  },
  {
    slug: 'narayanganj',
    en: {
      overview:
        'The district of Sonargaon, an ancient capital of Bengal — the abandoned merchant houses lining Panam Nagar, the boats and nakshi kantha of the Folk Art Museum, and river life along the Shitalakshya.',
      transport:
        'Buses from Dhaka (Gulistan) reach Mograpara in 45 minutes to an hour; from there take an auto-rickshaw to Panam or the museum.',
      food:
        'Sonargaon’s traditional amitti and patkheer sweets, and kebabs along the Shitalakshya waterfront.',
      season:
        'October–March; the folk fair on the museum grounds in Boishakh (April) is a bonus.',
    },
    warnings: [
      { bn: 'ঢাকা–চট্টগ্রাম মহাসড়কের কাঁচপুর-মদনপুর অংশে প্রায়ই তীব্র যানজট — ছুটির দিনে সকাল সকাল রওনা দিন।', en: 'The Kanchpur–Madanpur stretch of the Dhaka–Chattogram highway often jams solid — leave early on holidays.' },
      { bn: 'পানাম নগরের ভবনগুলো জরাজীর্ণ ও ঝুঁকিপূর্ণ — ঘেরা অংশে বা ভাঙা দেয়ালে উঠবেন না।', en: 'Panam’s buildings are fragile and unsafe — do not enter fenced sections or climb broken walls.' },
      { bn: 'শীতলক্ষ্যা পারাপারের খেয়া ও ট্রলারে অতিরিক্ত যাত্রী ওঠে — ভিড় নৌকায় উঠবেন না।', en: 'Shitalakshya ferries and trawlers are often overloaded — do not board a crowded boat.' },
      { bn: 'ছুটির দিনে সোনারগাঁ এলাকায় প্রচণ্ড ভিড় হয়; সম্ভব হলে সাপ্তাহিক কর্মদিবসে যান।', en: 'Sonargaon gets very crowded on holidays; visit on a weekday if you can.' },
    ],
    hospital: { bn: 'নারায়ণগঞ্জ জেনারেল (ভিক্টোরিয়া) হাসপাতাল', en: 'Narayanganj General (Victoria) Hospital' },
    spotUpdates: [
      {
        slug: 'panam-nagar',
        descEn: 'A hauntingly beautiful row of 52 nineteenth-century merchant mansions on either side of a single street — one of the best-preserved heritage streets in the subcontinent.',
        howEn: 'Auto-rickshaw from Mograpara Chowrasta to Panam; entry is by ticket and it may be closed on some weekdays, so check ahead.',
        bestTime: { bn: 'অক্টোবর–মার্চ, বিকেলের নরম আলোয়', en: 'October–March, in the soft afternoon light' },
        entry: [20, 30],
        hours: 1.5,
      },
      {
        slug: 'sonargaon-folk-museum',
        descEn: 'Zainul Abedin’s dream collection of folk art housed in the grand Sardar Bari — nakshi kantha, boats, dolls and live displays by craftspeople.',
        howEn: 'Right next to Panam Nagar; easy to see both together.',
        bestTime: { bn: 'অক্টোবর–মার্চ; বৈশাখী লোকজ মেলার সময় বিশেষ আকর্ষণ', en: 'October–March; the Boishakh folk fair is a special draw' },
        entry: [30, 50],
        hours: 2,
      },
    ],
    newSpots: [
      {
        slug: 'goaldi-mosque', bn: 'গোয়ালদী মসজিদ', en: 'Goaldi Mosque',
        cat: 'heritage', lat: 23.6545, lng: 90.6020, tags: ['relaxed'], hidden: true,
        desc: { bn: '১৫১৯ সালে সুলতান আলাউদ্দিন হোসেন শাহের আমলে নির্মিত এক গম্বুজ মসজিদ — পাথর ও পোড়ামাটির সূক্ষ্ম কারুকাজে সোনারগাঁয়ের সুলতানি গৌরবের সাক্ষী।', en: 'A single-domed mosque built in 1519 under Sultan Alauddin Husain Shah — its fine stone and terracotta carving bears witness to Sonargaon’s Sultanate glory.' },
        how: { bn: 'পানাম নগর থেকে অটো বা হেঁটে গোয়ালদী গ্রামে, ১০–১৫ মিনিট।', en: 'Auto-rickshaw or walk from Panam Nagar to Goaldi village, 10–15 minutes.' },
        bestTime: { bn: 'অক্টোবর–মার্চ; পানাম ঘোরার সাথে', en: 'October–March; combine with Panam' },
        entry: [0, 0], hours: 0.5,
      },
      {
        slug: 'hajiganj-fort', bn: 'হাজীগঞ্জ দুর্গ', en: 'Hajiganj Fort',
        cat: 'heritage', lat: 23.6290, lng: 90.5150, tags: ['relaxed', 'family'], hidden: false,
        desc: { bn: 'শীতলক্ষ্যার পাড়ে সতেরো শতকের মুঘল জলদুর্গ — খাঁজকাটা প্রাচীর আর কামান বসানোর উঁচু মঞ্চ এখনো অটুট।', en: 'A 17th-century Mughal water fort on the Shitalakshya — its crenellated walls and raised gun platform are still intact.' },
        how: { bn: 'নারায়ণগঞ্জ শহরের চাষাঢ়া থেকে রিকশা বা অটোতে হাজীগঞ্জ, ১৫ মিনিট।', en: 'Rickshaw or auto from Chashara in Narayanganj town to Hajiganj, 15 minutes.' },
        bestTime: { bn: 'অক্টোবর–মার্চ, বিকেলে', en: 'October–March, afternoons' },
        entry: [0, 0], hours: 0.75,
      },
      {
        slug: 'sonakanda-fort', bn: 'সোনাকান্দা দুর্গ', en: 'Sonakanda Fort',
        cat: 'heritage', lat: 23.6070, lng: 90.5230, tags: ['relaxed'], hidden: true,
        desc: { bn: 'হাজীগঞ্জের মুখোমুখি শীতলক্ষ্যার পূর্ব পাড়ে বন্দরের মুঘল জলদুর্গ — বিশাল গোলাকার কামানমঞ্চটি এর বিশেষত্ব।', en: 'A Mughal water fort at Bandar on the east bank of the Shitalakshya, facing Hajiganj — its huge circular gun platform is its signature.' },
        how: { bn: 'নারায়ণগঞ্জ সেন্ট্রাল খেয়াঘাট থেকে নৌকায় নদী পার হয়ে বন্দর, তারপর রিকশায়।', en: 'Cross the river by boat from Narayanganj’s central ferry ghat to Bandar, then take a rickshaw.' },
        bestTime: { bn: 'অক্টোবর–মার্চ', en: 'October–March' },
        entry: [0, 0], hours: 0.75,
      },
    ],
  },
  {
    slug: 'narsingdi',
    en: {
      overview:
        'Narsingdi is home to Wari-Bateshwar, an urban settlement some two and a half thousand years old — together with the banks of the Meghna, busy textile markets and a lush vegetable belt.',
      transport:
        'Trains and buses from Dhaka take 1.5–2 hours to Narsingdi; Wari-Bateshwar is in Belabo upazila, reachable by CNG.',
      food:
        'The capital of sagor bananas and lotkon (burmese grape); fresh Meghna fish is easy to find too.',
      season:
        'Winter is the best time to travel; come June–August to taste fresh lotkon.',
    },
    warnings: [
      { bn: 'ঢাকা–সিলেট মহাসড়কে দ্রুতগতির বাস-ট্রাক চলে — মহাসড়ক পার হওয়া ও লোকাল সিএনজিতে চলায় সতর্ক থাকুন।', en: 'Fast buses and trucks run on the Dhaka–Sylhet highway — take care crossing it and riding local CNGs.' },
      { bn: 'মেঘনায় বর্ষায় স্রোত ও ঝড় বেশি — নৌকা ভ্রমণে লাইফ জ্যাকেট নিন, আবহাওয়া খারাপ হলে নদীতে নামবেন না।', en: 'The Meghna gets strong currents and storms in the monsoon — wear a life jacket on boats and stay off the river in bad weather.' },
      { bn: 'উয়ারী-বটেশ্বরের খননক্ষেত্র ব্যক্তিগত জমিতে — গর্তে নামবেন না, কিছু তুলে নেবেন না; প্রত্ননিদর্শন সংগ্রহ আইনত দণ্ডনীয়।', en: 'The Wari-Bateshwar excavation pits lie on private land — do not climb into trenches or pick anything up; removing artefacts is illegal.' },
    ],
    hospital: { bn: 'নরসিংদী জেলা সদর হাসপাতাল', en: 'Narsingdi District Sadar Hospital' },
    spotUpdates: [
      {
        slug: 'wari-bateshwar',
        descEn: 'A fortified town from before the Common Era — punch-marked coins and bead workshops prove a trading city stood here around two and a half thousand years ago.',
        howEn: 'From Narsingdi go to Belabo by CNG; be sure to visit the small local archaeology museum.',
        bestTime: { bn: 'ডিসেম্বর–মার্চ (খনন মৌসুম)', en: 'December–March (excavation season)' },
        entry: [0, 0],
        hours: 2,
      },
      {
        slug: 'dream-holiday-park',
        descEn: 'A full-day family entertainment centre with rides, a water park and cottages.',
        howEn: 'Near Panchdona on the Dhaka–Sylhet highway; get off a Dhaka bus and it is within walking distance.',
        bestTime: { bn: 'অক্টোবর–মার্চ; ওয়াটার পার্কের জন্য এপ্রিল–জুন', en: 'October–March; April–June for the water park' },
        entry: [300, 500],
        hours: 5,
      },
    ],
    newSpots: [
      {
        slug: 'matiur-rahman-museum', bn: 'বীরশ্রেষ্ঠ মতিউর রহমান গ্রন্থাগার ও স্মৃতি জাদুঘর', en: 'Bir Sreshtho Matiur Rahman Library & Memorial Museum',
        cat: 'heritage', lat: 24.0300, lng: 90.8600, tags: ['family', 'relaxed'], hidden: true,
        desc: { bn: 'রায়পুরার রামনগরে বীরশ্রেষ্ঠ ফ্লাইট লেফটেন্যান্ট মতিউর রহমানের পৈতৃক গ্রামে তাঁর স্মৃতিতে গড়া গ্রন্থাগার ও জাদুঘর।', en: 'A library and museum in memory of Bir Sreshtho Flight Lieutenant Matiur Rahman, in his ancestral village of Ramnagar, Raipura.' },
        how: { bn: 'নরসিংদী শহর থেকে সিএনজিতে রায়পুরা হয়ে রামনগর।', en: 'CNG from Narsingdi town via Raipura to Ramnagar.' },
        bestTime: { bn: 'সারা বছর; সরকারি ছুটির দিনে বন্ধ থাকতে পারে', en: 'Year-round; may be closed on public holidays' },
        entry: [0, 0], hours: 1,
      },
      {
        slug: 'shibpur-lotkon-gardens', bn: 'শিবপুরের লটকন বাগান', en: 'Shibpur Lotkon Orchards',
        cat: 'garden', lat: 24.0300, lng: 90.7400, tags: ['family', 'relaxed'], hidden: true,
        desc: { bn: 'শিবপুর-বেলাবর লাল মাটির বাগানে গাছের গুঁড়ি থেকে ডাল পর্যন্ত থোকায় থোকায় ঝুলে থাকে সোনালি লটকন — মৌসুমে বাগান থেকেই কিনে খাওয়া যায়।', en: 'In the red-soil orchards of Shibpur and Belabo, golden lotkon hang in clusters from trunk to branch — in season you can buy straight from the garden.' },
        how: { bn: 'নরসিংদী শহর থেকে বাস বা সিএনজিতে শিবপুর, সেখান থেকে অটোতে বাগান এলাকায়।', en: 'Bus or CNG from Narsingdi town to Shibpur, then an auto-rickshaw to the orchard villages.' },
        bestTime: { bn: 'জুন–আগস্ট (লটকনের মৌসুম)', en: 'June–August (lotkon season)' },
        entry: [0, 0], hours: 2,
        warnings: [{ bn: 'বাগান ব্যক্তিগত সম্পত্তি — মালিকের অনুমতি ছাড়া ঢুকবেন না বা ফল ছিঁড়বেন না।', en: 'Orchards are private property — do not enter or pick fruit without the owner’s permission.' }],
      },
      {
        slug: 'narsingdi-meghna-ghat', bn: 'নরসিংদী মেঘনা ঘাট', en: 'Narsingdi Meghna Riverside',
        cat: 'river', lat: 23.9150, lng: 90.7350, tags: ['relaxed'], hidden: true,
        desc: { bn: 'শহরের গা ঘেঁষে বয়ে চলা চওড়া মেঘনা — ঘাট থেকে ভাড়া নৌকায় চরের দিকে ঘুরে সূর্যাস্ত দেখা আর তাজা মাছের বাজার।', en: 'The broad Meghna flows right past town — hire a boat from the ghat toward the chars for sunset, and browse the fresh fish market.' },
        how: { bn: 'নরসিংদী রেলস্টেশন বা বাজার থেকে রিকশায় ঘাট।', en: 'Rickshaw from Narsingdi railway station or bazar to the ghat.' },
        bestTime: { bn: 'অক্টোবর–মার্চ, বিকেলে', en: 'October–March, late afternoon' },
        entry: [0, 0], hours: 1.5,
      },
    ],
  },
];
