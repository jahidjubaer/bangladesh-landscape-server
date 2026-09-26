import Anthropic from '@anthropic-ai/sdk';
import District from '../models/District.js';
import Spot from '../models/Spot.js';
import Setting from '../models/Setting.js';
import AppError from '../utils/AppError.js';

const PLAN_MODEL = process.env.PLAN_MODEL || 'claude-opus-5';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const FOOD_LABELS = { local: 'লোকাল/দেশি খাবার', special: 'স্পেশাল খাবার (হাওরের মাছ, বিশেষ পদ)', regular: 'সাধারণ খাবার' };
const STYLE_LABELS = { adventure: 'অ্যাডভেঞ্চার', relaxed: 'নিরিবিলি/আরামদায়ক', family: 'পরিবারসহ', other: 'সাধারণ' };
const STAY_LABELS = { houseboat: 'হাউসবোট', cottage: 'কটেজ', hotel: 'হোটেল', resort: 'রিসোর্ট', any: 'যেকোনো' };

function spotFacts(s) {
  return {
    name: s.name.bn,
    category: s.category,
    description: s.description?.bn || '',
    howToGo: s.howToGo?.bn || '',
    entryCost: s.entryCost,
    timeNeededHours: s.timeNeededHours,
    bestTime: s.bestTime?.bn || '',
    isHidden: s.isHidden,
    lat: s.location?.lat,
    lng: s.location?.lng,
    warnings: (s.warnings || []).map((w) => w.bn),
    obstacles: (s.obstacles || []).map((o) => o.bn),
    tags: s.tags || [],
  };
}

function buildPrompt(district, spots, input) {
  const facts = {
    district: {
      name: district.name.bn,
      overview: district.overview?.bn,
      transportInfo: district.transportInfo?.bn,
      foodInfo: district.foodInfo?.bn,
      bestSeason: district.bestSeason?.bn,
      warnings: (district.warnings || []).map((w) => w.bn),
      emergency: district.emergency,
    },
    selectedSpots: spots.map(spotFacts),
  };

  const request = {
    members: input.members,
    days: input.days,
    nights: input.nights,
    totalBudgetBDT: input.budget,
    food: FOOD_LABELS[input.foodPref],
    style: STYLE_LABELS[input.exploreStyle],
    stay: STAY_LABELS[input.stayPref],
    startDate: input.startDate ? new Date(input.startDate).toISOString().slice(0, 10) : null,
  };

  return `তুমি বাংলাদেশের একজন অভিজ্ঞ ট্যুর প্ল্যানার। নিচের VERIFIED_FACTS ব্লকের তথ্য মাঠপর্যায়ে যাচাই করা — ভাড়া, রুট, সময়, সতর্কতা শুধুমাত্র এখান থেকেই নেবে, নিজে থেকে কোনো দাম/রুট বানাবে না। যেখানে তথ্য নেই সেখানে অনুমান না করে সাধারণ পরামর্শ দেবে।

VERIFIED_FACTS:
${JSON.stringify(facts, null, 1)}

USER_REQUEST:
${JSON.stringify(request, null, 1)}

কাজ: এই ইউজারের জন্য ${request.days} দিন ${request.nights} রাতের একটি বাস্তবসম্মত ট্যুর প্ল্যান বানাও। startDate থেকে ঋতু বুঝে পরিকল্পনা সাজাও (বর্ষা/শীত অনুযায়ী)। বাজেট মোট ${request.totalBudgetBDT} টাকা (${request.members} জনের জন্য) — যদি বাজেটে সব স্পট কভার করা অসম্ভব হয়, budgetVerdict-এ সততার সাথে বলো এবং প্ল্যান সেই অনুযায়ী ছোট করো। কাছাকাছি স্পটগুলো একই দিনে রাখো (lat/lng দেখে)। isHidden স্পটগুলো hiddenPlaces-এও উল্লেখ করো।

শুধুমাত্র নিচের কাঠামোর একটি JSON অবজেক্ট আউটপুট দাও — কোনো markdown, ব্যাখ্যা বা কোড ফেন্স নয়। সব টেক্সট বাংলায়:
{
 "title": "প্ল্যানের আকর্ষণীয় শিরোনাম",
 "summary": "৩-৪ বাক্যে পুরো ট্রিপের সারসংক্ষেপ",
 "budgetVerdict": "বাজেট যথেষ্ট/টানাটানি/অপর্যাপ্ত — এক-দুই বাক্যে সৎ মূল্যায়ন",
 "days": [{"dayNumber": 1, "title": "দিনের শিরোনাম", "activities": ["সকাল: ...", "দুপুর: ...", "বিকেল: ...", "রাত: ..."], "meals": "কোথায় কী খাবেন", "stay": "কোথায় থাকবেন", "transport": "সেদিনের যাতায়াত ও আনুমানিক ভাড়া", "costEstimate": 5000}],
 "mapPoints": [{"name": "স্পটের নাম", "lat": 25.1, "lng": 91.1, "order": 1}],
 "costBreakdown": [{"item": "যাতায়াত (ঢাকা-সুনামগঞ্জ বাস, ${request.members} জন)", "amount": 3000}],
 "totalCostEstimate": 15000,
 "warnings": ["প্রাসঙ্গিক সতর্কতাগুলো"],
 "hiddenPlaces": ["লুকানো স্পটের নাম ও এক লাইনে কেন যাবেন"],
 "tips": ["প্যাকিং/ঋতু/টাকা বাঁচানোর টিপস"]
}`;
}

