require('dotenv').config({ path: '../.env' });
const app = require('./app');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log('✓ Server is running on port ' + PORT);
  console.log('✓ Environment: ' + (process.env.NODE_ENV || 'development'));
});

// Error handling
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error('✗ Port ' + PORT + ' is already in use');
  } else {
    console.error('✗ Server error:', error);
  }
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('✗ Unhandled Rejection at:', promise, 'reason:', reason);
});
