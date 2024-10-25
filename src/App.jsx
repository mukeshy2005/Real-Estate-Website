import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
// import '@fortawesome/fontawesome-free/css/all.css';

import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import Properties from './components/Properties'
import Agents from './components/Agents'
import AboutSection from './components/AboutSection'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import WhatsAppRedirect from './components/Whatsapp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*
    <Router>
     <Routes> 
                <Route path="/" element={<Header/>} /> 
                <Route path="/HeroSection" element={<HeroSection />} />
                <Route path="/HowItWorks" element={<HowItWorks />} />
                <Route path="/Properties" element={<Properties />} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/Testimonials" element={<Testimonials />} />
                <Route path="/ContactUs" element={<ContactUs/>} /> 
                <Route path="/Footer" element={<Footer/>} /> 
     </Routes> 
     */}
      
    <Header/>
    
    <HeroSection/>
    {/* <WhatsAppRedirect/> */}
    <HowItWorks/>
    <Properties/>
    {/* <Agents/> */}
    {/* <AboutSection/> */}
    <Services/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    

     <a
        href="https://wa.me/+918826560737"// i have replaced the previous code with " https://wa.me/9311596345" to get whatsapp redirect
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a> 
      {/* </Router> */}
    
    </>
  )
}

export default App
