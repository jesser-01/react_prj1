import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      margin: '10px',
      padding: '10px',
      width: '250px',
      borderRadius: '8px',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
    }}>
      <img
        src={posterURL}
        alt={title}
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
};

export default MovieCard;
