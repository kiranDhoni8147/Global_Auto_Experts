import React, { useState } from 'react';
import './ServiceSteps.css';
import { FaCalendarAlt, FaCarSide, FaEnvelope, FaMoneyBillWave } from 'react-icons/fa';

const ServiceSteps = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleRequestCallBack = () => {
    if (!isVerified) {
      alert('Please verify you are not a robot');
      return;
    }

    if (mobile) {
      console.log(`Requesting callback for mobile number: ${mobile}`);
      alert(`Callback requested for ${mobile}`);
      // Here you can integrate your backend API to trigger the callback.
    } else {
      alert('Please enter a mobile number');
    }
  };

  const handleVerification = () => {
    setIsVerified(!isVerified);
  };

  return (
    <div className="container">
      <div className="how-it-works">
        <h2>How does it work?</h2>
        <div className="steps">
          <div className="step">
            <div className="circle">
              <div className="icon"><FaCalendarAlt /></div>
              <p>Book Service</p>
            </div>
          </div>
          <div className="step">
            <div className="circle">
              <div className="icon"><FaCarSide /></div>
              <p>Free Pickup</p>
            </div>
          </div>
          <div className="step">
            <div className="circle">
              <div className="icon"><FaEnvelope /></div>
              <p>Via sms/email</p>
            </div>
          </div>
          <div className="step">
            <div className="circle">
              <div className="icon"><FaMoneyBillWave /></div>
              <p>Free Drop-Off</p>
            </div>
          </div>
        </div>
      </div>
      <div className="get-assistance">
        <h2>Get Quick Assistance</h2>
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your mobile no*"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <div className="recaptcha">
            <input type="checkbox" id="recaptcha" onChange={handleVerification} />
            <label htmlFor="recaptcha">I'm not a robot</label>
          </div>
          <button type="button" onClick={handleRequestCallBack}>
            Request Call Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceSteps;
