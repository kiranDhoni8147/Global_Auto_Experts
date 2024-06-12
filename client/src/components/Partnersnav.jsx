import React, { useState } from "react";
import "./Partnersnav.css";
import BrandDivision from "./BrandDivision";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { post } from "../service/service";
import Spinner from "../spinner/spinner";
// import Toaster from "../../spinner/toaster";
import Toaster from "../spinner/toaster";
import { toast } from "react-toastify";

const Partnersnav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [formData, setFormData] = useState({
    workshoptype: "",
    contactpersonname: "",
    phone: "",
    locality: "",
    workshopname: "",
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

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(formData);
    // Data should be sent to backend
    try {
      const result = await post("http://localhost:5000/api/partners", formData);
      setIsLoading(false);
      setShowToaster(true);
      toast.info(result.msg);
    } 
    catch (err) {
      setShowToaster(true);
      setIsLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <nav className="navbarr">
        <div className="containerr">
          <div className="navbarr__brand">
            <a href="/" target="_self">
              <img
                src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png"
                alt="Logo"
                className="navbarr__logo"
              />
            </a>
          </div>
          <div className="navbarr__links">
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
      </nav>

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

      <div className="main-content">
        <div className="background-image">
          <img
            src="https://cdn7.dissolve.com/p/D9_35_221/D9_35_221_1200.jpg"
            alt="Workshop Background"
          />
          <div className="overlay">
            <div className="overlay-text">
              <h1>Are You a Workshop Owner?</h1>
            </div>
            <div className="form-container">
              <h2>Become a Global Auto Expert Partner</h2>
              <form className="partner-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="workshopType">Workshop Type</label>
                  <div className="workshop-type-options">
                    <input
                      type="radio"
                      id="carWorkshop"
                      name="workshoptype"
                      value="Car Workshop"
                      defaultChecked
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="carWorkshop"
                      className="workshop-type-label"
                    >
                      Car Workshop
                    </label>
                    <input
                      type="radio"
                      id="sparesRetailer"
                      name="workshoptype"
                      value="Spares Retailer"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="sparesRetailer"
                      className="workshop-type-label"
                    >
                      Spares Retailer
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contactPerson">Contact Person Name</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactpersonname"
                    value={formData.contactpersonname}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your Mobile Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="locality">Locality</label>
                  <input
                    type="text"
                    id="locality"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    placeholder="Enter your Locality"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="workshopName">Workshop Name</label>
                  <input
                    type="text"
                    id="workshopName"
                    name="workshopname"
                    value={formData.workshopname}
                    onChange={handleChange}
                    placeholder="Enter your Workshop Name"
                    required
                  />
                </div>
                <button type="submit" className="submit-button">
                  REQUEST A CALL
                </button>
              </form>
              <Spinner loading={isLoading} />
              {showToaster && <Toaster />}
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="stats-section">
          <div className="stats-container">
            <h1>Join Global Auto Experts and Grow Your Business</h1>
            <h4>
              "Enhance your car repair and spare parts/accessories business by
              joining the Global Auto Experts Partnership program."
            </h4>
          </div>
        </section>

        <section className="workshop-owner-section">
          <h2>Are You a Workshop Owner?</h2>
          <p>Join us and get customers, get support and earn more!</p>
          <div className="benefits-container">
            <div className="benefit-box">
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/customer-service-icon-library/customer-9.png"
                alt="Get Customers Icon"
              />
              <p className="benefit-title">Get Customers</p>
              <p>Get more customers at your workshop.</p>
            </div>
            <div className="benefit-box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GcM5oHBxq5MXq6C4gFEY3KBTsKapINJmSQ&s"
                alt="Get Support Icon"
              />
              <p className="benefit-title">Get Support</p>
              <p>Get spares, consumables, and support.</p>
            </div>
            <div className="benefit-box">
              <img
                src="https://static.thenounproject.com/png/3129835-200.png"
                alt="Earn More Icon"
              />
              <p className="benefit-title">Earn More</p>
              <p>Earn greater revenue and profits.</p>
            </div>
          </div>
        </section>
      </div>
      <Testimonials />
      <BrandDivision />
      <Footer />
    </div>
  );
};

export default Partnersnav;
