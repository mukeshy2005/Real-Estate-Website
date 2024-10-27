import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:bkproperties3@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Send Enquiry</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <label>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here.." />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Address</h2>
          <p>Best Property Dealer | 2/3/4 BHK Flats In Uttam Nagar, Shop no 4, Valmiki mandir, Santosh Park, Uttam Nagar, Delhi, 110059</p>
          <h2>Phone</h2>
          <p><a href="tel:+918826560737">+91 88265 60737</a></p>
          <h2>Email Address</h2>
          <p><a href="mailto:bkproperties3@gmail.com">bkproperties3@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
