import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import GameCard from '../../components/GameCard/GameCard';
import { searchGamesApi, fetchAllGames } from '../../services/gameService';
import './Home.css';

const Home = ({ navigateTo }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentMode, setCurrentMode] = useState('');

  useEffect(() => {
    loadInitialGames();
  }, []);

  const loadInitialGames = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchAllGames();
      if (res.success) {
        setGames(res.data);
      }
    } catch (err) {
      setError('Ha ocurrido un error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const res = await searchGamesApi(searchTerm);
      if (res.success) {
        setGames(res.data);
        if (res.mode) setCurrentMode(res.mode);
      }
    } catch (err) {
      setError('Ha ocurrido un error al realizar la búsqueda.');
      setGames([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page container">
      <section className="hero">
        <h1 className="hero-title">DESCUBRE TU PRÓXIMO VIDEOJUEGO</h1>
        <p className="hero-subtitle">
          Explora nuestra colección de videojuegos y encuentra tu próxima aventura.
        </p>
        
        <div className="hero-search">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {currentMode && (
        <div className={`mode-banner ${currentMode === 'secure' ? 'secure' : ''}`}>
          Modo backend reportado: <strong>{currentMode.toUpperCase()}</strong>
        </div>
      )}

      <section className="results-section">
        <div className="results-header">
          <h2>Catálogo de Videojuegos</h2>
          <span className="results-count">{games.length} resultados</span>
        </div>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading-spinner">Cargando videojuegos...</div>
        ) : (
          <div className="games-grid">
            {games.length > 0 ? (
              games.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onSelect={(id) => navigateTo('detail', id)}
                />
              ))
            ) : (
              !error && <p className="no-results">No se encontraron videojuegos.</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;


