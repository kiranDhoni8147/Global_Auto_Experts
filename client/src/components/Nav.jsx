import React, { useState } from "react";
import { FaPhone } from 'react-icons/fa';
import './Nav.css';

const Nav = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <a href="/" target="_self">
            <img src="" alt="Logo" className="navbar__logo" />
          </a>
        </div>
        <div className="navbar__toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navbar__menu">
          <li>
            <a href="/carservicee" target="_blank" className="navbar__link">
              CAR SERVICE
            </a>
          </li>
          <li>
            <a href="/carspaa" target="_blank" className="navbar__link">
              CAR SPA
            </a>
          </li>
          <li>
            <a href="/roadsideassistance" target="_blank" className="navbar__link">
              ROAD-SIDE ASSISTANCE
            </a>
          </li>
          <li className="navbar__phone">
            <FaPhone />
            <span className="phone-number">+91 95915 28892</span>
          </li>
          <li>
            <a href="/blogs" target="_blank" className="navbar__link">
              BLOGS
            </a>
          </li>
          <li>
            <a href="/partners" target="_blank" className="navbar__link">
              PARTNERS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
