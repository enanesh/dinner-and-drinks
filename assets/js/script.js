
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
  console.log(mealsArray);
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
  console.log(cocktailsArray);
}

storeMeals();
storeCocktails();

















var categoryArray = [];
var cuisineArray = [];
var categoryEl = document.getElementById("category-list");
var cuisineEl =  document.getElementById("cuisine-list");
var mealCategoryArrayURL = ["https://www.themealdb.com/api/json/v1/1/list.php?c=list"];
var mealCuisineArrayURL = ["https://www.themealdb.com/api/json/v1/1/list.php?a=list"];





categoryOptions();
cuisineOptions();

async function categoryOptions (){
    for (var i=0; i < mealCategoryArrayURL.length; i++){
        const res = await fetch(mealCategoryArrayURL[i])
        const data = await res.json();
          for (var n = 0; n < data.meals.length; n++) {
            categoryArray.push(data.meals[n]);
            
          }
    }
    printCategory(categoryArray);
}


async function cuisineOptions (){
  for (var i=0; i < mealCuisineArrayURL.length; i++){
      const res = await fetch(mealCuisineArrayURL[i])
      const data = await res.json();
        for (var n = 0; n < data.meals.length; n++) {
          cuisineArray.push(data.meals[n]);
          
        }
  }
  printCuisine(cuisineArray);
}

function printCategory(array){
  console.log(array)
  console.log(array.length)
  for(var i = 0; i < categoryArray.length; i++){
    console.log(categoryArray[i])

    var categoryListEl = document.createElement("li");
    var textnode = document.createTextNode(categoryArray[i].strCategory);
    categoryListEl.appendChild(textnode)
    categoryEl.appendChild(categoryListEl)
  }
 
}

function printCuisine(array){
  console.log(array)
  console.log(array.length)
  for(var i = 0; i < cuisineArray.length; i++){
    console.log(cuisineArray[i])

    var cuisineListEl = document.createElement("option");
    //add option value
    var textnode = document.createTextNode(cuisineArray[i].strArea);
    cuisineListEl.appendChild(textnode)
    cuisineEl.appendChild(cuisineListEl)
  }
}
