// Seeds: admin user + Sunamganj district with launch spots + settings.
// Re-runnable: upserts by slug/phone, never duplicates.
// Run: npm run seed
import mongoose from 'mongoose';
import env from '../config/env.js';
import User from '../models/User.js';
import District from '../models/District.js';
import Spot from '../models/Spot.js';
import Setting from '../models/Setting.js';

const ADMIN = { name: 'Admin', phone: '01700000000', password: 'admin123' };

const sunamganj = {
  slug: 'sunamganj',
  name: { bn: 'সুনামগঞ্জ', en: 'Sunamganj' },
  division: 'Sylhet',
  heroImageUrl: '',
  overview: {
    bn: 'হাওর, নদী আর মেঘালয় পাহাড়ের কোলঘেঁষা সুনামগঞ্জ — বাংলাদেশের অন্যতম সুন্দর ভ্রমণ গন্তব্য। টাঙ্গুয়ার হাওরের হাউসবোট ভ্রমণ, নীলাদ্রি লেকের নীল জল, যাদুকাটা নদীর স্বচ্ছ স্রোত আর শিমুল বাগানের লাল আগুন — সব মিলিয়ে সুনামগঞ্জ এক কথায় অনন্য। বর্ষায় হাওর হয়ে ওঠে সাগরের মতো, আর শীতে অতিথি পাখির রাজ্য।',
    en: '',
  },
  transportInfo: {
    bn: 'ঢাকা থেকে সুনামগঞ্জ: শ্যামলী, মামুন, এনা প্রভৃতি বাসে সরাসরি (ভাড়া আনু. ৮৫০–১৪০০ টাকা, সময় ৬–৭ ঘণ্টা)। সিলেট থেকে বাস/সিএনজিতে সুনামগঞ্জ শহর প্রায় ২ ঘণ্টা। শহর থেকে তাহিরপুর (টাঙ্গুয়ার হাওরের গেটওয়ে) মোটরসাইকেল বা সিএনজিতে; বর্ষায় সরাসরি নৌকা/হাউসবোট। তাহিরপুর থেকে টেকেরঘাট, বারিক টিলা এলাকায় মোটরসাইকেলই প্রধান বাহন।',
    en: '',
  },
  foodInfo: {
    bn: 'হাওরের তাজা মাছ এখানকার প্রধান আকর্ষণ — বোয়াল, আইড়, রুই, চিতল। হাউসবোটে সাধারণত খাবার প্যাকেজে অন্তর্ভুক্ত থাকে। তাহিরপুর ও টেকেরঘাট বাজারে সাধারণ মানের হোটেল আছে। সুনামগঞ্জ শহরে ভালো মানের রেস্টুরেন্ট পাবেন। শুকনো মৌসুমে প্রত্যন্ত স্পটে খাবারের দোকান কম — সঙ্গে শুকনো খাবার ও পানি রাখুন।',
    en: '',
  },
  bestSeason: {
    bn: 'বর্ষা (জুন–সেপ্টেম্বর): হাওর পূর্ণ যৌবনে, হাউসবোট ভ্রমণের সেরা সময়। শীত (নভেম্বর–ফেব্রুয়ারি): অতিথি পাখি, শিমুল বাগানের ফুল ফেব্রুয়ারি–মার্চে। এপ্রিল–মে ঝড়ের ঝুঁকি থাকে।',
    en: '',
  },
  warnings: [
    { bn: 'বর্ষায় হাওরে আফাল (বড় ঢেউ) হয় — লাইফ জ্যাকেট ছাড়া নৌকায় উঠবেন না।', en: '' },
    { bn: 'সীমান্তবর্তী এলাকায় (নীলাদ্রি, বারিক টিলা) বিজিবির নির্দেশনা মেনে চলুন, সীমান্তের ওপারে যাবেন না।', en: '' },
    { bn: 'যাদুকাটা ও নীলাদ্রিতে পানির গভীরতা হঠাৎ বাড়ে — সাঁতার না জানলে গভীর পানিতে নামবেন না।', en: '' },
    { bn: 'হাউসবোট বুকিংয়ের আগে রিভিউ ও লাইফ জ্যাকেট আছে কি না যাচাই করুন।', en: '' },
  ],
  emergency: {
    police: '01320-119898 (সুনামগঞ্জ জেলা পুলিশ)',
    hospital: '0871-62521 (সদর হাসপাতাল)',
    fireService: '102',
  },
  isLaunched: true,
  features: { guideBooking: false, boatBooking: false, hotelBooking: false, transportBooking: false },
  stayTypesAvailable: ['houseboat', 'hotel', 'resort'],
  mapCenter: { lat: 25.0658, lng: 91.395 },
  zoom: 10,
};

