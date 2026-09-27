import PageView, { DailyVisitor } from '../models/PageView.js';

// Collapse dynamic segments so the counters stay low-cardinality
const NORMALIZE = [
  [/^\/districts\/[^/]+$/, '/districts/:slug'],
  [/^\/spots\/[^/]+$/, '/spots/:slug'],
  [/^\/listings\/[^/]+$/, '/listings/:id'],
  [/^\/events\/[^/]+$/, '/events/:slug'],
  [/^\/guides\/[^/]+$/, '/guides/:id'],
  [/^\/blog\/[^/]+$/, '/blog/:slug'],
  [/^\/plans\/[^/]+$/, '/plans/:id'],
  [/^\/policies\/[^/]+$/, '/policies/:type'],
  [/^\/write-blog(\/.+)?$/, '/write-blog'],
];

// POST /track { path, vid } — fire-and-forget beacon; must never fail loudly
export async function track(req, res) {
  try {
    let p = String(req.body?.path || '/').slice(0, 120);
    if (!p.startsWith('/') || p.startsWith('/admin')) return res.json({ success: true });
    p = p.split('?')[0];
    for (const [re, to] of NORMALIZE) {
      if (re.test(p)) {
        p = to;
        break;
      }
    }

    const day = new Date().toISOString().slice(0, 10);
    await PageView.updateOne({ day, path: p }, { $inc: { views: 1 } }, { upsert: true });

    const vid = req.body?.vid;
    if (typeof vid === 'string' && /^[a-z0-9-]{8,40}$/i.test(vid)) {
      await DailyVisitor.updateOne({ day, vid }, { $setOnInsert: { day, vid } }, { upsert: true });
    }
  } catch {
    /* duplicate-key races and bad input are fine */
  }
  res.json({ success: true });
}
