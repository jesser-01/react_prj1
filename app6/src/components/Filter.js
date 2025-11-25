import React from 'react';

const Filter = ({ filterTitle, setFilterTitle, filterRating, setFilterRating }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Filter by minimum rating"
        value={filterRating}
        min="0"
        max="10"
        onChange={(e) => setFilterRating(Number(e.target.value))}
        style={{ width: '150px' }}
      />
    </div>
  );
};

export default Filter;
