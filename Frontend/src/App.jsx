import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Search from "./components/Search";
import MapPage from "./components/MapPage";
import AdminDashboard from "./admin/AdminDashboard";

/* ---------- Private Route ---------- */
const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

/* ---------- App ---------- */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/search"
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      />

      <Route
        path="/map"
        element={
          <PrivateRoute>
            <MapPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
