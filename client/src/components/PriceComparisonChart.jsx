import React from 'react';
import './PriceComparisonChart.css';
import { FaCar, FaRupeeSign } from 'react-icons/fa';

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
          <img src="https://tse3.mm.bing.net/th?id=OIP.K9hCAHquqz64sg0-_Lk3tgHaGl&pid=Api&P=0&h=180" alt="Garage" className="garage-image" />
          <p>Brand Authorized Service Center</p>
          <p className="scratched-price"><FaRupeeSign /> 4999</p>
          <p className="scratched-price"><FaRupeeSign /> 5599</p>
          <p className="scratched-price"><FaRupeeSign /> 20999</p>
        </div>
        <div className="comparison-division">
          <img src="https://png.pngtree.com/png-vector/20220614/ourmid/pngtree-illustration-of-an-automotive-mechanic-or-aircraft-png-image_5063858.png" alt="Garage" className="garage-image" />
          <p>Local Auto Repair Shop</p>
          <p className="scratched-price"><FaRupeeSign /> 3999</p>
          <p className="scratched-price"><FaRupeeSign /> 4599</p>
          <p className="scratched-price"><FaRupeeSign /> 16999</p>
        </div>
        <div className="comparison-division">
          <img src="https://png.pngtree.com/png-vector/20220613/ourmid/pngtree-illustration-of-an-automotive-mechanic-or-aircraft-png-image_5071485.png" alt="Garage" className="garage-image" />
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
