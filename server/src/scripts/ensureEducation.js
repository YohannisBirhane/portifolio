const db = require('../config/db');

async function ensureEducationTable() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS education (
      id SERIAL PRIMARY KEY,
      institution VARCHAR(200) NOT NULL,
      department VARCHAR(200) NOT NULL,
      year_level VARCHAR(100) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

async function ensureEducationSeed() {
  const institution = 'Debre Berhan University';
  const department = 'Software Engineering';
  const year_level = '3rd Year';
  const description = 'Student portfolio education entry for Yohannis Birhane.';

  const existing = await db.query(
    'SELECT id FROM education WHERE institution = $1 AND department = $2 AND year_level = $3 LIMIT 1',
    [institution, department, year_level]
  );

  if (existing.rows.length === 0) {
    await db.query(
      'INSERT INTO education (institution, department, year_level, description) VALUES ($1, $2, $3, $4)',
      [institution, department, year_level, description]
    );
    console.log('Education entry created for Debre Berhan University');
  } else {
    console.log('Education entry already exists');
  }
}

async function main() {
  try {
    await ensureEducationTable();
    await ensureEducationSeed();
  } catch (error) {
    console.error('Failed to ensure education data:', error.message);
    process.exitCode = 1;
  } finally {
    await db.pool.end();
  }
}

main();