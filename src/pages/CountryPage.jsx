// client/src/pages/CountryPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipeList from '../components/RecipeList';

const CountryPage = () => {
    const { id } = useParams();
    const [country, setCountry] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [countryRes, recipesRes] = await Promise.all([
                    axios.get(`/countries/${id}`),
                    axios.get(`/recipes/country/${id}`)
                ]);
                setCountry(countryRes.data);
                setRecipes(recipesRes.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        
        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!country) {
        return <div>Country not found</div>;
    }

    return (
        <div className="country-page">
            <h1>{country.name}</h1>
            <img src={country.flagImage} alt={`${country.name} flag`} className="country-flag" />
            
            <h2>Popular Dishes</h2>
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default CountryPage;