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
    if (cube.classList.contains('grid')){
        return 0;
    };
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
    console.log(id);
    if(id != 0 && id != 4 && id != 8 && id != 12) {
            changeColorById(id - 1);
    };
    if(id != 3 && id != 7 && id != 11 && id != 15) {
        changeColorById(Number(id) + 1);
    };
    if(id < 12) {
        changeColorById(Number(id) + 4);
    };
    if(id > 3) {
        changeColorById(Number(id) - 4);
    };
};
