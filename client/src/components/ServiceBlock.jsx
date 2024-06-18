import React from 'react';
import './ServiceBlock.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import BrandDivision from './BrandDivision';
import logo from './LOGO.jpg';
const services = [
  {
    image: 'https://automechanica.com/uploads/service/service_image/1/1.jpg',
    name: 'Periodic Maintenance Service',
    price: '₹3299',
    bookingLink: '/booking/periodic-maintenance',
  },
  {
    image: 'https://www.glendenningtyreautorepairs.com.au/wp-content/uploads/2020/03/Air-Conditioning.jpg',
    name: 'Express Car Service',
    price: '₹1399',
    bookingLink: '/booking/air-condition-system',
  },
  {
    image: 'https://www.htsaves.com/wp-content/uploads/2023/03/car-battery-replacement-img.jpg',
    name: 'Mileage+',
    price: '₹1999',
    bookingLink: '/booking/battery-replacement',
  },
  {
    image: 'https://www.abebrakes.com/wp-content/uploads/2021/06/ABE-breaks_01.jpg',
    name: 'Brake Services',
    price: '₹1699',
    bookingLink: '/booking/brake-services',
  },
  {
    image: 'https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/blog/images/2018/10/technician-changing-oil-filter.jpg',
    name: 'Oil and Filter',
    price: '₹1699',
    bookingLink: '/booking/oil-and-filter',
  },
];

const ServiceBlock = () => {
  return (
    <div>
      <div className="service-container">
        <a href="/roadside-assistance" className="service-link" target='_blank'>
          <h2 className="service-title">Car Services</h2>
        </a>
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image-container">
                <img src={service.image} alt={service.name} className="service-image" />
              </div>
              <div className="service-content">
                <h4 className="service-name">{service.name}</h4>
                <strong className="service-price">{service.price}</strong>
                <a href={service.bookingLink} target="_blank" rel="noopener noreferrer">
                  <button className="book-button">Book Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BrandDivision />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <p>Global Auto Experts</p>
            <p>info@globalautoexperts.com</p>
            <p>Bangalore</p>
            <a href="/terms">All rights reserved</a>
          </div>
          <div className="footer-column">
            <h3>General</h3>
            <a href="/about">About Us</a>
            <a href="/blogs">Blogs</a>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <a href="/service1">Auto-Services</a>
            <a href="/service2">Car Spa</a>
            <a href="/service3">Road Assistance</a>
          </div>
          <div className="footer-column">
            <h3>Work Location</h3>
            <a href="https://maps.app.goo.gl/L2hEW8dDDnvCTknJ8" target="_blank" rel="noopener noreferrer">
              Our Location
            </a>
          </div>
          <div className="footer-column social-icons">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/globalautoexperts?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/globalautoexperts?igsh=MW1kd2ZnbHY5ZjhpaA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/globalautoexperts/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/globalautoexpts?t=dyh4ao2dC9ScfEHv3GzB5Q&s=08" target='_blank' rel='noopener noreferrer'>𝕏</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceBlock;
