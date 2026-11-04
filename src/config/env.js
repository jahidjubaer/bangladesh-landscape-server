import dotenv from 'dotenv';

dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bangladesh-landscape',
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
};

if (!env.jwtSecret) {
  console.error('FATAL: JWT_SECRET is not set. Copy .env.example to .env and set it.');
  process.exit(1);
}

// Production sanity checks: loud lines in the host's logs, no crash
if (env.nodeEnv === 'production') {
  const local = /localhost|127\.0\.0\.1/;
  if (env.jwtSecret.length < 32) console.error('SECURITY: JWT_SECRET is shorter than 32 characters; use a long random value.');
  if (local.test(env.clientUrl)) console.error('CONFIG: CLIENT_URL points at localhost in production (CORS and cookies will fail).');
  if (local.test(env.mongodbUri)) console.error('CONFIG: MONGODB_URI points at localhost in production.');
}

export default env;
