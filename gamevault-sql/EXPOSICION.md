# GameVault — Guía de Exposición: SQL Injection Lab

## Base de Datos

### Schema (`database/schema.sql`)

Crea la base de datos `gamevault` con dos tablas:

**`games`** — tabla pública con los videojuegos:
| Campo | Tipo | Descripción |
|---|---|---|
| id | INT AUTO_INCREMENT | Clave primaria |
| title | VARCHAR(150) | Nombre del juego |
| description | TEXT | Descripción |
| genre | VARCHAR(50) | Género |
| platform | VARCHAR(100) | Plataformas disponibles |
| release_year | INT | Año de lanzamiento |
| developer | VARCHAR(100) | Desarrollador |
| rating | VARCHAR(10) | Puntuación |
| image | VARCHAR(255) | URL de la portada |

**`admin_notes`** — tabla confidencial ficticia (objetivo de la inyección):
| Campo | Tipo | Descripción |
|---|---|---|
| id | INT AUTO_INCREMENT | Clave primaria |
| note | VARCHAR(255) | Nota sensible simulada |
| internal_code | VARCHAR(100) | Código interno confidencial |

### Seed (`database/seed.sql`)

Pobla ambas tablas:
- 15 videojuegos con portadas reales desde Steam CDN y Riot Games.
- 4 registros simulados en `admin_notes` con datos "confidenciales" ficticios (credenciales, tokens, IPs) que sirven como objetivo de demostración de fuga de información.

---

## El Problema: SQL Injection

La vulnerabilidad ocurre cuando el input del usuario se **concatena directamente** dentro de una consulta SQL, permitiendo que un atacante altere la lógica de la query.

El laboratorio expone esto a través del buscador de la app. El endpoint `/api/games/search?q=` recibe el término de búsqueda y, en modo vulnerable, lo inserta sin ningún filtro.

---

## Modo Vulnerable (`gameService.vulnerable.js`)

Usa `db.query()` que acepta múltiples sentencias y concatenación directa:

```js
const sqlQuery = `SELECT id, title, ... FROM games WHERE title LIKE '%${searchQuery}%'`;
const [rows] = await db.query(sqlQuery);
```

El input del usuario termina siendo parte del código SQL. Si alguien escribe `' OR 1=1 --`, la query se convierte en:

```sql
SELECT ... FROM games WHERE title LIKE '%' OR 1=1 --%'
-- Devuelve TODOS los registros sin importar el título
```

---

## Modo Seguro (`gameService.secure.js`)

Usa `db.execute()` con **prepared statements** (consultas parametrizadas):

```js
const sqlQuery = `SELECT id, title, ... FROM games WHERE title LIKE ?`;
const [rows] = await db.execute(sqlQuery, [`%${searchQuery}%`]);
```

El `?` es un placeholder. El motor de base de datos trata el valor como dato puro, nunca como código. Cualquier intento de inyección es ignorado y buscado textualmente.

---

## Cambiar entre modos

En `backend/.env`:
```
MODE=vulnerable   # activa el servicio vulnerable
MODE=secure       # activa el servicio seguro
```

---

## Consultas de Demostración (modo vulnerable)

Escribir en el buscador de la app:

### Ver todos los juegos (bypass de filtro)
```
' OR '1'='1
```

### Leer la tabla confidencial (UNION SELECT)
```
%' UNION SELECT id, note, internal_code, note, note, note, note, note, note FROM admin_notes -- 
```
Esto devuelve el contenido de `admin_notes` mezclado con los resultados normales.

### Editar un registro (UPDATE)
```
%' WHERE 1=0; UPDATE games SET title='HACKEADO' WHERE id=1; -- 
```

### Eliminar un juego (DELETE)
```
%' WHERE 1=0; DELETE FROM games WHERE id=1; -- 
```

### Eliminar todos los juegos
```
%' WHERE 1=0; DELETE FROM games WHERE 1=1; -- 
```

> En modo seguro, todas estas consultas simplemente buscan el texto literalmente y no devuelven ni modifican nada.

---

## Agregar un juego (SQL directo en Workbench o terminal)

```sql
INSERT INTO games (title, description, genre, platform, release_year, developer, rating, image)
VALUES (
  'Nombre del Juego',
  'Descripción breve del juego.',
  'Género',
  'PC, PlayStation, Xbox',
  2024,
  'Nombre del Estudio',
  '4.5',
  'https://url-de-la-imagen.jpg'
);
```

---

## Flujo para la Exposición

1. Mostrar la app funcionando normalmente — búsqueda de un juego real.
2. Cambiar `MODE=vulnerable` en el `.env` y reiniciar el backend.
3. Demostrar el UNION SELECT para filtrar `admin_notes` desde el buscador.
4. Mostrar en consola del backend la query generada (el servidor la imprime).
5. Cambiar `MODE=secure` y repetir el mismo input — mostrar que no tiene efecto.
6. Explicar la diferencia: concatenación vs. prepared statements.

---

## Preguntas de Estudio

### ¿Cómo funciona la base de datos del proyecto?

La base de datos se llama `gamevault` y está construida en MySQL con codificación UTF-8. Tiene dos tablas: `games`, que es la tabla pública que almacena los 15 videojuegos con todos sus datos como título, descripción, género, plataforma y la URL de la imagen, y `admin_notes`, que es una tabla confidencial ficticia que simula información sensible como contraseñas, tokens y direcciones IP internas. Esta segunda tabla no tiene ningún endpoint propio en la API, es decir, no existe una ruta legítima para acceder a ella, lo que la convierte en el objetivo ideal para demostrar una fuga de datos mediante inyección SQL. El schema define la estructura y el seed la puebla con datos listos para usar.

### ¿Cuál es el problema que resuelve o demuestra el laboratorio?

El laboratorio demuestra una vulnerabilidad conocida como SQL Injection, que ocurre cuando una aplicación construye sus consultas SQL pegando directamente el input del usuario dentro del código SQL, sin ningún tipo de validación o separación. Esto permite que un atacante escriba fragmentos de SQL en campos como el buscador para alterar el comportamiento de la consulta, pudiendo leer tablas que no debería ver, modificar registros, o borrar datos. El proyecto lo ilustra de forma controlada y académica con dos modos de operación: uno vulnerable que reproduce el fallo real, y uno seguro que aplica la corrección correcta, permitiendo comparar el impacto de cada enfoque en el mismo entorno.

### ¿Cuál es la solución implementada?

La solución es el uso de prepared statements, también llamados consultas parametrizadas. En lugar de armar la query como un string con el input pegado adentro, se escribe la consulta con un marcador de posición (`?`) y el valor del usuario se pasa por separado como parámetro. El motor de base de datos recibe ambas cosas de forma independiente y trata el parámetro siempre como un valor de dato, nunca como código ejecutable. Esto hace que cualquier intento de inyección sea completamente ignorado, porque los caracteres especiales como comillas, guiones o punto y coma pierden su significado SQL y se buscan de forma literal. En el proyecto esto se implementa usando `db.execute()` con el array de parámetros en el servicio seguro, en contraste con el `db.query()` con concatenación directa del servicio vulnerable.
