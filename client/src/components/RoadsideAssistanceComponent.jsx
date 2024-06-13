import React from 'react';
import './RoadsideAssistanceComponent.css';

const RoadsideAssistanceComponent = () => {
  return (
    <div className="roadside-assistance">
      <div className="section-container">
        <h2>Car Roadside Assistance Near Me</h2>
        <div className="problems">
          <h3>General Problems Faced by Users</h3>
          <ul>
            <li>🔧 Wait Times: During peak hours or bad weather, demand for roadside assistance can surge, leading to longer wait times for service.</li>
            <li>🔧 Limited Coverage: Not all roadside assistance plans are created equal. Some may only cover certain services like towing or jumpstarts and may have mileage limitations.</li>
            <li>🔧 Location Limitations: If you break down in a remote area, it may take roadside assistance much longer to reach you, or they may not be able to help at all.</li>
            <li>🔧 Complex Repairs: Roadside assistance providers are typically equipped to handle minor problems, but they may not be able to fix complex mechanical issues. You might still need to have your car towed to a repair shop.</li>
            <li>🔧 Not all Coverage is Included: Some roadside assistance plans exclude certain services, like winching a car out of a ditch or changing a flat tire on certain types of rims. Be sure to read the fine print carefully.</li>
          </ul>
        </div>
        <div className="company-includes">
          <h3>Global Auto Experts includes these:</h3>
          <ul>
            <li>✔️ 24/7 Towing Service</li>
            <li>✔️ Battery Jumpstart and Replacement</li>
            <li>✔️ Tire Change Assistance</li>
            <li>✔️ Fuel Delivery</li>
            <li>✔️ Lockout Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadsideAssistanceComponent;
