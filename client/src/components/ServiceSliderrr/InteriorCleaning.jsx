import React, { useState } from 'react';
import './CarDetailing.css';
import { post } from '../../service/service';
import { toast } from 'react-toastify';
import Toaster from '../../spinner/toaster';
import Spinner from '../../spinner/spinner';
import Modal from 'react-modal';
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

const InteriorCleaning = () => {
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
    service:'InteriorCleaning'
  });
  const [serviceCost] = useState(3299);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


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
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            <p>Interior Cleaning Services</p>
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
          <input
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              placeholder="Enter Your Pincode"
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
              <span>
                I agree to the{' '}
                <a href="#" onClick={openModal}>
                  terms and conditions
                </a>
              </span>
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
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Terms and Conditions"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Terms and Conditions</h2>
        <strong>
        <h3>Terms & Conditions for DSS Service</h3>

1. All prices are in INR. <br/>
2. Global Auto Experts Service Centre charges only include labor charges and cost of consumables (Engine Oil, Air Filter & Oil Filter only).<br/>
3. Engine Oil shall be mineral whereas Air Filter and Oil Filter shall be of OES recommended brand. Brand of Engine oil is subject to change without any prior notice to customers.<br/>
4. Working hours for Vehicle Service are between 8 am to 8 pm on all days (Except National & State Holidays).<br/>
5. Prices are subject to change without prior notice & a price ruling on the date of supply will be charged.<br/>
6. Warranty of the parts would be the sole responsibility of the manufacturer; Global Auto Experts Service Centre would not take any responsibility in case of warranty not agreed by the part manufacturer with a valid reason for non-acceptance.<br/>
7. Refunds if any would take normal banking or reimbursement procedures, which is seven working days. Refunds if at all any shall be at the sole discretion of the company and its refund procedures.<br/>
8. Global Auto Experts Service Centre insists all its customers ensure no valuables are left in your car before handing it over to our staff.<br/>
9. During the course of car maintenance, If Global Auto Experts Service Centre staff suggests any kind of part disorder and the customer decided to carry on with the faulty parts, Global Auto Experts Service Centre would not take any responsibility for the parts failure.<br/>
10. In an event of Global Auto Experts Service Centre Van team visiting for vehicle service on customers, demand and the customer fails to hand over the car beyond 30 minutes, a charge of non-refundable Rs.300 would be applicable and another booking needs to be made by the customer.<br/>
11. Services can only be availed on the availability of the desired time slot. The service is on a first come first serve basis.<br/>
12. The vehicle will be driven by Global Auto Experts Staff at the owner's risk.<br/>
13.All disputes are subject to the jurisdiction of Delhi only.<br/>
14.The company shall not be liable for any claims/refunds whatsoever. Rarest claims in extreme cases if any shall not exceed the amount paid by the client.<br/>

<h3>Terms & Conditions for Service at Garage</h3>

    1. All prices are in INR. <br/>
    2. Global Auto Experts Service Centre charges only include labor charges and cost of consumables (Engine Oil, Air Filter & Oil Filter only). Other consumables and spares if needed would be charged at the actual Rate.<br/>
    3. Engine Oil shall be mineral whereas Air Filter and Oil Filter shall be of OES recommended brand. Brand of Engine oil is subject to change without any prior notice to customers.<br/>
    4. If a customer prefers any other brand of Engine Oil or synthetic or semi-synthetic engine oil, then that shall be provided at the incremental cost of the oil and the incremental cost has to be borne by the customer.<br/>
    5. Any Additional work apart from service packages will be charged extra.<br/>
    6. Working hours for Vehicle Service are between 8 am to 8 pm on all days (Except National & State Holidays).<br/>
    7. Prices are subject to change without prior notice & a price ruling on the date of supply will be charged.<br/>
    8. Warranty of the parts would be the sole responsibility of the manufacturer; Global Auto Experts Service Centre would not take any responsibility in case of warranty not agreed by the part manufacturer with a valid reason for non-acceptance.<br/>
    9. Refunds if any would take normal banking or reimbursement procedures, which is seven working days. Refunds if at all any shall be at the sole discretion of the company and its refund procedures.<br/>
    10. Global Auto Experts Service Centre insists all its customers ensure no valuables are left in their car before handing it over to our staff, Global Auto Experts Service Centre would not take any responsibility for the valuables found misplaced after the return of Global Auto Experts Service Centre staff from customers premises.<br/>
    11. During the course of car maintenance, If Global Auto Experts Service Centre staff suggests any kind of part disorder and the customer decided to carry on with the faulty parts, Global Auto Experts Service Centre would not take any responsibility for the parts failure.<br/>
    12. In an event of the Global Auto Experts Service Centre team visiting for vehicle pickup on customer demand and the customer fails to spare the car beyond 30 minutes, a charge of Rs.200 would be applicable and another booking needs to be made by the customer.<br/>
    13. Services can only be availed on the availability of the desired time slot. The service is on a first come first serve basis.<br/>
    14. There would not be any substitute vehicle arranged or provided in case of customer vehicle has to be kept by Global Auto Experts Service Centre during the service period.<br/>
    15. All disputes are subject to the jurisdiction of Delhi only.<br/>
    16. The company shall not be liable for any claims/refunds whatsoever. Rarest claims in extreme cases if any shall not exceed the amount paid by the client.<br/>

