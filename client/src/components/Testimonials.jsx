import React from 'react';
import './Testimonials.css';
import user from '../asset/user.png'


const testimonials = [
  {
    image: user,
    description: "Always on time, efficient and completely trustworthy!",
    name: "Sampoorna James",
  },
  {
    image: user,
    description: "Excellent Service and Friendly Staff",
    name: "Rashmitha Rani",
  },
  {
    image: user,
    description: "Wonderful Service! This was an absolute life-saver. They fixed my car in a timely and cost-effective manner. The customer service is so good too! I would recommend this to anyone.",
    name: "Sneha Kapoor",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt="" className="testimonial-image" />
            <p className='testimonial-description'>{testimonial.description}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
