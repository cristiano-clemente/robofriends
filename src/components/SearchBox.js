import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <input
      style={{ outline: 'none', border: '0', padding: '15px', backgroundColor: 'var(--overlay-color)', color: 'white', width: '23rem' }}
      className='br3'
      type='search'
      placeholder='Search'
      onChange={searchChange}
    />
  );
}

export default SearchBox;