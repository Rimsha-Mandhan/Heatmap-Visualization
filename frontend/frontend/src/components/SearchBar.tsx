// src/components/SearchBar.tsx
import React, { useState } from 'react';
import axios from 'axios';
import './searchbar.css';

const SearchBar: React.FC<{ onSearch: (lat: number, lng: number) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Geocoding API call
    axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0]; // Get the first result's lat/lon
          onSearch(parseFloat(lat), parseFloat(lon)); // Update the map's center
        } else {
          console.error('No results found for the query.');
        }
      })
      .catch((error) => {
        console.error('Error fetching location data:', error);
      });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city or location"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
