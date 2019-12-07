'use strict';
function products (){
    let productsArray = [];
    let next = false;
    
    do{
        let product = {};
    
        product.name = prompt('name?');
        product.price = prompt('price?');
        product.category = prompt('category?');

        productsArray.push(product);
        next = confirm('add product?')
    }while(next);
    return productsArray;
};

function filterProductsByPrice(listOfProducts, priceLimit){
    let results = listOfProducts.filter(function(item) {
        if(item.price > priceLimit) return item; 
      });
      return results;
};

function filterProductsByCategory(listOfProducts, categoryName){
    let results = listOfProducts.filter(item => item.category === categoryName);
      return results;
};

function countPens(listOfProducts){
    let results = listOfProducts.filter(item => item.category === 'pens');
      return results.length;
};

function removePen(){
    listOfProducts = listOfProducts.filter(item => item.name !== 'pen');
};

function sortUp(listOfProducts){
    let result = listOfProducts.sort((a,b) => (a.price - b.price))
    return result;
};

function sortDown(listOfProducts){
    let result = listOfProducts.sort((a,b) => (b.price - a.price));
    return result;
};

function askAboutSortAndFilter(listOfProducts){
    let sortType = prompt('to up enter 1, to down enter 0');
    let filterType = prompt('for filtering by price enter 1, for filtering by category enter 0');
    if (filterType === 1){
        let priceLimit = prompt('enter price limit');
        listOfProducts = filterProductsByPrice(listOfProducts,priceLimit);
        console.log(listOfProducts);
    }else {
        let categoryName = prompt('enter categoryName');
        listOfProducts = filterProductsByCategory(listOfProducts,categoryName);
        console.log(listOfProducts);
    };

    if(sortType === 1){
        sortUp(listOfProducts);
    }
    else{
        sortDown(listOfProducts);
    };
    console.log(listOfProducts);
};
//let listOfProducts = products();
let listOfProducts = [  
    { 
    name: 'pen',
    price: 8,
    category: 'pens'
  },
  { 
    name: 'pen1',
    price: 7,
    category: 'pens'
  },
  { 
    name: 'paper',
    price: 1,
    category: 'paper'
  },
  { 
    name: 'book',
    price: 21,
    category: 'paper'
  }
];
console.log(listOfProducts);

// let productsMore5 = filterProductsByPrice(listOfProducts);
// console.log(productsMore5);

// let productsCategoryPens = filterProductsByCategory(listOfProducts);
// console.log(productsCategoryPens);

// let numberOfItemsInPens = countPens(listOfProducts);
// console.log(numberOfItemsInPens + ' pens.');

// removePen();
// console.log(listOfProducts);

// let sortedArrUp = sortUp(listOfProducts);
// console.log(sortedArrUp);
// console.log(listOfProducts);

// let sortedArrDown = sortDown(listOfProducts);
// console.log(sortedArrDown);
// console.log(listOfProducts);
askAboutSortAndFilter(listOfProducts);

