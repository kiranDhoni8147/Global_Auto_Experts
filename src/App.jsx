import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Carservice from './components/Carservice';
import ImageSlider from './components/ImageSlider';
import ServiceSlider from './components/ServiceSlider';
import PeriodicMaintanence from './components/ServiceSlider/PeriodicMaintanence';
import AirCondition from './components/ServiceSlider/AirCondition';
import BatteryReplacement from './components/ServiceSlider/BatteryReplacement';
import BrakeServices from './components/ServiceSlider/BrakeServices';
import OilandFilter from './components/ServiceSlider/OilandFilter';
import ServiceSteps from './components/ServiceSteps';
import Advantages from './components/Advantages';
import TrustedMechanics from './components/TrustedMechnanics';
import Carservicee from './components/Carservicee';
import Roadsideassistance from './components/Roadsideassistance';
import ServiceTracker from './components/ServiceTracker';
import BrandDivision from './components/BrandDivision';
import Testimonials from './components/Testimonials';
import ServiceSliderr from './components/ServiceSliderr';
import Footer from './components/Footer';
import Puncture from './components/ServiceSliderr/Puncture';
import BatteryJump from './components/ServiceSliderr/BatteryJump';
import MinorRepair from './components/ServiceSliderr/MinorRepair';
import EmergencyFuel from './components/ServiceSliderr/EmergencyFuel';
import KeyRecovery from './components/ServiceSliderr/KeyRecovery';

const App = () => {
  return (
    <Router>
      <div>
        <Nav /> <br/>
        <Carservice /> <br/>
        <ImageSlider /> <br/>
        <Routes>
          <Route path="/" element={<ServiceSlider />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carservicee" element={<Carservicee />} />
          <Route path="/roadsideassistance" element={<Roadsideassistance />} />
          <Route path="/booking/periodic-maintenance" element={<PeriodicMaintanence />} />
          <Route path="/booking/air-condition-system" element={<AirCondition />} />
          <Route path="/booking/battery-replacement" element={<BatteryReplacement />} />
          <Route path="/booking/brake-services" element={<BrakeServices />} />
          <Route path="/booking/oil-and-filter" element={<OilandFilter />} />
          <Route path="/booking/puncture" element={<Puncture />} />
          <Route path="/booking/battery-jump" element={<BatteryJump />} />
          <Route path="/booking/minor-repair" element={<MinorRepair />} />
          <Route path="/booking/emergency-fuel" element={<EmergencyFuel />} />
          <Route path="/booking/key" element={<KeyRecovery />} />
        </Routes>
        <ServiceSliderr /> <br/>
        <ServiceSteps /> <br/>
        <Advantages /> <br/>
        <TrustedMechanics /> <br/>
        <ServiceTracker /> <br/>
        <Testimonials /> <br/>
        <BrandDivision /> <br/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
