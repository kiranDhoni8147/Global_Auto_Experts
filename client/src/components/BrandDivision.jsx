import React from 'react';
import './BrandDivision.css'

const BrandDivision = () => {

  const cars = [
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/1.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/2.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/3.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/4.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/5.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/6.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/7.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/8.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/11.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/10.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/13.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/12.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/15.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/14.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/16.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/17.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/28.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/29.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/30.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/33.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/34.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/36.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/38.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/39.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/42.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/43.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/44.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/46.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/47.jpeg' },
    { logo: 'https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/48.jpeg' },
  ];

  return (
    <div className="brand-division">
      <h2>Brands Served By Us</h2>
      <div className="car-list">
        {cars.map((car, index) => (
          <div className="car-item" key={index}>
            <img src={car.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDivision;
