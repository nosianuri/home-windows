import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './Pages/Terms/Terms';

function App() {
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
