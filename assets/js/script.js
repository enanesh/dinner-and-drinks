
/*
Logic: 

1. User opens page.  On initial page load, user will see header, pinned recipes, as well as their reviewed recipes. 
2. User will also see two boxes.  One where they will choose the cuisine they'd like to eat, and the other where they will choose ingredient of cocktail.
   They don't have to choose both.  They can choose one or the other if they want.  
3. The application will be listening for <li> clicks on both search buttons.
4. When the application hears a click a function will be called that takes in the user entered filters, only pulls recipes from the array that have those filters, then randomizes to choose three recipes.
5. Those three recipes are then displayed to users.  To do this, we must hide the initial "selection elements" and show the "option elements".
6. User can click on one meal and one cocktail.  When they do, the "option elements" are hidden and the "recipe element" is shown.
7. If user is interested in recipe, but doesn't want to make it, the user can "pin it" for later and click a button to randomize recipes again?
8. If user chooses to make it, they can press a review button where they'll be able to add in a rating/input (likely using a form).  That element is saved in local storage.
9. When user clicks on "pin element", whatever current page they're on! (tricky??? ) is hidden and the pinned page is shown.  User can click on recipe they want to make and recipe is shown.  
10. When user clicks on "ratings element", whatever current page they're on! (tricky??? ) is hidden and the rßatings page is shown.  User can click on recipe they want to make and recipe is shown.  
*/

var mealApiUrlArray = [
  "https://themealdb.com/api/json/v1/1/search.php?f=a",
  "https://themealdb.com/api/json/v1/1/search.php?f=b",
  "https://themealdb.com/api/json/v1/1/search.php?f=c",
  "https://themealdb.com/api/json/v1/1/search.php?f=d",
  "https://themealdb.com/api/json/v1/1/search.php?f=e",
  "https://themealdb.com/api/json/v1/1/search.php?f=f",
  "https://themealdb.com/api/json/v1/1/search.php?f=g",
  "https://themealdb.com/api/json/v1/1/search.php?f=h",
  "https://themealdb.com/api/json/v1/1/search.php?f=i",
  "https://themealdb.com/api/json/v1/1/search.php?f=j",
  "https://themealdb.com/api/json/v1/1/search.php?f=k",
  "https://themealdb.com/api/json/v1/1/search.php?f=l",
  "https://themealdb.com/api/json/v1/1/search.php?f=m",
  "https://themealdb.com/api/json/v1/1/search.php?f=n",
  "https://themealdb.com/api/json/v1/1/search.php?f=o",
  "https://themealdb.com/api/json/v1/1/search.php?f=p",
  "https://themealdb.com/api/json/v1/1/search.php?f=r",
  "https://themealdb.com/api/json/v1/1/search.php?f=s",
  "https://themealdb.com/api/json/v1/1/search.php?f=t",
  "https://themealdb.com/api/json/v1/1/search.php?f=v",
  "https://themealdb.com/api/json/v1/1/search.php?f=w",
  "https://themealdb.com/api/json/v1/1/search.php?f=y"
]

var cocktailApiUrlArray = [
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=a",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=b",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=c",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=d",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=e",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=f",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=g",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=h",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=i",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=j",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=k",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=l",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=m",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=n",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=o",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=p",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=q",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=r",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=s",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=t",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=v",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=w",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=y",
  "https://thecocktaildb.com/api/json/v1/1/search.php?f=z"
]

