import District from '../models/District.js';
import Spot from '../models/Spot.js';
import AppError from '../utils/AppError.js';
import { intercityOptions } from '../services/routeService.js';

const LABELS = {
  bus: { bn: 'বাস', en: 'Bus' },
  train: { bn: 'ট্রেন', en: 'Train' },
  launch: { bn: 'লঞ্চ', en: 'Launch' },
  air: { bn: 'বিমান', en: 'Flight' },
};

// GET /tools/route?from=dhaka&to=sylhet — intercity options for the budget calculator
export async function routeOptions(req, res, next) {
  try {
    const { from, to } = req.query;
    const [a, b] = await Promise.all([District.findOne({ slug: from }), District.findOne({ slug: to })]);
    if (!a || !b) throw new AppError('Unknown district', 404);
    const options = a.slug === b.slug ? [] : intercityOptions(a, b).map((o) => ({ ...o, label: LABELS[o.mode] }));
    res.json({ success: true, data: { from: { slug: a.slug, name: a.name }, to: { slug: b.slug, name: b.name }, options } });
  } catch (err) {
    next(err);
  }
}

// Per-district landscape profile (spot categories, hidden gems) for the trip matcher.
// Content changes rarely — cache in memory for 10 minutes per instance.
let profileCache = { at: 0, data: null };

export async function districtProfiles(_req, res, next) {
  try {
    if (!profileCache.data || Date.now() - profileCache.at > 10 * 60 * 1000) {
      const [districts, rows] = await Promise.all([
        District.find({ isLaunched: true }).select('slug name division heroImageUrl mapCenter bestSeason'),
        Spot.aggregate([
          { $match: { isActive: true } },
          {
            $group: {
              _id: { district: '$district', category: '$category' },
              n: { $sum: 1 },
              hidden: { $sum: { $cond: ['$isHidden', 1, 0] } },
              entry: { $avg: '$entryCost.max' },
            },
          },
        ]),
      ]);
      const byDistrict = {};
      for (const r of rows) {
        const p = (byDistrict[r._id.district.toString()] ||= { categories: {}, spotCount: 0, hiddenCount: 0, entrySum: 0 });
        p.categories[r._id.category] = r.n;
        p.spotCount += r.n;
        p.hiddenCount += r.hidden;
        p.entrySum += (r.entry || 0) * r.n;
      }
      profileCache = {
        at: Date.now(),
        data: districts.map((d) => {
          const p = byDistrict[d._id.toString()] || { categories: {}, spotCount: 0, hiddenCount: 0, entrySum: 0 };
          return {
            slug: d.slug,
            name: d.name,
            division: d.division,
            heroImageUrl: d.heroImageUrl,
            center: d.mapCenter,
            bestSeason: d.bestSeason,
            categories: p.categories,
            spotCount: p.spotCount,
            hiddenCount: p.hiddenCount,
            avgEntryCost: p.spotCount ? Math.round(p.entrySum / p.spotCount) : 0,
          };
        }),
      };
    }
    res.json({ success: true, data: { districts: profileCache.data } });
  } catch (err) {
    next(err);
  }
}
