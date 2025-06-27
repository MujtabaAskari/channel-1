import React from 'react';

import './search.css';

export const SearchBox = ({ onSearchChange }) => (
    <input
        className='search-box'
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
    />
);