var mealSearchBtnEl = document.getElementById("meal-search-button");
var cocktailSearchBtnEl = document.getElementById("cocktail-search-button");
var mealCategoryInputEl = document.getElementById("meal-category-dropdown");
var mealCuisineInputEl = document.getElementById("meal-cuisine-dropdown");
var cocktailCategoryInputEl = document.getElementById("cocktail-category-dropdown");
var cocktailIngredientInputEl = document.getElementById("cocktail-ingredient-dropdown");
var cocktailAlcoholInputEl = document.getElementById("cocktail-alcoholic-dropdown");
var pinnedRecipesEl = document.getElementById("pinned-recipes");
var pinToSaveRecipeEl = document.getElementById("pin-to-save-meal");
var pinToSaveCocktailEl = document.getElementById("pin-to-save-cocktail");
var listPinnedRecipesEl = document.getElementById("list-all-pinned-recipes")
var recipeNameForArrayStorage = document.querySelector(".name-for-array")
var mealNameText = document.getElementById("meal-name-text");
var mealIngredientsText = document.getElementById("meal-ingredients-list");
var mealRecipeText = document.getElementById("meal-recipe-text");
var mealImageEl = document.getElementById("meal-image");
var mealErrorText = document.getElementById("meal-error-text");
var cocktailNameText = document.getElementById("cocktail-name-text");
var cocktailIngredientsText = document.getElementById("cocktail-ingredients-list");
var cocktailGlassText = document.getElementById("cocktail-glass-text");
var cocktailRecipeText = document.getElementById("cocktail-recipe-text");
var cocktailImageEl = document.getElementById("cocktail-image");
var cocktailErrorText = document.getElementById("cocktail-error-text");
var savedNameText = document.getElementById("saved-name-text");
var savedIngredientsList = document.getElementById("saved-ingredients-list");
var savedGlassText = document.getElementById("saved-glass-text");
var savedRecipeText = document.getElementById("saved-recipe-text");
var savedRecipeImage = document.getElementById("saved-recipe-image");
var mealSearchPage = document.getElementById("meal-search-page");
var cocktailSearchPage = document.getElementById("cocktail-search-page");
var mealResultPage = document.getElementById("meal-result-page");
var cocktailResultPage = document.getElementById("cocktail-result-page");
var pinnedRecipesPage = document.getElementById("pinned-recipes-page");
var savedRecipePage = document.getElementById("saved-recipe-page");

var startOverButtonEl  = document.getElementById("start-over");


var pinnedRecipeArray = JSON.parse(localStorage.getItem("pinned-recipes")) || [];

var mealsArray = [];
var cocktailsArray = [];

function storeMeals() {
  for (i = 0; i < mealApiUrlArray.length; i++) {
    fetch(mealApiUrlArray[i])
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (n = 0; n < data.meals.length; n++) {
          mealsArray.push(data.meals[n]);
        }
      })
  }
  //console.log(mealsArray);
}

function storeCocktails() {
  for (i = 0; i < cocktailApiUrlArray.length; i++) {
    fetch(cocktailApiUrlArray[i])
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (n = 0; n < data.drinks.length; n++) {
          cocktailsArray.push(data.drinks[n]);
        }
      })
  }
  //console.log(cocktailsArray);
}

function mealSearch() {
  if (!mealCategoryInputEl.value && !mealCuisineInputEl.value) {
    var randomSearch = Math.floor(Math.random() * mealsArray.length);
    var mealResult = (mealsArray[randomSearch]);
    displayMealResult(mealResult);
  } else if (mealCategoryInputEl.value && !mealCuisineInputEl.value) {
    var categoryArray = [];
    for (i = 0; i < mealsArray.length; i++) {
      if (mealsArray[i].strCategory.includes(mealCategoryInputEl.value)) {
        categoryArray.push(mealsArray[i]);
      }
    }
    var categorySearch = Math.floor(Math.random() * categoryArray.length);
    var mealResult = (categoryArray[categorySearch]);
    displayMealResult(mealResult);
  } else if (!mealCategoryInputEl.value && mealCuisineInputEl.value) {
    var cuisineArray = [];
    for (i = 0; i < mealsArray.length; i++) {
      if (mealsArray[i].strArea.includes(mealCuisineInputEl.value)) {
        cuisineArray.push(mealsArray[i]);
      }
    }
    var cuisineSearch = Math.floor(Math.random() * cuisineArray.length);
    var mealResult = (cuisineArray[cuisineSearch]);
    displayMealResult(mealResult);
  } else if (mealCategoryInputEl.value && mealCuisineInputEl.value) {
    var categoryCuisineArray = [];
    for (i = 0; i < mealsArray.length; i++) {
      if (mealsArray[i].strCategory.includes(mealCategoryInputEl.value) &&
        mealsArray[i].strArea.includes(mealCuisineInputEl.value)) {
        categoryCuisineArray.push(mealsArray[i]);
      }
    }
    var categoryCuisineSearch = Math.floor(Math.random() * categoryCuisineArray.length);
    var mealResult = (categoryCuisineArray[categoryCuisineSearch]);
    displayMealResult(mealResult);
  }
}
mealSearchBtnEl.addEventListener("click", mealSearch);

