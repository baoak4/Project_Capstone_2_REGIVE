const app = require('./app');
const config = require('./config');
const { connectDb } = require('./config/db');

async function start() {
  try {
    await connectDb();
    app.listen(config.port, () => {
      console.log(`ReGive backend listening on http://localhost:${config.port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
