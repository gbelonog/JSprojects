var game = document.getElementById('board');//get board
var grid = document.createElement('section');//create grid
var cubesBox = [0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1];
grid.setAttribute('class','grid');
game.appendChild(grid);//add grid to board
for(i = 0; i < 16; i++)
{
    var cube = document.createElement('div');//create div element and assign it to var card
    if (cubesBox[i]==1){cube.classList.add('yellowState');}//apply a green cube to that div}
    else {cube.classList.add('greenState');}//apply a yellow cube to that div
    grid.appendChild(cube);//add card to grid
};
//add event listener to grid
grid.addEventListener('click',function(event){
    var clicked = event.target;// var for clicked item
    clicked.classList.add('yellowState');
});
