import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import { Navigate } from "react-router-dom";
import { BrowserRouter, useState, useEffect } from "react";
import MapPage from "./components/MapPage";
import {  Route, Routes } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  // Listen for token changes
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };
    
    // Check on initial load
    checkAuth();
    
    // Listen for storage events (from other tabs)
    window.addEventListener('storage', checkAuth);
    
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return isAuthenticated ? children: <Navigate to="/" />;

};

function App() {
  return (
    <>
      {/* <div >
        <NavBar />
        <Footer />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/map" element = {<MapPage />}/>
      </Routes>
    </>
  );
}

export default App;
