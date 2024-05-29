import React from 'react';
import './ServiceBlock.css';

const ServiceBlock = ({ title, description, image }) => {
  return (
    <div className="service-block">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceBlock;
