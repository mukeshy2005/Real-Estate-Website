 // HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const images = [
  './src/assets/property1.jpg', // Replace with the URLs or paths to your images
  './src/assets/property2.jpg',
  './src/assets/property3.jpg'
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="overlay">
        <h1>Buy and sell real estate properties</h1>
        <p>
          Buy, sell, or invest in affordable 1, 2, 3, and 4 BHK flats in prime
          locations like Uttam Nagar and Dwarka with trusted real estate services.
        </p>
        <div className="controls">
          <button onClick={goToPrevious} className="control-button">Previous</button>
          <button onClick={goToNext} className="control-button">Next</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
