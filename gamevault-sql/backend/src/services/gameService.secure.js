const db = require('../database/connection');

/**
 * IMPLEMENTACIÓN SEGURA Y CORREGIDA
 * Utiliza Prepared Statements (consultas parametrizadas).
 * 
 * Explicación de la solución:
 * Los parámetros pasados en el array `[%${searchQuery}%]` son tratados como
 * valores literales puros por el motor de la base de datos, imposibilitando 
 * que un atacante altere la sintaxis o estructura de la consulta SQL.
 */
class GameServiceSecure {
  async searchGames(searchQuery) {
    // CONSULTA SEGURA USANDO CONSULTA PARAMETRIZADA
    const sqlQuery = `SELECT id, title, description, genre, platform, release_year, developer, rating, image FROM games WHERE title LIKE ?`;
    const searchParam = `%${searchQuery}%`;

    console.log('\n================ [LAB SEGURO] ================');
    console.log('[+] Consulta Parametrizada Segura:');
    console.log(sqlQuery);
    console.log('[+] Parámetro Asignado:', searchParam);
    console.log('==============================================\n');

    const [rows] = await db.execute(sqlQuery, [searchParam]);
    return rows;
  }

  async getAllGames() {
    const [rows] = await db.execute('SELECT * FROM games ORDER BY id DESC');
    return rows;
  }

  async getGameById(id) {
    const [rows] = await db.execute('SELECT * FROM games WHERE id = ?', [id]);
    return rows[0] || null;
  }
}

module.exports = new GameServiceSecure();


