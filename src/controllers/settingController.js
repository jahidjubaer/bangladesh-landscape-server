import Setting from '../models/Setting.js';

export async function getSettings(_req, res, next) {
  try {
    const settings = await Setting.get();
    res.json({ success: true, data: { settings } });
  } catch (err) {
    next(err);
  }
}

export async function updateSettings(req, res, next) {
  try {
    const settings = await Setting.get();
    const editable = ['planPrice', 'freePlanCreditsForNewUser', 'guideCommissionPct', 'bookingConfirmWindowHours', 'promptVersion'];
    for (const key of editable) {
      if (req.body[key] !== undefined) settings[key] = req.body[key];
    }
    await settings.save();
    res.json({ success: true, message: 'Settings updated', data: { settings } });
  } catch (err) {
    next(err);
  }
}
