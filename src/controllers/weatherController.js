import District from '../models/District.js';
import AppError from '../utils/AppError.js';

// Open-Meteo (free, no API key). Cached per district for 30 minutes so we
// stay well within fair use no matter the traffic.
const cache = new Map(); // slug → { data, at }
const TTL = 30 * 60 * 1000;

export async function districtWeather(req, res, next) {
  try {
    const { slug } = req.params;
    const hit = cache.get(slug);
    if (hit && Date.now() - hit.at < TTL) {
      return res.json({ success: true, data: { weather: hit.data, cached: true } });
    }

    const district = await District.findOne({ slug, isLaunched: true }).select('mapCenter');
    if (!district) throw new AppError('District not found', 404);

    const { lat, lng } = district.mapCenter;
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
      `&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max` +
      `&timezone=Asia%2FDhaka&forecast_days=4`;

    const r = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!r.ok) throw new AppError('Weather service unavailable', 502);
    const raw = await r.json();

    const weather = {
      current: {
        temp: Math.round(raw.current.temperature_2m),
        humidity: raw.current.relative_humidity_2m,
        wind: Math.round(raw.current.wind_speed_10m),
        code: raw.current.weather_code,
      },
      daily: raw.daily.time.map((date, i) => ({
        date,
        code: raw.daily.weather_code[i],
        max: Math.round(raw.daily.temperature_2m_max[i]),
        min: Math.round(raw.daily.temperature_2m_min[i]),
        rain: raw.daily.precipitation_probability_max[i],
      })),
    };

    cache.set(slug, { data: weather, at: Date.now() });
    res.json({ success: true, data: { weather } });
  } catch (err) {
    next(err);
  }
}
