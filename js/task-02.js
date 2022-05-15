const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let UlList = document.getElementById(`ingredients`);

const LiIngreds = ingredients.forEach(ingredient => {
  
  const items = document.createElement(`li`);
  items.classList.add(`item`);
  items.innerHTML = ingredient;
  UlList.append(items);
} )
