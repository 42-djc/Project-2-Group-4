import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F7BC00' }}>
      <div className="max-w-7xl mx-auto text-left" style={{ backgroundColor: '#F7BC00' }}>
      <h2 className="text-4xl font-bold mb-4" style={{ color: "#147866" }}>Meal prep doesn't</h2>

      <h2 className="text-4xl font-bold mb-4" style={{ color: "#147866" }}>
        have to be hard
        </h2>
        <h3 className="text-white">Welcome to RapidRecipes, where food prep is made easy. We believe that everyone should have access to quick, delicious meals that can be prepared in a flash. Whether you're a busy parent, a college student on the go, or just looking for a better way to eat, RapidRecipes is here to help. With our collection of simple and tasty recipes, meal prep has never been easier. So join us today and see how we can make your life in the kitchen a breeze!</h3>
      </div>
    </div>
  );
};

export default HeroSection;