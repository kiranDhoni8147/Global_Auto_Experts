import React, { useState } from 'react';
import './PeriodicMaintanence.css';

const images = [
  'https://carcooper.com/wp-content/uploads/2018/03/carcooper-image-2.jpg',
  'https://wallpapers.com/images/hd/honda-car-rear-view-aj3pjme6cgrd0lu9.jpg',
  'https://i.pinimg.com/originals/bd/55/8c/bd558ce9ded89f3379263afb6d56deba.jpg',
];

const carData = {
  "Maruti Suzuki": ["Brezza", "Swift", "Swift Dzire", "Baleno", "Wagon R", "Celerio", "Alto K10", "Eeco", "Ertiga", "Ciaz", "Ignis", "Grand Vitara", "Jimny", "XL6", "Fronx", "Invicto", "eVX", "Gypsy", "Omni", "SX4", "Maruti 800", "Kizashi", "Esteem"],
  "Hyundai": ["i20", "i10", "Creta", "Tucson", "Venue", "Aura", "Kona", "Alcazar", "Palisade", "Verna", "Ioniq 6", "Elantra", "Santa Fe", "Exter", " Sonata", "Accent", "Xcent", "Casper", "Eon", "Excel", "Getz"],
  "Honda": ["Elevate", "City", "Amaze", "Jazz", "Brio", "Civic", "e", "Accord", "BRV", "Vezel", "Hybrid", "NSX"],
  "Tata": ["Altroz", "Nexon", "Punch", "Harrier", "Safari", "Tiago", "Tigor", "Harrier e v", "Avniya", "Curvv", "Sierra", "Aria", "Indica", "Pelican", "Elegante", "Indigo"],
  "Ford": ["i20", "i10", "Creta", "Verna"],
  "Volkswagen": ["i20", "i10", "Creta", "Verna"],
  "Mahindra": ["i20", "i10", "Creta", "Verna"],
  "Renault": ["i20", "i10", "Creta", "Verna"],
  "Toyota": ["i20", "i10", "Creta", "Verna"],
  "Skoda": ["i20", "i10", "Creta", "Verna"],
  "Nissan": ["i20", "i10", "Creta", "Verna"],
  "Fiat": ["i20", "i10", "Creta", "Verna"],
  "Datsun": ["i20", "i10", "Creta", "Verna"],
  "BMW": ["i20", "i10", "Creta", "Verna"],
  "KIA": ["i20", "i10", "Creta", "Verna"],
  "Jeep": ["i20", "i10", "Creta", "Verna"],
  "Mitsubishi": ["i20", "i10", "Creta", "Verna"],
  "MG": ["i20", "i10", "Creta", "Verna"],
  "Land Rover": ["i20", "i10", "Creta", "Verna"],
  "Volvo": ["i20", "i10", "Creta", "Verna"],
  "Jaguar": ["i20", "i10", "Creta", "Verna"],
  "Force": ["i20", "i10", "Creta", "Verna"],
  "Opel": ["i20", "i10", "Creta", "Verna"],
  "Porsche": ["i20", "i10", "Creta", "Verna"],
  "Daewoo": ["i20", "i10", "Creta", "Verna"],
  "Hindustan Motors": ["i20", "i10", "Creta", "Verna"],
  "Aston Martin": ["i20", "i10", "Creta", "Verna"],
  "Citroen": ["i20", "i10", "Creta", "Verna"],
  "Lexus": ["i20", "i10", "Creta", "Verna"],
  "Bentley": ["i20", "i10", "Creta", "Verna"],
  "Lamborghini": ["i20", "i10", "Creta", "Verna"],
  "Rolls Royce": ["i20", "i10", "Creta", "Verna"],
  "Photon": ["i20", "i10", "Creta", "Verna"],
  "Jayem": ["i20", "i10", "Creta", "Verna"],
  "Premier": ["i20", "i10", "Creta", "Verna"],
  "Hummer": ["i20", "i10", "Creta", "Verna"],
  "BYD": ["i20", "i10", "Creta", "Verna"],
};

const faqData = [
  {
    question: "What is included in the Pricing?",
    answer: "The pricing includes comprehensive digital diagnostics, high-quality Castrol oil, brake oil & coolant replenishment, oil filter replacement, air filter & AC filter maintenance, interior vacuuming & dashboard polishing, and exterior washing & tyre polishing."
  },
  {
    question: "Time for Delivery",
    answer: "The periodic maintenance service takes a minimum of 6 hours for complete inspection, servicing, road-worthiness check, washing, billing, and processing. Repairs and replacements if any can delay the time taken for delivery (subject to the availability of parts)."
  },
  {
    question: "Repair & Replacement",
    answer: "Repairs and replacements are done using genuine parts certified for replacement. Our skilled technicians ensure the best service for your vehicle."
  },
  {
    question: "Oil Grade & Quality",
    answer: "We use only high-quality Castrol oil for all servicing needs to ensure the best performance of your vehicle."
  },
  {
    question: "Reliability",
    answer: "Our professionally trained experts provide reliable service, and you can track your service in real-time."
  },
];

const PeriodicMaintanence = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    year: '',
    brand: '',
    model: '',
    message: '',
    otp: '',
    termsAgreed: false,
  });
  const [serviceCost] = useState(3299);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const handleBrandChange = (brand) => {
    setFormData({
      ...formData,
      brand: brand,
      model: ''
    });
  };

  const handleModelChange = (model) => {
    setFormData({
      ...formData,
      model: model
    });
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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="ENTER YOUR NAME"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ENTER YOUR EMAIL ADDRESS"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="ENTER YOUR MOBILE NUMBER"
            />
          </div>
          <div className="form-group">
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="ENTER YOUR ADDRESS"
            />
          </div>
          <div className="form-group">
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={(e) => handleBrandChange(e.target.value)}
              required
            >
              <option value="">SELECT YOUR BRAND</option>
              {Object.keys(carData).map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          {formData.brand && (
            <div className="form-group">
              <select
                id="model"
                name="model"
                value={formData.model}
                onChange={(e) => handleModelChange(e.target.value)}
                required
              >
                <option value="">SELECT YOUR MODEL</option>
                {carData[formData.brand].map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="terms"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">
              <span>I agree to the terms and conditions</span>
            </label>
          </div>
          <div className="form-group cost">
            <p>Rs. {serviceCost}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="service-container">
        <div className="service-section">
          <h2 style={{ marginTop: "0", textAlign: "center" }}>Service Package Details</h2>
          <div className="service-items">
            <div className="service-item">Comprehensive Digital Diagnostics</div>
            <div className="service-item">High-Quality Castrol Oil</div>
            <div className="service-item">Brake Oil & Coolant Top-up</div>
            <div className="service-item">Oil Filter Replacement</div>
            <div className="service-item">Air Filter & AC Filter Cleaning</div>
            <div className="service-item">Dashboard Polish & Interior Vacuum</div>
            <div className="service-item">Exterior Wash & Tyre Polish</div>
          </div>
        </div>
        <div className="service-section">
          <h2 style={{ marginTop: "0", textAlign: "center" }}>Global Auto Expert Advantages</h2>
          <div className="service-items">
            <div className="service-item">Up to 50% savings</div>
            <div className="service-item">Trained Technicians</div>
            <div className="service-item">Free Pick-up & Drop</div>
            <div className="service-item">Certified parts for replacement</div>
            <div className="service-item">Real-time tracking</div>
          </div>
        </div>
        <div className="faq-section">
          <h2>FAQs</h2>
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeriodicMaintanence;
