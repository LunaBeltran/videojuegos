const db = require('../database/connection');

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
    // VULNERABLE - CONCATENACIÓN DIRECTA EN CONSULTA SQL
    const sqlQuery = `SELECT id, title, description, genre, platform, release_year, developer, rating, image FROM games WHERE title LIKE '%${searchQuery}%'`;
    
    console.log('\n================ [LAB VULNERABLE] ================');
    console.log('[+] Consulta SQL Generada Directamente:');
    console.log(sqlQuery);
    console.log('==================================================\n');

    // Exec realiza la ejecución directa de la consulta concatenada
    const [rows] = await db.query(sqlQuery);
    return rows;
  }

  async getAllGames() {
    const [rows] = await db.query('SELECT * FROM games ORDER BY id DESC');
    return rows;
  }

  async getGameById(id) {
    // Nota: Para este laboratorio el endpoint individual utiliza parametrización básica
    const [rows] = await db.execute('SELECT * FROM games WHERE id = ?', [id]);
    return rows[0] || null;
  }
}

module.exports = new GameServiceVulnerable();