import React from 'react';
import './about.css';
import { useTranslation } from 'react-i18next';

const About = ({ selectedCity }) => {
  const { t } = useTranslation();

  if (!selectedCity || !selectedCity.moreInfo) {
    return <div>Loading...</div>;
  }

  const { name, moreInfo } = selectedCity;
  const { location = 'Unknown location', cost = 'Unknown cost', popularPlaces = [], mapLink = '#', popularPlacesImages = [] } = moreInfo;

  const getImageDescription = (cityName, index) => {
    const descriptions = {
      Samarkand: ['This is a Registan image', 'This is a Shahi-Zinda image'],
      Tashkent: ['This is an Amir Timur Museum image', 'This is a Tashkent Tower image'],
      Istanbul: ['This is a Hagia Sophia image', 'This is a Blue Mosque image'],
      NewYork: ['This is a Statue of Liberty image', 'This is a Central Park image'],
      Dubai: ['This is a Burj Khalifa image', 'This is a Dubai Mall image'],
      Seoul: ['This is a Gyeongbokgung Palace image', 'This is an N Seoul Tower image'],
      Tokyo: ['This is a Tokyo Tower image', 'This is a Shinjuku Gyoen image'],
      Madrid: ['This is a Prado Museum image', 'This is a Royal Palace image'],
      Paris: ['This is an Eiffel Tower image', 'This is a Louvre Museum image'],
    };

    return descriptions[cityName]?.[index] || `Popular place ${index + 1}`;
  };

  return (
    <section id="about" className="about-section">
      <h1 className="about-title">About {name}</h1>
      <p className="about-description">Learn more about {name}, a city in {location}.</p>
      <div className="about-content">
        <div className="city-details">
          <p><strong>Location:</strong> <span className="highlight">{location}</span></p>
          <p><strong>Cost:</strong> <span className="highlight">{cost}</span></p>
          <p><strong>Popular Places:</strong> <span className="highlight">{popularPlaces.join(', ')}</span></p>
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="map-link">View Map</a>
        </div>
        <div className="images-container">
          {popularPlacesImages.map((img, index) => (
            <div key={index} className="image-item">
              <img src={img} alt={`Popular place ${index + 1}`} className="place-image" />
              <p className="image-description">{getImageDescription(name, index)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