function cocktailSearch() {
  if (!cocktailCategoryInputEl && !cocktailIngredientInputEl && !cocktailAlcoholInputEl) {
    var randomSearch = Math.floor(Math.random() * cocktailsArray.length);
    var cocktailResult = (cocktailsArray[randomSearch])
    displayCocktailResult(cocktailResult);
  } else if (cocktailCategoryInputEl && !cocktailIngredientInputEl && !cocktailAlcoholInputEl) {
    var categoryArray = [];
    for (i = 0; i < cocktailsArray.length; i++) {
      if (cocktailsArray[i].strCategory.includes(cocktailCategoryInputEl.value)) {
        categoryArray.push(cocktailsArray[i]);
      }
    }
    var categorySearch = Math.floor(Math.random() * categoryArray.length);
    var cocktailResult = (categoryArray[categorySearch]);
    displayCocktailResult(cocktailResult);
  } else if (!cocktailCategoryInputEl && cocktailIngredientInputEl && !cocktailAlcoholInputEl) {
    var ingredientArray = [];
    for (i = 0; i < cocktailsArray.length; i++) {
      if (cocktailsArray[i].strIngredient1.includes(cocktailIngredientInputEl.value)) {
        ingredientArray.push(cocktailsArray[i]);
      }
    }
    var ingredientSearch = Math.floor(Math.random() * ingredientArray.length);
    var cocktailResult = (ingredientArray[ingredientSearch]);
    displayCocktailResult(cocktailResult);
  } else if (!cocktailCategoryInputEl && !cocktailIngredientInputEl && cocktailAlcoholInputEl) {
    var alcoholArray = [];
    for (i = 0; i < cocktailsArray.length; i++) {
      if (cocktailsArray[i].strAlcoholic.includes(cocktailAlcoholInputEl.value)) {
        alcoholArray.push(cocktailsArray[i]);
      }
    }
    var alcoholSearch = Math.floor(Math.random() * alcoholArray.length);
    var cocktailResult = (alcoholArray[alcoholSearch]);
    displayCocktailResult(cocktailResult);
  } else if (cocktailCategoryInputEl && cocktailIngredientInputEl && !cocktailAlcoholInputEl) {
    var categoryIngredientArray = [];
    for (i = 0; i < cocktailsArray.length; i++) {
      if (cocktailsArray[i].strCategory.includes(cocktailCategoryInputEl.value) &&
        cocktailsArray[i].strIngredient1.includes(cocktailIngredientInputEl.value)) {
        categoryIngredientArray.push(cocktailsArray[i]);
      }
    }
    var categoryIngredientSearch = Math.floor(Math.random() * categoryIngredientArray.length);
    var cocktailResult = (categoryIngredientArray[categoryIngredientSearch]);
    displayCocktailResult(cocktailResult);
  } else if (cocktailCategoryInputEl && !cocktailIngredientInputEl && cocktailAlcoholInputEl) {
    var categoryAlcoholArray = [];
    for (i = 0; i < cocktailsArray.length; i++) {
      if (cocktailsArray[i].strCategory.includes(cocktailCategoryInputEl.value) &&
        cocktailsArray[i].strAlcoholic.includes(cocktailAlcoholInputEl.value)) {
        categoryAlcoholArray.push(cocktailsArray[i]);
      }
    }
    var categoryAlcoholSearch = Math.floor(Math.random() * categoryAlcoholArray.length);
    var cocktailResult = (categoryAlcoholArray[categoryAlcoholSearch]);
    displayCocktailResult(cocktailResult);
  } else if (!cocktailCategoryInputEl && cocktailIngredientInputEl && cocktailAlcoholInputEl) {
    var ingredientAlcoholArray = [];
    for (i = 0; i < cocktailsArray.length; i++) {
      if (cocktailsArray[i].strIngredient1.includes(cocktailIngredientInputEl.value) &&
        cocktailsArray[i].strAlcoholic.includes(cocktailAlcoholInputEl.value)) {
        ingredientAlcoholArray.push(cocktailsArray[i]);
      }
    }
    var ingredientAlcoholSearch = Math.floor(Math.random() * ingredientAlcoholArray.length);
    var cocktailResult = (ingredientAlcoholArray[ingredientAlcoholSearch]);
    displayCocktailResult(cocktailResult);
  } else if (cocktailCategoryInputEl && cocktailIngredientInputEl && cocktailAlcoholInputEl) {
    var allFiltersArray = [];
    for (i = 0; i < cocktailsArray.length; i++) {
      if (cocktailsArray[i].strCategory.includes(cocktailCategoryInputEl.value) &&
        cocktailsArray[i].strIngredient1.includes(cocktailIngredientInputEl.value) &&
        cocktailsArray[i].strAlcoholic.includes(cocktailAlcoholInputEl.value)) {
        allFiltersArray.push(cocktailsArray[i]);
      }
    }
    var allFiltersSearch = Math.floor(Math.random() * allFiltersArray.length);
    var cocktailResult = (allFiltersArray[allFiltersSearch]);
    displayCocktailResult(cocktailResult);
  }
}
cocktailSearchBtnEl.addEventListener("click", cocktailSearch)

