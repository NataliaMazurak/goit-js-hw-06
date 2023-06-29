const items = document.querySelectorAll('#categories .item');
console.log('Number of categories: ', items.length);


items.forEach((item) => {
    const title = item.firstElementChild.textContent;
    const itemElements = item.lastElementChild.children.length;
    

        console.log(`Category: ${title}`);
    console.log(`Elements: ${itemElements}`);
 });
 