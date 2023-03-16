import React from "react";
import Logo from "../../assets/images/rapidrecipes.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav bg-white">
        <div class="mx-auto px-5 flex items-center justify-between container mx-auto ">
            <img className="w-50 h-50" src={Logo} alt="logo" />
          <ul className="flex items-center gap-6">
            <li>
              <a className="hover:text-green-600 transition-colors transition ease-in-out delay-100" href="#search">
                Recipe Search
              </a>
            </li>
            <li>
              <a className="hover:text-green-600 transition-colors transition ease-in-out delay-100" href="#recipes">
                Favourite Recipes
              </a>
            </li>
            <li>
              <a className="hover:text-green-600 transition-colors" href="#contact">
              Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
