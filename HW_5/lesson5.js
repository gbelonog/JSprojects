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

let listOfProducts = products();
console.log(listOfProducts);

let productsMore5 = filterProductsByPrice(listOfProducts);
console.log(productsMore5);

let productsCategoryPens = filterProductsByCategory(listOfProducts);
console.log(productsCategoryPens);

let numberOfItemsInPens = countPens(listOfProducts);
console.log(numberOfItemsInPens + ' pens.');
