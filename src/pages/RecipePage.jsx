// client/src/pages/RecipePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipePage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await axios.get(`/recipes/${id}`);
                setRecipe(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        
        fetchRecipe();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="recipe-page">
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            
            <div className="recipe-meta">
                <p>Prep Time: {recipe.prepTime} mins</p>
                <p>Cook Time: {recipe.cookTime} mins</p>
                <p>Servings: {recipe.servings}</p>
                <p>Difficulty: {recipe.difficulty}</p>
            </div>
            
            <div className="recipe-section">
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.quantity} {ingredient.name}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="recipe-section">
                <h2>Instructions</h2>
                <ol>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default RecipePage;