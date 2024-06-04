import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceSliderr.css';

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

const ServiceSliderr = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const maxClicks = 5;
  const totalItems = services.length;

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
      <a href="/roadsideassistance" className="service-link" target='_blank'>
        <h2 className="service">24/7 Roadside Assistance</h2>
      </a>
      <div className="sliderr__wrapper" style={{ transform: `translateX(${-currentIndex * (100 / 4)}%)` }}>
        {services.map((service, index) => (
          <div className={`sliderr__slide ${service.viewAll ? 'view-all' : 'div-highlight'}`} key={index}>
            {service.viewAll ? (
              <div className="view-all">
                <Link to="/view-all">
                  <button>View All</button>
                </Link>
              </div>
            ) : (
              <>
                <img src={service.image} alt={service.name} />
                <div className="sliderr__content">
                  <div style={{ fontFamily: "inherit", fontSize: "x-large" }}><h4>{service.name}</h4></div>
                  <div><strong style={{ color: "#ff9800", fontSize: "x-large" }}>{service.price}</strong></div>
                  <a href={service.bookingLink} target="_blank"><button>Book Now</button></a>
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

export default ServiceSliderr;