function displayMealResult(ev) {
  console.log(ev);
  if (ev === undefined) {
    mealErrorText.textContent = "Sorry, no meals match your filters, please try again.";
  } else {
    mealErrorText.textContent = "";
    if (startOverButtonEl.classList.contains("invisible")){
      startOverButtonEl.classList.remove("invisible");
      startOverButtonEl.classList.add("visible")
    }
  }
  // hide the search page, show the search results
  mealNameText.textContent = ev.strMeal;

  var ingredientList = [];
  ingredientList.push(ev.strIngredient1, ev.strIngredient2, ev.strIngredient3,
    ev.strIngredient4, ev.strIngredient5, ev.strIngredient6, ev.strIngredient7,
    ev.strIngredient8, ev.strIngredient9, ev.strIngredient10, ev.strIngredient11,
    ev.strIngredient12, ev.strIngredient13, ev.strIngredient14, ev.strIngredient15,
    ev.strIngredient16, ev.strIngredient17, ev.strIngredient18, ev.strIngredient19,
    ev.strIngredient20);
  var measurementList = [];
  measurementList.push(ev.strMeasure1, ev.strMeasure2, ev.strMeasure3,
    ev.strMeasure4, ev.strMeasure5, ev.strMeasure6, ev.strMeasure7,
    ev.strMeasure8, ev.strMeasure9, ev.strMeasure10, ev.strMeasure11,
    ev.strMeasure12, ev.strMeasure13, ev.strMeasure14, ev.strMeasure15,
    ev.strMeasure16, ev.strMeasure17, ev.strMeasure18, ev.strMeasure19,
    ev.strMeasure20);

  if (mealRecipeText.textContent !== "") {
    mealIngredientsText.innerHTML = "";
  }
  for (i = 0; i < ingredientList.length; i++) {
    if (![ingredientList[i], measurementList[i]].includes("") &&
      ![ingredientList[i], measurementList[i]].includes(null)) {
      var listItem = document.createElement("li");
      listItem.textContent = ingredientList[i] + ": " + measurementList[i];
      mealIngredientsText.appendChild(listItem);
    }
  }
  mealRecipeText.textContent = ev.strInstructions;
  mealImageEl.src = ev.strMealThumb;
  mealImageEl.alt = ev.strMeal;
}

