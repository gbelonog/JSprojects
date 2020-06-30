'use strict';

class App{
    constructor(element){
        this.element = element;
        console.log(this.element);
    }

    init(){
        let createButton = this.element.querySelector('#createButton');
        createButton.addEventListener('click', event => {
            event.preventDefault();
            
        });
    };
}

class Card{
    constructor(cardData){

    }
}
let appElement = document.querySelector('#app');

let app = new App(appElement);
app.init();