<h3>Terms & Condition - Warranty</h3>

Warranty is not applicable in the following conditions <br/>

    1. Normal maintenance services such as engine tune-up, adjustment of drive belts and linkages on the clutch, brake and accelerator pedals, engine oil and oil filter changes, coolant and inhibitor topping - up and/or changes, adjustment of wheel alignment, cleaning of the fuel system, and its adjustments, lubrication and lubricants replenishment and/ or changes, checking and focusing of light, servicing of starter-motor, upkeep of electrical connections and cables, torquing of fasteners on body or chassis, tightening operations, tyre rotation & wheel balancing, door adjustments.<br/>
    2. Normal maintenance service replacement items like brake pads and shoes, brake disc and drum, power unit mountings, wiper blades, and linkage cables, hoses and pipes, drive-line mountings, springs, lamp bulbs, fuses, motor brushes, contact points, regulator machine, all filter elements, all gaskets and packing (except cylinder head gasket), all belts, batteries, tyre, and tubes.<br/>
    3. All those parts, which are not mentioned in the Parts Covered List.<br/>
    4. Any vehicle that has been used for competition or racing.<br/>
    5. Any repairs or replacement required as a result of accident or collision damage<br/>
    6. Warranty will seize to operate in case of an accident on parts affected by accident, once the accidental parts are replaced Warranty will remain valid for the balance period.<br/>
    7. Any defects caused by misuse, negligence, abnormal use or insufficient care, or the use of spurious parts.<br/>
    8. Any vehicle, which has been altered includes, without limitation, the installation of performance accessories.<br/>
    9. Any vehicle on which parts or accessories not approved by the respective manufacturer has been used.<br/>
    10. Any vehicle, which has not been operated in accordance with the operating instructions in the warranty manual.<br/>
    11. Insignificant defects, which do not affect the functions of the vehicle including without limitations sound, vibration, and fluid seepage.<br/>
    12. Any natural wear and tear including without limitation aging etc.<br/>
    13. Bodywork & parts, paint, glass, interior & exterior trim; in-car entertainment/communication system and connected equipment/exhaust system & catalytic converter/normal wear & tear/service items and other components subject to routine maintenance or period repair & replacement.<br/>
    14. Replacement of airbags for whatsoever cause.<br/>

<h3>Terms & Conditions for End-User</h3>

