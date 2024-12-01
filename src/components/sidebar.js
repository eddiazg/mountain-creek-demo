import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/sidebar.css";
import logo from '../commons/image.png'; // Asegúrate de tener la imagen en public

const Sidebar = () => {
  return (
<div className="sidebar d-flex flex-column">
    <div className="logo mb-4 text-center">
        <img src={logo} alt="Logo" className="logo-img" />
    </div>
    <Nav defaultActiveKey="#home" className="flex-column">
    <Nav.Link href="/dashboard" className="menu-item">
        <span className="icon">🗒️</span>
        <span className="text">Dashboard</span>
    </Nav.Link>
    <Nav.Link href="/investment" className="menu-item active">
        <span className="icon">📊</span>
        <span className="text">Investment</span>
    </Nav.Link>
    <Nav.Link href="/" className="menu-item">
        <span className="icon">🛫</span>
        <span className="text">Logout</span>
    </Nav.Link>
    </Nav>
</div>
  );
};
 
export default Sidebar;