function parsePlanJSON(text) {
  let raw = text.trim();
  // Defensive: strip code fences if the model added them despite instructions
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) raw = fenced[1].trim();
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object in model output');
  return JSON.parse(raw.slice(start, end + 1));
}

async function generateWithClaude(district, spots, input) {
  const client = new Anthropic(); // resolves ANTHROPIC_API_KEY from env
  const response = await client.messages.create({
    model: PLAN_MODEL,
    max_tokens: 16000,
    messages: [{ role: 'user', content: buildPrompt(district, spots, input) }],
  });

  if (response.stop_reason === 'refusal') {
    throw new AppError('Plan generation was declined, please adjust your request', 502);
  }
  const text = response.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('');
  return { output: parsePlanJSON(text), model: response.model };
}

// Free-tier provider (Google AI Studio). JSON mode via responseMimeType.
async function generateWithGemini(district, spots, input) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: buildPrompt(district, spots, input) }] }],
      generationConfig: { responseMimeType: 'application/json', maxOutputTokens: 8192 },
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new AppError(`Gemini API error ${res.status}: ${errText.slice(0, 300)}`, 502);
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') || '';
  if (!text) throw new AppError('Gemini returned an empty response', 502);
  return { output: parsePlanJSON(text), model: GEMINI_MODEL };
}

// Deterministic fallback when no AI API key is configured (dev mode).
// Distributes spots across days by proximity order and sums verified costs.
function generateMock(district, spots, input) {
  const perDay = Math.max(1, Math.ceil(spots.length / input.days));
  const days = [];
  const transportBase = 900 * input.members; // rough Dhaka→district bus per head from facts
  for (let d = 0; d < input.days; d++) {
    const daySpots = spots.slice(d * perDay, (d + 1) * perDay);
    if (daySpots.length === 0 && d > 0) break;
    days.push({
      dayNumber: d + 1,
      title: daySpots.length ? daySpots.map((s) => s.name.bn).join(', ') : 'বিশ্রাম ও স্থানীয় ঘোরাঘুরি',
      activities: daySpots.map((s) => `${s.name.bn} — ${s.howToGo?.bn || ''}`.trim()),
      meals: district.foodInfo?.bn || 'স্থানীয় হোটেলে খাবার',
      stay: STAY_LABELS[input.stayPref],
      transport: district.transportInfo?.bn?.slice(0, 200) || '',
      costEstimate: Math.round((input.budget - transportBase) / input.days),
    });
  }
  const entryTotal = spots.reduce((sum, s) => sum + (s.entryCost?.max || 0), 0) * input.members;
  const output = {
    title: `${district.name.bn} ${input.days} দিনের ট্যুর প্ল্যান`,
    summary: `${district.name.bn} জেলায় ${input.members} জনের ${input.days} দিন ${input.nights} রাতের ভ্রমণ পরিকল্পনা। নির্বাচিত স্পট: ${spots.map((s) => s.name.bn).join(', ')}।`,
    budgetVerdict:
      input.budget >= transportBase + entryTotal + 1500 * input.members * input.days
        ? 'বাজেট মোটামুটি যথেষ্ট।'
        : 'বাজেট টানাটানি হতে পারে — স্পট বা দিন কমানোর কথা ভাবুন।',
    days,
    mapPoints: spots
      .filter((s) => s.location?.lat != null)
      .map((s, i) => ({ name: s.name.bn, lat: s.location.lat, lng: s.location.lng, order: i + 1 })),
    costBreakdown: [
      { item: `যাতায়াত (আনুমানিক, ${input.members} জন)`, amount: transportBase },
      { item: 'প্রবেশ ফি (মোট)', amount: entryTotal },
      { item: 'খাবার ও থাকা (আনুমানিক)', amount: Math.max(0, input.budget - transportBase - entryTotal) },
    ],
    totalCostEstimate: input.budget,
    warnings: [...(district.warnings || []).map((w) => w.bn), ...spots.flatMap((s) => (s.warnings || []).map((w) => w.bn))],
    hiddenPlaces: spots.filter((s) => s.isHidden).map((s) => s.name.bn),
    tips: [district.bestSeason?.bn || '', 'নগদ টাকা সাথে রাখুন — প্রত্যন্ত এলাকায় এটিএম নেই।'].filter(Boolean),
  };
  return { output, model: 'mock' };
}

export async function generatePlan(input) {
  const district = await District.findOne({ _id: input.district, isLaunched: true });
  if (!district) throw new AppError('District not found', 404);

  const spots = await Spot.find({ _id: { $in: input.spots }, district: district._id, isActive: true });
  if (spots.length === 0) throw new AppError('Select at least one valid spot', 400);

  const settings = await Setting.get();
  // Provider priority: free Gemini tier first, Claude if configured, else mock
  const generator = process.env.GEMINI_API_KEY
    ? generateWithGemini
    : process.env.ANTHROPIC_API_KEY
      ? generateWithClaude
      : generateMock;
  const { output, model } = await generator(district, spots, input);

  return {
    district,
    spots,
    output,
    modelMeta: { model, promptVersion: settings.promptVersion },
  };
}
