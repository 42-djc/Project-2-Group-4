import React from 'react';
import '../src/App.css'
import Nav from './components2/nav/Nav';
import HeroSection from './components2/HeroSection';
import RecipeSearch from './components2/RecipeSearch';
import SideBar from './components2/SideBar';
import Form from './components2/form/Form';
import Footer from './components2/footer/Footer';

const App = () => {
  return (
    <body>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Catamaran|Lato:400i" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=PT+Sans:700|Playfair+Display" rel="stylesheet"></link>
      <Nav/>
      <HeroSection />
      <div className="fixed top-50 right-0">
        <SideBar />
      </div>
      <section className="grid grid-cols-1 grid-rows-1 m-4 h-[30rem] justify-items-center">
        <RecipeSearch />
      </section>
      <Form/>
      <div></div>
      <footer>
        <Footer/>
      </footer>
    </body>
  );
};

export default App;
