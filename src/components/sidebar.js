import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../styles/sidebar.css";
import logo from '../commons/image.png'; // Asegúrate de tener la imagen en public

const Sidebar = () => {
const location = useLocation(); // Get the current location
    return (
        <div className="sidebar d-flex flex-column">
            <div className="logo mb-4 text-center">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>
            <Nav className="flex-column">
                <Nav.Link
                href="/dashboard"
                className={`menu-item ${location.pathname === "/dashboard" ? "active" : ""}`}
                >
                <span className="icon">🗒️</span>
                <span className="text">Dashboard</span>
                </Nav.Link>
                <Nav.Link
                href="/investment"
                className={`menu-item ${location.pathname === "/investment" ? "active" : ""}`}
                >
                <span className="icon">📊</span>
                <span className="text">Investment</span>
                </Nav.Link>
                <Nav.Link
                href="/"
                className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
                >
                <span className="icon">🛫</span>
                <span className="text">Logout</span>
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
