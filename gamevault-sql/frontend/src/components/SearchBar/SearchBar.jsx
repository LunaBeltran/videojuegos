import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, initialValue = '' }) => {
  const [term, setTerm] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar videojuegos por título..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchBar;


