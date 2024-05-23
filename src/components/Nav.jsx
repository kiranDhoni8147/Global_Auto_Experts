
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <Link to="/">
            <img src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png" alt="Logo" className="navbar__logo" />
          </Link>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <Link to="/blogs"> 🖥️ Blogs</Link>
            </li>
            <li>
              <Link to="/contact">☎ Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
