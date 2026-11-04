// One-off: swap the old users.phone / users.email unique indexes for partial ones so
// Google accounts (no phone) can coexist, and add the googleUid index.
// Usage: npm run migrate:user-indexes   (uses MONGODB_URI from .env)
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';

await connectDB();
const coll = User.collection;
const before = await coll.indexes();
console.log('Before:', before.map((i) => i.name).join(', '));

for (const name of ['phone_1', 'email_1']) {
  const idx = before.find((i) => i.name === name);
  if (idx && !idx.partialFilterExpression) {
    await coll.dropIndex(name);
    console.log(`Dropped ${name}`);
  }
}

await User.syncIndexes();
console.log('After:', (await coll.indexes()).map((i) => `${i.name}${i.partialFilterExpression ? ' (partial)' : ''}`).join(', '));
await mongoose.disconnect();
