import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <h1>Welcome to CarSpa</h1>
        <p style={{color:"black"}}>Your one-stop solution for car detailing and maintenance.</p>
      </div>
    </section>
  );
};

export default HeroSection;
