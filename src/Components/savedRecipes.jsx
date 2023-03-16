import React, { useState } from 'react';
import { getSavedRecipes, deleteRecipe } from './storage';

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState(getSavedRecipes());

  const handleDelete = (url) => {
    deleteRecipe(url);
    setSavedRecipes(getSavedRecipes());
  };

  return (
    <div>
      <h2>Saved Recipes</h2>
      {savedRecipes.length > 0 ? (
        <div>
          {savedRecipes.map((recipe, index) => (
            <div key={index}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>Cooking time: {recipe.time} minutes</p>
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                Go to the recipe!
              </a>
              <button onClick={() => handleDelete(recipe.url)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved recipes found.</p>
      )}
    </div>
  );
};

export default SavedRecipes;
