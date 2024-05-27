import React from 'react';
import './Carservicee.css'
import ServiceeBlock from './Serviceeblock';
const Roadsideassistance = () => {
  return (
    <div>
      <nav className="navbarr">
      <div className="containerr">
        <div className="navbar__brand">
          <a href="/" target="_self">
            <img src="http://globalautoexperts.com/wp-content/uploads/2021/08/logo.png" alt="Logo" className="navbar__logo" />
          </a>
        </div>
        <div className="navbar__links">
          <ul>
            <div className='location'>
              <h3>Bangalore</h3>
            </div>
          </ul>
        </div>
      </div> 
      </nav> <br/> <br/>
              <div className="carservicee">
              <div div className="container1">
                <h2>
                🚗 Roadside Assistance Service
                </h2>
                <p style={{marginLeft:"1rem", marginRight:"1rem"}}>
                Global Auto Experts is your top choice for 24/7 roadside assistance in Bangalore. We provide a comprehensive range of services, including emergency car repairs, maintenance, and full servicing. Our dedicated team of skilled professionals is always ready to ensure you receive the best customer experience, no matter the time or place. Whether you face a minor issue or require a major fix, we are prepared to assist you. Explore our roadside assistance packages and save on your next service or repair.
                </p>
              </div>
              </div>
              <ServiceeBlock/>

    </div>
  );
};

export default Roadsideassistance;
