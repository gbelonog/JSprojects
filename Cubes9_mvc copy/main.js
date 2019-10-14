

//-------controller---------
class CubesController{
    //constructor
    CubesController(cubesView, cubesModel) {
        this._cubesView = cubesView;
        this._cubesModel = cubesModel;
        };
    //ask user about size
    start(){
        var size = prompt('Please set size of grid');
        _cubesModel.size = size;
        cubesModel.createGrid();
        };
        
    onClickCube(e) {
        var clicked = e.currentTarget;
        cubesModel.cubesArray[clicked.id] = 1;
        //cubesModel.createGrid();
    };
    
};
//----model------
class CubesModel{
    //constructor
    cubesModel(){
        this. cubesArray = [];
        this.size = 0;
    }
    
    createGrid(){
        for(var i = 0; i < this.size * this.size; i++){
            this.cubesArray[i] = 0;
            console.log(cubesArray[i]);
        };
        
    };
    //createGrid();
    //emulateUserClicks(size);
    //drowGrid(cubesArray);
 




    /*function emulateUserClicks(size){
        var firstRandomId = Math.floor(Math.random()*100) % (Math.pow(Number(size),2));
        var secondRandomId = Math.floor(firstRandomId / 2);
        console.log(firstRandomId);
        console.log(secondRandomId);

        cubesArray[firstRandomId] = 1;
        cubesArray[secondRandomId] = 1;
    };   */
};
//------view---------
class CubesView{
    drowGrid = function drowGrid(cubesArray) {
        var size = cubesArray.length / 2;
        var game = document.getElementById('board');//get board
        var grid = document.createElement('grid');//create grid 
        var gridSize = size * 100 +size * 4;
        grid.setAttribute('class','grid');
        grid.setAttribute('id','grid');
        game.appendChild(grid);//add grid to board
        document.getElementById('grid').style.setProperty('--grid-width', gridSize + 'px');// set width property in css file
        document.getElementById('grid').style.setProperty('--grid-height', gridSize + 'px');// set height property in css file
        //removeCubesFromGrid(size);
        addCubesToGrid(grid, size);//add cubes 
        console.log(grid);
    };
    /*grid.addEventListener('click',function(event){
        var clicked = event.target;// var for clicked item
        controller('click', clicked.id);
       // changeColor(clicked);//change color of clicked element
       // selectNeighbour(clicked.id, size);//select elements to changed with clicked
    });*/

    addCubesToGrid = function addCubesToGrid(grid, size){
        var i = 0;
        for(var y = 0; y < size; y++){
            for(var x = 0; x < size; x++){
                var cube = document.createElement('cube');//create div element and assign it to var cube
                if (cubesArray[i] == 0){
                    cube.classList.add('firstState');//apply a green color to cube
                }
                else{
                    cube.classList.add('secondState');//apply a green color to cube
                } 
                cube.id = i++;
                cube.setAttribute('x',x);//add x to cube
                cube.setAttribute('y',y);//add y to cube
                grid.appendChild(cube);//add cube to grid            
            };
        };
        //emulateUserClicks(size);
    };
         
//function to remove all cubes from grid
removeCubesFromGrid = function removeCubesFromGrid(size){
    for(var i = 0; i < size * size; i++){
        //console.log(document.getElementById(i));
        if (document.getElementById(i) > 0){
        document.getElementById(i).remove();//removing cubes
        };
    };    
};
};

/*CubesController.start = function start() {
    //this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);
    //this.cubesModel.cubesArray = [];
    this.cubesModel.createGrid('0');
};*/



    /*grid.addEventListener('click',function(event){
        var clicked = event.target;// var for clicked item
        controller('click', clicked.id);
       // changeColor(clicked);//change color of clicked element
       // selectNeighbour(clicked.id, size);//select elements to changed with clicked
    });*/

    //function for checking user's selection
    function getUserChoice(userInput){
        if(userInput > 1 && userInput < 10){
          //createGrid(userInput);
            gameModel(userInput);
        }
        else {
            getUserChoice(prompt('Please enter a valid number'));
        }   
    } 
//};


