import District from '../models/District.js';
import Spot from '../models/Spot.js';
import Listing from '../models/Listing.js';
import Event from '../models/Event.js';

// Aggregates every image on the platform for the public gallery.
let cache = null;
let cachedAt = 0;
const TTL = 10 * 60 * 1000;

export async function gallery(_req, res, next) {
  try {
    if (!cache || Date.now() - cachedAt > TTL) {
      const [districts, spots, listings, events] = await Promise.all([
        District.find({ isLaunched: true, heroImageUrl: { $ne: '' } }).select('slug name heroImageUrl'),
        Spot.find({ isActive: true, 'images.0': { $exists: true } })
          .populate('district', 'slug name isLaunched')
          .select('slug name images district'),
        Listing.find({ status: 'approved', 'images.0': { $exists: true } })
          .populate('district', 'slug name isLaunched')
          .select('name images district type'),
        Event.find({ status: { $in: ['published', 'completed'] }, coverImageUrl: { $ne: '' } })
          .populate('district', 'slug name isLaunched')
          .select('slug title coverImageUrl district'),
      ]);

      const photos = [];
      for (const d of districts) {
        photos.push({ url: d.heroImageUrl, title: d.name, district: { slug: d.slug, name: d.name }, link: `/districts/${d.slug}` });
      }
      for (const s of spots) {
        if (!s.district?.isLaunched) continue;
        for (const url of s.images) {
          photos.push({ url, title: s.name, district: { slug: s.district.slug, name: s.district.name }, link: `/spots/${s.slug}` });
        }
      }
      for (const l of listings) {
        if (!l.district?.isLaunched) continue;
        for (const url of l.images) {
          photos.push({ url, title: l.name, district: { slug: l.district.slug, name: l.district.name }, link: `/listings/${l._id}` });
        }
      }
      for (const e of events) {
        if (e.district && !e.district.isLaunched) continue;
        photos.push({
          url: e.coverImageUrl,
          title: e.title,
          district: e.district ? { slug: e.district.slug, name: e.district.name } : null,
          link: `/events/${e.slug}`,
        });
      }

      // De-duplicate by URL (hero photos may repeat as spot photos)
      const seen = new Set();
      cache = photos.filter((p) => (seen.has(p.url) ? false : seen.add(p.url)));
      cachedAt = Date.now();
    }

    res.json({ success: true, data: { photos: cache } });
  } catch (err) {
    next(err);
  }
}
