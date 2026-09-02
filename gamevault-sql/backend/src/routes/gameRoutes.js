const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Rutas de la API de videojuegos
router.get('/search', gameController.searchGames);
router.get('/', gameController.getAllGames);
router.get('/:id', gameController.getGameById);

module.exports = router;


