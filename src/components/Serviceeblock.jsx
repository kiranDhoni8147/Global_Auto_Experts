import React from 'react';
import './ServiceBlock.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'
import BrandDivision from './BrandDivision';


const services = [
  {
    image: 'https://img.freepik.com/free-photo/technician-is-repairing-car-flat-tire_1150-6270.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714521600&semt=ais',
    name: 'Puncture & Flat Tyre',
    price: ' ₹3299',
    bookingLink: '/booking/puncture',
  },
  {
    image: 'https://omelectronics.in/wp-content/uploads/2021/07/battety-1-1.png',
    name: 'Battery Jump Start',
    price: ' ₹1399',
    bookingLink: '/booking/battery-jump',
  },
  {
    image: 'https://media.istockphoto.com/id/1323910525/photo/car-breakdown-on-the-highway.jpg?s=612x612&w=0&k=20&c=gyaTkJKb_ZgyBP8PkgX6GqzkdyzCQSndlA1DYXVGPsY=',
    name: 'Minor Roadside Repair',
    price: ' ₹1999',
    bookingLink: '/booking/minor-repair',
  },
  {
    image: 'https://img.freepik.com/premium-photo/close-up-pump-nozzle-gas-station-generative-ai_10221-23943.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais',
    name: 'Emergency Fuel Delivery',
    price: ' ₹1699',
    bookingLink: '/booking/emergency-fuel',
  },
  {
    image: 'https://img.freepik.com/free-photo/still-life-keys-new-home_23-2151015268.jpg',
    name: 'Key Recovery Service',
    price: ' ₹1699',
    bookingLink: '/booking/key',
  },
];

const ServiceeBlock = () => {
  return (
    <div>
        <div className="service-container">
      <a href="/roadside-assistance" className="service-link" target='_blank'>
        <h2 className="service-title">Roadside Assistance Services</h2>
      </a>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-content">
              <h4 className="service-name">{service.name}</h4>
              <strong className="service-price">{service.price}</strong>
              <a href={service.bookingLink} target="_blank" rel="noopener noreferrer">
                <button className="book-button">Book Now</button>
              </a>
            </div>
          </div>
        ))}
      </div> <br/> </div>
      <BrandDivision/> <br/>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png" alt="Company Logo" className="footer-logo" />
          <p>Global Auto Experts</p>
          <p>+91 95915 28892</p>
          <p>info@globalautoexperts.com</p>
          <p>Bangalore</p>
          <a href="/terms">All rights reserved</a>
        </div>
        <div className="footer-column">
          <h3>General</h3> <br/>
          <a href="/about">About Us</a> <br/> <br/>
          <a href="/blogs">Blogs</a>
        </div>
        <div className="footer-column">
          <h3>Services</h3> <br/>
          <a href="/service1">Auto-Services</a> <br/> <br/>
          <a href="/service2">Car Spa</a> <br/> <br/>
          <a href="/service3">Road Assistance</a> <br/>
        </div>
        <div className="footer-column">
          <h3>Work Location</h3> <br/>
          <a href="https://www.google.com/maps?q=company+location" target="_blank" rel="noopener noreferrer">
            Our Location
          </a>
        </div>
        <div className="footer-column social-icons">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default ServiceeBlock;
