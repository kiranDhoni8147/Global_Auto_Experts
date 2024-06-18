import React, { useState } from 'react';
import './Puncture.css'
import { post } from '../../service/service';
import { toast } from 'react-toastify';
import Toaster from '../../spinner/toaster';
import Spinner from '../../spinner/spinner';
import logo from '../LOGO.jpg';
/*Slideshow*/
const images = [
  'https://carcooper.com/wp-content/uploads/2018/03/carcooper-image-2.jpg',
  'https://wallpapers.com/images/hd/honda-car-rear-view-aj3pjme6cgrd0lu9.jpg',
  'https://i.pinimg.com/originals/bd/55/8c/bd558ce9ded89f3379263afb6d56deba.jpg',
];
/*Form*/
const carData = {
  "Maruti Suzuki": ["Brezza", "Swift", "Swift Dzire", "Baleno", "Wagon R", "Celerio", "Alto K10", "Eeco", "Ertiga", "Ciaz", "Ignis", "Grand Vitara", "Jimny", "XL6", "Fronx", "Invicto", "eVX", "Gypsy", "Omni", "SX4", "Maruti 800", "Kizashi", "Esteem"],
  "Hyundai": ["i20", "i10", "Creta", "Tucson", "Venue", "Aura", "Kona", "Alcazar", "Palisade", "Verna", "Ioniq 6", "Elantra", "Santa Fe", "Exter", " Sonata", "Accent", "Xcent", "Casper", "Eon", "Excel", "Getz"],
  "Honda": ["Elevate", "City", "Amaze", "Jazz", "Brio", "Civic", "e", "Accord", "BRV", "Vezel", "Hybrid", "NSX"],
  "Tata": ["Altroz", "Nexon", "Punch", "Harrier", "Safari", "Tiago", "Tigor", "Harrier e v", "Avniya", "Curvv", "Sierra", "Aria", "Indica", "Pelican", "Elegante", "Indigo"],
  "Ford": ["Aspire", "EcoSport", "Endeavour", "Figo", "Mustand", "Freestyle", "Fiesta", "Mondeo", "B-Series", "Aerostar"],
  "Volkswagen": ["Tiguan", "Virtus", "Taigun", "Ameo", "Polo", "Jetta", "ID R", "Passat", "Golf", "Up", "Beetle", "Phaeton", "Touareg"],
  "Mahindra": ["Bolero", "Scorpio", "XUV300", "Thar", "Bolero Neo", "XUV700", "Marazzo", "XUV900", "XUV400", "KUV100", "NuvoSpot", "Scorpio Classic", "TUV300", "XUV500", "Verito", "Camper", "XUV400 EV", "Genio", "XUV500 2024"],
  "Renault": ["Kwid", "Kiger", "Triber", "Duster", "Captur", "Pulse", "Fluence", "Koleos", "Dacia Lodgy", "Megane E-Tech Electric", "Kwid EV", "Scala", "Zoe", "Laguna", "Rafale"],
  "Toyota": ["Camry", "Glanza", "Urban Crusier Hyryder", "Innova Crysta", "Hilux", "Fortuner", "Innova Hycross", "Rumion", "Land Cruiser", "Vellfire", "Corolla", "Belta", "Legender", "A1", "Taisor", "Avalon", "86"],
  "Skoda": ["Kodiaq", "Kushaq", "Slavia", "Octavia", "Superb", "Enyaq", "Rapid", "Fabia", "Karoq", "Kodiaq 2024", "Yeti", "Slavia"],
  "Nissan": ["Juke", "Nissan Magnite", "Kicks", "Qashqai", "Micra", "Sunny", "Terrano", "Leaf", "Armada", "Compact MPV", "Murano", "Evalia"],
  "Fiat": ["Punto", "Linea", "Punto Evo", "Palio D", "Avventura", "Palio Stile", "Lines Classic", "Adventure", "Palio NV", "Abarth Punto", "Urban Cross", "Uno", "Petra"],
  "Datsun": ["redi-GO", "Go", "Go Plus"],
  "BMW": ["X1", "3 Series", "2 Series", "7 Series", "1 Series", "Z4", "5 Series GT", "X5", "X6", "6 Series", "M5", "M3", "X4", "6 Series GT", "X7", "i4", "iX"],
  "KIA": ["Carnival", "Seltos", "Carens", "Sonet", "EV6"],
  "Jeep": ["Compass", "Wrangler"],
  "Mitsubishi": ["Pajero Sport", "Outlander", "Pajero", "Montero", "Cedia", "Lancer"],
  "MG": ["Gloster", "ZS EV", "Hector", "Astor", "Hector Plus"],
  "Land Rover": ["Discover Sport", "Range Rover Evoque", "Freelander 2", "Range Rover Sport", "Discover 4", "Defender", "Range Rover", "Range Rover Vogue", "Range Rover Vrlar"],
  "Volvo": ["S60", "V40", "S80", "XC60", "XC90", "S60 Cross Country", "V40 Cross Country", "S40", "XC 40", "V60", "V90", "S90"],
  "Jaguar": ["XF", "XE", "XJ", "F Type", "F Pace", "XJR", "XK R", "i-Pace", "XJ L"],
  "Force": ["One", "Traveller 3350", "Trax", "Gurkha"],
  "Opel": ["Corsa", "Astra"],
  "Porsche": ["911", "Cayenne", "Macan", "Cayman", "Panamera", "Boxter", "Taycan", "Taycan Turismo"],
  "Daewoo": ["Matiz", "Nexia", "Cielo"],
  "Hindustan Motors": ["Ambassador"],
  "Aston Martin": ["Vantage", "Rapide", "VAnquish", "DB9"],
  "Citroen": ["C5 Aircross", "C3"],
  "Lexus": ["Es", "NX", "LS", "RX", "LC", "LX"],
  "Bentley": ["Mulsanne", "Continental", "Flying Spur"],
  "Lamborghini": ["Huracan", "Aventador", "Gallordo", "Urus"],
  "Rolls Royce": ["Phantom", "Ghost", "Wraith"],
  "Photon": ["VIW CS2"],
  "Jayem": ["Neo"],
  "Premier": ["Rio"],
  "Hummer": ["H2", "H3"],
  "BYD": ["e6"],
};
/*FAQ*/
const faqs = [
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
/*Testimonials*/
const testimonials = [
  {
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    description: "Always on time, efficient and completely trustworthy!",
    name: "Sampoorna James",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    description: "Excellent Service and Friendly Staff",
    name: "Rashmitha Rani",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    description: "Wonderful Service! This was an absolute life-saver. They fixed my car in a timely and cost-effective manner. The customer service is so good too! I would recommend this to anyone.",
    name: "Sneha Kapoor",
  },
];

const KeyRecovery = () => {
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
    service:'keyRecovery'
  });
  const [serviceCost] = useState(3299);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);

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
    setIsLoading(true);
    e.preventDefault();

    if (!formData.termsAgreed) {
      alert("You must agree to the terms and conditions to proceed.");
      setIsLoading(false);
      return;
    }

    // Data should be sent to backend
    try {
      const result = await post("/booknow", formData);
      setIsLoading(false);
      setShowToaster(true); 
      toast.info(result.msg)
    } catch (err) {
      setShowToaster(true); 
      setIsLoading(false);
      toast.error(err.message);
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
              <img src={logo} alt="Logo" className="main_navbar__logo" />
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
            <p>Key Recovery Service</p>
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
              placeholder="Enter Your Name"
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
              placeholder="Enter Your Email Address"
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
              placeholder="Enter Your Mobile Number"
            />
          </div>
          <div className="form-group">
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter Your Address"
            />
          </div>
          <div className="form-group">
            <select
              id="brand"
              className="brand-select"
              name="brand"
              value={formData.brand}
              onChange={(e) => handleBrandChange(e.target.value)}
              required
            >
              <option value="">Select Your Brand</option>
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
                <option value="">Select Your Model</option>
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
        <Spinner loading={isLoading} />
        {showToaster && <Toaster />}
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
        </div>
        <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </button>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
      
      <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt="" className="testimonial-image" />
            <p className='testimonial-description'>{testimonial.description}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  );
};

export default KeyRecovery;
