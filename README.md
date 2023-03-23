
# Project 2 Group 4 BootcampUK-VIRT-FE-PT-11-2022-U-LOLC-TWTH-2

## Project Description

We have created a site for people with dietary health requirements to:

* Search a recipe database, and filter by requirements
* Retrieve key info, images and links to recipes
* Save favourite recipes for future use and return to them after the browsing session

The real-world client-side single-page application had to meet the following criteria:

* Use React and Node.js.
* Be deployed using Netlify.
* Use at least two libraries, packages, or technologies that we haven't discussed.
* Have a polished front end/UI.

The site was created using Tailwind for styling as an alternative to Bootstrap and allows for more customisation.  Edamam API was new to the project team and provided accesss to 2 million recipes, and nutrition data for thousands of food items.

## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Link to repository: https://github.com/42-djc/Project-2-Group-4

Link to deployed site: https://unrivaled-axolotl-3119f9.netlify.app/

## Usage

The site was created using React which allows for a component based site so each of the NavBar, Hero, Search, Search Results,  Favourite Recipes, Footers and Forms could be built independently easily.

The main search bar and dietery filters and search button are used to send fetch requests to the Edamam API and return relevant hits as rendered cards with images and key data.  They are displayed in groups of 5 for readability but all results can be cycled through.

The results are displayed with a favourite button which stores that recipe to LocalStorage which is accessed by the Favourite Recipes functionality so users can review these at a later time. The Favourite Recipes are displayed as a modal so can be displayed and hidden without taking up viewport space and contributes to the clean design.

The site was styled using Tailwind which allowed more customisation and some cool hover over and click effects for visual interest.

See GIF below for a demo of the key functions of recipe search, card rendering, favouriting.

![GIF](./src/assets/images/Recipe%20Demo.gif) 


## License

n/a

## Contributing

n/a

## Tests

n/a

## Questions

https://github.com/42-djc/Project-2-Group-4

For further questions, please email: daniel.j.colman@googlemail.com, chloehill333@gmail.com, andystyles@hotmail.co.uk

