import React from 'react';
import './Home.css';

const locations = [
  { name: 'India', backgroundColor: '#f6e3c9', color: '#7d493c' },
  { name: 'Kashmir', backgroundColor: '#e8edf3', color: '#2f5770' },
  { name: 'Pakistan', backgroundColor: '#f8f8f8', color: '#333' },
  { name: 'Bangladesh', backgroundColor: '#f8f8f8', color: '#333' },
];

const Home = () => {
  return (
    <div className="container">
      {locations.map((location, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundColor: location.backgroundColor, color: location.color }}
        >
          {location.name}
        </div>
      ))}
    </div>
  );
};

export default Home;