function displayCocktailResult(ev) {
  console.log(ev);
  if (ev === undefined) {
    cocktailErrorText.textContent = "Sorry, no meals match your filters, please try again.";
  } else {
    cocktailErrorText.textContent = "";
    if (startOverButtonEl.classList.contains("invisible")){
      startOverButtonEl.classList.remove("invisible");
      startOverButtonEl.classList.add("visible")
    }
  }
  // hide the search page, show the search results
  cocktailNameText.textContent = ev.strDrink;

  var ingredientList = [];
  ingredientList.push(ev.strIngredient1, ev.strIngredient2, ev.strIngredient3,
    ev.strIngredient4, ev.strIngredient5, ev.strIngredient6, ev.strIngredient7,
    ev.strIngredient8, ev.strIngredient9, ev.strIngredient10, ev.strIngredient11,
    ev.strIngredient12, ev.strIngredient13, ev.strIngredient14, ev.strIngredient15);
  var measurementList = [];
  measurementList.push(ev.strMeasure1, ev.strMeasure2, ev.strMeasure3,
    ev.strMeasure4, ev.strMeasure5, ev.strMeasure6, ev.strMeasure7,
    ev.strMeasure8, ev.strMeasure9, ev.strMeasure10, ev.strMeasure11,
    ev.strMeasure12, ev.strMeasure13, ev.strMeasure14, ev.strMeasure15);

  if (cocktailRecipeText.textContent !== "") {
    cocktailIngredientsText.innerHTML = "";
  }
  for (i = 0; i < ingredientList.length; i++) {
    if (![ingredientList[i], measurementList[i]].includes("") &&
      ![ingredientList[i], measurementList[i]].includes(null)) {
      var listItem = document.createElement("li");
      listItem.textContent = ingredientList[i] + ": " + measurementList[i];
      cocktailIngredientsText.appendChild(listItem);
    }
  }
  cocktailRecipeText.textContent = ev.strInstructions;
  cocktailGlassText.textContent = "Glass: " + ev.strGlass;
  cocktailImageEl.src = ev.strDrinkThumb;
  cocktailImageEl.alt = ev.strDrink;
}

storeMeals();
storeCocktails();

var cocktailCategoryArray = [];
var cocktailIngredientArray = [];
var cocktailAlcoholArray = [];

var categoryArray = [];
var cuisineArray = [];

var mealCategoryArrayURL = ["https://www.themealdb.com/api/json/v1/1/list.php?c=list"];
var mealCuisineArrayURL = ["https://www.themealdb.com/api/json/v1/1/list.php?a=list"];

var cocktailCategoryArrayURL = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"];
var cocktailAlcoholicArrayURL = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"];
var cocktailIngredientArrayURL = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"];

categoryOptions();
cuisineOptions();

cocktailCategoryOptions();
cocktailIngredientOptions();
cocktailAlcoholOptions();

async function categoryOptions() {
  for (var i = 0; i < mealCategoryArrayURL.length; i++) {
    const res = await fetch(mealCategoryArrayURL[i])
    const data = await res.json();
    for (var n = 0; n < data.meals.length; n++) {
      categoryArray.push(data.meals[n]);

    }
  }
  printCategory(categoryArray);
}



async function cuisineOptions() {
  for (var i = 0; i < mealCuisineArrayURL.length; i++) {
    const res = await fetch(mealCuisineArrayURL[i])
    const data = await res.json();
    for (var n = 0; n < data.meals.length; n++) {
      cuisineArray.push(data.meals[n]);

    }

  }
  printCuisine(cuisineArray);
}


