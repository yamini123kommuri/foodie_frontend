// client/src/pages/HomePage.js
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import RecipeList from '../components/RecipeList';

const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [countriesRes, recipesRes] = await Promise.all([
                    axios.get('/countries'),
                    axios.get('/recipes')
                ]);
                setCountries(countriesRes.data);
                setRecipes(recipesRes.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const handleSearch = async (term) => {
        setSearchTerm(term);
        if (term) {
            try {
                const res = await axios.get(`/recipes/search?q=${term}`);
                setRecipes(res.data);
            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                const res = await axios.get('/recipes');
                setRecipes(res.data);
            } catch (err) {
                console.error(err);
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home-page">
            <h1>Foodie Book</h1>
            <SearchBar onSearch={handleSearch} />
            
            {searchTerm ? (
                <div className="search-results">
                    <h2>Search Results for "{searchTerm}"</h2>
                    <RecipeList recipes={recipes} />
                </div>
            ) : (
                <>
                    <h2>Explore by Country</h2>
                    <CountryList countries={countries} />
                    
                    <h2>Popular Recipes</h2>
                    <RecipeList recipes={recipes.slice(0, 6)} />
                </>
            )}
        </div>
    );
};

export default HomePage;*/



import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage() {
  // Sample recipe data with categories and ratings
  /*const [recipeData, setRecipeData] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
      description: "A simple yet delicious traditional Italian pizza",
      ingredients: [
        { name: "pizza dough", quantity: 1, unit: "lb" },
        { name: "san marzano tomatoes", quantity: 14, unit: "oz" }
      ],
      instructions: [
        "Preheat oven to 475°F",
        "Roll out dough on floured surface",
        "Add toppings and bake for 12-15 minutes"
      ],
      category: "Italian",
      rating: 4.5,
      isFavorite: false
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
      description: "Soft and chewy cookies with melty chocolate chips",
      ingredients: [
        { name: "all-purpose flour", quantity: 2.25, unit: "cups" },
        { name: "chocolate chips", quantity: 2, unit: "cups" }
      ],
      instructions: [
        "Preheat oven to 375°F",
        "Mix dry ingredients",
        "Bake for 9-11 minutes"
      ],
      category: "Dessert",
      rating: 4.8,
      isFavorite: true
    },
    {
      id: 3,
      title: "Chicken Curry",
      imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      description: "Aromatic and flavorful chicken curry",
      ingredients: [
        { name: "chicken thighs", quantity: 2, unit: "lbs" },
        { name: "garam masala", quantity: 2, unit: "tsp" }
      ],
      instructions: [
        "Heat oil in large pot",
        "Add onions and sauté until golden",
        "Simmer for 30 minutes"
      ],
      category: "Indian",
      rating: 4.2,
      isFavorite: false
    },
    {
      id: 4,
      title: "Caesar Salad",
      imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
      description: "Classic Caesar salad with homemade dressing",
      ingredients: [
        { name: "romaine lettuce", quantity: 1, unit: "head" },
        { name: "Parmesan cheese", quantity: 0.5, unit: "cup" }
      ],
      instructions: [
        "Wash and chop lettuce",
        "Prepare dressing",
        "Toss with croutons and cheese"
      ],
      category: "Salad",
      rating: 4.0,
      isFavorite: false
    }
  ]);

*/











  const [recipeData, setRecipeData] = useState([
  {
    id: 1,
    title: "Classic Margherita Pizza",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    description: "A simple yet delicious traditional Italian pizza",
    ingredients: [
      { name: "pizza dough", quantity: 1, unit: "lb" },
      { name: "san marzano tomatoes", quantity: 14, unit: "oz" },
      { name: "fresh mozzarella", quantity: 8, unit: "oz" },
      { name: "basil leaves", quantity: 10, unit: "" }
    ],
    instructions: [
      "Preheat oven to 475°F",
      "Roll out dough on floured surface",
      "Spread crushed tomatoes, add cheese and basil",
      "Bake for 12-15 minutes until crust is golden"
    ],
    category: "Italian",
    rating: 4.5,
    isFavorite: false
  },
  {
    id: 2,
    title: "Chocolate Chip Cookies",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    description: "Soft and chewy cookies with melty chocolate chips",
    ingredients: [
      { name: "all-purpose flour", quantity: 2.25, unit: "cups" },
      { name: "chocolate chips", quantity: 2, unit: "cups" },
      { name: "brown sugar", quantity: 1, unit: "cup" },
      { name: "vanilla extract", quantity: 2, unit: "tsp" }
    ],
    instructions: [
      "Preheat oven to 375°F",
      "Cream butter and sugars",
      "Mix in eggs and vanilla",
      "Drop dough onto baking sheets",
      "Bake for 9-11 minutes"
    ],
    category: "Dessert",
    rating: 4.8,
    isFavorite: true
  },
  {
    id: 3,
    title: "Chicken Tikka Masala",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    description: "Creamy spiced Indian curry with grilled chicken",
    ingredients: [
      { name: "chicken thighs", quantity: 2, unit: "lbs" },
      { name: "garam masala", quantity: 2, unit: "tsp" },
      { name: "heavy cream", quantity: 1, unit: "cup" },
      { name: "tomato paste", quantity: 3, unit: "tbsp" }
    ],
    instructions: [
      "Marinate chicken in yogurt and spices",
      "Grill or bake chicken pieces",
      "Sauté onions, garlic, and spices",
      "Simmer sauce for 20 minutes",
      "Add chicken and cream"
    ],
    category: "Indian",
    rating: 4.7,
    isFavorite: false
  },
  {
    id: 4,
    title: "Beef Bourguignon",
    imageUrl: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
    description: "French red wine beef stew with mushrooms",
    ingredients: [
      { name: "beef chuck", quantity: 3, unit: "lbs" },
      { name: "red wine", quantity: 2, unit: "cups" },
      { name: "pearl onions", quantity: 20, unit: "" },
      { name: "bacon", quantity: 6, unit: "oz" }
    ],
    instructions: [
      "Brown beef in batches",
      "Sauté bacon and vegetables",
      "Deglaze with wine",
      "Simmer for 3 hours until tender"
    ],
    category: "French",
    rating: 4.9,
    isFavorite: true
  },
  {
    id: 5,
    title: "Avocado Toast",
    imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    description: "Simple healthy breakfast with smashed avocado",
    ingredients: [
      { name: "sourdough bread", quantity: 2, unit: "slices" },
      { name: "ripe avocado", quantity: 1, unit: "" },
      { name: "red pepper flakes", quantity: 0.5, unit: "tsp" },
      { name: "lemon juice", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Toast bread until golden",
      "Mash avocado with lemon juice",
      "Spread on toast",
      "Sprinkle with salt and pepper"
    ],
    category: "Breakfast",
    rating: 4.2,
    isFavorite: false
  },
  {
    id: 6,
    title: "Pad Thai",
    imageUrl: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    description: "Classic Thai stir-fried noodles with peanuts",
    ingredients: [
      { name: "rice noodles", quantity: 8, unit: "oz" },
      { name: "shrimp", quantity: 12, unit: "" },
      { name: "bean sprouts", quantity: 1, unit: "cup" },
      { name: "tamarind paste", quantity: 3, unit: "tbsp" }
    ],
    instructions: [
      "Soak noodles for 30 minutes",
      "Stir-fry shrimp and tofu",
      "Add noodles and sauce",
      "Toss with eggs and sprouts"
    ],
    category: "Thai",
    rating: 4.6,
    isFavorite: true
  },
  {
    id: 7,
    title: "Greek Salad",
    imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    description: "Fresh Mediterranean salad with feta and olives",
    ingredients: [
      { name: "cucumber", quantity: 1, unit: "" },
      { name: "cherry tomatoes", quantity: 2, unit: "cups" },
      { name: "feta cheese", quantity: 6, unit: "oz" },
      { name: "kalamata olives", quantity: 0.5, unit: "cup" }
    ],
    instructions: [
      "Chop vegetables into chunks",
      "Combine with olives and cheese",
      "Drizzle with olive oil",
      "Sprinkle oregano and salt"
    ],
    category: "Salad",
    rating: 4.3,
    isFavorite: false
  },
  {
    id: 8,
    title: "Beef Bulgogi",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d",
    description: "Korean marinated grilled beef",
    ingredients: [
      { name: "ribeye steak", quantity: 1.5, unit: "lbs" },
      { name: "soy sauce", quantity: 0.5, unit: "cup" },
      { name: "asian pear", quantity: 0.5, unit: "" },
      { name: "sesame oil", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Thinly slice beef",
      "Blend marinade ingredients",
      "Marinate beef for 2+ hours",
      "Grill or pan-fry quickly"
    ],
    category: "Korean",
    rating: 4.8,
    isFavorite: true
  },
 
  {
    id: 9,
    title: "Vegetable Stir Fry",
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
    description: "Quick and healthy mixed vegetable dish",
    ingredients: [
      { name: "broccoli florets", quantity: 2, unit: "cups" },
      { name: "bell peppers", quantity: 2, unit: "" },
      { name: "soy sauce", quantity: 3, unit: "tbsp" },
      { name: "ginger", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Chop all vegetables",
      "Heat oil in wok",
      "Stir-fry vegetables",
      "Add sauce and toss"
    ],
    category: "Vegetarian",
    rating: 4.1,
    isFavorite: false
  },
  {
  id: 10,
  title: "Masala Dosa",
  imageUrl: "https://images.unsplash.com/photo-1635661458533-0cc7564b141e",
  description: "Crispy rice crepe stuffed with spiced potatoes",
  ingredients: [
    { name: "rice flour", quantity: 2, unit: "cups" },
    { name: "urad dal", quantity: 0.5, unit: "cup" },
    { name: "potatoes", quantity: 3, unit: "" },
    { name: "mustard seeds", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Soak rice and dal for 6 hours",
    "Grind into smooth batter",
    "Ferment overnight",
    "Spread thin on hot griddle",
    "Add potato masala and fold"
  ],
  category: "South Indian",
  rating: 4.8,
  isFavorite: true
},
{
  id: 11,
  title: "Idli-Sambar",
  imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
  description: "Steamed rice cakes with lentil stew",
  ingredients: [
    { name: "idli rice", quantity: 2, unit: "cups" },
    { name: "toor dal", quantity: 1, unit: "cup" },
    { name: "sambar powder", quantity: 2, unit: "tbsp" },
    { name: "tamarind", quantity: "small", unit: "ball" }
  ],
  instructions: [
    "Steam batter in idli molds",
    "Cook dal with vegetables",
    "Add sambar powder and tamarind",
    "Serve hot with coconut chutney"
  ],
  category: "South Indian",
  rating: 4.7,
  isFavorite: false
},
{
  id: 12,
  title: "Vada",
  imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  description: "Crispy fried lentil donuts",
  ingredients: [
    { name: "urad dal", quantity: 1, unit: "cup" },
    { name: "black pepper", quantity: 1, unit: "tsp" },
    { name: "curry leaves", quantity: 10, unit: "" },
    { name: "ginger", quantity: 1, unit: "inch" }
  ],
  instructions: [
    "Soak dal for 4 hours",
    "Grind into fluffy batter",
    "Shape into rings",
    "Deep fry until golden"
  ],
  category: "South Indian",
  rating: 4.5,
  isFavorite: false
},
{
  id: 13,
  title: "Pongal",
  imageUrl: "https://images.unsplash.com/photo-1643101809205-8fc83ab8a3d5",
  description: "Comforting rice-lentil porridge",
  ingredients: [
    { name: "rice", quantity: 1, unit: "cup" },
    { name: "moong dal", quantity: 0.5, unit: "cup" },
    { name: "black pepper", quantity: 1, unit: "tsp" },
    { name: "cumin", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Pressure cook rice and dal",
    "Temper with ghee and spices",
    "Cook until creamy consistency",
    "Serve with coconut chutney"
  ],
  category: "South Indian",
  rating: 4.3,
  isFavorite: true
},
{
  id: 14,
  title: "Bisi Bele Bath",
  imageUrl: "https://images.unsplash.com/photo-1630151460303-0a3d542d40a3",
  description: "Spicy rice-lentil dish from Karnataka",
  ingredients: [
    { name: "rice", quantity: 1, unit: "cup" },
    { name: "toor dal", quantity: 0.5, unit: "cup" },
    { name: "bisi bele bath powder", quantity: 2, unit: "tbsp" },
    { name: "mixed vegetables", quantity: 2, unit: "cups" }
  ],
  instructions: [
    "Cook rice and dal with vegetables",
    "Add special spice mix",
    "Temper with ghee and cashews",
    "Serve hot with papad"
  ],
  category: "South Indian",
  rating: 4.6,
  isFavorite: false
},
{
  id: 15,
  title: "Rava Upma",
  imageUrl: "https://images.unsplash.com/photo-1630151460135-887c0fea09a5",
  description: "Semolina-based savory breakfast",
  ingredients: [
    { name: "semolina", quantity: 1, unit: "cup" },
    { name: "mustard seeds", quantity: 1, unit: "tsp" },
    { name: "green chilies", quantity: 2, unit: "" },
    { name: "curry leaves", quantity: 8, unit: "" }
  ],
  instructions: [
    "Dry roast rava until fragrant",
    "Temper mustard seeds and curry leaves",
    "Add vegetables and water",
    "Stir in rava until thick"
  ],
  category: "South Indian",
  rating: 4.0,
  isFavorite: false
},
{
  id: 16,
  title: "Appam with Stew",
  imageUrl: "https://images.unsplash.com/photo-1630151460234-7c2c894c1e1c",
  description: "Lacy rice hoppers with coconut milk stew",
  ingredients: [
    { name: "raw rice", quantity: 2, unit: "cups" },
    { name: "coconut milk", quantity: 1, unit: "cup" },
    { name: "yeast", quantity: 0.5, unit: "tsp" },
    { name: "sugar", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Grind rice into smooth batter",
    "Ferment with yeast overnight",
    "Swirl batter in appam pan",
    "Serve with vegetable stew"
  ],
  category: "South Indian",
  rating: 4.7,
  isFavorite: true
},
{
  id: 17,
  title: "Pesarattu",
  imageUrl: "https://images.unsplash.com/photo-1630151460334-7c2c894c1e3d",
  description: "Green moong dal crepes from Andhra",
  ingredients: [
    { name: "green gram", quantity: 1, unit: "cup" },
    { name: "rice", quantity: 0.25, unit: "cup" },
    { name: "ginger", quantity: 1, unit: "inch" },
    { name: "green chilies", quantity: 2, unit: "" }
  ],
  instructions: [
    "Soak moong dal and rice",
    "Grind with ginger and chilies",
    "Spread thin on hot griddle",
    "Serve with ginger chutney"
  ],
  category: "South Indian",
  rating: 4.4,
  isFavorite: false
},
{
  id: 18,
  title: "Kerala Fish Curry",
  imageUrl: "https://images.unsplash.com/photo-1630151460434-7c2c894c1e4d",
  description: "Tangy coconut-based fish dish",
  ingredients: [
    { name: "king fish", quantity: 1, unit: "lb" },
    { name: "kokum", quantity: 3, unit: "" },
    { name: "coconut milk", quantity: 1, unit: "cup" },
    { name: "kudam puli", quantity: 2, unit: "" }
  ],
  instructions: [
    "Marinate fish with turmeric",
    "Prepare coconut gravy",
    "Add tamarind and kokum",
    "Simmer fish gently"
  ],
  category: "South Indian",
  rating: 4.9,
  isFavorite: true
},
{
  id: 19,
  title: "Puttu-Kadala",
  imageUrl: "https://images.unsplash.com/photo-1630151460534-7c2c894c1e5d",
  description: "Steamed rice cakes with black chickpea curry",
  ingredients: [
    { name: "rice flour", quantity: 2, unit: "cups" },
    { name: "grated coconut", quantity: 0.5, unit: "cup" },
    { name: "black chickpeas", quantity: 1, unit: "cup" },
    { name: "coconut milk", quantity: 1, unit: "cup" }
  ],
  instructions: [
    "Layer flour and coconut in puttu maker",
    "Steam for 10 minutes",
    "Cook chickpeas in coconut gravy",
    "Serve puttu with kadala curry"
  ],
  category: "South Indian",
  rating: 4.6,
  isFavorite: false
},
 
{
  id: 20,
  title: "Butter Chicken",
  imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  description: "Creamy tomato-based curry with tender chicken",
  ingredients: [
    { name: "chicken thighs", quantity: 1.5, unit: "lbs" },
    { name: "tomato puree", quantity: 1, unit: "cup" },
    { name: "heavy cream", quantity: 0.5, unit: "cup" },
    { name: "garam masala", quantity: 1, unit: "tbsp" }
  ],
  instructions: [
    "Marinate chicken in yogurt and spices",
    "Grill or bake chicken pieces",
    "Simmer tomato sauce with butter and cream",
    "Add chicken and simmer for 10 mins"
  ],
  category: "North Indian",
  rating: 4.9,
  isFavorite: true
},
{
  id: 21,
  title: "Palak Paneer",
  imageUrl: "https://images.unsplash.com/photo-1601050690117-64d6bb0a1206",
  description: "Spinach curry with soft paneer cubes",
  ingredients: [
    { name: "paneer", quantity: 200, unit: "g" },
    { name: "spinach", quantity: 3, unit: "cups" },
    { name: "ginger-garlic paste", quantity: 1, unit: "tbsp" },
    { name: "cumin seeds", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Blanch spinach and blend into puree",
    "Sauté spices and add spinach puree",
    "Add paneer cubes and simmer"
  ],
  category: "North Indian",
  rating: 4.7,
  isFavorite: false
},
{
  id: 22,
  title: "Chole Bhature",
  imageUrl: "https://images.unsplash.com/photo-1630910392199-7a5d0a5e0a3e",
  description: "Spicy chickpeas with fluffy fried bread",
  ingredients: [
    { name: "chickpeas", quantity: 2, unit: "cups" },
    { name: "all-purpose flour", quantity: 2, unit: "cups" },
    { name: "chole masala", quantity: 2, unit: "tbsp" },
    { name: "yogurt", quantity: 0.5, unit: "cup" }
  ],
  instructions: [
    "Soak chickpeas overnight and pressure cook",
    "Knead dough for bhature and ferment",
    "Fry bhature until puffed",
    "Simmer chickpeas with spices"
  ],
  category: "North Indian",
  rating: 4.8,
  isFavorite: true
},
{
  id: 23,
  title: "Rajma Masala",
  imageUrl: "https://images.unsplash.com/photo-1630151460334-7c2c894c1e3d",
  description: "Kidney beans in rich onion-tomato gravy",
  ingredients: [
    { name: "kidney beans", quantity: 1.5, unit: "cups" },
    { name: "onions", quantity: 2, unit: "" },
    { name: "ginger-garlic paste", quantity: 1, unit: "tbsp" },
    { name: "coriander powder", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Soak beans overnight and pressure cook",
    "Sauté onions until golden",
    "Add tomatoes and spices",
    "Simmer with beans for 20 mins"
  ],
  category: "North Indian",
  rating: 4.6,
  isFavorite: false
},
{
  id: 24,
  title: "Aloo Paratha",
  imageUrl: "https://images.unsplash.com/photo-1630151460434-7c2c894c1e4d",
  description: "Whole wheat flatbread stuffed with spiced potatoes",
  ingredients: [
    { name: "whole wheat flour", quantity: 2, unit: "cups" },
    { name: "potatoes", quantity: 3, unit: "" },
    { name: "cumin seeds", quantity: 1, unit: "tsp" },
    { name: "green chilies", quantity: 2, unit: "" }
  ],
  instructions: [
    "Boil and mash potatoes with spices",
    "Knead dough and stuff with potato mix",
    "Roll and cook on griddle with ghee"
  ],
  category: "North Indian",
  rating: 4.5,
  isFavorite: true
},
{
  id: 25,
  title: "Dal Makhani",
  imageUrl: "https://images.unsplash.com/photo-1630151460534-7c2c894c1e5d",
  description: "Creamy black lentils simmered with butter",
  ingredients: [
    { name: "black lentils", quantity: 1, unit: "cup" },
    { name: "kidney beans", quantity: 0.5, unit: "cup" },
    { name: "butter", quantity: 2, unit: "tbsp" },
    { name: "kasuri methi", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Soak lentils overnight and pressure cook",
    "Simmer with tomatoes and cream",
    "Finish with butter and kasuri methi"
  ],
  category: "North Indian",
  rating: 4.9,
  isFavorite: true
},
{
  id: 26,
  title: "Paneer Tikka",
  imageUrl: "https://images.unsplash.com/photo-1630151460634-7c2c894c1e6d",
  description: "Grilled paneer marinated in spiced yogurt",
  ingredients: [
    { name: "paneer", quantity: 200, unit: "g" },
    { name: "yogurt", quantity: 0.5, unit: "cup" },
    { name: "kashmiri red chili", quantity: 1, unit: "tsp" },
    { name: "chaat masala", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Marinate paneer in spiced yogurt",
    "Skewer with bell peppers and onions",
    "Grill or bake until charred"
  ],
  category: "North Indian",
  rating: 4.7,
  isFavorite: false
},
{
  id: 27,
  title: "Samosa",
  imageUrl: "https://images.unsplash.com/photo-1630151460734-7c2c894c1e7d",
  description: "Crispy pastry stuffed with spiced potatoes",
  ingredients: [
    { name: "all-purpose flour", quantity: 2, unit: "cups" },
    { name: "potatoes", quantity: 3, unit: "" },
    { name: "peas", quantity: 0.5, unit: "cup" },
    { name: "cumin seeds", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Knead dough and rest for 30 mins",
    "Boil and mash potatoes with spices",
    "Fill and fold into triangles",
    "Deep fry until golden"
  ],
  category: "North Indian",
  rating: 4.8,
  isFavorite: true
},
{
  id: 28,
  title: "Gulab Jamun",
  imageUrl: "https://images.unsplash.com/photo-1630151460834-7c2c894c1e8d",
  description: "Soft milk dumplings in sugar syrup",
  ingredients: [
    { name: "milk powder", quantity: 1, unit: "cup" },
    { name: "all-purpose flour", quantity: 0.25, unit: "cup" },
    { name: "sugar", quantity: 2, unit: "cups" },
    { name: "cardamom powder", quantity: 0.5, unit: "tsp" }
  ],
  instructions: [
    "Knead dough with milk powder and flour",
    "Shape into balls and deep fry",
    "Soak in warm sugar syrup"
  ],
  category: "North Indian",
  rating: 4.9,
  isFavorite: true
},
{
  id: 29,
  title: "Paella Valenciana",
  imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  description: "Traditional Valencian rice dish with saffron, chicken, rabbit, and vegetables",
  ingredients: [
    { name: "short‑grain rice (like bomba)", quantity: 2, unit: "cups" },
    { name: "saffron threads", quantity: 0.5, unit: "tsp" },
    { name: "olive oil", quantity: 3, unit: "tbsp" },
    { name: "chicken pieces", quantity: 4, unit: "" },
    { name: "rabbit (optional)", quantity: 2, unit: "" },
    { name: "green beans", quantity: 1, unit: "cup" },
    { name: "tomato (grated)", quantity: 1, unit: "" },
    { name: "water or broth", quantity: 4, unit: "cups" },
    { name: "salt", quantity: 1, unit: "tsp" }
  ],
  instructions: [
    "Heat olive oil in a wide paella pan; brown chicken (and rabbit if using)",
    "Add green beans and saffron-infused tomato sofrito",
    "Stir in rice, then add broth",
    "Simmer without stirring until rice absorbs liquid and forms socarrat",
    "Rest for 5 minutes before serving from the pan"
  ],
  category: "Spanish",
  rating: 4.7,
  isFavorite: false
}


]);









  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFavorites, setShowFavorites] = useState(false);
  const [userRating, setUserRating] = useState(0);

  // Get all unique categories
  const categories = ['All', ...new Set(recipeData.map(recipe => recipe.category))];

  

  // Filter recipes based on search, category and favorites
  const filteredRecipes = recipeData.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesFavorites = !showFavorites || recipe.isFavorite;
    
    return matchesSearch && matchesCategory && matchesFavorites;
  });

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setRecipeData(recipeData.map(recipe => 
      recipe.id === id ? {...recipe, isFavorite: !recipe.isFavorite} : recipe
    ));
  };

  // Rate a recipe
  const rateRecipe = (id, rating) => {
    setRecipeData(recipeData.map(recipe => 
      recipe.id === id ? {...recipe, rating: rating} : recipe
    ));
    setUserRating(rating);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Foodie Book</h1>
        
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        {/* Category Filter */}
        <div className="category-filter">
          <label>Category: </label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {/* Favorites Toggle */}
        <div className="favorites-toggle">
          <label>
            <input
              type="checkbox"
              checked={showFavorites}
              onChange={() => setShowFavorites(!showFavorites)}
            />
            Show Favorites Only
          </label>
        </div>
      </header>
      
      <main>
        {!selectedRecipe ? (
          <div className="recipe-grid">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <img 
                  src={recipe.imageUrl} 
                  alt={recipe.title}
                  className="recipe-image"
                />
                <div className="recipe-info">
                  <h3>{recipe.title}</h3>
                  <p className="category">{recipe.category}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={i < Math.round(recipe.rating) ? 'star filled' : 'star'}
                      >
                        ★
                      </span>
                    ))}
                    <span>({recipe.rating.toFixed(1)})</span>
                  </div>
                  <div className="card-actions">
                    <button 
                      onClick={() => setSelectedRecipe(recipe)}
                      className="view-recipe-btn"
                    >
                      View Recipe
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                      }}
                      className={`favorite-btn ${recipe.isFavorite ? 'favorited' : ''}`}
                    >
                      {recipe.isFavorite ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="recipe-detail">
            <button 
              onClick={() => {
                setSelectedRecipe(null);
                setUserRating(0);
              }}
              className="back-btn"
            >
              ← Back to Recipes
            </button>
            
            <div className="detail-header">
              <h2>{selectedRecipe.title}</h2>
              <div className="detail-meta">
                <span className="category">{selectedRecipe.category}</span>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={i < Math.round(selectedRecipe.rating) ? 'star filled' : 'star'}
                    >
                      ★
                    </span>
                  ))}
                  <span>({selectedRecipe.rating.toFixed(1)})</span>
                </div>
                <button 
                  onClick={() => toggleFavorite(selectedRecipe.id)}
                  className={`favorite-btn ${selectedRecipe.isFavorite ? 'favorited' : ''}`}
                >
                  {selectedRecipe.isFavorite ? '❤️ Remove Favorite' : '🤍 Add to Favorites'}
                </button>
              </div>
            </div>
            
            <img 
              src={selectedRecipe.imageUrl} 
              alt={selectedRecipe.title}
              className="detail-image"
            />
            <p className="description">{selectedRecipe.description}</p>
            
            <div className="detail-section">
              <h3>Ingredients</h3>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.quantity} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="detail-section">
              <h3>Instructions</h3>
              <ol>
                {selectedRecipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            
            <div className="rating-section">
              <h3>Rate This Recipe</h3>
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= userRating ? 'star filled' : 'star'}
                    onClick={() => {
                      rateRecipe(selectedRecipe.id, star);
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              {userRating > 0 && <p>You rated this {userRating} star{userRating !== 1 ? 's' : ''}</p>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;