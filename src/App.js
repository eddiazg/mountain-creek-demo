import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";
import "./App.css"; // Import the updated CSS file

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <h1 className="title">Mountain Creek Advisors</h1>
        </div>
      </header>

      {/* Routes */}
      <main className="main-content container">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
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
