import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";
import Investment from "./components/invesment.js";
import Attributes from "./components/attributes.js";
import Sidebar from "./components/sidebar.js";
import "./App.css"; // Import the updated CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faChartPie, faCogs, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Custom hook for navigation
  const navigate = useNavigate();

  // Handle login process and navigate to dashboard
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  return (
    <div className="App">
      <div className="d-flex">
        {/* Sidebar */}
        {isLoggedIn && <Sidebar />}
      </div>
      
      {/* Routes */}
      <main className="main-content container">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/investment"
            element={<Investment/>}
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
