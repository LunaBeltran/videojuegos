const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const dbPool = require('../database/connection');

dotenv.config();

/**
 * IMPLEMENTACIÓN DELIBERADAMENTE VULNERABLE
 * SOLO PARA USO EN LABORATORIO LOCAL ACADÉMICO.
 *
 * Explicación del fallo:
 * La variable `searchQuery` provista por el usuario se concatena directamente
 * dentro de la cadena SQL sin ninguna sanitización ni parametrización.
 */
class GameServiceVulnerable {
  async searchGames(searchQuery) {
    const sqlQuery = `SELECT id, title, description, genre, platform, release_year, developer, rating, image FROM games WHERE title LIKE '${searchQuery}'`;

    console.log('\n================ [LAB VULNERABLE] ================');
    console.log('[+] Consulta SQL Generada Directamente:');
    console.log(sqlQuery);
    console.log('==================================================\n');

    // Conexión dedicada con multipleStatements explícito,
    // independiente del pool, para garantizar que funcione.
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'gamevault',
      port: Number(process.env.DB_PORT) || 3306,
      multipleStatements: true
    });

    try {
      const [rawResult] = await conn.query(sqlQuery);

      if (!rawResult) return [];
      // Múltiples sentencias → rawResult es array de resultados por sentencia
      if (Array.isArray(rawResult) && Array.isArray(rawResult[0])) {
        const filas = rawResult.find(
          (r) => Array.isArray(r) && r.length > 0 && r[0].id !== undefined
        );
        return filas || [];
      }
      // SELECT único → array de filas
      if (Array.isArray(rawResult)) return rawResult;
      // UPDATE/DELETE/INSERT → sin filas
      return [];
    } finally {
      await conn.end();
    }
  }

  async getAllGames() {
    const [rows] = await dbPool.query('SELECT * FROM games ORDER BY id DESC');
    return rows;
  }

  async getGameById(id) {
    const [rows] = await dbPool.execute('SELECT * FROM games WHERE id = ?', [id]);
    return rows[0] || null;
  }
}

module.exports = new GameServiceVulnerable();