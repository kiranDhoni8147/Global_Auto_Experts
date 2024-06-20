
import React from "react";
import "./Carservicee.css";
import ServiceBlock from "./ServiceBlock";
import logo from './LOGO.jpg'
const Carservicee = () => {
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
          <h2>🚗 Car Service</h2>
          <p style={{ marginLeft: "1rem", marginRight: "1rem", fontSize:"16px"  }}>
            Global Auto Experts stands as the premier choice for automotive
            servicing in Bangalore. We offer an extensive array of services,
            encompassing car repairs, maintenance, and comprehensive servicing.
            Our team of skilled professionals is committed to delivering an
            exceptional customer experience. Whether you require a minor repair
            or a thorough overhaul, we are equipped to meet your needs. Discover
            our range of car service deals and enjoy savings on your next repair
            or service.
          </p>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <ServiceBlock />
    </div>
  );
};

export default Carservicee;