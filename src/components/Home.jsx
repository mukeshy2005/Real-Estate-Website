// Home.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Properties from './components/Properties';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';

function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Properties />
      <AboutSection />
      <Services />
      <Testimonials />
      <ContactUs />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918826560737" // Update phone number as needed
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default Home;
