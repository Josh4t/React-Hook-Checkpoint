// src/Filter.js
import React from 'react';

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
        min="0"
        max="5"
        style={{ marginRight: '10px' }}
      />
    </div>
  );
};

export default Filter;
