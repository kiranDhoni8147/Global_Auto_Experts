import React from 'react';
import './Aboutus.css';
import teamMember1Img from './Screenshot (299).png'; // Update the path

const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="header">
        <h1>About Us</h1>
        <p>Discover our journey, mission, and the team behind our success.</p>
      </div>

      <div className="section story">
        <div className="section__image">
          <img src="https://wallpapercave.com/wp/wp5109891.jpg" alt="Our Story" />
        </div>
        <div className="section__text">
          <h2>Our Story</h2>
          <p>
            From humble beginnings to industry leaders, our journey is a testament to our dedication and passion. We started with a vision to provide exceptional services, and over the years, we've grown into a trusted name in the automotive industry.
          </p>
        </div>
      </div>


      <div className="section mission">
        <div className="section__content">
          <h2>Our Mission</h2>
          <p>
            We aim to revolutionize the automotive service industry by providing top-notch services and ensuring customer satisfaction. Our mission is grounded in our core values:
          </p>
          <ul>
            <li>Commitment to quality</li>
            <li>Customer-centric approach</li>
            <li>Continuous improvement</li>
            <li>Innovation and excellence</li>
          </ul>
        </div>
        <div className="section__image">
          <img src="https://static.stambol.com/wordpress/wp-content/uploads/2019/12/automotive-engineer-augmented-car-design-hologram.jpg" alt="Our Mission" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
