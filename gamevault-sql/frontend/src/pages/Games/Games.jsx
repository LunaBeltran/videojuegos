import React, { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import { fetchAllGames } from '../../services/gameService';
import './Games.css';

const Games = ({ navigateTo }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      const res = await fetchAllGames();
      if (res.success) setGames(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="games-page container">
      <h1 className="page-title">Todos los Videojuegos</h1>
      {loading ? (
        <div className="loading-spinner">Cargando colección completa...</div>
      ) : (
        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onSelect={(id) => navigateTo('detail', id)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;


