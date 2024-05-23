import React from 'react';
import './Advantages.css';

const Advantages = () => {
  const advantages = [
    { icon: '🛡️', title: 'Insurance claim settlement without the exchange of cash', description:''},
    { icon: '💯', title: '100% GUARANTEED', description: '' },
    { icon: '🔧', title: 'Expert Technicians', description: '' },
    { icon: '🚗', title: 'FREE', description: 'Pickup & Drop' },
    { icon: '💸', title: 'Upto 40%', description: 'Save on Bills' },
  ];

  return (
    <div className="advantages-container">
      <h2 className="advantages-title">Advantages of Global Auto Experts</h2>
      <div className="advantages">
        {advantages.map((adv, index) => (
          <div className="advantage" key={index}>
            <div className="circlee">
              <div className="iconn">{adv.icon}</div>
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
