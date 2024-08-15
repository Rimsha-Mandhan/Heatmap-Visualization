declare module 'heatmap.js/plugins/leaflet-heatmap' {
    import { Layer } from 'leaflet';
  
    interface HeatmapOptions {
      radius?: number;
      maxOpacity?: number;
      scaleRadius?: boolean;
      useLocalExtrema?: boolean;
      latField?: string;
      lngField?: string;
      valueField?: string;
    }
  
    interface HeatmapDataPoint {
      lat: number;
      lng: number;
      value: number;
    }
  
    interface HeatmapData {
      max: number;
      data: HeatmapDataPoint[];
    }
  
    class HeatmapOverlay extends Layer {
      constructor(options: HeatmapOptions);
      setData(data: HeatmapData): void;
    }
  
    export default HeatmapOverlay;
  }
  