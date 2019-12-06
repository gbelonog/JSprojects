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
    //console.log(productsArray);
    return productsArray;
};

function filterProductsByPrice(listOfProducts){
    let results = listOfProducts.filter(function(item) {
        if(item.price > 5) return item; 
      });
      return results;
};

function filterProductsByCategory(listOfProducts){
    let results = listOfProducts.filter(item => item.category === 'pens');
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

//let listOfProducts = products();
let listOfProducts = [  
    { 
    name: 'pen',
    price: 2,
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

let sortedArrUp = sortUp(listOfProducts);
console.log(sortedArrUp);
console.log(listOfProducts);

