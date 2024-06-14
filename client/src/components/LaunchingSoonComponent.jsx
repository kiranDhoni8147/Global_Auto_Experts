import React, { useState } from 'react';
import { post } from '../service/service';
import Spinner from '../spinner/spinner';
import Toaster from '../spinner/toaster';
import { toast } from 'react-toastify';
import './LaunchingSoonComponent.css';

const LaunchingSoonComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suggestionMsg: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await post('/suggestions', formData);
      setIsLoading(false);
      setShowToaster(true);
      toast.info(result.msg);
    } 
    catch (err) {
      setShowToaster(true);
      setIsLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div className="launching-soon-container">
      <div className="launching-soon">
        <h3>Exciting News!</h3>
        <h1>Share Your Suggestions & Win!</h1>
        <p>
          Share your valuable suggestions on features you would like to see in the Global Auto Experts Tech Platform.
          Complete your details below to enter our weekly draw for a chance to win fuel worth ₹5000.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="suggestionMsg"
              value={formData.suggestionMsg}
              onChange={handleChange}
              placeholder="Your Suggestions"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <Spinner loading={isLoading} />
        {showToaster && <Toaster />}
      </div>
    </div>
  );
};

export default LaunchingSoonComponent;
