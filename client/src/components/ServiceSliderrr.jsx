import React, { useState } from "react";
import "./ServiceSliderrr.css";
import carDetailingImg from "./CarSpa/car-detailing..jpg";
import carWashImg from "./CarSpa/station-detaillant-lavage-voiture_1303-22319.avif";
import interiorCleaningImg from "./CarSpa/cleaning.jpg";
import deepspaImg from "./CarSpa/deep-all.jpg";
const services = [
  {
    image: carDetailingImg,
    name: "Car Detailing",
    price: "₹3299",
    bookingLink: "/booking/car-detailing",
  },
  {
    image: carWashImg,
    name: "Car Wash",
    price: "₹1399",
    bookingLink: "/booking/car-wash",
  },
  {
    image: interiorCleaningImg,
    name: "Interior Cleaning",
    price: "₹1999",
    bookingLink: "/booking/interior-cleaning",
  },
  {
    image: deepspaImg,
    name: "Deep All Round Spa",
    price: "₹1999",
    bookingLink: "/booking/deep-spa",
  },
];

const ServiceSliderrr = () => {
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
    <div className="sliderrr">
      <a
        href="/carspaa"
        className="service-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="service">Car Spa Service</h2>
      </a>
      <div className="sliderrr__wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {services.map((service, index) => (
          <div className="sliderrr__slide" key={index}>
            <img src={service.image} alt={service.name} />
            <div className="sliderrr__content">
              <h4>{service.name}</h4>
              <div className="price">{service.price}</div>
              <a
                href={service.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="book-now-btn">Book Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="sliderrr__button sliderrr__button--left"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className="sliderrr__button sliderrr__button--right"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ServiceSliderrr;
