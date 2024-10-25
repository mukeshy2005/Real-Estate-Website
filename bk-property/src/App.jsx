import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
    {/* <Routes> */}
    {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/eroSection" element={<HeroSection />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resource" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contest" element={<ContestPage />} />
                <Route path="/club" element={<Club />} /> */}
    {/* </Routes> */}
    <Header/>
    {/* <hr /> */}
    <HeroSection/>
    {/* <WhatsAppRedirect/> */}
    <HowItWorks/>
    <Properties/>
    {/* <Agents/> */}
    <AboutSection/>
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
    
    </>
  )
}

export default App
