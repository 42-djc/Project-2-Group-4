import React from 'react';
import '../src/App.css'
import Nav from './components/nav/Nav';
import HeroSection from './components/HeroSection';
import RecipeSearch from './components/RecipeSearch';
import SideBar from './components/SideBar'

const App = () => {
  return (
    <body>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      <Nav/>
      <HeroSection />
      <div className="fixed top-50 right-0">
        <SideBar />
      </div>
      <section className="grid grid-cols-1 grid-rows-1 m-4 h-[28rem] justify-items-center">
        <RecipeSearch />
      </section>
      <div></div>
    </body>
  );
};

export default App;
