import React, { useState } from 'react';
import './Testimonials.css'; // Importing the CSS file

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      quote: "Best of the Best real estate broker I recommend in new Delhi for every neede shop keeper on Market places. Very helpful man & sportive man in uttam nagar market thanks to you. bablu  Bhai at Bk property dealer.",
      name: "Mukesh Yadav",
      role: "Client",
      // number: 7
    },
    {
      quote: "Very cooperative person with variety of rooms available..... Do contact him when u are searching for good room at good location",
      name: "Mohan Singh",
      role: "Client",
      // number: 8
    },
    {
      quote: " Actually I was searching flat in Delhi he fulfilled everything that I demanded in flat so highly recommended please try once before any one else  .",
      name: "Roushan Kumar",
      role: "Client",
      // number: 9
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
