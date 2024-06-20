import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubscriptionBox.css';

const SubscriptionBox = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate('/subscribe');
  };

  return (
    <div className="subscription-container">
      <div className="subscription-content">
        <h1>Reliable Automotive Experts</h1>
        <h2>Subscribe Today and Enjoy Peace of Mind!</h2>
        <p>
          With Global Auto Experts subscriptions, enjoy peace of mind with services like flat tyre repair, fuel delivery, 
          battery jumpstart, and towing anywhere in India, all at no additional cost. Our network of trained professionals 
          and tow trucks is available 24/7 to assist you. A prime subscription is your all-in-one solution for 
          hassle-free vehicle maintenance.
        </p>
        <button onClick={handleSubscribe}>SUBSCRIBE NOW</button>
      </div>
      <div className="icon-box">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKWFwlPo_MPjg-Xx8fJF2ZDgSYKn4AlkGsjtQYvDxm_EaOZyRN" alt="Icons representing services" />
      </div>
    </div>
  );
};

export default SubscriptionBox;
