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