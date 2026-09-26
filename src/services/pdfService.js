import fs from 'fs';
import path from 'path';

const PDF_DIR = path.resolve('uploads', 'plans');
if (!fs.existsSync(PDF_DIR)) fs.mkdirSync(PDF_DIR, { recursive: true });

const CHROME_PATHS = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
].filter(Boolean);

function findChrome() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const money = (n) => `${Number(n || 0).toLocaleString('bn-BD')} টাকা`;

// Simple offline route sketch: normalized lat/lng plotted as numbered points
function mapSvg(points) {
  if (!points?.length) return '';
  const lats = points.map((p) => p.lat);
  const lngs = points.map((p) => p.lng);
  const pad = 0.02;
  const minLat = Math.min(...lats) - pad, maxLat = Math.max(...lats) + pad;
  const minLng = Math.min(...lngs) - pad, maxLng = Math.max(...lngs) + pad;
  const W = 680, H = 340;
  const x = (lng) => ((lng - minLng) / (maxLng - minLng || 1)) * (W - 60) + 30;
  const y = (lat) => H - (((lat - minLat) / (maxLat - minLat || 1)) * (H - 60) + 30);
  const sorted = [...points].sort((a, b) => (a.order || 0) - (b.order || 0));
  const line = sorted.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.lng).toFixed(1)},${y(p.lat).toFixed(1)}`).join(' ');
  const dots = sorted
    .map(
      (p, i) => `
    <circle cx="${x(p.lng).toFixed(1)}" cy="${y(p.lat).toFixed(1)}" r="11" fill="#047857"/>
    <text x="${x(p.lng).toFixed(1)}" y="${(y(p.lat) + 4).toFixed(1)}" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">${i + 1}</text>
    <text x="${(x(p.lng) + 16).toFixed(1)}" y="${(y(p.lat) + 4).toFixed(1)}" font-size="12" fill="#1f2937">${esc(p.name)}</text>`
    )
    .join('');
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;background:#ecfdf5;border-radius:12px">
    <path d="${line}" stroke="#10b981" stroke-width="2.5" fill="none" stroke-dasharray="6 5"/>${dots}</svg>`;
}

export function planHtml(plan, district, userName) {
  const o = plan.output;
  const list = (items) => (items || []).map((i) => `<li>${esc(i)}</li>`).join('');
  return `<!doctype html><html lang="bn"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { font-family: 'Noto Sans Bengali', sans-serif; color: #1f2937; padding: 32px; font-size: 13px; line-height: 1.7; }
  .hero { background: linear-gradient(120deg, #065f46, #10b981); color: #fff; border-radius: 16px; padding: 28px; margin-bottom: 22px; }
  .hero h1 { font-size: 26px; margin-bottom: 6px; }
  .meta { display: flex; gap: 14px; flex-wrap: wrap; font-size: 12px; opacity: .95; margin-top: 10px; }
  .meta span { background: rgba(255,255,255,.18); padding: 3px 12px; border-radius: 999px; }
  h2 { font-size: 17px; color: #065f46; margin: 22px 0 8px; border-bottom: 2px solid #d1fae5; padding-bottom: 4px; }
  .day { border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-bottom: 12px; page-break-inside: avoid; }
  .day h3 { font-size: 14px; color: #047857; margin-bottom: 6px; }
  .day .cost { float: right; font-weight: 600; color: #92400e; }
  ul { padding-inline-start: 20px; }
  table { width: 100%; border-collapse: collapse; }
  td, th { border: 1px solid #e5e7eb; padding: 6px 12px; text-align: left; }
  th { background: #f0fdf4; }
  .warn { background: #fffbeb; border: 1px solid #fcd34d; border-radius: 12px; padding: 12px 18px; }
  .verdict { background: #eff6ff; border-radius: 10px; padding: 10px 16px; margin-top: 10px; }
  .footer { margin-top: 28px; text-align: center; font-size: 11px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 10px; }
</style></head><body>
<div class="hero">
  <h1>${esc(o.title)}</h1>
  <div>${esc(o.summary)}</div>
  <div class="meta">
    <span>📍 ${esc(district.name.bn)}</span>
    <span>👥 ${plan.input.members} জন</span>
    <span>🗓️ ${plan.input.days} দিন ${plan.input.nights} রাত</span>
    <span>💰 বাজেট ${money(plan.input.budget)}</span>
  </div>
</div>
${o.budgetVerdict ? `<div class="verdict"><strong>বাজেট মূল্যায়ন:</strong> ${esc(o.budgetVerdict)}</div>` : ''}
<h2>🗺️ রুট ম্যাপ</h2>
${mapSvg(o.mapPoints)}
<h2>📅 দিনভিত্তিক পরিকল্পনা</h2>
${(o.days || [])
  .map(
    (d) => `<div class="day">
  <h3><span class="cost">≈ ${money(d.costEstimate)}</span>দিন ${d.dayNumber}: ${esc(d.title)}</h3>
  <ul>${list(d.activities)}</ul>
  <div>🍲 <strong>খাবার:</strong> ${esc(d.meals)} &nbsp; 🛏️ <strong>থাকা:</strong> ${esc(d.stay)}</div>
  <div>🚌 <strong>যাতায়াত:</strong> ${esc(d.transport)}</div>
</div>`
  )
  .join('')}
<h2>💰 খরচের হিসাব</h2>
<table><tr><th>খাত</th><th>আনুমানিক খরচ</th></tr>
${(o.costBreakdown || []).map((c) => `<tr><td>${esc(c.item)}</td><td>${money(c.amount)}</td></tr>`).join('')}
<tr><th>মোট</th><th>${money(o.totalCostEstimate)}</th></tr></table>
${o.hiddenPlaces?.length ? `<h2>💎 লুকানো স্পট</h2><ul>${list(o.hiddenPlaces)}</ul>` : ''}
${o.warnings?.length ? `<h2>⚠️ সতর্কতা</h2><div class="warn"><ul>${list(o.warnings)}</ul></div>` : ''}
${o.tips?.length ? `<h2>💡 টিপস</h2><ul>${list(o.tips)}</ul>` : ''}
<div class="footer">বাংলাদেশ ল্যান্ডস্কেপ — ${esc(userName)}-এর জন্য তৈরি · প্ল্যান আইডি: ${plan.publicId} · এই প্ল্যান ব্যক্তিগত ব্যবহারের জন্য</div>
</body></html>`;
}

export async function renderPlanPdf(plan, district, userName) {
  const chromePath = findChrome();
  if (!chromePath) {
    throw new Error('Chrome not found for PDF rendering. Set CHROME_PATH in .env');
  }
  const { default: puppeteer } = await import('puppeteer-core');
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true });
  try {
    const page = await browser.newPage();
    await page.setContent(planHtml(plan, district, userName), { waitUntil: 'networkidle0', timeout: 60000 });
    const filename = `plan-${plan.publicId}.pdf`;
    const filePath = path.join(PDF_DIR, filename);
    await page.pdf({ path: filePath, format: 'A4', printBackground: true, margin: { top: '10mm', bottom: '10mm', left: '8mm', right: '8mm' } });
    return { filename, filePath };
  } finally {
    await browser.close();
  }
}

export { PDF_DIR };
