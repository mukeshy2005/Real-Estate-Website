 import React from 'react';
import YouTube from 'react-youtube'; // Import YouTube component
import './Properties.css';

const Properties = () => {
  const propertyData = [
    {
      name: 'Property 1',
      price: '$3,400,000',
      beds: 6,
      baths: 4,
      sqft: '4,250 sqft.',
      address: '480 12th, Unit 14, San Francisco, CA',
      img: './src/assets/property1.jpg',
    },
    {
      name: 'Property 2',
      price: '$2,800,000',
      beds: 5,
      baths: 3,
      sqft: '3,800 sqft.',
      address: '123 Oak St, San Francisco, CA',
      img: './src/assets/property2.jpg',
    },
    {
      name: 'Property 3',
      price: '$4,200,000',
      beds: 7,
      baths: 5,
      sqft: '5,100 sqft.',
      address: '789 Maple Ave, San Francisco, CA',
      img: './src/assets/property3.jpg',
    },
    {
      name: 'Property 4',
      price: '$3,100,000',
      beds: 6,
      baths: 4,
      sqft: '4,000 sqft.',
      address: '456 Pine St, San Francisco, CA',
      img: './src/assets/property4.jpg',
    },
  ];

  // Sample YouTube video IDs
  const youtubeVideos = [
    { id: 'jXYxr6YOw6g', title: '3 bhk Luxury flat in uttam nagar delhi' },
    { id: 'ImwWa6NXptU', title: 'Flats in Uttam Nagar UNDER 31 Lakh ' },
    { id: 'oq69WewmzMQ', title: '1/2/3 bhk flats for sale in uttam nagar' },
    { id: '1sIDxY6AkGc', title: '3 BHK Flats Under 42 Lakh in Uttam Nagar' },
  ];

  const opts = {
    height: '250',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

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

      {/* New Section for YouTube Videos */}
      <h2 className="properties-title">Featured Property Videos</h2>
      <div className="youtube-videos-container">
        {youtubeVideos.map((video, index) => (
          <div className="youtube-card" key={index}>
            <YouTube videoId={video.id} opts={opts} className="youtube-video" />
            <div className="youtube-info">
              <h3>{video.title}</h3>
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
