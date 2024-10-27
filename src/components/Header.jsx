import React from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <img
          src="./src/assets/bklogo.jpg"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          alt=""
        />
        <div className="logo">BK PROPERTY</div>
      </div>
      
      <div className="header-customize-wrapper header-customize-right">
        <div className="header-customize-item item-info item-email">
          <a href="mailto:bkproperties3@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          {/* <span className="label">Email Us</span> */}
          <a href="mailto:bkproperties3@gmail.com" className="info">
            bkproperties3@gmail.com
          </a>
        </div>
        
        <div className="header-customize-item item-info item-phone">
          <a href="tel:+918826560737">
            <i className="fas fa-phone"></i>
          </a>
          {/* <span className="label">Call Us</span> */}
          <a href="tel:+918826560737" className="info">
            +91 8826560737
          </a>
        </div>
        
        <div className="header-customize-item item-shopping-cart fold-out hover woocommerce">
          <div className="widget_shopping_cart_content">
            <div className="shopping-cart-icon"></div>
          </div>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li>
            <button className="nav-button" onClick={() => navigate("/")}>
              Home
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => navigate("/Properties")}>
              Properties
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => navigate("/Agents")}>
              Agents
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => navigate("/About")}>
              Discover
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => navigate("/ContactUs")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
