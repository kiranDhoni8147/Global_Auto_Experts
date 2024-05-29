import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceBlock.css';

const ServiceBlock = ({ title, description, image, price, bookingLink }) => {
  return (
    <div className="service-block">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <h3 style={{color:"orange"}}>{price}</h3>
      <Link to={bookingLink}>
        <button className="book-now-btn">Book Now</button>
      </Link>
    </div>
  );
};

export default ServiceBlock;
