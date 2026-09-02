### Archivo: `README.md`
```markdown
# 🎮 GameVault — Laboratorio de Ciberseguridad SQL Injection

Proyecto web para práctica universitaria de ciberseguridad sobre la demostración y mitigación de la vulnerabilidad SQL Injection (SQLi) en un entorno local y controlado.

> ⚠️ **ADVERTENCIA ACADÉMICA:** Este proyecto contiene código deliberadamente vulnerable con fines educativos. Debe ejecutarse **únicamente en localhost** utilizando datos ficticios.

## 🛠️ Tecnologías
- **Frontend:** React + Vite + JavaScript + CSS3
- **Backend:** Node.js + Express
- **Base de Datos:** MySQL
- **Comunicación:** API REST

## 🚀 Instalación y Configuración

### 1. Base de Datos
1. Inicie su servicio MySQL (por ejemplo, mediante XAMPP, MySQL Workbench o servicio de Windows).
2. Ejecute el archivo `database/schema.sql` para crear la estructura.
3. Ejecute el archivo `database/seed.sql` para poblar la base de datos.

### 2. Backend
```bash
cd backend
npm install
cp .env.example .env


Configure sus credenciales de MySQL en el archivo .env:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=su_contraseña
DB_NAME=gamevault
DB_PORT=3306
PORT=5000
MODE=vulnerable


Iniciar servidor:
npm run dev


3. Frontend
cd frontend
npm install
npm run dev


Abra el navegador en http://localhost:3000.
---

## PARTE 6 — Instalación Paso a Paso en Windows + VS Code

1. **Abrir la terminal en Visual Studio Code:**
   Abre VS Code y presiona `Ctrl + ~` para desplegar la terminal integrada.

2. **Configurar la Base de Datos MySQL:**
   - Abre tu gestor preferido (MySQL Workbench, phpMyAdmin o terminal de MySQL).
   - Copia y ejecuta el contenido de `database/schema.sql`.
   - Copia y ejecuta el contenido de `database/seed.sql`.

3. **Iniciar el Backend:**
   - En la terminal de VS Code:
     
```cmd
     cd backend
     npm install
     


Crea el archivo .env copiando el contenido de .env.example y configurando tu contraseña de MySQL.
Ejecuta:
     npm run dev
     


Verás el mensaje: 🎮 GameVault Backend iniciado en el puerto 5000.
Iniciar el Frontend:
Abre una segunda pestaña de terminal en VS Code (Ctrl + Shift + 5 o botón +).
Ejecuta:
     cd frontend
     npm install
     npm run dev
     


Accede a http://localhost:3000 en tu navegador.
