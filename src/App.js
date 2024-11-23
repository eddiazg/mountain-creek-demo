import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";
import Investment from "./components/invesment.js";
import "./App.css"; // Import the updated CSS file
import logo from '../src/commons/image.png'; // Asegúrate de tener la imagen en public
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
      {/* Header */}
      <header className="App-header">
        <div className="header-content">
          <img src={logo} alt="Mountain Creek Advisors Logo" className="logo" />
          <h1 className="title">Mountain Creek Advisors</h1>
        </div>
      </header>

      
      {/* Sidebar */}
      {isLoggedIn &&
        <div className="sidebar">
          <h2 className="sidebar-title">Menu</h2>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="/dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/investment">
                <FontAwesomeIcon icon={faChartPie} /> <span>Investment</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Reports</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faCogs} /> <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      }

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
