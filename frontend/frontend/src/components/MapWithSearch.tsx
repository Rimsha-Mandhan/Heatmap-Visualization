
import React, { useState } from 'react';
import Heatmap from './Heatmap';
import SearchBar from './SearchBar';

const MapWithSearch: React.FC = () => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([37.7749, -122.4194]); // Default location
  const [heatmapData, setHeatmapData] = useState<any[]>([]); // Replace with your heatmap data

  const handleSearch = (lat: number, lng: number) => {
    setMapCenter([lat, lng]);

    
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Heatmap mapCenter={mapCenter} data={heatmapData} />
    </div>
  );
};

export default MapWithSearch;
