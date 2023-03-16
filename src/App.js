import React from 'react';
import RecipeSearch from './Components/RecipeSearch';
import SavedRecipes from './Components/savedRecipes';

const App = () => {
  return (
    <div>
      <RecipeSearch />
      <SavedRecipes/>
    </div>
  );
};

export default App;
