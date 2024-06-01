import React, { useState } from "react";
import "./Nav.css";
import { post } from "../service/service";
import { toast } from "react-toastify";
import Spinner from "../spinner/spinner";
import Toaster from "../spinner/toaster";


const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [formData, setFormData] = useState({
    car: false,
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleInquiryTypeChange = (e) => {
    setFormData({
      ...formData,
      inquiryType: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
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

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <a href="/" target="_self">
            <img
              src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png"
              alt="Logo"
              className="navbar__logo"
            />
          </a>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <a href="/blogs" target="_blank">
                🖥️ Blogs
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleModal}>
                ☎ Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Got a Question? Shoot it!</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <input
                  type="checkbox"
                  id="car"
                  name="car"
                  checked={formData.car}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="car">Car</label>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter your Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInquiryTypeChange}
                required
              >
                <option value="">Select Inquiry Type</option>
                <option value="generalEnquiry">General Enquiry</option>
                <option value="bookingStatus">Booking status</option>
                <option value="serviceStatus">Service status</option>
                <option value="feedback">Feedback</option>
                <option value="others">Others</option>
              </select>
              <textarea
                name="message"
                placeholder="Enter your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
            <Spinner loading={isLoading} />
            {showToaster && <Toaster />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
