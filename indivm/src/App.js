import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';
import SolarPVModules from './components/SolarPVModules';
import LiBattery from './components/LiBattery';
import DeyeInverter from './components/DeyeInverter';
import JaySolar from './components/SolarWaterHeater';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import WhatsAppBtn from './components/WhatsAppBtn';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <ScrollButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solarmodule" element={<SolarPVModules />} />
        <Route path="/libattery" element={<LiBattery />} />
        <Route path="/inverter" element={<DeyeInverter />} />
        <Route path="/solarwaterheater" element={<JaySolar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <WhatsAppBtn/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
