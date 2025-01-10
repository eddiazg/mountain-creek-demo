import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";
import Investment from "./components/invesment.js";
import Attributes from "./components/attributes.js";
import Sidebar from "./components/sidebar.js";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Verifica el estado de sesión al cargar la app
  useEffect(() => {
    const storedSession = localStorage.getItem("isLoggedIn");
    if (storedSession === "true") {
      setIsLoggedIn(true);
    }
  }, []); // Solo se ejecuta al montar el componente

  // Actualiza localStorage cuando cambia el estado
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
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
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/investment"
            element={isLoggedIn ? <Investment /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/attributes"
            element={isLoggedIn ? <Attributes /> : <Login onLogin={handleLogin} />}
          />
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