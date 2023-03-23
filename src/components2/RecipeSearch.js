  import React, { useState } from 'react';
  import { saveRecipe } from './storage';
  import '../../src/App.css'
  import { RiStarSmileFill } from 'react-icons/ri';



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
      setHealth("");
      setQuery("");

    };

    return (
      <div className='container h-auto w-full flex justify-center'> 
      <section className='m-0 h-auto'>
        <form onSubmit={handleSubmit} className="flex justify-center h-auto pb-8 gap-4 bg-white rounded-lg">
          <label className="font block text-gray-800 relative">
            Enter recipe keywords such as "chicken", "dessert", etc.
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="bg-green-50 rounded-lg p-2 mt-2 w-full border-4 border-yellow-500 text-gray-800 shadow-md" placeholder="search"/>
            <button type="submit" className="absolute right-1 top-9 bg-green-500 text-white py-2 px-4 rounded-l-lg rounded-r-md" style={{ backgroundColor: '#147866' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.986 14.986a.75.75 0 0 1-1.061 0l-3.124-3.124a5.25 5.25 0 1 1 1.06-1.06l3.125 3.124a.75.75 0 0 1 0 1.061zm-5.5-1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" clipRule="evenodd" />
              </svg>
            </button>
          </label>

          <label className="text-gray-800 font block">
            Select health requirement:
            <select value={health} onChange={(e) => setHealth(e.target.value)} className="bg-green-50 rounded-lg p-2 mt-2 w-full border-4 border-yellow-500 text-gray-800 shadow-md">
              <option value="">Please select one or leave blank</option>
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
        </form>

        {/* If search results exist, display the recipe information */}
        {recipes.length > 0 && (
          <div className="grid grid-cols-5 gap-6">
            {recipes.map((recipe, index) => (
              <div className='flex justify-center'>
              <div key={index} className="flex flex-col w-64 h-fill border-4 border-yellow-500 rounded-lg p-2 content-center items-center text-center shadow-lg">
                <h3 className="text-gray-800 h-12 font-bold overflow-auto custom-scrollbar title-shadow">{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} className="mt-2 mb-2 h-24 w-24 border-2 rounded-md border-yellow-500" />
                <p className="mt-2 mb-2 text-gray-800 font-bold title-shadow">Cooking time: {recipe.time} minutes</p>
                <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="text-white px-3 py-2 w-36 mt-2 mb-2 rounded-lg shadow-md text-shadow" style={{ backgroundColor: '#147866' }}>Go to the recipe!</a>
                <button className="save-button flex justify-center items-center text-white py-2 mt-2 mb-2 w-36 gap-2 rounded-lg shadow-md text-shadow" style={{ backgroundColor: '#147866' }} onClick={(e) => {
                  const icons = e.target.querySelectorAll('.text-yellow-500');
                  const icon = icons[icons.length - 1];
                  if (icon) {
                    icon.classList.add('save-spin');
                    setTimeout(() => {
                      icon.classList.remove('save-spin');
                    }, 1000);
                  }
                  saveRecipe(recipe)}
                  }>Save <RiStarSmileFill className='flex items-center text-yellow-500' id='saveIcon'/></button>
              </div>
              </div>
              ))}
          </div>
        )}
      </section>
      </div>
    );
  };

  export default RecipeSearch;

