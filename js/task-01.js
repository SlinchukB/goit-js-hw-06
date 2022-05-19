const totalCategories = document.querySelectorAll("ul#categories>li.item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${document.querySelector("h2")
      .textContent}
Elements: ${categories.lastElementChild.children.length}`
  )
  .join("\n");
console.log(categoriesArray);


// const totalCategories = document.querySelectorAll("ul#categories>li.item");
// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Category: ${categories.firstElementChild
//       .textContent}
// Elements: ${categories.lastElementChild.children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);