function printCategory(array) {
  for (var i = 0; i < categoryArray.length; i++) {
    var categoryListEl = document.createElement("option");
    var textnode = document.createTextNode(categoryArray[i].strCategory);
    categoryListEl.appendChild(textnode)
    mealCategoryInputEl.appendChild(categoryListEl)
  }

}

function printCuisine(array) {
  for (var i = 0; i < cuisineArray.length; i++) {

    var cuisineListEl = document.createElement("option");
    //add option value
    var textnode = document.createTextNode(cuisineArray[i].strArea);
    cuisineListEl.appendChild(textnode)
    mealCuisineInputEl.appendChild(cuisineListEl)
  }
}

async function cocktailAlcoholOptions() {
  for (var i = 0; i < cocktailAlcoholicArrayURL.length; i++) {
    const res = await fetch(cocktailAlcoholicArrayURL[i])
    const data = await res.json();
    for (var n = 0; n < data.drinks.length; n++) {
      cocktailAlcoholArray.push(data.drinks[n]);
    }
  }
  printCocktailAlc(cocktailAlcoholArray);
}

function printCocktailAlc(array) {
  for (var i = 0; i < cocktailAlcoholArray.length; i++) {


    var cocktailAlcEl = document.createElement("option");
    //add option value
    var textnode = document.createTextNode(cocktailAlcoholArray[i].strAlcoholic);
    cocktailAlcEl.appendChild(textnode)
    cocktailAlcoholInputEl.appendChild(cocktailAlcEl)
  }
}

async function cocktailCategoryOptions() {
  for (var i = 0; i < cocktailCategoryArrayURL.length; i++) {
    const res = await fetch(cocktailCategoryArrayURL[i])
    const data = await res.json();
    for (var n = 0; n < data.drinks.length; n++) {
      cocktailCategoryArray.push(data.drinks[n]);

    }

  }
  printCocktailCategory(cocktailCategoryArray);
}

function printCocktailCategory(array) {
  for (var i = 0; i < cocktailCategoryArray.length; i++) {
    var cocktailCatEl = document.createElement("option");
    //add option value
    var textnode = document.createTextNode(cocktailCategoryArray[i].strCategory);
    cocktailCatEl.appendChild(textnode)
    cocktailCategoryInputEl.appendChild(cocktailCatEl)
  }
}

async function cocktailIngredientOptions() {
  for (var i = 0; i < cocktailIngredientArrayURL.length; i++) {
    const res = await fetch(cocktailIngredientArrayURL[i])
    const data = await res.json();
    for (var n = 0; n < data.drinks.length; n++) {
      cocktailIngredientArray.push(data.drinks[n]);

    }

  }
  printCocktailIngredient(cocktailIngredientArray);
}


function printCocktailIngredient(array) {
  for (var i = 0; i < cocktailIngredientArray.length; i++) {

    var cocktailIngredEl = document.createElement("option");
    //add option value
    var textnode = document.createTextNode(cocktailIngredientArray[i].strIngredient1);
    cocktailIngredEl.appendChild(textnode)
    cocktailIngredientInputEl.appendChild(cocktailIngredEl)
  }
}


pinnedRecipesEl.addEventListener("click", function (event) {
  event.preventDefault();

  startOverButtonEl.classList.remove("invisible");
  startOverButtonEl.classList.add("visible");
  

  //console.log("clicked on pinned recipes buttons")
})


