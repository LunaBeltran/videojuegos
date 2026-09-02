import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import GameDetail from './pages/GameDetail/GameDetail';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedGameId, setSelectedGameId] = useState(null);

  const navigateTo = (page, gameId = null) => {
    setCurrentPage(page);
    setSelectedGameId(gameId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      
      <main className="main-content">
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        {currentPage === 'games' && <Games navigateTo={navigateTo} />}
        {currentPage === 'detail' && (
          <GameDetail gameId={selectedGameId} navigateTo={navigateTo} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;


