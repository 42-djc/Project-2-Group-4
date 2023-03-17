import React from 'react';
import '../src/App.css'
import Nav from './components/nav/Nav';
import HeroSection from './components/HeroSection';
import RecipeSearch from './components/RecipeSearch';
import SavedRecipes from './components/savedRecipes';

const App = () => {
  return (
    <body>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      <Nav/>
      <HeroSection />
      <section>
      <RecipeSearch />
      <SavedRecipes/>
      </section>

    </body>
  );
};

export default App;
