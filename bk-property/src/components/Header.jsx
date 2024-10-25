// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div><img src="./src/assets/bklogo.jpg" style={{ width: '50px', height: '50px', marginRight: '10px' }} alt="" /> </div>
      <div className="logo">BK PROPERTY</div>
      <nav className="nav-menu">
        <ul>
          <li className="active">Home</li>
          <li>Properties</li>
          <li>Agents</li>
          <li>About</li>
          
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
