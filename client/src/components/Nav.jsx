import React, { useState } from "react";
// import { FaPhone } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <a href="/" target="_self">
            <img src="" alt="Logo" className="navbar__logo" />
          </a>
        </div>
        <ul className={`navbar__menu ${menuOpen ? 'show' : ''}`}>
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
          {/* <li className="navbar__phone">
            <FaPhone />
            <span className="phone-number">+91 95915 28892</span>
          </li> */}
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
        <div className="navbar__toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
