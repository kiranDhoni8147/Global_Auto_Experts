import React from 'react';
import ServiceSlider from './ServiceSlider';
import Nav from './Nav';
import Carservice from './Carservice';
import ImageSlider from './ImageSlider';
import ServiceSliderr from './ServiceSliderr';
import ServiceSteps from './ServiceSteps';
import Advantages from './Advantages';
import TrustedMechanics from './TrustedMechnanics';
import ServiceTracker from './ServiceTracker';
import Testimonials from './Testimonials';
import BrandDivision from './BrandDivision';
import Footer from './Footer';
import ServiceSliderrr from './ServiceSliderrr';
import Partners from './Partners';
const Home = () => {
  return (
    <div>
        <Nav /> <br/>
        <Carservice /> <br/>
        <ImageSlider /> <br/>
        <ServiceSlider/> <br/>
        <ServiceSliderrr/> <br/>
        <ServiceSliderr /> <br/>
        <Partners/>
        <ServiceSteps /> <br/>
        <Advantages /> <br/>
        <TrustedMechanics /> <br/>
        <ServiceTracker /> <br/>
        <Testimonials /> <br/>
        <BrandDivision /> <br/>
        <Footer />
    </div>
  );
};

export default Home;
