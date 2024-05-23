import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'https://t3.ftcdn.net/jpg/04/96/48/30/360_F_496483060_C9OG1wJpfmjMXcNmUBibmA9wYxxZCxnW.jpg',
  'https://www.shutterstock.com/image-photo/worker-washing-red-car-sponge-600nw-1859193349.jpg',
  'https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=',
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
