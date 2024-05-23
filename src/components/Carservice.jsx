import React from 'react';
import './Carservice.css';

const Carservice = () => {
  return (
    <nav className="carservice">
      <div className="container">
        <div className="carservice__brand">
          <a href="/carservice" target="_blank" className="carservice__link">CAR SERVICE</a>
          <a href="/roadsideassistance" target="_blank" className="carservice__link">ROAD-SIDE ASSISTANCE</a>
        </div>
      </div>
    </nav>
  );
};

export default Carservice;
