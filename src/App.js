import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";
import Investment from "./components/investment.js"; // Verifica el nombre del archivo
import Attributes from "./components/attributes.js";
import Sidebar from "./components/sidebar.js";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // <- ❌ Puede causar problemas aquí

  useEffect(() => {
    const storedSession = localStorage.getItem("isLoggedIn");
    if (storedSession === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard"); // <- ❌ Error si está fuera de Router
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="App">
      <div className="d-flex">
        {isLoggedIn && <Sidebar onLogout={handleLogout} />}
      </div>

      <main className="main-content container">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
          <Route path="/investment" element={isLoggedIn ? <Investment /> : <Login onLogin={handleLogin} />} />
          <Route path="/attributes" element={isLoggedIn ? <Attributes /> : <Login onLogin={handleLogin} />} />
          <Route path="*" element={<Login onLogin={handleLogin} />} /> {/* <- Rutas no encontradas */}
        </Routes>
      </main>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
