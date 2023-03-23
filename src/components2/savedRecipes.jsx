import React, { useState } from 'react';
import { getSavedRecipes, deleteRecipe } from './storage';

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState(getSavedRecipes());

  const handleDelete = (url) => {
    deleteRecipe(url);
    setSavedRecipes(getSavedRecipes());
  };

  return (
    <div className='flex justify-center'>
      {savedRecipes.length > 0 ? (
        <div className='w-10/12'>
          {savedRecipes.map((recipe, index) => (
            <div className='flex flex-col items-center border-4 rounded-lg border-green-300 mt-4 pr-4 pl-4 w-full h-96 shadow-xl' key={index}>
              <h3 className='mt-1 mb-1 text-gray-200 text-center'>{recipe.title}</h3>
              <img className='w-32 h-32 border-2 border-green-300 rounded-xl shadow-md' src={recipe.image} alt={recipe.title} />
              <a href={recipe.url} target="_blank" rel="noopener noreferrer" className='mt-2 w-40 rounded-md text-center font-semibold shadow-md transition-colors bg-gradient-to-r from-green-300 to-green-600 hover:from-teal-800 hover:to-teal-400 hover-pulse'>
                Go to the recipe!
              </a>
              <button
                className={`m-2 w-40 rounded-md font-semibold shadow-md transition-colors bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-orange-600 hover-pulse`}
                onClick={() => handleDelete(recipe.url)}
              >
                Delete
              </button>

            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-200 mt-64'>No saved recipes found.</p>
      )}
    </div>
  );
};


export default SavedRecipes;
