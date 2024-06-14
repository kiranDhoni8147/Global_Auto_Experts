import React, { useState } from "react";
import { post } from "../service/service";
import Spinner from "../spinner/spinner";
import Toaster from "../spinner/toaster";
import { toast } from "react-toastify";
import { FaPhone } from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    // Data should be sent to backend
    try {
      const result = await post("/contactnow", formData);
      setIsLoading(false);
      setShowToaster(true); 
      toast.info(result.msg)
    } catch (err) {
      setShowToaster(true); 
      setIsLoading(false);
      toast.error(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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
            <a onClick={toggleModal} className="navbar__link">
              CONTACT
            </a>
          </li>
          <li>
            <a href="/partners" target="_blank" className="navbar__link">
              PARTNERS
            </a>
          </li>
        </ul>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal} onSubmit={handleSubmit}>
                &times;
              </span>
              <h2>Got a Question? dfg Shoot it!</h2>
              <form className="contact-form">
                <input
                  type="text"
                  id="contactPerson"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                />
                <input
                  type="text"
                  id="mobileNumber"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your Mobile Number"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email Address"
                  required
                />
                <select name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                  <option value="">Select Inquiry Type</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Booking status">Booking status</option>
                  <option value="Service status">Service status</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Others">Others</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  required
                />
                <button type="submit">Send Message</button>
              </form>
              <Spinner loading={isLoading} />
              {showToaster && <Toaster />}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
