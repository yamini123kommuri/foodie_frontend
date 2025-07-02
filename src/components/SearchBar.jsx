// client/src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Search for dishes or ingredients..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;