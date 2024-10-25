import React, { useState } from 'react';
import './Testimonials.css'; // Importing the CSS file

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium.",
      name: "Nick Andros",
      role: "Client",
      number: 7
    },
    {
      quote: "Another amazing feedback! This company really helped me find the perfect property. Great service and highly recommended.",
      name: "Jane Doe",
      role: "Client",
      number: 8
    },
    {
      quote: "Fantastic support and service! I couldn't be happier with my decision to work with them.",
      name: "John Smith",
      role: "Client",
      number: 9
    }
  ];

  // Function to handle previous testimonial
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next testimonial
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Are Saying</h2>
      <div className="testimonial-container">
        <button className="prev" onClick={handlePrevClick}>
          &#8249;
        </button>

        <div className="testimonial">
          <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
          <div className="testimonial-client">
            <p><span>{testimonials[currentIndex].role}</span></p>
            <p>{testimonials[currentIndex].name}</p>
            <p>{testimonials[currentIndex].number}</p>
          </div>
        </div>

        <button className="next" onClick={handleNextClick}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