1. Warranty is only applicable after inspection of the vehicle<br/>
2. Vehicles, which are registered and with valid RC are eligible for this warranty product and the registration certificate shall be the conclusive proof of same.<br/>
3. Vehicles which are up to 7 years old or run less than 1 lac km are eligible for a warranty.<br/>
4. Vehicles to undergo an Inspection/Certification before issuance of the warranty.<br/>
5. In case the vehicle fails the inspection, a charge of INR 500 will be charged from the vehicle owner as an inspection fee.<br/>
6. Vehicles owned, temporarily or otherwise, by a business formed for the purpose of selling or servicing motor vehicles are excluded.<br/>
7. The warranty has no surrender value, no refund of cost is available, and it cannot be canceled.<br/>
8. Services must be completed at the correct time/s and mileage/s. The beneficiary must retain all the service invoices and relevant receipts. Failure to service the vehicle in accordance with the recommended service schedule will render the warranty invalid.<br/>
9. The mileage quoted in no way guarantees the true distances covered by the vehicle and is indicated only as a guide to when servicing is due. Failure to maintain the odometer, mileage recorder in working order or disconnecting it, or tampering with it will invalidate the Warranty.<br/>
10. No liability will be accepted for damage caused by neglect, corrosion, intrusion of foreign or deleterious matter, lack of servicing, overheating, freezing or abuse by the continued use of the vehicle after a fault has become evident or for consequential loss on the failure of parts not covered by Warranty.<br/>
11. No liability will be accepted for any failure due to wear and tear, components incorrectly fitted, or faulty or defective at the time of sale, or faulty manufacture/design and alterations/modifications from the manufacturer's specification.<br/>
12. If it shall be established following the receipt of the claim that the conditions of Warranty as laid down have not been fully complied with, then it is hereby expressly agreed and declared that the Extended Warranty Dealer / Franchise shall be released from all liability for that particular claim.<br/>
13. All Disputes/differences regarding claim settlement, arising for whatsoever reason shall be subject to the jurisdiction of Delhi courts only<br/>

<h3>Terms & Condition - Accessories</h3>

You (The User) are therefore advised to read carefully these terms and conditions every time you use the Global Auto Experts platform. <br/>

    1. We have made every effort to display the color of our products that appear on the site as accurately as possible. However, as the actual colors you see will depend on your monitor, we cannot guarantee that your monitor's display of a color will be accurate.<br/>
    2. Global Auto Experts will not be responsible for any damage suffered by users from the use of the services. This without limitation includes loss of revenue or data resulting from delays, non-deliveries, missed deliveries, or service interruptions as may occur because of any act/omission of the vendor. This disclaimer of liability also applies to any damages or injury caused by any failure of performance, negligence, defect, deletion, error, omission, interruption, delay in operation or transmission, computer virus, communication line failure, theft or destruction, or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortuous behavior, or under any other cause of action.<br/>
    3. Global Auto Experts will take "Full Responsibility" for your Order if the Order has been shipped to any of the major cities, where we used "Private Courier Companies" (eg: Blue Dart, First Flight, Pafex, DHL, etc.) to ship your order.<br/>
    4. The prices and availability of products are subject to change without prior notice.<br/>
    5. Requests for cancellations of orders once shipped/dispatched shall not be entertained<br/>
    6. Global Auto Experts reserves the right to refuse or cancel any order placed for a product that is listed at an incorrect price or for any other reason. This shall be regardless of whether the order has been confirmed and/or payment has been received. The payment shall be refunded and the User shall be informed of the same.<br/>
    7. If a non-delivery or late delivery occurs due to a mistake by the User (i.e. wrong or incomplete name or address or recipient not available) any extra cost spent by Global Auto Experts for re-delivery shall be claimed from the User placing the order.<br/>
    8. The User agrees to give accurate, authentic, and true information. Global Auto Experts reserves the right to confirm and validate the information and other details provided by the User at any point in time. If any such User details are found not to be true wholly or partly, Global Auto Experts has the right in its sole discretion to reject the registration and debar the User from using the services of Global Auto Experts without prior intimation whatsoever.<br/>
    9. Global Auto Experts will not be liable for any type or kind of credit card fraud. The liability to use a card fraudulently will be on the user and the onus to 'prove otherwise' shall be exclusively on the user. The User must exclusively use his/her own card on the site.<br/>
    10. Global Auto Experts shall not entertain any complaints after 15 days, once the order is delivered.<br/>
    11. This agreement shall be construed in accordance with the applicable laws of India. The Courts at Delhi shall have exclusive jurisdiction in any proceedings arising out of this agreement.<br/>

<h3>Refund policy</h3>

