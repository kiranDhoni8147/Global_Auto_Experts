import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import './ServiceTracker.css';

const ServiceTracker = () => {
  return (
    <div className="service-tracker">
      <div className="service-info">
        <h2>Monitor your service in real time</h2>
        <ul>
          <li><span role="img" aria-label="check"><img src='https://www.pinclipart.com/picdir/big/30-303118_check-correct-tick-sign-mark-orange-orange-tick.png'/></span>Receive live SMS updates to monitor your vehicle's status.</li>
          <li><span role="img" aria-label="check"><img src='https://www.pinclipart.com/picdir/big/30-303118_check-correct-tick-sign-mark-orange-orange-tick.png'/></span>Get photo updates from vehicle check-in to delivery.</li>
          <li><span role="img" aria-label="check"><img src='https://www.pinclipart.com/picdir/big/30-303118_check-correct-tick-sign-mark-orange-orange-tick.png'/></span>Experience complete transparency in service.</li>
        </ul>
      </div>
      <div className="servicee-image">
        <FaMobileAlt className="mobile-icon" />
      </div>
    </div>
  );
}

export default ServiceTracker;
