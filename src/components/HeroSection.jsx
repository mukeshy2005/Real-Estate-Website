 // HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const images = [
  '/property1.jpg',
  '/property2.jpg',
  '/property3.jpg'
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
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
