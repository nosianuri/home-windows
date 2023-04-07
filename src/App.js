import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './Pages/Terms/Terms';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import HomeService from './Pages/HomeService/HomeService';
import PlumbingService from './Pages/HomeService/ServicePages/PlumbingService';
import HvacService from './components/HvacService/HvacService';
import ElectricalService from './components/ElectricalSErvice/ElectricalService';
import HomeCleaning from './components/HomeCleaning/HomeCleaning';
import HomePainting from './components/HomePainting/HomePainting';
import GutterService from './components/GutterService/GutterService';
import KitchenService from './components/KitchenService/KitchenService';
import Bathroom from './components/BathroomRemodeling/Bathroom';
import HomeSecurity from './components/HomeSecurity/HomeSecurity';
import MoversService from './components/MoversService/MoversService';
import FlooringService from './components/FlooringService/FlooringService';
import RoofingService from './components/RoofingService/RoofingService';
import SolarService from './components/SolarService/SolarService';
import WindowService from './components/WindowService/WindowService';
import WindowLander from './Pages/WindowLander/WindowLander';
import Roofing from './Pages/Roofing/Roofing';
import RoofPrivacyPolicy from './Pages/Roofing/RoofPrivacyPolicy';
import RoofTerms from './Pages/Roofing/RoofTerms';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);
  return (
    <>
    <Routes>
    <Route path='/window-installation' element={<Home />} />
    <Route path='/roofing-campaign' element={<Roofing />} />
    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    <Route path='/terms' element={<Terms />} />
    <Route path='/home-services' element={<HomeService />} />
    <Route path='/plumbing-service' element={<PlumbingService />} />
    <Route path='/hvac-services' element={<HvacService />} />
    <Route path='/electrical-services' element={<ElectricalService />} />
    <Route path='/home-cleaning' element={<HomeCleaning />} />
    <Route path='/home-painting' element={<HomePainting />} />
    <Route path='/gutters-services' element={<GutterService />} />
    <Route path='/kitchens-services' element={<KitchenService />} />
    <Route path='/bathroom-remodeling' element={<Bathroom />} />
    <Route path='/home-security' element={<HomeSecurity />} />
    <Route path='/movers-services' element={<MoversService />} />
    <Route path='/flooring-services' element={<FlooringService />} />
    <Route path='/roofing-services' element={<RoofingService />} />
    <Route path='/solar-services' element={<SolarService />} />
    <Route path='/windows-services' element={<WindowService />} />
    <Route path='/home-windows-installation' element={<WindowLander />} />
    </Routes>
    </>
  );
}

export default App;
