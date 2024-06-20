import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'http://hdqwalls.com/wallpapers/orange-lamborghini-huracan-ja.jpg',
  'https://wallpaperaccess.com/full/2085166.jpg',
  'https://wallpaperaccess.com/full/2085201.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2800);
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
