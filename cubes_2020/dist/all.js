const path = require('path');
const express = require('express');

//making an express object
const app = express();

app.use(express.static(path.resolve(__dirname, "./")));

app.listen(666);
class Controller{
    constructor() {
        this.mySize_Model = new Size_Model();
        this.mySize_View = new Size_View(this.mySize_Model);    
    };
    start(){
        this.mySize_View.askSize();
        this.mySize_View.on('inputSize',(n)=>{
            this.mySize_Model.setSize(n);
        });

        this.mySize_View.on('getSize',()=>{
            this.mySize_View.removeForm();
            if(this.mySize_Model.getSize() === 0 ||
                this.mySize_Model.getSize() < 2 ||
                this.mySize_Model.getSize() > 5){
                    this.mySize_View.askSize();
            } else {

                this.myGrid_Model = new Grid_Model(this.mySize_Model.getSize());
                this.myGrid_Model.createGridArray();
                this.myGrid_View = new Grid_View(this.myGrid_Model.getGridArray());
                this.myGrid_View.on('clickedCube',(n)=>{
                    console.log(n.id);
                    this.myGrid_Model.changeCube(n.id);
                    this.myGrid_Model.changeNeighbours(n.id);
                    this.myGrid_View.removeCubes();
                    if(this.myGrid_Model.victoryCheck()){
                        this.myVictory = new Win_View();
                        this.myVictory.showWinImage();
                    }else{
                        this.myGrid_View.showGrid(); 
                    };  
                });
                this.myGrid_View.showGrid();
            };
        });


        
    };
};
class EventEmitter{
    constructor(){
        this.eventsList = {};
    };

    emit(eventName, eventTarget){
          if (this.eventsList[eventName]){
                this.eventsList[eventName].forEach(element => element(eventTarget));
            }
    };

    on(eventName, eventTarget){
        if (!this.eventsList[eventName]){
            this.eventsList[eventName] = [];
        }
        this.eventsList[eventName].push(eventTarget);
        console.log( 'on', this.eventsList);
    };


    off(){};
};
//model for drowing grid with cubes
class Grid_Model{
    constructor(size){
        this.size = size;
        this.gridArray = [];
    };
    getGridArray(){
        return this.gridArray;
    };

    createGridArray(){
        let counterForCreate = 0;
        
        for(let y = 0; y < this.size; y++){
            for(let x = 0; x < this.size; x++){
                    //this.gridArray.push({id:counter, x:x, y:y, state: 0});
                this.gridArray.push({id:counterForCreate, state: 0});
                counterForCreate++;
            }
        }
        this.emulateClick();
        this.emulateClick();
        this.emulateClick();
    }

    emulateClick(){
        let random = Math.floor(Math.random() * Math.floor(this.size * this.size));
        console.log('random1', random);
        this.changeCube(random);
        this.changeNeighbours(random);
        return random;
    };

    changeCube(id){
        this.gridArray.forEach(element => {
            if (element.id == id){
                if (element.state == 1){
                    element.state = 0;
                }else {
                    element.state = 1;
                }
            }  
        });
    };

    changeNeighbours(id){
        let size = Number(this.size);
        if(id % size > 0){
            this.changeCube(id - 1);
        };
        if((id % size) != size - 1) {
            this.changeCube(Number(id) + 1);
        };
        if(id < size * (size - 1)) {
            this.changeCube(Number(id) + size);
        };
        if(id > size - 1) {
            this.changeCube(Number(id) - size);
        };
    };
    
    //function checks that all cubes are in the same state
    victoryCheck(){
        let counter = 0;
        for(let i = 0; i < this.size * this.size; i++){
            if(this.gridArray[i].state == 0){
                counter++;
            };
        };
        if (counter == this.size * this.size || counter == 0){
            return true;
        };
        return false;
};

        
};
//view for drowing grid with cubes
class Grid_View{
    constructor(gridArray){
        this.gridArray = gridArray;
        this.eventEmitter = new EventEmitter();
        this.game;
    };

    showGrid(){
        this.game = document.getElementById('board');
        let grid = document.createElement('div');

        grid.setAttribute('class','grid');
        grid.setAttribute('id','grid');

        this.game.appendChild(grid);

        let size = Math.sqrt(this.gridArray.length);
        let gridSize = size * 100 + size * 8;
        document.getElementById('grid').style.setProperty('--grid-width', gridSize + 'px');// set width property in css file
        document.getElementById('grid').style.setProperty('--grid-height', gridSize + 'px');// set height property in css file

        let i = 0;

        this.gridArray.forEach(element => {
             let cube = document.createElement('cube');//create div element and assign it to var cube
             cube.id = i;
             i++;
             if (element.state == 1){
                 cube.classList.add('cubeSecondState');
             }else {
                 cube.classList.add('cubeFirstState');
             }  
             grid.appendChild(cube);//add cube to grid
         });
        
        grid.addEventListener('click',(event) => {
            this.eventEmitter.emit('clickedCube', event.target);     
        });
    };
    
