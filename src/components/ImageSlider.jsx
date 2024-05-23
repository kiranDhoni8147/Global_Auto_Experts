import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'https://blog.bluetrustloans.com/wp-content/uploads/2021/08/BTL-Do-You-Need-Financial-Assistance-for-Your-Car-Repair-1024x536.png',
  'https://nebula.wsimg.com/b368763d5da9d98799181cb553a68856?AccessKeyId=5E30142DF27B56347CC1&disposition=0&alloworigin=1',
  'https://www.kbb.com/wp-content/uploads/2021/08/car-maintenance-guide.jpeg?w=763',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider__wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div className="slider__slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="slider__button slider__button--left" onClick={goToPrevious}>&#10094;</button>
      <button className="slider__button slider__button--right" onClick={goToNext}>&#10095;</button>
      <div className="slider__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider__dot ${index === currentIndex ? 'slider__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
