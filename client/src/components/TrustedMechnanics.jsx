
import React from 'react';
import { FaCar } from 'react-icons/fa';
import './TrustedMechanics.css';

const TrustedMechanics = () => {
  return (
    <div className="trusted-mechanics">
      <div className="icon-container">
        <FaCar className="car-icon" />
      </div>
      <div className="mechanics-info">
        <h2>Reliable Automotive Experts</h2>
        <ul>
          <li><span className="icon">🔧</span>Skilled mechanics to cater to all your needs.</li>
          <li><span className="icon">🔧</span>Superior craftsmanship in every service.</li>
          <li><span className="icon">🔧</span>Cutting-edge equipment for an unparalleled service experience.</li>
        </ul>
      </div>
    </div>
  );
}

export default TrustedMechanics;