function printPinnedRecipes() {
  //hide all other elements
  //show pinned element
  //console.log(pinnedRecipeArray.length)
  // console.log(pinnedRecipeArray)
  listPinnedRecipesEl.innerHTML = "";

  
  if (pinnedRecipeArray.length >= 1){
    for (var i=0; i<pinnedRecipeArray.length ; i++){
     //console.log(pinnedRecipeArray[i]);
     var singlePinnedEl = document.createElement("button")
       
     //hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800
     //"w-full bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600"
     singlePinnedEl.classList.add("btn", "py-2", "px-4", "flex", "flex-col", "w-full", "border-gray-200", "cursor-pointer", "hover:bg-gray-100", "hover:text-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-700", "focus:text-blue-700", "dark:border-gray-600", "dark:hover:bg-gray-600", "dark:hover:text-white", "dark:focus:ring-gray-500", "dark:focus:text-white");
     var textnode = document.createTextNode(pinnedRecipeArray[i])
     console.log(textnode)
     singlePinnedEl.appendChild(textnode);
     listPinnedRecipesEl.appendChild(singlePinnedEl);
     singlePinnedEl.addEventListener("click", displayPinnedRecipe)
     }
  }
  // else{
  //   //create module to alert no elements 
  //   //in meantime...
  //   alert("No Saved Recipes");
  // }  
}


//listen for button click when user wants to pin a specific recipe
pinToSaveRecipeEl.addEventListener("click", function (event) {
  event.preventDefault();
  //console.log("button press meal")
  storePinnedMeal();
  printPinnedRecipes();
})

pinToSaveCocktailEl.addEventListener("click", function (event) {
  event.preventDefault();
  //console.log("button press cocktail")
  storePinnedCocktail();
  printPinnedRecipes();
})

function storePinnedMeal() {
  //jquery setup right now.  need to change to vanilla js
  var recipeName = mealNameText.textContent;
  //console.log (recipeName)
  pinnedRecipeArray.push(recipeName);
  localStorage.setItem("pinned-recipes", JSON.stringify(pinnedRecipeArray));
}


function storePinnedCocktail() {
  //jquery setup right now.  need to change to vanilla js
  var recipeName = cocktailNameText.textContent;
  //console.log (recipeName)
  pinnedRecipeArray.push(recipeName);
  localStorage.setItem("pinned-recipes", JSON.stringify(pinnedRecipeArray));
}

