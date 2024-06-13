import React from 'react';
import './LaunchingSoonComponent.css';

const LaunchingSoonComponent = () => {
  return (
    <div className="launching-soon-container">
      <div className="launching-soon">
        <h3>Exciting News!</h3>
        <h1>Share Your Suggestions & Win!</h1>
        <p>Share your valuable suggestions on features you would like to see in the Global Auto Experts Tech Platform. Complete your details below to enter our weekly draw for a chance to win fuel worth ₹5000.</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Your Phone Number" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email Address" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Suggestions"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LaunchingSoonComponent;
