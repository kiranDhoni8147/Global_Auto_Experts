import React, { useState } from "react";
import "./Carservice.css";

const Carservice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    car: false,
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(type, checked);
    
    if (type === "radio" && name === "workshoptype" && checked) {
      setFormData({
        ...formData,
        [name]: value
      });
    } 
    else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value
      });
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <nav className="carservice">
      <div className="container">
        <div className="carservice__brand">
          <a href="/carservicee" target="_blank" className="carservice__link">
            CAR SERVICE
          </a>
          <a href="/carspaa" target="_blank" className="carservice__link">
            CAR SPA
          </a>
          <a
            href="/roadsideassistance"
            target="_blank"
            className="carservice__link"
          >
            ROAD-SIDE ASSISTANCE
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
            <li>
              <a href="/partners" target="_blank">
                🤝 Partners
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
            <form className="contact-form">
              <div>
                <input type="radio" id="car" name="vehicle" value="Car" />
                <label htmlFor="car">Car</label>
              </div>
              <input
                type="text"
                id="contactPerson"
                name="contactpersonname"
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
                id="contactPerson"
                name="contactpersonname"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email Address"
                required
              />
              <select>
                <option>Select Inquiry Type</option>
                <option>General Enquiry</option>
                <option>Booking status</option>
                <option>Service status</option>
                <option>Feedback</option>
                <option>Others</option>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Carservice;
