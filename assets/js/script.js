
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

//root into HTML elements
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
var mealPinnedText = document.getElementById("meal-pinned-text");
var cocktailNameText = document.getElementById("cocktail-name-text");
var cocktailIngredientsText = document.getElementById("cocktail-ingredients-list");
var cocktailGlassText = document.getElementById("cocktail-glass-text");
var cocktailRecipeText = document.getElementById("cocktail-recipe-text");
var cocktailImageEl = document.getElementById("cocktail-image");
var cocktailErrorText = document.getElementById("cocktail-error-text");
var cocktailPinnedText = document.getElementById("cocktail-pinned-text");
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
var homeLogoEl  = document.getElementById("start-logo");
var mainContainerEl = document.querySelector(".main-container")

//create array to store pinned recipes
//upon page refresh, local storage "pinned-recipes" are loaded into pinnedRecipeArray
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
    mealCategoryInputEl.value = "";
    mealCuisineInputEl.value = "";
  } else {
    mealErrorText.textContent = "";
    mealSearchPage.classList.add("hidden");
    mealResultPage.classList.remove("hidden");
    mealResultPage.classList.add("block");
  }
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
    cocktailErrorText.textContent = "Sorry, no cocktails match your filters, please try again.";
    cocktailCategoryInputEl.value = "";
    cocktailIngredientInputEl.value = "";
    cocktailAlcoholInputEl.value = "";
  } else {
    cocktailErrorText.textContent = "";
    cocktailSearchPage.classList.add("hidden");
    cocktailResultPage.classList.remove("hidden");
    cocktailResultPage.classList.add("block");
  }
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

//creating empty arrays that will each hold certain filters (e.g. the first ingredient of a cocktails)
var cocktailCategoryArray = [];
var cocktailIngredientArray = [];
var cocktailAlcoholArray = [];
var categoryArray = [];
var cuisineArray = [];

//connecting to API lists of category types, cuisine types, ingredients, etc.  This will allow users to filter recipes later on.
var mealCategoryArrayURL = ["https://www.themealdb.com/api/json/v1/1/list.php?c=list"];
var mealCuisineArrayURL = ["https://www.themealdb.com/api/json/v1/1/list.php?a=list"];
var cocktailCategoryArrayURL = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"];
var cocktailAlcoholicArrayURL = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"];
var cocktailIngredientArrayURL = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"];

//calling functions below that connect to a specific meal or cocktail API (e.g. ingredients/category/alcohol options)
//the function called then parses through API array, and for each index, stores the item in a new local array
//lastly, function calls a printCategory function and passes it the local array.  
//with this information, the list of indexes will be printed out as a specific type of filter option for users.
categoryOptions();
cuisineOptions();
cocktailCategoryOptions();
cocktailIngredientOptions();
cocktailAlcoholOptions();

//meal's category array function
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

//meal's cuisine type array function
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

//cocktail alcohol type array function
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

//cocktail category array function
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

//cocktail ingredient function
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



//this function will print the meal category array items to user's HTML for filtering
function printCategory(array) {
  for (var i = 0; i < categoryArray.length; i++) {
    var categoryListEl = document.createElement("option");
    var textnode = document.createTextNode(categoryArray[i].strCategory);
    categoryListEl.appendChild(textnode)
    mealCategoryInputEl.appendChild(categoryListEl)
  }

}

//this function will print the cuisine type array items to user's HTML for filtering
function printCuisine(array) {
  for (var i = 0; i < cuisineArray.length; i++) {
    var cuisineListEl = document.createElement("option");
    var textnode = document.createTextNode(cuisineArray[i].strArea);
    cuisineListEl.appendChild(textnode)
    mealCuisineInputEl.appendChild(cuisineListEl)
  }
}

//this function will print out cocktail alcohol type to user's HTML for filtering
function printCocktailAlc(array) {
  for (var i = 0; i < cocktailAlcoholArray.length; i++) {
    var cocktailAlcEl = document.createElement("option");
    var textnode = document.createTextNode(cocktailAlcoholArray[i].strAlcoholic);
    cocktailAlcEl.appendChild(textnode)
    cocktailAlcoholInputEl.appendChild(cocktailAlcEl)
  }
}

//this function will print out cocktail category type to user's HTML for filtering
function printCocktailCategory(array) {
  for (var i = 0; i < cocktailCategoryArray.length; i++) {
    var cocktailCatEl = document.createElement("option");
    var textnode = document.createTextNode(cocktailCategoryArray[i].strCategory);
    cocktailCatEl.appendChild(textnode)
    cocktailCategoryInputEl.appendChild(cocktailCatEl)
  }
}

//this function will print out cocktail ingredient type to user's HTML for filtering
function printCocktailIngredient(array) {
  for (var i = 0; i < cocktailIngredientArray.length; i++) {
    var cocktailIngredEl = document.createElement("option");
    var textnode = document.createTextNode(cocktailIngredientArray[i].strIngredient1);
    cocktailIngredEl.appendChild(textnode)
    cocktailIngredientInputEl.appendChild(cocktailIngredEl)
  }
}

