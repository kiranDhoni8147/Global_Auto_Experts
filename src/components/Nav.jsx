import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <a href="/" target="_self">
            <img src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png" alt="Logo" className="navbar__logo" />
          </a>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <a href="/blogs" target="_blank">🖥️ Blogs</a>
            </li>
            <li>
              <a href="/contact" target="_blank">☎ Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