For payments made via Credit Card, Debit Card, Net Banking, or Wallet you will receive the refund into the source account from 5-7 working days from the time of order cancellation. If payment was made by Redeeming any mobile wallet balance then, the refund will be instant post order cancellation, which can be later transferred into your bank account, by contacting the customer support team.<br/>
<h3>Cancellation Policy</h3>

What is Global Auto Expert's cancellation policy?<br/>

You can cancel an order when it is not shipped/dispatched. This doesn't include items purchased on sale. Amount paid will be credited into the same payment mode using which the payment was made.<br/>
When will I receive the refund for my canceled order?<br/>

For payments made via credit, debit card, net banking, or wallet you will receive the refund into the source account within 5-7 business days from the time of order cancellation, if payment was made by redeeming any mobile wallet balance, then refund will be instant post order cancellation, which can be later transferred into your bank account, by contacting the designated partner-customer support team.<br/>
<h3>Refund Method</h3>
Credit/Debit Card, Net Banking & UPI<br/>
<h3>Refund Timeframe</h3>
5-7 Business Days<br/>
<h3>Terms & Conditions for Detailing Service</h3>

Global Auto Experts warranty is valid only if the service is availed from an authorized studio & is registered online. <br/>

    1. Warranty is provided only for the shine of the vehicle's painted body.<br/>
        (a). After application, avoid washing/cleaning your vehicle for 2 days. Bring your vehicle after 2 days for a Complimentary first wash. (Note: only 1st wash is complimentary).<br/>
        (b). 1st complimentary ceramic wash can be availed within a period of 10 days from the date of treatment. No requests will be entertained afterwards.<br/>
        (c). First car assessment should be done after one year of treatment and thereafter, once a year.<br/>
        (d). Yearly-assessment can be availed before 30 days or after 30 days from the year completion date. No requests will be entertained after the period expires.<br/>
    2. Warranty will be considered void if:<br/>
    (a). If your warranty is not registered online, in that case contact the studio from where service have been availed immediately & get it registered.<br/>
        (b). If vehicle is washed/cleaned within 2 days after application of coating.<br/>
        (c). Coating is either removed or over coated with any other product(s).<br/>
        (d). Soiling, damages, discoloration or stains caused due to bleaches, solvents, acid, burns, dye, accident, vandalism or negligence/ faults on part of the automobile owner.<br/>
        (e). Damage to due accident.<br/>
        (f). Scratches due to dry cleaning of the vehicle (Only wet clean the vehicle with plain water).<br/>
        (g). Vehicle is repainted. (Warranty will be considered void for repainted part(s) or entire exterior paint body depending on the paint job)<br/>
        (h). Customer can get their vehicle coated again (whether repainted/damaged by accident) by paying appropriate charges.<br/>

    <h3>NOTE: Customer can get their vehicle coated again (whether repainted/damaged by accident) by paying appropriate charges.</h3>
    3. To uphold the authenticity of the warranty, follow the instructions and consult an authorized Global Auto Experts studio. <br/>
    4. Global Auto Experts warranty is non-transferable and applicable only after you complete all the registration formalities.<br/>
    5. In case of any coating damage during the warranty period, follow the given procedure:<br/>
        Contact your nearest coating studio right away and inform them about the damage issue.<br/>
        The service inspection in charge will then examine your vehicle during the business hours in the nearest coating studio (allotted by them).<br/>
        Post assessment if your claims get accepted, then our service inspector will contact you with a mutually convenient time and location<br/>
        Provide your Invoice/warranty card to avail warranty.(Warranty shall be considered invalid in case it is not registered online)<br/>
        If the claim is not made within 30 days of observing the problem, it will automatically set Global Auto Experts dealer free of any legal obligations.<br/>

DISCLAIMER: Always make sure to take your invoice and get your warranty registered online from the studio you are availing the service. Global Auto Experts gives no warranty and accepts no responsibility or liability if your warranty is not registered online. In that case under no circumstances will Global Auto Experts be held responsible or liable in any way for any warranty claims.<br/>

        </strong> <br/> <br/>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default InteriorCleaning;
