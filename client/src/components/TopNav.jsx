import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './TopNav.css';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="contact-info">
        <span>☎ Phone: +91 95915 28892</span>
        <span>✉ Mail: info@globalautoexperts.com</span>
        <span>⚲ Find us: Bangalore</span>
      </div>
      <div className="social-links">
        <span>English <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1ee-1f1f3.svg" alt="flag" /></span>
        <a href="https://www.facebook.com/globalautoexperts?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/globalautoexperts?igsh=MW1kd2ZnbHY5ZjhpaA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/globalautoexperts/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/globalautoexpts?t=dyh4ao2dC9ScfEHv3GzB5Q&s=08" target='_blank' rel='noopener noreferrer'>𝕏</a>
      </div>
    </div>
  );
};

export default TopNav;