//event listener - listens for click on "pinned recipes" button
//when clicked various elements of HTML are hidden while the list of pinned recipes is shown
pinnedRecipesEl.addEventListener("click", function (event) {
  event.preventDefault();
  mealSearchPage.classList.remove("block");
  mealSearchPage.classList.add("hidden");
  cocktailSearchPage.classList.remove("block");
  cocktailSearchPage.classList.add("hidden");
  mealResultPage.classList.remove("block");
  mealResultPage.classList.add("hidden");
  cocktailResultPage.classList.remove("block");
  cocktailResultPage.classList.add("hidden");
  savedRecipePage.classList.remove("block");
  savedRecipePage.classList.add("hidden");
  pinnedRecipesPage.classList.remove("hidden");
  pinnedRecipesPage.classList.add("block");
  mainContainerEl.classList.add("hidden")
})

//function below parses through the pinned recipes array and prints out all items in the array.
function printPinnedRecipes() {
  //first we have to clear current list of printed items so we print out list that includes new items
  listPinnedRecipesEl.innerHTML = "";
  //if statement - logic only runs if pinned recipe array has an item currently in it
  if (pinnedRecipeArray.length >= 1){
    for (var i=0; i<pinnedRecipeArray.length ; i++){
     var singlePinnedEl = document.createElement("button")
     singlePinnedEl.classList.add("btn", "w-full", "items-center", "py-4", "px-4", "flex", "flex-col", "border-gray-200", "cursor-pointer", "hover:bg-gray-100", "hover:text-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-700", "focus:text-blue-700", "dark:border-gray-600", "dark:hover:bg-gray-600", "dark:hover:text-white", "dark:focus:ring-gray-500", "dark:focus:text-white");
     var textnode = document.createTextNode(pinnedRecipeArray[i])
     console.log(textnode)
     singlePinnedEl.appendChild(textnode);
     listPinnedRecipesEl.appendChild(singlePinnedEl);
     singlePinnedEl.addEventListener("click", displayPinnedRecipe)
     }
  }
}

//listen for button click when user wants to pin a specific meal
pinToSaveRecipeEl.addEventListener("click", function (event) {
  event.preventDefault();
  //call function to store specific meal pin to array
  storePinnedMeal();
  //call function to print out a new list of recipes that includes new addition
  printPinnedRecipes();
})


//listen for button click when user wants to pin a specific cocktail
pinToSaveCocktailEl.addEventListener("click", function (event) {
  event.preventDefault();
   //call function to store specific cocktail pin to array
  storePinnedCocktail();
  //call function to print out a new list of recipes that includes new addition
  printPinnedRecipes();
})

//function, when called, stores newest pinned meal item to the recipe array in local storage.
function storePinnedMeal() {
  var recipeName = mealNameText.textContent;
  //runs a check to see if meal is already included in array.  if not it adds it.
  var inArray = (pinnedRecipeArray.includes(recipeName))
  if (inArray == false){
    pinnedRecipeArray.push(recipeName);
    localStorage.setItem("pinned-recipes", JSON.stringify(pinnedRecipeArray))
  };
  mealPinnedText.textContent = "Meal pinned!";
}

//function, when called, stores newest pinned cocktail item to the recipe array in local storage.
function storePinnedCocktail() {
  var recipeName = cocktailNameText.textContent;
  //runs a check to see if cocktail is already included in array.  if not it adds it.
  var inArray = (pinnedRecipeArray.includes(recipeName))
  if (inArray == false){
  pinnedRecipeArray.push(recipeName);
  localStorage.setItem("pinned-recipes", JSON.stringify(pinnedRecipeArray))
};
cocktailPinnedText.textContent = "Cocktail pinned!";
}

function displayPinnedRecipe(ev) {
  pinnedRecipesPage.classList.remove("block");
  pinnedRecipesPage.classList.add("hidden");
  savedRecipePage.classList.remove("hidden");
  savedRecipePage.classList.add("block");
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

//if user clicks on logo, it acts like a "home" button and will take users to initial home page
homeLogoEl.addEventListener("click", function(event){
  event.preventDefault();
  init();
})

//loads initial home page with filter options for user
function init(){
  mealCategoryInputEl.value = "";
  mealCuisineInputEl.value = "";
  cocktailCategoryInputEl.value = "";
  cocktailIngredientInputEl.value = "";
  cocktailAlcoholInputEl.value = "";
  mealPinnedText.textContent = "";
  cocktailPinnedText.textContent = "";
  mealSearchPage.classList.remove("hidden");
  mealSearchPage.classList.add("block");
  cocktailSearchPage.classList.remove("hidden");
  cocktailSearchPage.classList.add("block");
  mealResultPage.classList.add("hidden");
  cocktailResultPage.classList.add("hidden");
  pinnedRecipesPage.classList.add("hidden");
  savedRecipePage.classList.add("hidden");
  mainContainerEl.classList.remove("hidden")
  mainContainerEl.classList.add("block")
  printPinnedRecipes();
}

//initial home page is called with page load
init();
