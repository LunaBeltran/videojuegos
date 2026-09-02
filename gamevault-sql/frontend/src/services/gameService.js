const API_URL = 'http://localhost:5000/api/games';

export const fetchAllGames = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) throw new Error('Error al conectar con la API');
    return await response.json();
  } catch (error) {
    console.error('gameService.fetchAllGames error:', error);
    throw error;
  }
};

export const searchGamesApi = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Ha ocurrido un error al realizar la búsqueda.');
    }
    return await response.json();
  } catch (error) {
    console.error('gameService.searchGamesApi error:', error);
    throw error;
  }
};

export const fetchGameById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('No se pudo encontrar el videojuego');
    return await response.json();
  } catch (error) {
    console.error('gameService.fetchGameById error:', error);
    throw error;
  }
};


