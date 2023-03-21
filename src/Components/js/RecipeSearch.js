import React, { useState } from 'react';
import { saveRecipe } from '../storage';



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
    console.log(data)
    // Update the recipes state variable with the extracted recipe data
    setRecipes(recipesData);
  };

  return (
    <section   className='grid grid-rows-2 grid-cols-2 gap-4'>
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
            <option value="alcohol-cocktail"> alcohol-cocktail </option>
            <option value="alcohol-free"> alcohol-free </option>
            <option value="celery-free"> celery-free </option>
            <option value="crustacean-free"> crustacean-free </option>
            <option value="dairy-free"> dairy-free </option>
            <option value="DASH"> DASH </option>
            <option value="egg-free"> egg-free </option>
            <option value="fish-free"> fish-free </option>
            <option value="fodmap-free"> fodmap-free </option>
            <option value="gluten-free"> gluten-free </option>
            <option value="immuno-supportive"> immuno-supportive </option>
            <option value="keto-friendly"> keto-friendly </option>
            <option value="kidney-friendly"> kidney-friendly </option>
            <option value="kosher"> kosher </option>
            <option value="low-fat-abs"> low-fat-abs </option>
            <option value="low-potassium"> low-potassium </option>
            <option value="low-sugar"> low-sugar </option>
            <option value="lupine-free"> lupine-free </option>
            <option value="Mediterranean"> Mediterranean </option>
            <option value="mollusk-free"> mollusk-free </option>
            <option value="mustard-free"> mustard-free </option>
            <option value="no-oil-added"> no-oil-added </option>
            <option value="paleo"> paleo </option>
            <option value="peanut-free"> peanut-free </option>
            <option value="pescatarian"> pescatarian </option>
            <option value="pork-free"> pork-free </option>
            <option value="red-meat-free"> red-meat-free </option>
            <option value="sesame-free"> sesame-free </option>
            <option value="shellfish-free"> shellfish-free </option>
            <option value="soy-free"> soy-free </option>
            <option value="sugar-conscious"> sugar-conscious </option>
            <option value="sulfite-free"> sulfite-free </option>
            <option value="tree-nut-free"> tree-nut-free </option>
            <option value="vegan"> vegan </option>
            <option value="vegetarian"> vegetarian </option>
            <option value="wheat-free"> wheat-free </option>
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
              <button className="save-button" onClick={() => saveRecipe(recipe)}>Save</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecipeSearch;

