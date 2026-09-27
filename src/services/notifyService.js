import Notification from '../models/Notification.js';

// Fire-and-forget: a failed notification must never fail the main action
export async function notify(userId, kind, data = {}, link = '') {
  try {
    if (!userId) return;
    await Notification.create({ user: userId, kind, data, link });
  } catch (err) {
    console.error('notify failed:', kind, err.message);
  }
}
