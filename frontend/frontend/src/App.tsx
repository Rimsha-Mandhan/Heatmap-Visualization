// src/App.tsx
import React, { useState, useEffect } from 'react';
import Heatmap from './components/Heatmap';
import SearchBar from './components/SearchBar';
import './App.css';
import axios from 'axios';

function App() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([37.7749, -122.4194]); // Default center on San Francisco
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5002/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (lat: number, lng: number) => {
    setMapCenter([lat, lng]);
  };

  return (
    <div className="App">
      <div className="map-container">
        <SearchBar onSearch={handleSearch} />
        <Heatmap mapCenter={mapCenter} data={data} /> {/* Pass the mapCenter and data props */}
      </div>
    </div>
  );
}

export default App;
