// client/src/components/RecipeList.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <Link to={`/recipe/${recipe._id}`} key={recipe._id} className="recipe-card">
                    <img src={recipe.image} alt={recipe.name} />
                    <h3>{recipe.name}</h3>
                    <p>{recipe.country?.name}</p>
                </Link>
            ))}
        </div>
    );
};

export default RecipeList;