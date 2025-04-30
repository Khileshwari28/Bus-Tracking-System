import { useLocation, useNavigate } from "react-router-dom";
import Map from "./Map";
import { useEffect, useState } from "react";

export default function MapPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mapProps, setMapProps] = useState({
    searchMode: '',
    searchId: '',
    radius: 1.0
  });

  useEffect(() => {
    if (location.state) {
      setMapProps({
        searchMode: location.state.mode || '',
        searchId: location.state.id || '',
        radius: location.state.radius || 1.0
      });
    }
  }, [location.state]);

  return (
    <div className="h-screen w-full relative">
      <Map 
        searchMode={mapProps.searchMode} 
        searchId={mapProps.searchId} 
        radius={mapProps.radius} 
      />
      
      
      <button 
        onClick={() => navigate('/search')}
        className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded z-[1000]"
      >
        Back to Search
      </button>
    </div>
  );
}