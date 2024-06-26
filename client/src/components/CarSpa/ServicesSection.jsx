import React from 'react';
import ServiceBlock from './ServiceBlock';
import './ServicesSection.css';
import carDetailingImg from './car-detailing..jpg';
import carWashImg from './station-detaillant-lavage-voiture_1303-22319.avif';
import interiorCleaningImg from './cleaning.jpg';
import deepspaImg from './deep-all.jpg';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services">
          <ServiceBlock
            title="Car Detailing"
            description="Revitalize your car's exterior and interior with our professional detailing services."
            image={carDetailingImg}
            price="Rs. 3299"
            bookingLink="/booking/car-detailing"
          />
          <ServiceBlock
            title="Car Wash"
            description="Keep your car clean and shining with our thorough and eco-friendly car wash services."
            image={carWashImg}
            price="Rs. 3299"
            bookingLink="/booking/car-wash"
          />
          <ServiceBlock
            title="Interior Cleaning"
            description="Restore your car's interior to pristine condition with our deep cleaning and sanitization."
            image={interiorCleaningImg}
            price="Rs. 3299"
            bookingLink="/booking/interior-cleaning"
          />
          <ServiceBlock
            title="Deep All Sound Spa"
            description="Revitalize your car's exterior and interior with our professional detailing services, including thorough cleaning, waxing, polishing, and protective treatments for a pristine finish."
            image={deepspaImg}
            price="Rs. 3299"
            bookingLink="/booking/deep-spa"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
