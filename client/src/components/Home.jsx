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
import SubscriptionBox from './SubscriptionBox';
import Services from './Services';
import PriceComparisonChart from './PriceComparisonChart';
import RoadsideAssistanceComponent from './RoadsideAssistanceComponent';
import LaunchingSoonComponent from './LaunchingSoonComponent';
import TopNav from './TopNav';
const Home = () => {
  return (
    <div>
        <Nav /> <br/> <br/> <br/> <br/> <br/>
        <ImageSlider /> <br/>
        <Services/> <br/>
        <ServiceSlider/> <br/>
        <ServiceSliderrr/> <br/>
        <ServiceSliderr /> <br/> <br/>
        <SubscriptionBox/> <br/>
        <PriceComparisonChart/> <br/>
        <Partners/> <br/>
        <ServiceSteps /> <br/>
        <Advantages /> <br/>
        <TrustedMechanics /> <br/>
        <ServiceTracker /> <br/>
        <RoadsideAssistanceComponent/> <br/>
        <LaunchingSoonComponent/> <br/>
        <Testimonials /> <br/>
        <BrandDivision /> <br/>
        <Footer />
    </div>
  );
};

export default Home;
