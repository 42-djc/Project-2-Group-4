import React from 'react';
import '../src/App.css'
import Nav from './components/nav/Nav';
import HeroSection from './components/js/HeroSection';
import RecipeSearch from './components/js/RecipeSearch';
import SideBar from './components/SideBar';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <body>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      <Nav/>
      <HeroSection />
      <div className="fixed top-50 right-0">
        <SideBar />
      </div>
      <section>
        <RecipeSearch />
      </section>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default App;
