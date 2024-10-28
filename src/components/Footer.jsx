import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    alert(`Email sent to: ${email}`);
  };

  return (
    <footer className="footer">
      <div className="footer-section about">
        <h2>BK PROPERTY</h2>
        <p> " We BK Property are known as best property dealer in Uttam Nagar. We buy, sell or rent 2/3/4 BHK property in Uttam Nagar, New Delhi. We helps our clients find the perfect 2, 3, or 4 bedroom flat, whether you're a family or a professional. Our 2/3/4 BHK flats in Uttam Nagar are perfect for small families or couples. These flats are designed to provide maximum space utilization and comfort. Featuring modern amenities, ample natural light, and well-ventilated rooms, these units offer an ideal living space at an affordable price. The layout typically includes spacious bedrooms, a living room, a kitchen, and bathrooms. As a best property dealer in Uttam Nagar, we bring years of experience and in-depth knowledge of the property dealer. "</p>
      </div>
      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h2>Subscribe Us</h2>
        <div className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button onClick={handleSend}>Send</button>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61557629109999"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/bk_properties01/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@BKPROPERTIES01" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-section map">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4099041370932!2d77.05657327409364!3d28.617474484766873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d054f89653abd%3A0xe46b4bcb4dca4ae0!2sBest%20Property%20Dealer%20%7C%202%2F3%2F4%20BHK%20Flats%20In%20Uttam%20Nagar!5e0!3m2!1sen!2sin!4v1730146873952!5m2!1sen!2sin"
          width="100%"
          height="150"
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 All rights reserved | Made by <span>Mukesh Yadav</span></p>
      </div>
    </footer>
  );
};

export default Footer;
