import District from '../models/District.js';
import Spot from '../models/Spot.js';
import Blog from '../models/Blog.js';
import Event from '../models/Event.js';
import Listing from '../models/Listing.js';

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// GET /search?q= — grouped cross-content search (bn + en fields)
export async function globalSearch(req, res, next) {
  try {
    const q = String(req.query.q || '').trim();
    if (q.length < 2) return res.json({ success: true, data: { results: {} } });
    const rx = { $regex: esc(q), $options: 'i' };

    const [districts, spots, blogs, events, listings] = await Promise.all([
      District.find({ isLaunched: true, $or: [{ 'name.bn': rx }, { 'name.en': rx }, { 'overview.bn': rx }] })
        .select('slug name division isVerified')
        .limit(5),
      Spot.find({ isActive: true, $or: [{ 'name.bn': rx }, { 'name.en': rx }, { 'description.bn': rx }] })
        .populate('district', 'slug name isLaunched')
        .select('slug name category district images')
        .limit(6),
      Blog.find({ status: 'approved', $or: [{ 'title.bn': rx }, { 'title.en': rx }, { excerpt: rx }] })
        .select('slug title author')
        .populate('author', 'name')
        .limit(4),
      Event.find({ status: 'published', $or: [{ 'title.bn': rx }, { 'title.en': rx }, { 'description.bn': rx }] })
        .select('slug title dates pricePerPerson')
        .limit(4),
      Listing.find({ status: 'approved', $or: [{ 'name.bn': rx }, { 'name.en': rx }] })
        .populate('district', 'slug name isLaunched')
        .select('name type district priceRange')
        .limit(4),
    ]);

    res.json({
      success: true,
      data: {
        results: {
          districts: districts.map((d) => ({ title: d.name, sub: d.division, link: `/districts/${d.slug}`, verified: d.isVerified })),
          spots: spots
            .filter((s) => s.district?.isLaunched)
            .map((s) => ({ title: s.name, sub: s.district?.name, link: `/spots/${s.slug}`, category: s.category, image: s.images?.[0] })),
          blogs: blogs.map((b) => ({ title: b.title, sub: { bn: b.author?.name, en: b.author?.name }, link: `/blog/${b.slug}` })),
          events: events.map((e) => ({ title: e.title, sub: null, link: `/events/${e.slug}`, price: e.pricePerPerson })),
          listings: listings
            .filter((l) => l.district?.isLaunched)
            .map((l) => ({ title: l.name, sub: l.district?.name, link: `/listings/${l._id}`, type: l.type })),
        },
      },
    });
  } catch (err) {
    next(err);
  }
}
