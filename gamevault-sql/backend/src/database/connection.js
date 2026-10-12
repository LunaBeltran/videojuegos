const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'gamevault',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // NOTA ACADÉMICA: multipleStatements habilitado para demostrar
  // inyecciones con UPDATE/DELETE en modo vulnerable de laboratorio.
  // En producción esto NUNCA debe activarse.
  multipleStatements: true
});

module.exports = pool;


