import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Home from './components/Home';
import PeriodicMaintanence from './components/ServiceSlider/PeriodicMaintanence';
import AirCondition from './components/ServiceSlider/AirCondition';
import BatteryReplacement from './components/ServiceSlider/BatteryReplacement';
import BrakeServices from './components/ServiceSlider/BrakeServices';
import OilandFilter from './components/ServiceSlider/OilandFilter';
import Carservicee from './components/Carservicee';
import Roadsideassistance from './components/Roadsideassistance';
import Puncture from './components/ServiceSliderr/Puncture';
import BatteryJump from './components/ServiceSliderr/BatteryJump';
import MinorRepair from './components/ServiceSliderr/MinorRepair';
import EmergencyFuel from './components/ServiceSliderr/EmergencyFuel';
import KeyRecovery from './components/ServiceSliderr/KeyRecovery';
import Aboutus from './components/Aboutus';
import CarSpa from './components/CarSpa';
import CarDetailing from './components/ServiceSliderrr/CarDetailing';
import CarWash from './components/ServiceSliderrr/CarWash';
import InteriorCleaning from './components/ServiceSliderrr/InteriorCleaning';
import DeepSpa from './components/ServiceSliderrr/DeepSpa';
import Partnersnav from './components/Partnersnav';
import './components/correction.css'
import SubscribePage from './components/SubscribePage';
import Terms from './components/Terms';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/carservicee" element={<Carservicee />} />
          <Route path="/auto-services" element={<Carservicee/>}/>
          <Route path="/roadsideassistance" element={<Roadsideassistance />} />
          <Route path="/roadside-assistance" element={<Roadsideassistance />}/>
          <Route path="/booking/periodic-maintenance" element={<PeriodicMaintanence />}/>
          <Route path="/booking/air-condition-system" element={<AirCondition />}/>
          <Route path="/booking/battery-replacement" element={<BatteryReplacement />} />
          <Route path="/booking/brake-services" element={<BrakeServices />} />
          <Route path="/booking/oil-and-filter" element={<OilandFilter />} />
          <Route path="/booking/puncture" element={<Puncture />} />
          <Route path="/booking/battery-jump" element={<BatteryJump />} />
          <Route path="/booking/minor-repair" element={<MinorRepair />} />
          <Route path="/booking/emergency-fuel" element={<EmergencyFuel />} />
          <Route path="/booking/car-detailing" element={<CarDetailing/>} />
          <Route path="/booking/car-wash" element={<CarWash/>} />
          <Route path="/booking/interior-cleaning" element={<InteriorCleaning/>} />
          <Route path='/booking/deep-spa' element={<DeepSpa/>}/>
          <Route path="/booking/key" element={<KeyRecovery />} />
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/carspaa' element={<CarSpa/>}/>
          <Route path='/car-spa' element={<CarSpa/>}/>
          <Route path='/partners' element={<Partnersnav/>}/>
          <Route path="/subscribe" element={<SubscribePage/>} />
          <Route path="/terms" element={<Terms/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
