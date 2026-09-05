import React from 'react';

const Home = ({ data }) => {
  return (
    <div className="home-layout fade-in">
      <div className="home-text">
        <h1 className="home-title gradient-text">{data.greeting}</h1>
        <p className="home-desc">{data.description}</p>
      </div>
      <div className="home-image-container">
        <img 
          src={data.imagePath} 
          alt="Profile" 
          className="home-image" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/450x600?text=Profile+Photo';
          }}
        />
      </div>
    </div>
  );
};

export default Home;
