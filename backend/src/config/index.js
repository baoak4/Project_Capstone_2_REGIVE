const dotenv = require('dotenv');

dotenv.config();

const config = {
  port: Number(process.env.PORT) || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/regive',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-change-me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  nodeEnv: process.env.NODE_ENV || 'development',
  aiProvider: process.env.AI_PROVIDER || 'mock',
  aiApiKey: process.env.AI_API_KEY || '',
};

module.exports = config;
