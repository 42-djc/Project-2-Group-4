import React from 'react';
import RecipeSearch from './components/RecipeSearch';
import SavedRecipes from './components/savedRecipes';

const App = () => {
  return (
    <div>
      <RecipeSearch />
      <SavedRecipes/>
    </div>
  );
};

export default App;
