import React from 'react';
import './main.css';

const Main = () => {
  return (
    <section id="main" className="main-section">
      <h1 className="main-title">Welcome to ORU Tour</h1>
      <p className="main-subtitle">Explore the world with us and discover amazing destinations.</p>
      
      <div className="search-container">
        <div className="search-item">
          <label htmlFor="country">Where to?</label>
          <input type="text" id="country" name="country" placeholder="Enter country name" />
        </div>
        
        <div className="search-item">
          <label htmlFor="destination">Destination</label>
          <select id="destination" name="destination">
            <option value="place1">Place 1</option>
            <option value="place2">Place 2</option>
            <option value="place3">Place 3</option>
            <option value="place4">Place 4</option>
            <option value="place5">Place 5</option>
            <option value="place6">Place 6</option>
          </select>
        </div>
        
        <div className="search-item">
          <label htmlFor="duration">Duration</label>
          <input type="date" id="duration" name="duration" />
        </div>
        
        <button className="search-button">Search Now</button>
      </div>

      <div className="iframe-container">
        <iframe 
          src='https://my.spline.design/map-b8fad2dcd54d6ce4cef45b602bc267af/' 
          frameBorder='0' 
          width='100%' 
          height='500' 
          title='Interactive Rocket'
        ></iframe>
      </div>
    </section>
  );
}

export default Main;
