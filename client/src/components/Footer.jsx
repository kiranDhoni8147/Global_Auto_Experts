import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logoo from './LOGO.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src={logoo} alt="Company Logo" className="footer-logo" />
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
          <a href="https://maps.app.goo.gl/L2hEW8dDDnvCTknJ8" target="_blank" rel="noopener noreferrer">
            Our Location
          </a>
        </div>
        <div className="footer-column social-icons">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/globalautoexperts?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/globalautoexperts?igsh=MW1kd2ZnbHY5ZjhpaA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/globalautoexperts/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/globalautoexpts?t=dyh4ao2dC9ScfEHv3GzB5Q&s=08" target='_blank' rel='noopener noreferrer'>𝕏</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
