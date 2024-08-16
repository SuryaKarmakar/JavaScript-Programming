const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal", "Frittata"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

// this converts breakfast menu array items into HTML strings using map().
const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");

console.log(breakfastMenuItemsHTML);

document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

// this converts breakfast menu array items into HTML strings using forEach().
let mainCourseItem = "";

mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

// this converts breakfast menu array items into HTML strings using for loop.
let dessertItem = "";

for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

document.getElementById("dessertMenuItems").innerHTML = dessertItem;
