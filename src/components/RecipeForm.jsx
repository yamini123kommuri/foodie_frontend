import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    image: null
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log('Recipe submitted:', recipe);
    navigate('/recipes'); // Redirect after submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Title</label>
        <input 
          type="text" 
          name="title" 
          value={recipe.title} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div>
        <label>Ingredients</label>
        <textarea 
          name="ingredients" 
          value={recipe.ingredients} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div>
        <label>Instructions</label>
        <textarea 
          name="instructions" 
          value={recipe.instructions} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div>
        <label>Recipe Image</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={(e) => setRecipe({...recipe, image: e.target.files[0]})} 
        />
      </div>
      
      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default RecipeForm;