const spots = [
  {
    slug: 'tanguar-haor',
    name: { bn: 'টাঙ্গুয়ার হাওর', en: 'Tanguar Haor' },
    category: 'haor',
    description: {
      bn: 'প্রায় ১০০ বর্গকিলোমিটার বিস্তৃত টাঙ্গুয়ার হাওর বাংলাদেশের দ্বিতীয় বৃহত্তম মিঠাপানির জলাভূমি ও রামসার সাইট। বর্ষায় হাউসবোটে রাত কাটানো, স্বচ্ছ পানিতে হিজল-করচের সারি, আর শীতে লাখো অতিথি পাখি — টাঙ্গুয়া সব ঋতুতেই মুগ্ধ করে। ওয়াচ টাওয়ার এলাকার স্বচ্ছ পানিতে গোসল ভ্রমণকারীদের প্রিয় অভিজ্ঞতা।',
      en: '',
    },
    howToGo: {
      bn: 'সুনামগঞ্জ শহর থেকে মোটরসাইকেল/সিএনজিতে তাহিরপুর ঘাট (আনু. ১০০–২০০ টাকা)। বর্ষায় তাহিরপুর থেকে হাউসবোট বা ইঞ্জিন নৌকা — দিনভ্রমণ নৌকা ৩০০০–৫০০০ টাকা, হাউসবোট প্যাকেজ জনপ্রতি ৩৫০০–৮০০০ টাকা (১ রাত)। শীতে পানি কমে গেলে বাইকে ওয়াচ টাওয়ার পর্যন্ত যাওয়া যায়।',
      en: '',
    },
    location: { lat: 25.111, lng: 91.07 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 24,
    bestTime: { bn: 'বর্ষা (জুন–সেপ্টেম্বর) হাউসবোটের জন্য; শীত পাখি দেখার জন্য', en: '' },
    isHidden: false,
    tags: ['adventure', 'relaxed', 'family'],
    warnings: [
      { bn: 'আফালের সময় ছোট নৌকায় হাওর পাড়ি দেবেন না।', en: '' },
      { bn: 'রামসার সাইট — পাখি শিকার ও পলিথিন ফেলা দণ্ডনীয়।', en: '' },
    ],
    obstacles: [{ bn: 'বর্ষায় ঢেউ, শীতে কাদা রাস্তা।', en: '' }],
  },
  {
    slug: 'niladri-lake',
    name: { bn: 'নীলাদ্রি লেক (শহীদ সিরাজ লেক)', en: 'Niladri Lake (Shahid Siraj Lake)' },
    category: 'other',
    description: {
      bn: 'টেকেরঘাটের পরিত্যক্ত চুনাপাথর খনি থেকে সৃষ্ট এই লেকের নীল-সবুজ জল আর ওপারে মেঘালয়ের পাহাড় — অনেকে একে বাংলাদেশের "কাশ্মীর" বলেন। ছোট টিলা, স্বচ্ছ পানি আর নৌকা ভ্রমণ মিলিয়ে ছবির মতো সুন্দর জায়গা। আনুষ্ঠানিক নাম শহীদ সিরাজ লেক, মুক্তিযোদ্ধা সিরাজুল ইসলামের নামে।',
      en: '',
    },
    howToGo: {
      bn: 'তাহিরপুর থেকে মোটরসাইকেলে টেকেরঘাট (আনু. ১৫০–৩০০ টাকা, বর্ষায় নৌকায়)। টাঙ্গুয়ার হাওর ভ্রমণের সাথে একসাথে ঘোরা সবচেয়ে সুবিধাজনক — হাউসবোট প্যাকেজে সাধারণত নীলাদ্রি অন্তর্ভুক্ত থাকে।',
      en: '',
    },
    location: { lat: 25.187, lng: 91.115 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 2,
    bestTime: { bn: 'সারা বছর; বর্ষায় পানি সবচেয়ে নীল দেখায়', en: '' },
    isHidden: false,
    tags: ['relaxed', 'family', 'adventure'],
    warnings: [
      { bn: 'লেকের পানি হঠাৎ গভীর — সাঁতার না জানলে নামবেন না, ডুবে যাওয়ার দুর্ঘটনা ঘটেছে।', en: '' },
      { bn: 'সীমান্ত এলাকা — বিজিবির নির্দেশনা মানুন।', en: '' },
    ],
    obstacles: [],
  },
  {
    slug: 'jadukata-river',
    name: { bn: 'যাদুকাটা নদী', en: 'Jadukata River' },
    category: 'river',
    description: {
      bn: 'মেঘালয়ের খাসিয়া পাহাড় থেকে নেমে আসা যাদুকাটা তার স্বচ্ছ নীলাভ জল আর দুই পাড়ের সাদা বালুর জন্য বিখ্যাত — অনেকে বলেন "রূপের নদী"। নদীর বুকে নৌকায় ঘোরা, বালুচরে হাঁটা আর ওপারে ভারতের পাহাড়ের দৃশ্য মনে রাখার মতো। পাশেই লাউড়েরগড় বাজার ও শাহ আরেফিন (রহ.) মাজার।',
      en: '',
    },
    howToGo: {
      bn: 'সুনামগঞ্জ শহর বা তাহিরপুর থেকে মোটরসাইকেলে লাউড়েরগড়/বারিক টিলা ঘাট (শহর থেকে আনু. ২০০–৩০০ টাকা)। বারিক টিলা ও শিমুল বাগানের সাথে একই দিনে ঘোরা যায়।',
      en: '',
    },
    location: { lat: 25.175, lng: 91.24 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 2,
    bestTime: { bn: 'বর্ষা ও বর্ষার পরপর (জুন–অক্টোবর) — পানি তখন সবচেয়ে স্বচ্ছ ও নীল', en: '' },
    isHidden: false,
    tags: ['relaxed', 'family'],
    warnings: [{ bn: 'বালু-পাথর তোলার নৌকা চলাচল করে — সাঁতারের সময় সতর্ক থাকুন, স্রোত থাকলে নামবেন না।', en: '' }],
    obstacles: [],
  },
  {
    slug: 'barik-tila',
    name: { bn: 'বারিক টিলা (বারেক টিলা)', en: 'Barik Tila' },
    category: 'hill',
    description: {
      bn: 'যাদুকাটা নদীর তীরে প্রায় ৪০ একরের এই টিলার চূড়া থেকে একসাথে দেখা যায় যাদুকাটার নীল জল, সাদা বালুচর আর মেঘালয়ের সবুজ পাহাড় — সুনামগঞ্জের সেরা ভিউপয়েন্ট। টিলায় আদিবাসী পরিবারের বসবাস, আছে আঁকাবাঁকা মেঠো পথ।',
      en: '',
    },
    howToGo: {
      bn: 'তাহিরপুর থেকে মোটরসাইকেলে সরাসরি বারিক টিলা (আনু. ১৫০–২৫০ টাকা)। যাদুকাটা নদী পার হয়ে ওঠা যায়। শিমুল বাগান থেকে ১০–১৫ মিনিটের পথ।',
      en: '',
    },
    location: { lat: 25.185, lng: 91.245 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 1.5,
    bestTime: { bn: 'বিকেল — সূর্যাস্তের সময় ভিউ সবচেয়ে সুন্দর', en: '' },
    isHidden: false,
    tags: ['adventure', 'relaxed'],
    warnings: [{ bn: 'বৃষ্টিতে টিলার পথ পিচ্ছিল হয় — সাবধানে উঠুন।', en: '' }],
    obstacles: [{ bn: 'খাড়া মেঠো পথ, বয়স্কদের জন্য কষ্টকর হতে পারে।', en: '' }],
  },
  {
    slug: 'shimul-bagan',
    name: { bn: 'শিমুল বাগান', en: 'Shimul Bagan' },
    category: 'garden',
    description: {
      bn: 'যাদুকাটার তীরে মানিগাঁওয়ে প্রায় ১০০ বিঘা জুড়ে ৩ হাজারের বেশি শিমুল গাছের এই বাগান দেশের সবচেয়ে বড় শিমুল বাগান। ফেব্রুয়ারি–মার্চে পুরো বাগান রক্তলাল ফুলে ছেয়ে যায় — তখন এ যেন লাল গালিচা। ছবি তোলার জন্য দেশসেরা লোকেশনগুলোর একটি।',
      en: '',
    },
    howToGo: {
      bn: 'তাহিরপুর থেকে মোটরসাইকেলে মানিগাঁও শিমুল বাগান (আনু. ১৫০–২৫০ টাকা)। বারিক টিলা-যাদুকাটার সাথে একই ট্রিপে ঘোরা যায়।',
      en: '',
    },
    location: { lat: 25.178, lng: 91.23 },
    entryCost: { min: 20, max: 50 },
    timeNeededHours: 1.5,
    bestTime: { bn: 'ফেব্রুয়ারি–মার্চ (ফুল ফোটার মৌসুম); ভোর বা বিকেল', en: '' },
    isHidden: false,
    tags: ['family', 'relaxed'],
    warnings: [],
    obstacles: [{ bn: 'ফুলের মৌসুম ছাড়া বাগান সাধারণ সবুজ বাগানের মতোই।', en: '' }],
  },
  {
    slug: 'lakmachhara',
    name: { bn: 'লাকমাছড়া', en: 'Lakmachhara' },
    category: 'waterfall',
    description: {
      bn: 'টেকেরঘাটের কাছে মেঘালয় সীমান্ত ঘেঁষা লাকমাছড়া এক লুকানো রত্ন — পাহাড় থেকে নেমে আসা স্বচ্ছ ঝিরি, চুনাপাথরের ছোট টিলা আর সবুজে মোড়া প্রকৃতি। ভিড় কম বলে যারা নিরিবিলি প্রকৃতি চান তাদের জন্য আদর্শ।',
      en: '',
    },
    howToGo: {
      bn: 'টেকেরঘাট/নীলাদ্রি লেক থেকে মোটরসাইকেলে বা হেঁটে (১৫–২০ মিনিট)। নীলাদ্রি ভ্রমণের সাথে মিলিয়ে ঘুরে নেওয়া সবচেয়ে ভালো।',
      en: '',
    },
    location: { lat: 25.196, lng: 91.1 },
    entryCost: { min: 0, max: 0 },
    timeNeededHours: 1.5,
    bestTime: { bn: 'বর্ষা ও বর্ষার পর — ঝিরিতে তখন পানি থাকে', en: '' },
    isHidden: true,
    tags: ['adventure'],
    warnings: [{ bn: 'সীমান্তের খুব কাছে — ভারতীয় সীমানায় ঢুকবেন না।', en: '' }],
    obstacles: [{ bn: 'শুকনো মৌসুমে পানি কমে যায়; পথ কিছুটা এবড়োখেবড়ো।', en: '' }],
  },
  {
    slug: 'hason-raja-museum',
    name: { bn: 'হাসন রাজা মিউজিয়াম', en: 'Hason Raja Museum' },
    category: 'heritage',
    description: {
      bn: 'মরমি কবি ও বাউল সাধক হাসন রাজার স্মৃতিবিজড়িত জাদুঘর, সুনামগঞ্জ শহরে সুরমা নদীর তীরে। কবির ব্যবহৃত জিনিসপত্র, পাণ্ডুলিপি ও দুর্লভ ছবি সংরক্ষিত আছে। হাওর ভ্রমণের শুরু বা শেষে শহরে এক ঘণ্টার জন্য ঘুরে আসার মতো জায়গা।',
      en: '',
    },
    howToGo: {
      bn: 'সুনামগঞ্জ শহরের তেঘরিয়া এলাকায়, শহরের যেকোনো জায়গা থেকে রিকশায় (২০–৫০ টাকা)।',
      en: '',
    },
    location: { lat: 25.07, lng: 91.4 },
    entryCost: { min: 10, max: 20 },
    timeNeededHours: 1,
    bestTime: { bn: 'সারা বছর; শুক্রবার বন্ধ থাকতে পারে — গিয়ে দেখার আগে খোঁজ নিন', en: '' },
    isHidden: false,
    tags: ['family', 'relaxed'],
    warnings: [],
    obstacles: [],
  },
];

async function run() {
  await mongoose.connect(env.mongodbUri);
  console.log('Connected:', mongoose.connection.name);

  // Admin user
  const existingAdmin = await User.findOne({ phone: ADMIN.phone });
  if (existingAdmin) {
    if (!existingAdmin.roles.includes('admin')) {
      existingAdmin.roles.push('admin');
      await existingAdmin.save();
    }
    console.log('Admin exists:', ADMIN.phone);
  } else {
    await User.create({
      name: ADMIN.name,
      phone: ADMIN.phone,
      passwordHash: await User.hashPassword(ADMIN.password),
      roles: ['user', 'admin'],
    });
    console.log(`Admin created: ${ADMIN.phone} / ${ADMIN.password} — CHANGE THIS PASSWORD`);
  }

  // Settings singleton
  await Setting.get();

  // District
  const district = await District.findOneAndUpdate({ slug: sunamganj.slug }, sunamganj, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true,
  });
  console.log('District upserted:', district.slug);

  // Spots
  for (const s of spots) {
    await Spot.findOneAndUpdate(
      { slug: s.slug },
      { ...s, district: district._id },
      { upsert: true, setDefaultsOnInsert: true }
    );
    console.log('Spot upserted:', s.slug);
  }

  await mongoose.disconnect();
  console.log('Seed complete.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
