// src/components/OlxApp.js

import React from 'react';
// import './OlxApp.css'; // Import your CSS file

const OlxApp = () => {
  return (
    <div className="main-container">
      <div className="navbar">
        <img src="olx_logo (1).png" alt="" />
        <div>
          <div className="select">
            <div id="country">
              <p id="text">select counry</p>
              <i className="fa-solid fa-chevron-down" id="icon"></i>
            </div>
            <ul className="option-box" id="list">
              {/* ... (list of countries) */}
            </ul>
          </div>
        </div>
      </div>

      <div className="search">
        <input type="search" placeholder="Find Cars, mobile, bikes and More" />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <a className="login" onClick={() => window.location.href = 'index2.html'} id="login">
        Login
      </a>

      <div className="sell-image">
        <img src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" />
        <span id="sell" onClick={() => window.open('sell.html')}> + SELL</span>
      </div>

      <div className="items">
        {/* ... (list of items) */}
      </div>

      <div className="header-image">
        <img src="header-image.jpeg" alt="" />
      </div>

      <div id="ads-body">
        {/* ... (ads content) */}
      </div>

      {/* ... (rest of your content) */}

    </div>
  );
};

export default OlxApp;
