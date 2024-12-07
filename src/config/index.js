import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the .env file
dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
  port: process.env.PORT || 3000, // Default to 3000 if PORT is not provided
  database_url: process.env.DATABASE_URL || 'mongodb://localhost:27017/mongoose-first', // Database URL from .env
};

export default config;
