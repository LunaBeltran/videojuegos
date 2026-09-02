import React from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, navigateTo }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo" onClick={() => navigateTo('home')}>
          <span className="logo-icon">🎮</span>
          <span className="logo-text">Game<span className="logo-highlight">Vault</span></span>
        </div>

        <ul className="navbar-links">
          <li className={currentPage === 'home' ? 'active' : ''}>
            <button onClick={() => navigateTo('home')}>Inicio</button>
          </li>
          <li className={currentPage === 'games' ? 'active' : ''}>
            <button onClick={() => navigateTo('games')}>Videojuegos</button>
          </li>
          <li>
            <button onClick={() => alert('Sección de géneros en mantenimiento.')}>Géneros</button>
          </li>
          <li>
            <button onClick={() => alert('GameVault v1.0 - Entorno Académico de Ciberseguridad')}>Acerca de</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


