

import React from 'react';
import './../style.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">OLX</div>
        <nav>
          <ul>
            <li><a href="#">All Categories</a></li>
            <li><a href="#">Mobile Phones</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Motorcycles</a></li>
            <li><a href="#">Houses</a></li>
            {/* Add more categories as needed */}
          </ul>
        </nav>
        <div className="user-actions">
          <button>Login</button>
          <button className="sell-button">Sell</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
