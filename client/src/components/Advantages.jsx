import React from 'react';
import { FaShieldAlt, FaCheckCircle, FaTools, FaCarSide, FaRupeeSign } from 'react-icons/fa';
import './Advantages.css';

const Advantages = () => {
  const advantages = [
    { icon: <FaShieldAlt />, title: 'Insurance claim settlement', description: '' },
    { icon: <FaCheckCircle />, title: '100% GUARANTEED', description: '' },
    { icon: <FaTools />, title: 'Expert Technicians', description: '' },
    { icon: <FaCarSide />, title: 'FREE', description: 'Pickup & Drop' },
    { icon: <FaRupeeSign />, title: 'Upto 40%', description: 'Save on Bills' },
  ];

  return (
    <div className="advantages-container">
      <h2 className="advantages-title">Advantages of Global Auto Experts</h2>
      <div className="advantages">
        {advantages.map((adv, index) => (
          <div className="advantage" key={index}>
            <div className="circle">
              <div className="icon">{adv.icon}</div>
              <p className="title">{adv.title}</p>
              <p className="description">{adv.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
