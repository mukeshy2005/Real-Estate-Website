import React from 'react';
import './HowItWorks.css';  // Import the CSS file

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <i className="icon icon-home"></i>
          <h3>Find a Property.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="step">
          <i className="icon icon-money"></i>
          <h3>Buy a Property.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="step">
          <i className="icon icon-invest"></i>
          <h3>Investing.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