    on(eventName, data){
        this.eventEmitter.on(eventName, data);
    };

    off(){};

    removeCubes(){
        document.getElementById('grid').remove();//removing grid
    };
};
// var gulp = require('gulp');
// var concat = require('gulp-concat');

// gulp.task('scripts', function() {
//     return gulp.src(grid_view.js, size_view.js, win_view.js, eventEmitter.js, grid_model.js,
//         size_model.js, controller.js, main.js).pipe(concat('all.js')).pipe(gulp.dest('./dist/'));
//   });



// function defaultTask(cb) {
    
//     cb();
//   }
  
//   exports.default = defaultTask;



// const { src, dest } = require('gulp');
// const gulp = require('gulp');
// const concat = require('gulp-concat');
//const babel = require('gulp-babel');

// exports.default = function() {
//   return src('*.js')
//     //.pipe(babel())
//     //.pipe(dest('output/'))
//     .pipe(concat('*.js').pipe(dest('output1/')));
//     //.pipe(gulp.dest('./dist/'));
// }

// exports.default = function() {
//   return gulp.src('*.js')
//   .pipe(concat('all.js'))
//   .pipe(gulp.dest('dist/'));
// };
// gulp.task('scripts', function() {
//     return gulp.src('*.js')
//       .pipe(concat('all.js'))
//       .pipe(gulp.dest('dist/'));
//   });

var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
    console.log('test');
   return gulp.src('*.js')
     .pipe(concat('all.js'))
     .pipe(gulp.dest('./dist/'));
});
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
let myController = new Controller();
myController.start();


//class Random_Lib{};
//class Victory_Model{};



//model for asking size
class Size_Model{
    constructor(){
        this.size = 0;
        };
    getSize(){
        return this.size;
    };
    setSize(size){
        this.size = size;
    };

};
//view for asking size
class Size_View{
    constructor(size_Model){
        this.size_Model = size_Model;
        this.eventEmitter = new EventEmitter();
    };

    askSize(){
        // this.size = prompt('Please set size of grid', 'Type digits from 2 to 10.');
        // if (this.size !== null){
        //     this.size_Model.setSize(this.size);
        // };
        let game = document.getElementById('board');
        let form = document.createElement('form');
        form.setAttribute('class','form');
        form.setAttribute('id','form');
        game.appendChild(form);
        
        let text = document.createElement('text');
        text.setAttribute('id','text');
        form.appendChild(text);
        text.innerHTML = '<b>Type size of greed</b>';

        let input = document.createElement('input');
        input.setAttribute('id','input');
        //input.setAttribute('type', "number");
        input.setAttribute('placeholder','From 2 to 5 only');
        input.setAttribute('autofocus', 'true');
        input.setAttribute('maxlength',1);
        //input.setAttribute('min', '-9999');
        //input.setAttribute('max', '99999');
        form.appendChild(input);


        let button = document.createElement('input');
        button.setAttribute('id','button');
        button.setAttribute('type','button');
        button.setAttribute('value',"Start game");
        form.appendChild(button);

        this.size_Model.setSize(Number(document.getElementById('input').value));

        input.addEventListener('input', (event) => {
            this.eventEmitter.emit('inputSize',event.target.value);    
        });

        button.addEventListener('click', () => {
            this.eventEmitter.emit('getSize');   
        });

        document.getElementById('input').onkeydown = function (e) {
            return !(/^[0А-Яа-яA-Za-z6-9\%\/\\\&\?\,\'\;\:\!\-\+\!\@\#\$\^\*\)\(\{\}\[\]\~\№\"\_ ]$/.test(e.key));
        };
    };   
    
    on(eventName, data){
        this.eventEmitter.on(eventName, data);
    };

    removeForm(){
        document.getElementById('form').remove();//removing form
    };

};

class Win_View{
    showWinImage(){
        let point = document.getElementById('board');
        let image = document.createElement('img');
        image.setAttribute('id', 'winImage');
        //image.setAttribute('src','https://image.freepik.com/free-vector/you-win-sign-pop-art-style_175838-499.jpg');
        image.setAttribute('src','you-win-sign-pop-art-style_175838-499.jpg');
       
        point.appendChild(image);
        console.log(image);

        
    };
};