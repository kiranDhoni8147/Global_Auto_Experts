import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
              <a href="#" onClick={toggleModal}>☎ Contact</a>
            </li>
            <li>
              <a href="/partners" target="_blank">🤝 Partners</a>
            </li>
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Got a Question? Shoot it!</h2>
            <form className="contact-form">
              <div>
                <input type="radio" id="car" name="vehicle" value="Car" />
                <label htmlFor="car">Car</label>
              </div>
              <input type="text" placeholder="Enter your Name" />
              <input type="text" placeholder="Enter your Mobile Number" />
              <input type="email" placeholder="Enter your Email" />
              <select>
                <option>Select Inquiry Type</option>
                <option>General Enquiry</option>
                <option>Booking status</option>
                <option>Service status</option>
                <option>Feedback</option>
                <option>Others</option>
              </select>
              <textarea placeholder="Enter your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
