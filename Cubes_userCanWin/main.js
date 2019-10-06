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
    
    addCubesToGrid(grid, size);//add cubes      
    
    //add event listener to grid
    grid.addEventListener('click',function(event){
        var clicked = event.target;// var for clicked item
        changeColor(clicked);//change color of clicked element
        selectNeighbour(clicked.id, size);//select elements to changed with clicked
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

//function to add cubes to grid (all of them are rgeen at first)
function addCubesToGrid(grid, size){
    //var counter = 0;
    var i = 0;
    for(y = 0; y < size; y++){
        for(x = 0; x < size; x++){
            var cube = document.createElement('cube');//create div element and assign it to var cube
            cube.classList.add('firstState');//apply a green color to cube 
            cube.id = i++;
            cube.setAttribute('x',x);//add x to cube
            cube.setAttribute('y',y);//add y to cube
            grid.appendChild(cube);//add cube to grid            
        };
    };
    clickToTimes(size);
};

//function emulates 2 clicks of user - we can get grid with different cubes
// and we will be sure that user can win (he will need to repeat cklicks in reverse order)
function clickToTimes(size){
    firstRandomId = random(size);
    secondRandomId = Math.floor(firstRandomId / 2);
    console.log(firstRandomId);
    console.log(secondRandomId);
    
    changeColor(document.getElementById(firstRandomId));//change color of first random element
    selectNeighbour(firstRandomId, size);//and its neighbour

    changeColor(document.getElementById(secondRandomId));//change color of second random element
    selectNeighbour(secondRandomId, size);//and its neighbour

};
//function to get random digit < size * size
function random(size){
    return Math.floor(Math.random()*100) % (Math.pow(Number(size),2));
};


//function to changing color of clicked element and its neighbours
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

//this function makes selectNeighbour function not so big
function changeColorById(n){
        elementNearClicked = document.getElementById(n);
        changeColor(elementNearClicked);
    };    
    
//function for selecting neighbours of clicked element
function selectNeighbour(id, size){
    size = Number(size);
    x = document.getElementById(id).getAttribute('x');
    y = document.getElementById(id).getAttribute('y');
    if(x < size - 1){
        changeColor(document.querySelector('[x='+ '"' + (Number(x)+1) + '"'+'][y='+ '"' + y + '"'+']'));
    };
    if(x > 0){
        changeColor(document.querySelector('[x='+ '"' + (Number(x)-1) + '"'+'][y='+ '"' + y + '"'+']'));
    };
    if(y < size - 1){
        changeColor(document.querySelector('[x='+ '"' + x + '"'+'][y='+ '"' + (Number(y)+1) + '"'+']'));
    };
    if(y > 0){
        changeColor(document.querySelector('[x='+ '"' + x + '"'+'][y='+ '"' + (Number(y)-1) + '"'+']'));
    };    
    victoryCheck(size);
};



