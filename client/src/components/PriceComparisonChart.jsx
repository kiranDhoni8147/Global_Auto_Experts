import React from 'react';
import './PriceComparisonChart.css';
import { FaCar, FaRupeeSign,FaWarehouse, FaTools } from 'react-icons/fa';
import img3 from './gae.png';
const PriceComparisonChart = () => {
  return (
    <div className="price-comparison-chart">
      <h2>Price Comparison Chart</h2>
      <div className="price-comparison-grid">
        <div className="comparison-division">
          <FaCar className="car-icon" />
          <p>Car Model and Brand</p>
          <p>Hatchback</p>
          <p>Sedan</p>
          <p>Luxury</p>
        </div>
        <div className="comparison-division">
          <FaWarehouse className="car-icon" />
          <p>Brand Authorized Service Center</p>
          <p className="scratched-price"><FaRupeeSign /> 4999</p>
          <p className="scratched-price"><FaRupeeSign /> 5599</p>
          <p className="scratched-price"><FaRupeeSign /> 20999</p>
        </div>
        <div className="comparison-division">
          <FaTools className="car-icon" />
          <p>Local Auto Repair Shop</p>
          <p className="scratched-price"><FaRupeeSign /> 3999</p>
          <p className="scratched-price"><FaRupeeSign /> 4599</p>
          <p className="scratched-price"><FaRupeeSign /> 16999</p>
        </div>
        <div className="comparison-division">
          <img src={img3} alt="Garage" className="garage-image" />
          <p className="global-experts-price">Global Auto Experts Price</p>
          <p className="price"><FaRupeeSign /> 1999</p>
          <p className="price"><FaRupeeSign /> 2999</p>
          <p className="price"><FaRupeeSign /> 13999</p>
        </div>
      </div>
    </div>
  );
};

export default PriceComparisonChart;
