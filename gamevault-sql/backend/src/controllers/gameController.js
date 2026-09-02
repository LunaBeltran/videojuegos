const vulnerableService = require('../services/gameService.vulnerable');
const secureService = require('../services/gameService.secure');

/**
 * Selecciona la implementación según la variable de entorno MODE
 */
const getService = () => {
  const mode = (process.env.MODE || 'vulnerable').toLowerCase();
  return mode === 'secure' ? secureService : vulnerableService;
};

exports.searchGames = async (req, res) => {
  try {
    const searchQuery = req.query.q || '';
    const service = getService();
    const games = await service.searchGames(searchQuery);

    res.json({
      success: true,
      mode: process.env.MODE || 'vulnerable',
      count: games.length,
      data: games
    });
  } catch (error) {
    console.error('Error en controller.searchGames:', error.message);
    // Respuesta genérica y amigable sin exponer información sensible ni detalles internos
    res.status(500).json({
      success: false,
      message: 'Ha ocurrido un error al realizar la búsqueda en el sistema.'
    });
  }
};

exports.getAllGames = async (req, res) => {
  try {
    const service = getService();
    const games = await service.getAllGames();
    res.json({ success: true, data: games });
  } catch (error) {
    console.error('Error en controller.getAllGames:', error.message);
    res.status(500).json({ success: false, message: 'Error al obtener la lista de videojuegos.' });
  }
};

exports.getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = getService();
    const game = await service.getGameById(id);

    if (!game) {
      return res.status(404).json({ success: false, message: 'Videojuego no encontrado.' });
    }

    res.json({ success: true, data: game });
  } catch (error) {
    console.error('Error en controller.getGameById:', error.message);
    res.status(500).json({ success: false, message: 'Error al obtener los detalles del videojuego.' });
  }
};


