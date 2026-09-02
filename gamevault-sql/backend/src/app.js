const express = require('express');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Información sobre el modo actual
app.use((req, res, next) => {
  const currentMode = (process.env.MODE || 'vulnerable').toUpperCase();
  res.setHeader('X-Lab-Mode', currentMode);
  next();
});

// Rutas principales
app.use('/api/games', gameRoutes);

// Manejador de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Recurso no encontrado.' });
});

module.exports = app;


