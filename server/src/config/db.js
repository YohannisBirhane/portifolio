const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'kibru2130',
  database: process.env.DB_NAME || 'portfolio_db',
});
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
