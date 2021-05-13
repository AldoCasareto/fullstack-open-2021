import React from 'react'

const Filter = ({ handleSearch }) => {
  return (
    <div>
      Find Countries<input type='text' onChange={handleSearch} />
    </div>
  );
};

export default Filter
