declare module 'heatmap.js/plugins/leaflet-heatmap' {
    import * as L from 'leaflet';
    
    export default class HeatmapOverlay extends L.Layer {
      constructor(cfg: any);
      setData(data: any): void;
    }
  }
  