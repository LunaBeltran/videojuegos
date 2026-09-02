import React from 'react';
import './GameCard.css';

const GameCard = ({ game, onSelect }) => {
  return (
    <div className="game-card" onClick={() => onSelect(game.id)}>
      <div className="game-card-image-wrapper">
        <img src={game.image} alt={game.title} className="game-card-image" />
        <span className="game-card-rating">⭐ {game.rating}</span>
      </div>
      <div className="game-card-content">
        <div className="game-card-meta">
          <span className="badge">{game.genre}</span>
          <span className="game-year">{game.release_year}</span>
        </div>
        <h3 className="game-card-title">{game.title}</h3>
        <p className="game-card-description">{game.description}</p>
        <div className="game-card-footer">
          <span className="game-developer">💻 {game.developer}</span>
          <span className="game-platform">🎮 {game.platform}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
