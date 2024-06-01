import React from 'react';
import './ServiceTracker.css';

const ServiceTracker = () => {
  return (
    <div className="service-tracker">
      <div className="service-info">
        <h2>Monitor your service in real time </h2>
        <ul>
          <li><span role="img" aria-label="check">✔️</span>Receive live SMS updates to monitor your vehicle's status.</li>
          <li><span role="img" aria-label="check">✔️</span>Get photo updates from vehicle check-in to delivery.</li>
          <li><span role="img" aria-label="check">✔️</span>Experience complete transparency in service.</li>
        </ul>
      </div>
      <div className="servicee-image">
        <img src="https://thezerohack.com/wp-content/uploads/2018/09/mobile-phone-tracking.jpg" alt="Phone tracking service" />
      </div>
    </div>
  );
}

export default ServiceTracker;
