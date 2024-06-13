import React from 'react';
import './SubscriptionBox.css';

const SubscriptionBox = () => {
  return (
    <div className="subscription-container">
      <h2>Be Privileged</h2>
      <h1>Buy our subscriptions, Be worry Free!</h1>
      <p>
        Be worry-free with ReadyAssist subscriptions. Our customers can avail services such as Flat tyre repair,
        fuel delivery, battery jumpstart, and towing anywhere in India, absolutely free of cost. We have a network
        of trained professionals and tow trucks that are available 24/7 to provide assistance to our customers.
        Our prime subscriptions are a one-stop solution for your vehicle maintenance and upkeeping worries.
      </p>
      <button>SUBSCRIBE NOW</button>
      <div className="icon-box">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKWFwlPo_MPjg-Xx8fJF2ZDgSYKn4AlkGsjtQYvDxm_EaOZyRN" alt="Icons representing services" />
      </div>
    </div>
  );
};

export default SubscriptionBox;
