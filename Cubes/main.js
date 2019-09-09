var cubes = [
    { 'name': 'one' },
    { 'name': 'two'}
];

var game = document.getElementById('board');
var gameGrid = cubes.concat(cubes);
var grid = document.createElement('section');
grid.setAttribute('class','grid');
game.appendChild(grid);
for(i = 0; i < 9; i++){
    //create div element and assign it to var card
    var card = document.createElement('div');
    //apply a card clas to that div
    card.classList.add('card');
   //append card to grid
    grid.appendChild(card);
    

}