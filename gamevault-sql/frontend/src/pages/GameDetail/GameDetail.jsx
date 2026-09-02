import React, { useState, useEffect } from 'react';
import { fetchGameById } from '../../services/gameService';
import './GameDetail.css';

const GameDetail = ({ gameId, navigateTo }) => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gameId) loadGame();
  }, [gameId]);

  const loadGame = async () => {
    try {
      const res = await fetchGameById(gameId);
      if (res.success) setGame(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="container loading-spinner">Cargando detalles...</div>;
  if (!game) return <div className="container error-message">No se encontró el juego seleccionado.</div>;

  return (
    <div className="game-detail-page container">
      <button className="back-button" onClick={() => navigateTo('home')}>
        ← Volver al inicio
      </button>
      
      <div className="detail-card">
        <div className="detail-image-container">
          <img src={game.image} alt={game.title} className="detail-image" />
        </div>
        <div className="detail-info">
          <div className="detail-badges">
            <span className="badge">{game.genre}</span>
            <span className="detail-rating">⭐ {game.rating}</span>
          </div>
          <h1 className="detail-title">{game.title}</h1>
          <p className="detail-description">{game.description}</p>
          
          <div className="detail-specs">
            <div className="spec-item">
              <span className="spec-label">Desarrollador:</span>
              <span className="spec-value">{game.developer}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Plataforma:</span>
              <span className="spec-value">{game.platform}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Año de Lanzamiento:</span>
              <span className="spec-value">{game.release_year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;


