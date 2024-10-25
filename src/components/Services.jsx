import React from 'react';
import './Services.css'; // Importing the CSS file

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-heading">Services</h2>
      <div className="services-container">
        <div className="service-card">
          <div className="icon-container">
            <i className="fas fa-home"></i> {/* Search Property Icon */}
          </div>
          <h3>Search Property</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="/" className="learn-more">Learn More</a>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="fas fa-dollar-sign"></i> {/* Buy Property Icon */}
          </div>
          <h3>Buy Property</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="/" className="learn-more">Learn More</a>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="fas fa-chart-line"></i> {/* Investing Icon */}
          </div>
          <h3>Investing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="/" className="learn-more">Learn More</a>
        </div>

       {/* <div className="service-card">
          <div className="icon-container">
            <i className="fas fa-building"></i> {/* List a Property Icon 
          </div>
          <h3>List a Property</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="/" className="learn-more">Learn More</a>
        </div> */}

       {/* <div className="service-card">
          <div className="icon-container">
            <i className="fas fa-search"></i> {/* Property Locator Icon 
          </div>
          <h3>Property Locator</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="/" className="learn-more">Learn More</a>
        </div> */}

           {/* <div className="service-card"> */}
          {/* <div className="icon-container"> */}
            {/* <i className="fas fa-mobile-alt"></i> Stated Apps Icon */}
          {/* </div> */}
          {/* <h3>Stated Apps</h3> */}
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
          <a href="/" className="learn-more">Learn More</a> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Services;
