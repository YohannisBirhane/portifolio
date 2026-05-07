const db = require('../config/db');
const helpers = require('../utils/helpers');

const ADMIN_EMAIL = 'yohannesb139@gmail.com';
const ADMIN_USERNAME = 'johnadmin';
const ADMIN_PASSWORD = '3141Ybe#';

async function ensureAdmin() {
  try {
    // Ensure users table exists
    await db.query(`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'admin'
    );`);

    // Check if admin user exists
    const res = await db.query('SELECT * FROM users WHERE email = $1', [ADMIN_EMAIL]);
    if (res.rows.length > 0) {
      console.log('Admin user already exists:', res.rows[0].email);
      process.exit(0);
    }

    // Insert admin user
    const hashed = helpers.hashPassword(ADMIN_PASSWORD);
    const insert = await db.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [ADMIN_USERNAME, ADMIN_EMAIL, hashed, 'admin']
    );

    console.log('Admin user created:', insert.rows[0].email);
    process.exit(0);
  } catch (err) {
    console.error('Error ensuring admin:', err.message);
    process.exit(1);
  }
}

ensureAdmin();
