import React from 'react';
import './TrustedMechanics.css';

const TrustedMechanics = () => {
  return (
    <div className="trusted-mechanics">
      <div className="garage-image">
        <img src="https://wallpapercave.com/wp/wp6358395.jpg" alt="Garage" />
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