//--------model----------
function cubesModel(size){
    var cubesArray = [];
    
    createGrid();
    emulateUserClicks(size);
    drowGrid(cubesArray);
    //controller(grid);


    function createGrid(){
        for(var i = 0; i < size * size; i++){
            cubesArray[i] = 0;
        };
    };

    function emulateUserClicks(size){
        var firstRandomId = Math.floor(Math.random()*100) % (Math.pow(Number(size),2));
        var secondRandomId = Math.floor(firstRandomId / 2);
        console.log(firstRandomId);
        console.log(secondRandomId);

        cubesArray[firstRandomId] = 1;
        cubesArray[secondRandomId] = 1;
    };


//function checks that all cubes are in the same state
/*function victoryCheck(size){
    var counter = 0;
    for(i = 0; i < size * size; i++){
        if(document.getElementById(i).className == 'firstState'){
            counter++;//count green elements
        };
    };
    if (counter == size * size || counter == 0){//if all elements are green or yellow = victory
        removeCubesFromGrid(size);
        document.getElementById('grid').innerText = 'Victory';//victory appears on grid
       // gameView('victory');
    };
};*/
     
//function to remove all cubes from grid
/*function removeCubesFromGrid(size){
    for(var i = 0; i < size * size; i++){
        document.getElementById(i).remove();//removing cubes
    };    
};*/

//function to add cubes to grid (all of them are rgeen at first)
/*function addCubesToGrid(grid, size){
    var i = 0;
    for(var y = 0; y < size; y++){
        for(var x = 0; x < size; x++){
            var cube = document.createElement('cube');//create div element and assign it to var cube
            cube.classList.add('firstState');//apply a green color to cube 
            cube.id = i++;
            cube.setAttribute('x',x);//add x to cube
            cube.setAttribute('y',y);//add y to cube
            grid.appendChild(cube);//add cube to grid            
        };
    };
    clickToTimes(size);
};*/

//function emulates 2 clicks of user - we can get grid with different cubes
// and we will be sure that user can win (he will need to repeat cklicks in reverse order)
/*function emulateUserClicks(size){
    var firstRandomId = random(size);
    var secondRandomId = Math.floor(firstRandomId / 2);
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
};*/


//function to changing color of clicked element and its neighbours
/*function changeColor(cube){
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
};*/  
    
//function for selecting neighbours of clicked element
/*function selectNeighbour(id, size){
    var size = Number(size);
    var x = document.getElementById(id).getAttribute('x');
    var y = document.getElementById(id).getAttribute('y');
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
};*/
};
//------------view--------------
function drowGrid(cubesArray){
    var size = cubesArray.length / 2;
    var game = document.getElementById('board');//get board
    var grid = document.createElement('grid');//create grid 
    var gridSize = size * 100 +size * 4;
    grid.setAttribute('class','grid');
    grid.setAttribute('id','grid');
    game.appendChild(grid);//add grid to board
    document.getElementById('grid').style.setProperty('--grid-width', gridSize + 'px');// set width property in css file
    document.getElementById('grid').style.setProperty('--grid-height', gridSize + 'px');// set height property in css file
    //removeCubesFromGrid(size);
    addCubesToGrid(grid, size);//add cubes 
    console.log(grid);
    
    /*grid.addEventListener('click',function(event){
        var clicked = event.target;// var for clicked item
        controller('click', clicked.id);
       // changeColor(clicked);//change color of clicked element
       // selectNeighbour(clicked.id, size);//select elements to changed with clicked
    });*/

    function addCubesToGrid(grid, size){
        var i = 0;
        for(var y = 0; y < size; y++){
            for(var x = 0; x < size; x++){
                var cube = document.createElement('cube');//create div element and assign it to var cube
                if (cubesArray[i] == 0){
                    cube.classList.add('firstState');//apply a green color to cube
                }
                else{
                    cube.classList.add('secondState');//apply a green color to cube
                } 
                cube.id = i++;
                cube.setAttribute('x',x);//add x to cube
                cube.setAttribute('y',y);//add y to cube
                grid.appendChild(cube);//add cube to grid            
            };
        };
        //emulateUserClicks(size);
    };
         
//function to remove all cubes from grid
function removeCubesFromGrid(size){
    for(var i = 0; i < size * size; i++){
        //console.log(document.getElementById(i));
        if (document.getElementById(i) > 0){
        document.getElementById(i).remove();//removing cubes
        };
    };    
};
   /* function changeColor(cube){
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
    };*/

};

let myGameModel  = new CubesModel();
let myGameView = new CubesView([0,1]);
let myGameController = new CubesController(myGameView, myGameModel);
myGameController.start();


