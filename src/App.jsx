// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Properties from './components/Properties';
import Agents from './components/Agents';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/About" element={<AboutSection />} />
        <Route path="/Services" element={<Services />} />
        {/* <Route path="/Testimonials" element={<Testimonials />} /> */}
        <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Footer" element={<Footer />} />
      </Routes>


      {/* WhatsApp Floating Button */}
      <div class="floating-icons">
  <a href="https://wa.me/yourwhatsapplink" class="whatsapp_float">
    <i class="fab fa-whatsapp"></i>
  </a>
  <a href="https://www.youtube.com/yourchannel" class="youtube_float">
    <i class="fab fa-youtube"></i>
  </a>
</div>

      <Testimonials/>
      <Footer/>
    </Router>
  );
}

export default App;
