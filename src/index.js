import mongoose from 'mongoose';
import app from './app.js';
import config from './config/index.js';

async function main() {
  console.log('PORT:', config.port); // Log the port
  console.log('DATABASE_URL:', config.database_url); // Log the database URL

  try {
    if (!config.database_url) {
      throw new Error('Database URL is undefined');
    }

    await mongoose.connect(config.database_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');

    app.listen(config.port, () => {
      console.log(`App is running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
