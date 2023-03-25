import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './Pages/Terms/Terms';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    <Route path='/terms' element={<Terms />} />
    </Routes>
    </>
  );
}

export default App;
