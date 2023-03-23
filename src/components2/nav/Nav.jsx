import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../../assets/images/rapidrecipes.png";
import Logo1 from "../../assets/images/rapidrecipeslogo.png";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white-800">
        <div className="max-w-8xl mr-auto px-4 sm:px-6 lg:px-8">
          <div className="my-5 mx-23 flex md-flex justify-end space-x-13 h-16 whitespace-nowrap">
            <div className="mx-auto flex justify-between items-center container">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-full object-cover hidden md:block"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="mx-20 flex md-flex items-center space-x-10">
                  <a
                    href="#search-section"
                    className="text-gray-800 hover:bg-gray-300 hover:text-green-800 px-3 py-2 rounded-md text-lg font-large text-center"
                  >
                    Recipe Search
                  </a>

                  <a
                    href="#contact-us"
                    className="text-gray-800 hover:bg-gray-300 hover:text-green-800 px-3 py-2 rounded-md text-lg font-large text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:hidden grid grid-cols-2 grid-rows-1 gap-4">  
            <div className="inline-flex items-end justify-center p-2 rounded-md ">
                  <img
                    className=" h-10 w-20"
                    src={Logo1}
                    alt="Workflow"
                  />
                </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white-900 inline-flex items-end justify-center p-2 rounded-md text-gray-800 hover:text-gray-800 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
              
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#147866"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#147866"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-50 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-50 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#search-section"
                  className="text-gray-800 hover:bg-gray-100 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Recipe Search
                </a>

                <a
                  href="#contact-us"
                  className="text-gray-800 hover:bg-gray-100 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <main>
        <div>
          {/* <!-- Replace with your content --> */}

            <div className="rounded-lg h-96"></div>

          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default Dropdown;
