import React from "react";
import Logo from "../../assets/images/rapidrecipes.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav bg-white">
        <div class="mx-auto px-5 flex items-center justify-between container mx-auto ">
          <div className="relative bg-red-500 pb-2/3">
            <img className="h-26 w-full object-cover" src={Logo} alt="logo" />
            </div>
          <ul className="flex items-center gap-6">
            <li>
              <a className="hover:text-green-600 transition-colors transition ease-in-out delay-100" href="#search">
                Recipe Search
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
