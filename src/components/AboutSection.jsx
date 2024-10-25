import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-image">
        {/* Image placeholder */}
        <img src="./src/assets/horizontal.jpg" alt="Property 1" />
      </div>
      <div className="about-content">
        <h2>Discover Luxury Living in Delhi's Prime Locations.</h2>
        <p>2, 3, and 4 BHK Flats for Sale and Rent in Uttam Nagar and Dwarka.</p>
        <p>
        BK Property offers luxury 2, 3, and 4 BHK flats in Uttam Nagar and Dwarka, blending modern design with premium amenities for a comfortable, upscale living experience
        </p>
        <ul>
          <li>Spacious and Modern Design: Homes built with the modern family in mind.</li>
          <li>Prime Locations: Easy access to transportation, schools, and shopping centers.</li>
          <li>Luxury Amenities: Experience high-end living with fully-equipped interiors and quality finishes.</li>
          <li>Tailored Property Solutions: Whether you’re buying or renting, we provide personalized assistance to meet your needs.</li>
          {/* <li>Placeat maxime animi minus</li> */}
        </ul>
        {/* <button className="learn-more-btn">Learn More</button> */}
      </div>
    </section>
  );
};

export default AboutSection;
