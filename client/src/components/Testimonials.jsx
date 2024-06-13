import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem-person-orange.svg/1024px-Emblem-person-orange.svg.png",
    description: "Always on time, efficient and completely trustworthy!",
    name: "Sampoorna James",
  },
  {
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem-person-orange.svg/1024px-Emblem-person-orange.svg.png",
    description: "Excellent Service and Friendly Staff",
    name: "Rashmitha Rani",
  },
  {
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem-person-orange.svg/1024px-Emblem-person-orange.svg.png",
    description: "Fantastic service! They fixed my car quickly and affordably. Excellent customer service too. Highly recommend",
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
