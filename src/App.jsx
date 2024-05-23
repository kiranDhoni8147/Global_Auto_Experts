// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Carservice from './components/Carservice';
import ImageSlider from './components/ImageSlider';
import ServiceSlider from './components/ServiceSlider';
import PeriodicMaintanence from './components/PeriodicMaintanence';
import AirCondition from './components/AirCondition';
import BatteryReplacement from './components/BatteryReplacement';
import BrakeServices from './components/BrakeServices';
import OilandFilter from './components/OilandFilter';
import ServiceSteps from './components/ServiceSteps';
import Advantages from './components/Advantages';
import TrustedMechanics from './components/TrustedMechnanics';
import Carservicee from './components/Carservicee';
import Roadsideassistance from './components/Roadsideassistance';
import ServiceTracker from './components/ServiceTracker';
import BrandDivision from './components/BrandDivision';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Carservice/>
        <Routes>
          <Route path="/carservicee" element={<Carservicee/>}/>
          <Route path='/roadsideassistance' element={<Roadsideassistance/>}/>
        </Routes>
        <ImageSlider/>
        <ServiceSlider/>
        <Routes>
        <Route  path="/booking/periodic-maintenance" element={<PeriodicMaintanence/>}/>
        <Route  path="/booking/air-condition-system" element={<AirCondition/>}/>
        <Route  path="/booking/battery-replacement" element={<BatteryReplacement/>}/>
        <Route  path="/booking/brake-services" element={<BrakeServices/>}/>
        <Route  path="/booking/oil-and-filter" element={<OilandFilter/>}/>
        </Routes> <br/>
        <ServiceSteps/>
        <Advantages/>
        <br/>
        <TrustedMechanics/> <br/>
        <ServiceTracker/><br/>
        <Testimonials/> <br/>
      </div>
    </Router>
  );
};

export default App;
