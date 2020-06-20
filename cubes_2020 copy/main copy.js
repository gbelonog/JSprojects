let game = document.getElementById('board');
let grid = document.createElement('div');

grid.setAttribute('class','grid');
grid.setAttribute('id','grid');

game.appendChild(grid);

let size = prompt('Please set size of grid');
let gridSize = size * 100 + size * 8;
document.getElementById('grid').style.setProperty('--grid-width', gridSize + 'px');// set width property in css file
document.getElementById('grid').style.setProperty('--grid-height', gridSize + 'px');// set height property in css file

/*var i = 0;

for(i = 0; i < size * size; i++){
    var cube = document.createElement('div');//create div element and assign it to var cube
    //cube.setAttribute('class','cube');
    var random = Math.random()+0.5;//get random digit
    if (random > 1){
        cube.classList.add('cubeSecondState');
    }
    else {cube.classList.add('cubeFirstState');}

    cube.id = i;
    i++;
    cube.setAttribute('x',x);//add x to cube
    cube.setAttribute('y',y);//add y to cube
    grid.appendChild(cube);//add cube to grid
}*/
let i = 0;
for(let y = 0; y < size; y++){
    for(let x = 0; x < size; x++){
        let cube = document.createElement('cube');//create div element and assign it to var cube
        let random = Math.random()+0.5;//get random digit
        if (random > 1){
            cube.classList.add('cubeSecondState');
            //counter++;
        }
        else {
            cube.classList.add('cubeFirstState');
        }  
        cube.id = i;
        i++;
        cube.setAttribute('x',x);//add x to cube
        cube.setAttribute('y',y);//add y to cube
        grid.appendChild(cube);//add cube to grid
    };
};

//add event listener to grid
grid.addEventListener('click',function(event){
    let clicked = event.target;// var for clicked item
    changeColor(clicked);//change color of clicked element
    selectNaibor(clicked.id, size);//select elements to changed with clicked
});

//function to changing color of clicked element and its naibors
function changeColor(cube){
    if (cube.classList.contains('grid')){
        return 0;
    };
    if (cube.classList.contains('cubeSecondState')){
        cube.classList.remove('cubeSecondState');
        cube.classList.add('cubeFirstState');
    }
    else {
        cube.classList.remove('cubeFirstState');
        cube.classList.add('cubeSecondState');
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