var game = document.getElementById('board');//get board
var grid = document.createElement('section');//create grid
grid.setAttribute('class','grid');
game.appendChild(grid);//add grid to board

for(i = 0; i < 16; i++)
{
    var cube = document.createElement('div');//create div element and assign it to var card
    var random = Math.random()+0.5;
    if (random > 1){cube.classList.add('yellowState');}//apply a green cube to that div}
    else {cube.classList.add('greenState');}//apply a yellow cube to that div   
    grid.appendChild(cube);//add card to grid*/
};

//add event listener to grid
grid.addEventListener('click',function(event){
    var clicked = event.target;// var for clicked item
    if (clicked.classList.contains('grid')){return };

    if (clicked.classList.contains('yellowState')){
        clicked.classList.remove('yellowState');
        clicked.classList.add('greenState');
    }
    else {
       clicked.classList.remove('greenState');
       clicked.classList.add('yellowState');
    }
});

