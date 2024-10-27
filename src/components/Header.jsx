import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation and close the menu
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigating
  };

  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <img
          src="/bklogo.jpg"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          alt="Logo"
        />
        <div className="logo">BK PROPERTY</div>
      </div>
      
      <div className="header-customize-wrapper header-customize-right">
        <div className="header-customize-item item-info item-email">
          <a href="mailto:bkproperties3@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="mailto:bkproperties3@gmail.com" className="info">
            bkproperties3@gmail.com
          </a>
        </div>
        
        <div className="header-customize-item item-info item-phone">
          <a href="tel:+918826560737">
            <i className="fas fa-phone"></i>
          </a>
          <a href="tel:+918826560737" className="info">
            +91 8826560737
          </a>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <button className="nav-button" onClick={() => handleNavigation("/")}>
              Home
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => handleNavigation("/Properties")}>
              Properties
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => handleNavigation("/Agents")}>
              Clients
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => handleNavigation("/About")}>
              Discover
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => handleNavigation("/ContactUs")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
