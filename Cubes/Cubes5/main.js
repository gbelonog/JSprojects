var game = document.getElementById('board');//get board
var grid = document.createElement('grid');//create grid
var size = 0;
getUserChoice(prompt('Please set size of grid'));      
var gridSize = size * 100 +size * 4;//size of grid
grid.setAttribute('class','grid');
grid.setAttribute('id','grid');
game.appendChild(grid);//add grid to board

document.getElementById('grid').style.setProperty('--grid-width', gridSize + 'px');// set width property in css file
document.getElementById('grid').style.setProperty('--grid-height', gridSize + 'px');// set height property in css file

for(i = 0; i < (Math.pow(size,2)); i++)
{
    var cube = document.createElement('div');//create div element and assign it to var cube
    var random = Math.random()+0.5;//get random digit
    if (random > 1){
        cube.classList.add('secondState');//apply a yellow color to cube 
    }
    else {cube.classList.add('firstState');}//apply a green color to cube   
    cube.id = i;//add id to cube
    grid.appendChild(cube);//add cube to grid
};
//add event listener to grid
grid.addEventListener('click',function(event){
    var clicked = event.target;// var for clicked item
    changeColor(clicked);//change color of clicked element
    selectNaibor(clicked.id);//select elements to changed with clicked
});

//function for checking user's selection
function getUserChoice(userInput){
    if(userInput >= 0 && userInput <= 10){
        size = userInput;}
    else {
        getUserChoice(prompt('Please enter a valid number'));
    }
} 
//function to changing color of clicked element and its naibors
function changeColor(cube){
    if (cube.classList.contains('grid')){
        return 0;
    };
    if (cube.classList.contains('secondState')){
        cube.classList.remove('secondState');
        cube.classList.add('firstState');
    }
    else {
        cube.classList.remove('firstState');
        cube.classList.add('secondState');
    }
};

//this function makes selectNaibor function not so big
function changeColorById(n){
        elementNearClicked = document.getElementById(n);
        changeColor(elementNearClicked);
    };    
    
//function for selecting naibors of clicked element
function selectNaibor(id){
    size = Number(size);
    if(id % size > 0){
        changeColorById(id - 1);
    };
    if((id % size) != size - 1) {
        changeColorById(Number(id) + 1);
    };
    if(id < size * (size - 1)) {
        changeColorById(Number(id) + size);
    };
    if(id > size - 1) {
        changeColorById(Number(id) - size);
    };
};
