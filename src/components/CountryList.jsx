// client/src/components/CountryList.js
import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = ({ countries }) => {
    return (
        <div className="country-list">
            {countries.map(country => (
                <Link to={`/country/${country._id}`} key={country._id} className="country-card">
                    <img src={country.flagImage} alt={country.name} />
                    <h3>{country.name}</h3>
                </Link>
            ))}
        </div>
    );
};

export default CountryList;