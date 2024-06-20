import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, description, link, className }) => {
  return (
    <div className={`service-card ${className ? className : ''}`}>
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="enquire-button">ENQUIRE NOW</a>
    </div>
  );
};

export default ServiceCard;
