var game = document.getElementById('board');//get board
var grid = document.createElement('section');//create grid
var cubesBox = [0,1,1,1,0,1,1,1,0];
grid.setAttribute('class','grid');
game.appendChild(grid);//add grid to board
for(i = 0; i < 9; i++)
{
    var card = document.createElement('div');//create div element and assign it to var card
    if (cubesBox[i]==1){card.classList.add('yellowState');}//apply a green cube to that div}
    else {card.classList.add('greenState');}//apply a yellow cube to that div
    grid.appendChild(card);//add card to grid
};
//add event listener to grid
grid.addEventListener('click',function(event){
    var clicked = event.target;// var for clicked item
    clicked.classList.add('yellowState');
});
