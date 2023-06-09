const saveRecipe = (recipe) => {
  const savedRecipes = getSavedRecipes();

  if (savedRecipes.some((savedRecipe) => savedRecipe.url === recipe.url)) {
    alert("This recipe is already saved.");
    return;
  }

  savedRecipes.push(recipe);
  localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
};


const getSavedRecipes = () => {
  const savedRecipesJSON = localStorage.getItem("savedRecipes");
  return savedRecipesJSON ? JSON.parse(savedRecipesJSON) : [];
};


export function deleteRecipe(url) {
  const savedRecipes = getSavedRecipes();
  const updatedRecipes = savedRecipes.filter(recipe => recipe.url !== url);
  localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
}


export { getSavedRecipes, saveRecipe };

