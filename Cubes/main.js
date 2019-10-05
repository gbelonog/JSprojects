//var game = document.getElementById('board');//get board

//-----controller-----
getUserChoice(prompt('Please set size of grid')); //ask user about size of grid
//function for checking user's selection
function getUserChoice(userInput){
    if(userInput > 1 && userInput < 10){
        createGrid(userInput);
    }
    else {
        getUserChoice(prompt('Please enter a valid number'));
    }
} 
//------------view--------------
function gameView (whatToDo, size){
    if (whatToDo == 'victory'){    
        document.getElementById('grid').innerText = 'Victory';//victory appears on grid
    };

    if (whatToDo == 'setSizeOfGrid'){
        document.getElementById('grid').style.setProperty('--grid-width', size + 'px');// set width property in css file
        document.getElementById('grid').style.setProperty('--grid-height', size + 'px');// set height property in css file
    };
};


//--------model----------

//function for creating grid
function createGrid(size){
    var game = document.getElementById('board');//get board
    var grid = document.createElement('grid');//create grid      
    var gridSize = size * 100 +size * 4;//size of grid
    var counterAllCubesTheSame = 0;
    
    grid.setAttribute('class','grid');
    grid.setAttribute('id','grid');
    game.appendChild(grid);//add grid to board
    gameView('setSizeOfGrid', gridSize);
    
    counterAllCubesTheSame = addCubesToGrid(grid, size);//add cubes      
    
    //verify that not all cubes have the same color
/*    while(counterAllCubesTheSame == size * size|| counterAllCubesTheSame == 0){
        removeCubesFromGrid(size);    
        counterAllCubesTheSame = addCubesToGrid(grid, size);
    };*/
    
    //add event listener to grid
    grid.addEventListener('click',function(event){
        var clicked = event.target;// var for clicked item
        changeColor(clicked);//change color of clicked element
        selectNaibor(clicked.id, size);//select elements to changed with clicked
    });
};   
//function checks that all cubes are in the same state
function victoryCheck(size){
    var counter = 0;
    for(i = 0; i < size * size; i++){
        if(document.getElementById(i).className == 'firstState'){
            counter++;//count green elements
        };
    };
    if (counter == size * size || counter == 0){//if all elements are green or yellow = victory
        removeCubesFromGrid(size);
        gameView('victory');
    };
};
     
//function to remove all cubes from grid
function removeCubesFromGrid(size){
    for(i = 0; i < size * size; i++){
        document.getElementById(i).remove();//removing cubes
    };    
};

//function to add cubes to grid 
function addCubesToGrid(grid, size){
    var counter = 0;
    var i = 0;
    for(x = 0; x < size; x++){
        for(y = 0; y < size; y++){
            var cube = document.createElement('cube');//create div element and assign it to var cube
            var random = Math.random()+0.5;//get random digit
            if (random > 1){
                cube.classList.add('secondState');//apply a yellow color to cube 
                counter++;
            }
            else {
                cube.classList.add('firstState');//apply a green color to cube 
            }  
            cube.id = i;
            i++;
            cube.setAttribute('x',x);//add x to cube
            cube.setAttribute('y',y);//add y to cube
            //cube.x = 'x' + x;
            //cube.y = 'y' + y;//add y to cube
            grid.appendChild(cube);//add cube to grid
        };
    };
    return counter;
};

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
function selectNaibor(id, size){
    size = Number(size);
    x = document.getElementById(id).getAttribute('x');
    y = document.getElementById(id).getAttribute('y');

    console.log(document.querySelector('[x='+ '"' + x + '"'+'][y='+ '"' + y + '"'+']'));
    //console.log(document.querySelector('[x="1"][y="2"]'));
    changeColor(document.querySelector('[x='+ '"' + Number(x+1) + '"'+'][y='+ '"' + Number(y+1) + '"'+']'));

   /* if(id % size > 0){
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
    };*/
    victoryCheck(size);
};



