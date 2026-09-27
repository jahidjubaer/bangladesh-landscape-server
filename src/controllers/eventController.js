import Event from '../models/Event.js';
import EventBooking from '../models/EventBooking.js';
import AppError from '../utils/AppError.js';
import { notify } from '../services/notifyService.js';

async function seatsTaken(eventId) {
  const agg = await EventBooking.aggregate([
    { $match: { event: eventId, status: 'confirmed' } },
    { $group: { _id: null, n: { $sum: '$seats' } } },
  ]);
  return agg[0]?.n || 0;
}

async function withSeats(events) {
  return Promise.all(
    events.map(async (e) => {
      const taken = await seatsTaken(e._id);
      return { ...e.toObject(), seatsTaken: taken, seatsLeft: Math.max(0, e.capacity - taken) };
    })
  );
}

// ---------- Public ----------

export async function list(_req, res, next) {
  try {
    const events = await Event.find({ status: 'published', 'dates.start': { $gte: new Date() } })
      .populate('district', 'slug name')
      .sort('dates.start');
    res.json({ success: true, data: { events: await withSeats(events) } });
  } catch (err) {
    next(err);
  }
}

export async function getBySlug(req, res, next) {
  try {
    const event = await Event.findOne({ slug: req.params.slug, status: { $ne: 'draft' } }).populate(
      'district',
      'slug name'
    );
    if (!event) throw new AppError('Event not found', 404);
    const [withCount] = await withSeats([event]);
    res.json({ success: true, data: { event: withCount } });
  } catch (err) {
    next(err);
  }
}

// ---------- User booking ----------

export async function book(req, res, next) {
  try {
    const { slug, seats, note, phone } = req.body;
    const n = Number(seats);
    if (!n || n < 1 || n > 20) throw new AppError('Seats must be 1-20', 400);

    const event = await Event.findOne({ slug, status: 'published' });
    if (!event) throw new AppError('Event not found', 404);
    if (event.dates.start <= new Date()) throw new AppError('Booking is closed for this event', 409);

    const taken = await seatsTaken(event._id);
    if (taken + n > event.capacity) throw new AppError('Not enough seats left', 409);

    const existing = await EventBooking.findOne({ event: event._id, user: req.user._id, status: { $in: ['requested', 'confirmed'] } });
    if (existing) throw new AppError('You already have a booking for this event', 409);

    const booking = await EventBooking.create({
      event: event._id,
      user: req.user._id,
      seats: n,
      amountTotal: event.pricePerPerson * n,
      note: note || '',
      phone: req.user.phone,
    });

    res.status(201).json({ success: true, message: 'Booking requested', data: { booking } });
  } catch (err) {
    next(err);
  }
}

export async function myEventBookings(req, res, next) {
  try {
    const bookings = await EventBooking.find({ user: req.user._id })
      .populate('event', 'slug title coverImageUrl dates pricePerPerson')
      .sort('-createdAt');
    res.json({ success: true, data: { bookings } });
  } catch (err) {
    next(err);
  }
}

export async function cancelMyEventBooking(req, res, next) {
  try {
    const booking = await EventBooking.findOne({ _id: req.params.id, user: req.user._id }).populate('event', 'dates');
    if (!booking) throw new AppError('Booking not found', 404);
    if (!['requested', 'confirmed'].includes(booking.status)) throw new AppError('Cannot cancel this booking', 409);
    if (booking.event?.dates?.start <= new Date()) throw new AppError('Event already started', 409);
    booking.status = 'cancelled';
    await booking.save();
    res.json({ success: true, message: 'Booking cancelled' });
  } catch (err) {
    next(err);
  }
}

// ---------- Admin ----------

export async function adminList(_req, res, next) {
  try {
    const events = await Event.find().populate('district', 'slug name').sort('-dates.start');
    res.json({ success: true, data: { events: await withSeats(events) } });
  } catch (err) {
    next(err);
  }
}

export async function adminGet(req, res, next) {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) throw new AppError('Event not found', 404);
    res.json({ success: true, data: { event } });
  } catch (err) {
    next(err);
  }
}

export async function adminCreate(req, res, next) {
  try {
    const body = { ...req.body };
    if (!body.slug) body.slug = Event.makeSlug(body.title?.en);
    const event = await Event.create(body);
    res.status(201).json({ success: true, message: 'Event created', data: { event } });
  } catch (err) {
    next(err);
  }
}

export async function adminUpdate(req, res, next) {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });
    if (!event) throw new AppError('Event not found', 404);
    res.json({ success: true, message: 'Event updated', data: { event } });
  } catch (err) {
    next(err);
  }
}

export async function adminDelete(req, res, next) {
  try {
    const bookings = await EventBooking.countDocuments({ event: req.params.id, status: { $in: ['requested', 'confirmed'] } });
    if (bookings > 0) throw new AppError(`This event has ${bookings} active booking(s) — cancel them first`, 409);
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) throw new AppError('Event not found', 404);
    res.json({ success: true, message: 'Event deleted' });
  } catch (err) {
    next(err);
  }
}

export async function adminBookings(req, res, next) {
  try {
    const filter = {};
    if (req.query.event) filter.event = req.query.event;
    if (req.query.status) filter.status = req.query.status;
    const bookings = await EventBooking.find(filter)
      .populate('user', 'name phone')
      .populate('event', 'slug title dates capacity')
      .sort('-createdAt')
      .limit(300);
    res.json({ success: true, data: { bookings } });
  } catch (err) {
    next(err);
  }
}

export async function adminDecideBooking(req, res, next) {
  try {
    const { action } = req.params; // confirm | reject
    if (!['confirm', 'reject'].includes(action)) throw new AppError('Invalid action', 400);

    const booking = await EventBooking.findById(req.params.id).populate('event', 'title capacity slug');
    if (!booking) throw new AppError('Booking not found', 404);
    if (booking.status !== 'requested') throw new AppError('Only pending requests can be decided', 409);

    if (action === 'confirm') {
      const taken = await seatsTaken(booking.event._id);
      if (taken + booking.seats > booking.event.capacity) throw new AppError('Not enough seats left', 409);
      booking.status = 'confirmed';
    } else {
      booking.status = 'rejected';
    }
    booking.adminNote = req.body?.note || '';
    await booking.save();

    await notify(
      booking.user,
      action === 'confirm' ? 'event-confirmed' : 'event-rejected',
      { title: booking.event.title.bn },
      '/my-bookings'
    );

    res.json({ success: true, message: action === 'confirm' ? 'Booking confirmed' : 'Booking rejected' });
  } catch (err) {
    next(err);
  }
}
