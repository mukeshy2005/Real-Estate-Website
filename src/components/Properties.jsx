import React from 'react';
import './Properties.css';  // Import the CSS file

const Properties = () => {
  const propertyData = [
    {
      name: 'Property 1',
      price: '$3,400,000',
      beds: 6,
      baths: 4,
      sqft: '4,250 sqft.',
      address: '480 12th, Unit 14, San Francisco, CA',
      img: './src/assets/property1.jpg', // Replace with actual image path
    },
    {
      name: 'Property 2',
      price: '$2,800,000',
      beds: 5,
      baths: 3,
      sqft: '3,800 sqft.',
      address: '123 Oak St, San Francisco, CA',
      img: './src/assets/property2.jpg', // Replace with actual image path
    },
    {
      name: 'Property 3',
      price: '$4,200,000',
      beds: 7,
      baths: 5,
      sqft: '5,100 sqft.',
      address: '789 Maple Ave, San Francisco, CA',
      img: './src/assets/property3.jpg', // Replace with actual image path
    },
    {
      name: 'Property 4',
      price: '$3,100,000',
      beds: 6,
      baths: 4,
      sqft: '4,000 sqft.',
      address: '456 Pine St, San Francisco, CA',
      img: './src/assets/property4.jpg', // Replace with actual image path
    }
  ];

  return (
    <section className="properties-section">
      <h2 className="properties-title">Properties</h2>
      <div className="properties-container">
        {propertyData.map((property, index) => (
          <div className="property-card" key={index}>
            <img src={property.img} alt={property.name} className="property-image" />
            <h3 className="property-price">{property.price}</h3>
            <ul className="property-details">
              <li>{property.beds} beds</li>
              <li>{property.baths} baths</li>
              <li>{property.sqft}</li>
            </ul>
            <p className="property-address">{property.address}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <a href="/previous" className="pagination-link">Previous</a> / 
        <a href="/next" className="pagination-link">Next</a>
      </div>
      <button className="view-listings-btn">View All Property Listings</button>
    </section>
  );
};

export default Properties;
