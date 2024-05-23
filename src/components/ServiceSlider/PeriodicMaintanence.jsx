import React, { useState } from 'react';
import './PeriodicMaintanence.css';

const images = [
  'https://carcooper.com/wp-content/uploads/2018/03/carcooper-image-2.jpg',
  'https://wallpapers.com/images/hd/honda-car-rear-view-aj3pjme6cgrd0lu9.jpg',
  'https://i.pinimg.com/originals/bd/55/8c/bd558ce9ded89f3379263afb6d56deba.jpg',
];

const PeriodicMaintanence = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    year: '',
    model: '',
    message: '',
    otp: '',
    termsAgreed: false,
  });
  const [otpSent, setOtpSent] = useState(false);
  const [serviceCost] = useState(3299); // Assuming a fixed cost for demonstration

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleOtpSend = () => {
    // Logic to send OTP to the phone number
    alert('OTP sent to ' + formData.phone);
    setOtpSent(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAgreed) {
      alert('You must agree to the terms and conditions to proceed.');
      return;
    }

    // Data should be sent to backend
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully');
    } else {
      alert('Failed to submit form');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar__brand">
            <a href="/" target="_self">
              <img src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png" alt="Logo" className="navbar__logo" />
            </a>
          </div>
        </div>
      </nav>
      <br />
      <div className="content">
        <div className="slideshow">
          <div className="slideshow__images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={index === currentIndex ? 'active' : ''}
              />
            ))}
          </div>
          <button className="slideshow__arrow slideshow__arrow--left" onClick={prevSlide}>❮</button>
          <button className="slideshow__arrow slideshow__arrow--right" onClick={nextSlide}>❯</button>
          <div className="slideshow__bullets">
            {images.map((_, index) => (
              <span key={index} className={index === currentIndex ? 'active' : ''}></span>
            ))}
          </div>
          <div className="slideshow__text">
            <p>Periodic Maintenance Service</p>
          </div>
        </div>
        <form className="customer-form" onSubmit={handleSubmit}>
          <h2>Book a Service</h2>
          <div className="form-group">
            <label htmlFor="name">Customer Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Customer Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            <button type="button" onClick={handleOtpSend} disabled={!formData.phone}>
              Verify OTP
            </button>
          </div>
          {otpSent && (
            <div className="form-group">
              <label htmlFor="otp">OTP:</label>
              <input type="text" id="otp" name="otp" value={formData.otp} onChange={handleChange} required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="year">Vehicle Year:</label>
            <select id="year" name="year" value={formData.year} onChange={handleChange} required>
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model">Model Name:</label>
            <select id="model" name="model" value={formData.model} onChange={handleChange} required>
              <option value="">Select Model</option>
              <option value="Model A">Model A</option>
              <option value="Model B">Model B</option>
              <option value="Model C">Model C</option>
            </select>
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="terms" name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} required />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <div className="form-group cost">
            <label>Cost of Service:</label>
            <p>Rs. {serviceCost}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="service-container">
      <div className="service-section">
        <h2 style={{marginTop:"0", textAlign:"center"}}>Service Package Details</h2>
        <div className="service-items">
          <div className="service-item">Comprehensive Digital Diagnostics</div>
          <div className="service-item">High-Quality Castrol Oil</div>
          <div className="service-item">Brake Oil & Coolant Replenishment</div>
          <div className="service-item">Oil Filter Replacement</div>
          <div className="service-item">Air Filter & AC Filter Maintenance</div>
          <div className="service-item">Interior Vacuuming & Dashboard Polishing</div>
          <div className="service-item">Exterior Washing & Tyre Polishing</div>
        </div>
      </div>
      <div className="service-section">
        <h2 style={{marginTop:"0", textAlign:"center"}}>Global Auto Expert Advantages</h2>
        <div className="service-items">
          <div className="service-item">Significant Savings: Save up to 50% on services</div>
          <div className="service-item">Skilled Technicians: Professionally trained experts</div>
          <div className="service-item">Convenient Pick-up & Drop: Complimentary service</div>
          <div className="service-item">Genuine Parts: Certified replacement components</div>
          <div className="service-item">Real-time tracking</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PeriodicMaintanence;
