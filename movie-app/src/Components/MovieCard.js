// src/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{movie.title}</h3>
      <p><strong>Description:</strong> {movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} style={{ width: '150px', borderRadius: '4px' }} />
      <p><strong>Rating:</strong> {movie.rating} / 5</p>
    </div>
  );
};

export default MovieCard;
