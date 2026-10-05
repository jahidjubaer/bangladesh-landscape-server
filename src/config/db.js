import mongoose from 'mongoose';
import env from './env.js';

let connecting = null;

// Idempotent: serverless instances share one connection across warm invocations
export function connectDB() {
  if (!connecting) {
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err.message);
    });
    connecting = mongoose
      .connect(env.mongodbUri)
      .then(() => {
        console.log(`MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
      })
      .catch((err) => {
        connecting = null; // let the next request retry
        throw err;
      });
  }
  return connecting;
}
