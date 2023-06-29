const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const items = ingredients.map((ingredient) => {
    const listItems = document.createElement('li');
    listItems.textContent = ingredient;
    listItems.classList.add('item');
    return listItems;

});

list.append(...items);
console.log(list);