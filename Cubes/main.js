var game = document.getElementById('board');//get board
var grid = document.createElement('section');//create grid
grid.setAttribute('class','grid');
game.appendChild(grid);//add grid to board
for(i = 0; i < 4; i++)
{
    var card = document.createElement('div');//create div element and assign it to var card
    card.classList.add('card');//apply a card class to that div
    grid.appendChild(card);//add card to grid
};
//add event listener to grid
grid.addEventListener('click',function(event){
    var clicked = event.target;// var for clicked item
    clicked.classList.add('selected');
});
