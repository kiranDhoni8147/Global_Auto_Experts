import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Always on time, efficient and completely trustworthy!"</p>
            <span>- Sampoorna James</span>
          </div>
          <div className="testimonial">
            <p>"Excellent Service and Friendly Staff"</p>
            <span>- Rashmitha Rani</span>
          </div>
          <div className="testimonial">
            <p>"Wonderful Service! This was an absolute life-saver. They fixed my car in a timely and cost-effective manner. The customer service is so good too! I would recommend this to anyone."</p>
            <span>- Sneha Kapoor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
