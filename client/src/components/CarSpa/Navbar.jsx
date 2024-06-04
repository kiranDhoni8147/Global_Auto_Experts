import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" target="_self">
            <img src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png" alt="Logo" className="navbar-logo" />
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
