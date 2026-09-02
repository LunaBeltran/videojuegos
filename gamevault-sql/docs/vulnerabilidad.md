# 🛡️ Documentación de Vulnerabilidad: SQL Injection (CWE-89)

## 1. Concepto
La Inyección SQL (SQL Injection) ocurre cuando una aplicación web toma entradas de datos proporcionadas por el usuario y las concatena directamente dentro de una sentencia SQL sin la debida validación, sanitización o parametrización.

## 2. Origen del Fallo en GameVault
En GameVault, la vulnerabilidad radica exclusivamente en la función de búsqueda (`gameService.vulnerable.js`).

### Código Vulnerable:
```javascript
const sqlQuery = `SELECT id, title, description, genre, platform, release_year, developer, rating, image FROM games WHERE title LIKE '%${searchQuery}%'`;


