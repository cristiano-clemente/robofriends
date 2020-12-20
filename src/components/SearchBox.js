import React from 'react';
import styled from 'styled-components';

const SearchByName = styled.input`
    outline: none;
    border: 0;
    padding: 1rem;
    background-color: var(--overlay-color);
    font-size: 1.1rem;
    color: white;
    border-radius: 0.5rem;
    width: 30vw;
    @media only screen and (max-width: 600px) {
         width: 90vw;
    }

    /* make search box placeholder text white */
    ::placeholder {
      color: var(--text-medium-emphasis); /* chrome, firefox, opera, safari */
      opacity: 1; /* firefox */
    }

    :-ms-input-placeholder {
      color: var(--text-medium-emphasis); /* internet explorer */
    }

    ::-ms-input-placeholder {
      color: var(--text-medium-emphasis);  /* microsoft edge */
    }

    /* disable search box cancel button */
    ::-webkit-search-cancel-button {
      display: none;
    }
  `;

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <SearchByName
      type='search'
      placeholder='Search by name'
      onChange={searchChange}
    />
  );
}

export default SearchBox;