function displayPinnedRecipe(ev) {
  // hide the pinned recipe page
  // show the display pinned recipe page
  var savedMeal = ""
  var savedCocktail = ""
  for (i = 0; i < mealsArray.length; i++) {
    if (ev.target.textContent == mealsArray[i].strMeal) {
      savedMeal = ev.target.textContent;
    } else {
      savedCocktail = ev.target.textContent;
    }
  }
  if (savedMeal === ev.target.textContent) {
    fetch("https://themealdb.com/api/json/v1/1/search.php?s=" + savedMeal)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var pinnedRecipe = data.meals[0];
        savedNameText.textContent = pinnedRecipe.strMeal;

        var ingredientList = [];
        ingredientList.push(pinnedRecipe.strIngredient1, pinnedRecipe.strIngredient2, pinnedRecipe.strIngredient3,
          pinnedRecipe.strIngredient4, pinnedRecipe.strIngredient5, pinnedRecipe.strIngredient6, pinnedRecipe.strIngredient7,
          pinnedRecipe.strIngredient8, pinnedRecipe.strIngredient9, pinnedRecipe.strIngredient10, pinnedRecipe.strIngredient11,
          pinnedRecipe.strIngredient12, pinnedRecipe.strIngredient13, pinnedRecipe.strIngredient14, pinnedRecipe.strIngredient15,
          pinnedRecipe.strIngredient16, pinnedRecipe.strIngredient17, pinnedRecipe.strIngredient18, pinnedRecipe.strIngredient19,
          pinnedRecipe.strIngredient20);
        var measurementList = [];
        measurementList.push(pinnedRecipe.strMeasure1, pinnedRecipe.strMeasure2, pinnedRecipe.strMeasure3,
          pinnedRecipe.strMeasure4, pinnedRecipe.strMeasure5, pinnedRecipe.strMeasure6, pinnedRecipe.strMeasure7,
          pinnedRecipe.strMeasure8, pinnedRecipe.strMeasure9, pinnedRecipe.strMeasure10, pinnedRecipe.strMeasure11,
          pinnedRecipe.strMeasure12, pinnedRecipe.strMeasure13, pinnedRecipe.strMeasure14, pinnedRecipe.strMeasure15,
          pinnedRecipe.strMeasure16, pinnedRecipe.strMeasure17, pinnedRecipe.strMeasure18, pinnedRecipe.strMeasure19,
          pinnedRecipe.strMeasure20);

        savedIngredientsList.innerHTML = "";
        for (i = 0; i < ingredientList.length; i++) {
          if (![ingredientList[i], measurementList[i]].includes("") &&
            ![ingredientList[i], measurementList[i]].includes(null)) {
            var listItem = document.createElement("li");
            listItem.textContent = ingredientList[i] + ": " + measurementList[i];
            savedIngredientsList.appendChild(listItem);
          }
        }
        savedRecipeText.textContent = pinnedRecipe.strInstructions;
        savedRecipeImage.src = pinnedRecipe.strMealThumb;
        savedRecipeImage.alt = pinnedRecipe.strMeal;
      })
  } else {
    fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + savedCocktail)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var pinnedRecipe = data.drinks[0];
      savedNameText.textContent = pinnedRecipe.strDrink;

      var ingredientList = [];
      ingredientList.push(pinnedRecipe.strIngredient1, pinnedRecipe.strIngredient2, pinnedRecipe.strIngredient3,
        pinnedRecipe.strIngredient4, pinnedRecipe.strIngredient5, pinnedRecipe.strIngredient6, pinnedRecipe.strIngredient7,
        pinnedRecipe.strIngredient8, pinnedRecipe.strIngredient9, pinnedRecipe.strIngredient10, pinnedRecipe.strIngredient11,
        pinnedRecipe.strIngredient12, pinnedRecipe.strIngredient13, pinnedRecipe.strIngredient14, pinnedRecipe.strIngredient15);
      var measurementList = [];
      measurementList.push(pinnedRecipe.strMeasure1, pinnedRecipe.strMeasure2, pinnedRecipe.strMeasure3,
        pinnedRecipe.strMeasure4, pinnedRecipe.strMeasure5, pinnedRecipe.strMeasure6, pinnedRecipe.strMeasure7,
        pinnedRecipe.strMeasure8, pinnedRecipe.strMeasure9, pinnedRecipe.strMeasure10, pinnedRecipe.strMeasure11,
        pinnedRecipe.strMeasure12, pinnedRecipe.strMeasure13, pinnedRecipe.strMeasure14, pinnedRecipe.strMeasure15);

        savedIngredientsList.innerHTML = "";
        for (i = 0; i < ingredientList.length; i++) {
          if (![ingredientList[i], measurementList[i]].includes("") &&
            ![ingredientList[i], measurementList[i]].includes(null)) {
            var listItem = document.createElement("li");
            listItem.textContent = ingredientList[i] + ": " + measurementList[i];
            savedIngredientsList.appendChild(listItem);
          }
        }
        savedRecipeText.textContent = pinnedRecipe.strInstructions;
        savedGlassText.textContent = pinnedRecipe.strGlass;
        savedRecipeImage.src = pinnedRecipe.strDrinkThumb;
        savedRecipeImage.alt = pinnedRecipe.strDrink;
    })
  }
}

//if we want to add an option for users to remove local storage pins
//function removeItem(){
// for (var i = 0; i < pinnedRecipeArray.length; i++){

// pinnedRecipeArray.remove(i);
// }

//}

startOverButtonEl.addEventListener("click", function(event){
  event.preventDefault();
  init();
  //console.log("clicked on pinned recipes buttons")
})

function init(){
  if(startOverButtonEl.classList.contains("visible")){
    startOverButtonEl.classList.remove("visible");
    startOverButtonEl.classList.add("invisible")
  }
  
  printPinnedRecipes();
  //add a bunch of hide/show logic here

}

init();
