import District from '../models/District.js';
import Spot from '../models/Spot.js';
import GuideProfile from '../models/GuideProfile.js';
import Plan from '../models/Plan.js';
import Blog from '../models/Blog.js';

// Public homepage counters — cached in-process for 5 minutes
let cache = null;
let cachedAt = 0;

export async function publicStats(_req, res, next) {
  try {
    if (!cache || Date.now() - cachedAt > 5 * 60 * 1000) {
      const [districts, spots, guides, plans, blogs] = await Promise.all([
        District.countDocuments({ isLaunched: true }),
        Spot.countDocuments({ isActive: true }),
        GuideProfile.countDocuments({ applicationStatus: 'approved' }),
        Plan.countDocuments(),
        Blog.countDocuments({ status: 'approved' }),
      ]);
      cache = { districts, spots, guides, plans, blogs };
      cachedAt = Date.now();
    }
    res.json({ success: true, data: { stats: cache } });
  } catch (err) {
    next(err);
  }
}
