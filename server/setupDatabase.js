const { Client } = require('pg');
require('dotenv').config();

async function createDatabaseAndTable() {
  const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  };

  const dbName = process.env.DB_NAME;

  console.log('Connecting to PostgreSQL to check database ' + dbName + '...');
  const initialClient = new Client({ ...dbConfig, database: 'postgres' });

  try {
    await initialClient.connect();
    const checkDbQuery = await initialClient.query(
      'SELECT datname FROM pg_catalog.pg_database WHERE datname = $1',
      [dbName]
    );

    if (checkDbQuery.rowCount === 0) {
      console.log('Database ' + dbName + ' not found. Creating it now...');
      await initialClient.query('CREATE DATABASE \x22' + dbName + '\x22');
      console.log('Database ' + dbName + ' created successfully!');
    } else {
      console.log('Database ' + dbName + ' already exists. Skipping creation.');
    }
  } catch (error) {
    if (error.code === '28P01') {
      console.error('\n? ERROR: Authentication failed. Please check your DB_PASSWORD in server/.env\n');
    } else {
      console.error('? Error during database creation:', error.message);
    }
    process.exit(1);
  } finally {
    await initialClient.end();
  }

  console.log('\nConnecting to ' + dbName + ' to create tables...');
  const targetClient = new Client({ ...dbConfig, database: dbName });

  try {
    await targetClient.connect();
    
    const createTableQuery = 'CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(150) NOT NULL, message TEXT NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);';
    
    await targetClient.query(createTableQuery);
    console.log('? messages table ensured successfully! Your database is completely ready.');
  } catch (error) {
    console.error('? Error creating tables:', error.message);
    process.exit(1);
  } finally {
    await targetClient.end();
  }
}

createDatabaseAndTable();

