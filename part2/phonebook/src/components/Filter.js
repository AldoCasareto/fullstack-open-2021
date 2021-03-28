import React from 'react';

function Filter({ filter, handleFilter }) {
  return (
    <div>
      <p>Filter shown with</p>
      <input value={filter} onChange={handleFilter} />
    </div>
  );
}

export default Filter;
