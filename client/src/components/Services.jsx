import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        <ServiceCard 
          image="https://www.freedomwarranty.com/wp-content/uploads/Freedom-Warranty-LLC_-Extended-Service-Contract-A-Necessity-with-the-Rise-in-Auto-Repair-Cost_IMAGE1-1.jpeg" 
          title="Auto Services" 
          description="Comprehensive auto care and repairs to keep your vehicle running smoothly and safely." 
          link="/auto-services" 
        />
        <ServiceCard 
          image="https://thecarspa.ca/wp-content/uploads/2020/10/bigstock-Cleaning-The-Car-car-Detailin-373638298-scaled.jpg" 
          title="Car Spa" 
          description="Premium detailing and cleaning to rejuvenate your car's appearance inside and out." 
          link="/car-spa" 
        />
        <ServiceCard 
          className="third-card"
          image="https://centralpenn.aaa.com/sites/default/files/styles/large/public/2019-06/Automotive_Hero.jpg?itok=i2VohYZD" 
          title="24/7 Roadside Assistance" 
          description="Round-the-clock roadside support for towing, flat tires, and emergencies." 
          link="/roadside-assistance" 
        />
      </div>
    </div>
  );
};

export default Services;
