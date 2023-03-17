import React, { useState } from 'react';



const RecipeSearch = () => {
  // Set up state variables for search query, health requirement, and search results
  const [query, setQuery] = useState('');
  const [health, setHealth] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch recipe data from the Edamam API using the search query and health requirement
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b51aecbd&app_key=bfcace0544181d8e13a6405daebb1431${health ? `&health=${health}` : ''}`
    );

    // Parse the JSON response into an object and extract the first 5 recipe hits
    const data = await response.json();
    const recipesData = data.hits.slice(0, 5).map((hit) => ({
      title: hit.recipe.label,
      image: hit.recipe.image,
      ingredients: hit.recipe.ingredientLines,
      time: hit.recipe.totalTime,
      url: hit.recipe.url,
    }));

    // Update the recipes state variable with the extracted recipe data
    setRecipes(recipesData);
  };

  return (
    <div className="flex justify-center">
      {/* Display a form for entering search query and health requirement */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter recipe keywords such as "chicken", "dessert", etc.
          <br />
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}placeholder="search"/>
        </label>
        <br />
        <label>
          Select health requirement:
          <br />
          <select value={health} onChange={(e) => setHealth(e.target.value)}>
            <option value="">Please select one</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
        </label>
        <br />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" type="submit">Search</button>
      </form>

      {/* If search results exist, display the recipe information */}
      {recipes.length > 0 && (
        <div>
          {recipes.map((recipe, index) => (
            <div key={index}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
              <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
              <p>Cooking time: {recipe.time} minutes</p>
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">Go to the recipe!</a>
            </div>
          ))}
        </div>
      )}

      
    </div>
  );
};

export default RecipeSearch;

