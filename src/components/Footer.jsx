import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png" alt="Company Logo" className="footer-logo" />
          <p>Global Auto Experts</p>
          <p>+91 95915 28892</p>
          <p>info@globalautoexperts.com</p>
          <p>Bangalore</p>
          <a href="/terms">All rights reserved</a>
        </div>
        <div className="footer-column">
          <h3>General</h3> <br/>
          <a href="/about" target='_blank'>About Us</a> <br/> <br/>
          <a href="/blogs">Blogs</a>
        </div>
        <div className="footer-column">
          <h3>Services</h3> <br/>
          <a href="/carservicee" target='_blank'>Auto-Services</a> <br/> <br/>
          <a href="/carspaa" target='_blank'>Car Spa</a> <br/> <br/>
          <a href="/roadsideassistance" target='_blank'>Road Assistance</a> <br/>
        </div>
        <div className="footer-column">
          <h3>Work Location</h3> <br/>
          <a href="https://www.google.com/maps?q=company+location" target="_blank" rel="noopener noreferrer">
            Our Location
          </a>
        </div>
        <div className="footer-column social-icons">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
