import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/blogs" element={<Blogs />} />
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
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/carspaa' element={<CarSpa/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
