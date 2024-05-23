import React from 'react';
import { Link } from 'react-router-dom';
import './Carservice.css';
const Carservice = () => {
  return (
    <nav className="carservice">
      <div className="container">
        <div className="carservice__brand">
          <Link to="/carservice" className="carservice__link">CAR SERVICE</Link>
          <Link to="/roadsideassistance" className="carservice__link">ROAD-SIDE ASSISTANCE</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Carservice;
