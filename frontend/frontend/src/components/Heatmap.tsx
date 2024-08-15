import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap';
import axios from 'axios';

const HeatmapLayer: React.FC<{ data: any[] }> = ({ data }) => {
  const map = useMap(); 
  useEffect(() => {
    if (data.length > 0) {
      const cfg = {
        radius: 40,
        maxOpacity: 0.8,
        scaleRadius: true,
        useLocalExtrema: false,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'value'
      };

      const heatmapLayerInstance = new HeatmapOverlay(cfg).addTo(map);
      heatmapLayerInstance.setData({
        max: 10,
        data: data.map(item => ({
          lat: item.lat,
          lng: item.lng,
          value: item.value
        }))
      });

      return () => {
        map.removeLayer(heatmapLayerInstance);
      };
    }
  }, [map, data]);

  return null;
};

const Heatmap: React.FC<{ mapCenter: [number, number], data: any[] }> = ({ mapCenter, data }) => {
  return (
    <MapContainer
      style={{ height: '500px', width: '100%' }}
      center={mapCenter}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <HeatmapLayer data={data} />
    </MapContainer>
  );
};

export default Heatmap;
