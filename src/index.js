import app from './app.js';
import env from './config/env.js';
import { connectDB } from './config/db.js';

// Vercel imports the default export as a serverless handler (no listen);
// app.js awaits the shared DB connection per request.
export default app;

async function start() {
  try {
    await connectDB();
    app.listen(env.port, () => {
      console.log(`API listening on http://localhost:${env.port} (${env.nodeEnv})`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
}

if (!process.env.VERCEL) start();
