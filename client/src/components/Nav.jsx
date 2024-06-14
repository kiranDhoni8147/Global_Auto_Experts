import React, { useState } from "react";
import { FaPhone } from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <a href="/" target="_self">
            <img src="" alt="Logo" className="navbar__logo" />
          </a>
        </div>
        <div className="navbar__toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar__menu ${isMenuOpen ? 'show' : ''}`}>
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
            <a href="#" onClick={toggleModal} className="navbar__link">
              CONTACT
            </a>
          </li>
          <li>
            <a href="/partners" target="_blank" className="navbar__link">
              PARTNERS
            </a>
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleModal}>&times;</span>
            <div className="contact-form">
              <div>
                <label>Name:</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label>Phone:</label>
                <input type="text" name="phone" />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="email" />
              </div>
              <div>
                <label>Type of Inquiry:</label>
                <select name="inquiryType">
                  <option value="">Select...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Service Inquiry">Service Inquiry</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message"></textarea>
              </div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
