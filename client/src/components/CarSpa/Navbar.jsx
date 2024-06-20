import React from 'react';
import './Navbar.css';
import logo from '../LOGO.jpg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" target="_self">
            <img src={logo} alt="Logo" className="main_navbar_logo" />
          </a>
        </div>
        <div className="navbar-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
