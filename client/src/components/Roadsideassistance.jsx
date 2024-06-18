
import React from "react";
import "./Carservicee.css";
import ServiceeBlock from "./Serviceeblock";
import logo from './LOGO.jpg'
const Roadsideassistance = () => {
  return (
    <div>
      <nav className="navbarr">
        <div className="containerr">
          <div className="navbar__brand">
            <a href="/" target="_self">
              <img
                src={logo}
                alt="Logo"
                className="main_navbar__logo"
              />
            </a>
          </div>
          <div className="navbar__linkss">
            <ul>
              <div className="location">
                <h3>Bangalore</h3>
              </div>
            </ul>
          </div>
        </div>
      </nav>{" "}
      <br /> <br />
      <div className="carservicee">
        <div div className="container1">
        <h2 id="road-side-title" style={{marginLeft: '30px', marginTop: '0px', marginBottom:'40px', fontSize:'18px'}}>Road Side Assistance</h2>
          <p style={{ marginLeft: "1rem", marginRight: "1rem", fontSize:"16px" }}>
            Global Auto Experts is your top choice for 24/7 roadside assistance
            in Bangalore. We provide a comprehensive range of services,
            including emergency car repairs, maintenance, and full servicing.
            Our dedicated team of skilled professionals is always ready to
            ensure you receive the best customer experience, no matter the time
            or place. Whether you face a minor issue or require a major fix, we
            are prepared to assist you. Explore our roadside assistance packages
            and save on your next service or repair.
          </p>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <ServiceeBlock />
    </div>
  );
};

export default Roadsideassistance;