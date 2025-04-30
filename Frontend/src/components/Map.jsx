import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

const busIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.freepik.com/512/11529/11529542.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

export default function Map({ searchMode, searchId, radius = 1.0 }) {
  const mapRef = useRef(null);
  const markerLayerRef = useRef(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  const allBuses = [
    { id: 1, lat: 23.27614, lng: 77.341973, name: "Bus 1" },
    { id: 2, lat: 23.28614, lng: 77.351973, name: "Bus 2" },
    { id: 3, lat: 23.28583, lng: 77.35554, name: "Bus 3" },
    { id: 4, lat: 23.25191, lng: 77.46682, name: "Bus 4" },
    { id: 5, lat: 23.26512, lng: 77.47131, name: "Bus 5" },
  ];
  

   const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const getVisibleBuses = () => {
    if (!searchMode) return [];
  
    if (searchMode === "single") {
      return allBuses.filter(bus => bus.id === parseInt(searchId));  // fix: parseInt
    }
  
    if (searchMode === "nearby" && mapRef.current) {
      const center = mapRef.current.getCenter();
      return allBuses.filter(bus => {
        const distance = calculateDistance(center.lat, center.lng, bus.lat, bus.lng);
        return distance <= radius;
      });
    }
  
    if (searchMode === "all") {
      return allBuses;
    }
  
    return [];
  };
  


  useEffect(() => {
    const mapContainer = document.getElementById('leaflet-map');
    
    // Reset map if already initialized
    if (mapContainer && mapContainer._leaflet_id) {
      mapContainer._leaflet_id = null;
    }
  
    if (!mapRef.current) {
      const map = L.map("leaflet-map").setView([23.27614, 77.341973], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
  
      mapRef.current = map;
      markerLayerRef.current = L.layerGroup().addTo(map);
      setMapInitialized(true);
    }
  }, []);
  



  useEffect(() => {
    if (!mapInitialized || !markerLayerRef.current) return;
    const visibleBuses = getVisibleBuses();
    console.log("Visible buses:", visibleBuses); // check this
    if (!Array.isArray(visibleBuses)) return;    // safeguard
    
    markerLayerRef.current.clearLayers();

    visibleBuses.forEach(bus => {
      L.marker([bus.lat, bus.lng], { icon: busIcon })
        .addTo(markerLayerRef.current)
        .bindPopup(`<b>${bus.name}</b><br>ID: ${bus.id}`);
    });

    if (visibleBuses.length === 1) {
      mapRef.current.setView([visibleBuses[0].lat, visibleBuses[0].lng], 15);
    } else if (visibleBuses.length > 1) {
      const bounds = L.latLngBounds(visibleBuses.map(b => [b.lat, b.lng]));
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [searchMode, searchId, radius, mapInitialized]);

  return <div id="leaflet-map" className="w-full h-screen" />;
}