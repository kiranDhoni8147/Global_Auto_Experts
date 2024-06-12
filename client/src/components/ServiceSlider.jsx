import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceSlider.css';

const services = [
  {
    image: 'https://automechanica.com/uploads/service/service_image/1/1.jpg',
    name: 'Periodic Maintenance',
    price: ' ₹3299',
    bookingLink: '/booking/periodic-maintenance',
  },
  {
    image: 'https://www.glendenningtyreautorepairs.com.au/wp-content/uploads/2020/03/Air-Conditioning.jpg',
    name: 'Air Condition System',
    price: ' ₹1399',
    bookingLink: '/booking/air-condition-system',
  },
  {
    image: 'https://www.htsaves.com/wp-content/uploads/2023/03/car-battery-replacement-img.jpg',
    name: 'Battery Replacement',
    price: ' ₹1999',
    bookingLink: '/booking/battery-replacement',
  },
  {
    image: 'https://www.abebrakes.com/wp-content/uploads/2021/06/ABE-breaks_01.jpg',
    name: 'Brake Services',
    price: ' ₹1699',
    bookingLink: '/booking/brake-services',
  },
  {
    image: 'https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/blog/images/2018/10/technician-changing-oil-filter.jpg',
    name: 'Oil and Filter',
    price: ' ₹1699',
    bookingLink: '/booking/oil-and-filter',
  },
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const totalItems = services.length;
  const maxClicks = totalItems - 1;

  const goToPrevious = () => {
    if (clickCount > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
      setClickCount((prevCount) => prevCount - 1);
    }
  };

  const goToNext = () => {
    if (clickCount < maxClicks) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="sliderr">
      <a href="/carservicee" className="service-link" target='_blank'>
        <h2 className="service">Car Services</h2>
      </a>
      <div className="sliderr__wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {services.map((service, index) => (
          <div className={`sliderr__slide ${service.viewAll ? 'view-all' : 'div-highlight'}`} key={index}>
            {service.viewAll ? (
              <div className="view-all">
                <a href="/view-all" target="_blank">
                  <button>View All</button>
                </a>
              </div>
            ) : (
              <>
                <img src={service.image} alt={service.name} />
                <div className="sliderr__content">
                  <div style={{fontFamily:"inherit", fontSize:"x-large"}}><h4>{service.name}</h4></div>
                  <div><strong style={{color:"#ffab40", fontSize:"x-large"}}>{service.price}</strong></div>
                  <Link to={service.bookingLink} target="_blank" rel="noopener noreferrer">
                    <button>Book Now</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button className="sliderr__button sliderr__button--left" onClick={goToPrevious}>&#10094;</button>
      <button
        className="sliderr__button sliderr__button--right"
        onClick={goToNext}
        disabled={clickCount >= maxClicks}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ServiceSlider;
