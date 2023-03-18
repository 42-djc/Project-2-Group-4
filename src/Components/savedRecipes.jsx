import React, { useState } from 'react';
import { getSavedRecipes, deleteRecipe } from './storage';

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState(getSavedRecipes());

  const handleDelete = (url) => {
    deleteRecipe(url);
    setSavedRecipes(getSavedRecipes());
  };

  return (
    <div  className='flex justify-center'>
      {savedRecipes.length > 0 ? (
        <div className='w-10/12'>
          {savedRecipes.map((recipe, index) => (
            <div className='flex flex-col items-center border-4 border-green-300 mt-4 pr-4 pl-4 w-full h-96 shadow-lg shadow-green-300' key={index}>
              <h3 className='mt-1 mb-1 text-gray-200'>{recipe.title}</h3>
              <img className='w-32 h-32 border-2 border-green-300' src={recipe.image} alt={recipe.title} />
              <a href={recipe.url} target="_blank" rel="noopener noreferrer" className='mt-2 w-40 rounded-md text-center bg-green-400'>
                Go to the recipe!
              </a>
              <button className='m-2 w-40 rounded-md bg-red-600' onClick={() => handleDelete(recipe.url)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-200'>No saved recipes found.</p>
      )}
    </div>
  );
};

export default SavedRecipes;
