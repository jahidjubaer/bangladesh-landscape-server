import { Router } from 'express';
import District from '../models/District.js';
import Spot from '../models/Spot.js';
import Blog from '../models/Blog.js';
import Event from '../models/Event.js';
import Listing from '../models/Listing.js';
import env from '../config/env.js';

const router = Router();

// /sitemap.xml — districts, spots, approved blogs, published events and
// approved listings (public plan previews are shareable but user-generated;
// keep the sitemap to curated content)
router.get('/sitemap.xml', async (_req, res, next) => {
  try {
    const base = env.clientUrl.replace(/\/$/, '');
    const [districts, spots, blogs, events, listings] = await Promise.all([
      District.find({ isLaunched: true }).select('slug updatedAt'),
      Spot.find({ isActive: true }).populate('district', 'isLaunched').select('slug updatedAt district'),
      Blog.find({ status: 'approved' }).select('slug updatedAt'),
      Event.find({ status: 'published' }).select('slug updatedAt'),
      Listing.find({ status: 'approved' }).populate('district', 'isLaunched').select('updatedAt district'),
    ]);

    const urls = [
      { loc: `${base}/`, priority: '1.0' },
      { loc: `${base}/districts`, priority: '0.9' },
      { loc: `${base}/explore`, priority: '0.9' },
      { loc: `${base}/guides`, priority: '0.8' },
      { loc: `${base}/blog`, priority: '0.8' },
      { loc: `${base}/plan`, priority: '0.9' },
      { loc: `${base}/stays`, priority: '0.8' },
      { loc: `${base}/events`, priority: '0.8' },
      { loc: `${base}/gallery`, priority: '0.6' },
      ...districts.map((d) => ({ loc: `${base}/districts/${d.slug}`, lastmod: d.updatedAt, priority: '0.9' })),
      ...spots
        .filter((s) => s.district?.isLaunched)
        .map((s) => ({ loc: `${base}/spots/${s.slug}`, lastmod: s.updatedAt, priority: '0.8' })),
      ...blogs.map((b) => ({ loc: `${base}/blog/${b.slug}`, lastmod: b.updatedAt, priority: '0.7' })),
      ...events.map((e) => ({ loc: `${base}/events/${e.slug}`, lastmod: e.updatedAt, priority: '0.7' })),
      ...listings
        .filter((l) => l.district?.isLaunched)
        .map((l) => ({ loc: `${base}/listings/${l._id}`, lastmod: l.updatedAt, priority: '0.6' })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${new Date(u.lastmod).toISOString().slice(0, 10)}</lastmod>` : ''}<priority>${u.priority}</priority></url>`
  )
  .join('\n')}
</urlset>`;

    res.type('application/xml').send(xml);
  } catch (err) {
    next(err);
  }
});

export default router;
