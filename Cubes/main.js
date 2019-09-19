var game = document.getElementById('board');//get board
var grid = document.createElement('section');//create grid
grid.setAttribute('class','grid');
game.appendChild(grid);//add grid to board

for(i = 0; i < 16; i++)
{
    var cube = document.createElement('div');//create div element and assign it to var cube
    var random = Math.random()+0.5;//get random digit
    if (random > 1){
        cube.classList.add('yellowState');//apply a yellow color to cube 
    }
    else {cube.classList.add('greenState');}//apply a green color to cube   
    cube.id = i;//add id to cube
    grid.appendChild(cube);//add cube to grid
};
//add event listener to grid
grid.addEventListener('click',function(event){
    var clicked = event.target;// var for clicked item
    changeColor(clicked);//change color of clicked element
    selectNaibor(clicked.id);//select elements to changed with clicked
});

//function to changing color of clicked element and its naibors
function changeColor(cube){
    if (cube.classList.contains('grid')){return};
    if (cube.classList.contains('yellowState')){
        cube.classList.remove('yellowState');
        cube.classList.add('greenState');
    }
    else {
        cube.classList.remove('greenState');
        cube.classList.add('yellowState');
    }
};

//this function makes selectNaibor function not so big
function changeColorById(n){
        elementNearClicked = document.getElementById(n);
        changeColor(elementNearClicked);
    };    
    
//function for selecting naibors of clicked element
function selectNaibor(id){
    switch(id) {
        case '0':  
            changeColorById(1);
            changeColorById(4);
            break;
        case '1':  
            changeColorById(0);
            changeColorById(2);
            changeColorById(5);
            break;
        case '2':  
            changeColorById(1);
            changeColorById(3);
            changeColorById(6);
            break;
        case '3': 
            changeColorById(2);
            changeColorById(7);
            break;
        case '4': 
            changeColorById(0);
            changeColorById(5);
            changeColorById(8);
            break;
        case '5': 
            changeColorById(1);
            changeColorById(4);
            changeColorById(6);
            changeColorById(9);
            break;
        case '6': 
            changeColorById(2);
            changeColorById(5);
            changeColorById(7);
            changeColorById(10);
            break;
        case '7': 
            changeColorById(3);
            changeColorById(6);
            changeColorById(11);
            break;
        case '8': 
            changeColorById(4);
            changeColorById(9);
            changeColorById(12);
            break;
        case '9': 
            changeColorById(5);
            changeColorById(8);
            changeColorById(10);
            changeColorById(13);
            break;
        case '10': 
            changeColorById(6);
            changeColorById(9);
            changeColorById(11);
            changeColorById(14);
            break;
        case '11': 
            changeColorById(7);
            changeColorById(10);
            changeColorById(15);
            break;
        case '12': 
            changeColorById(8);
            changeColorById(13);
            break;
        case '13': 
            changeColorById(9);
            changeColorById(12);
            changeColorById(14);
            break;
        case '14': 
            changeColorById(10);
            changeColorById(13);
            changeColorById(15);
            break;
        case '15': 
            changeColorById(11);
            changeColorById(14);
            break;
      }
    
};
