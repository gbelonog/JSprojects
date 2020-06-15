
class Controller{
    constructor() {
        this.mySize_Model = new Size_Model();
        this.myPromptSize_View = new PromptSize_View(this.mySize_Model);    
    };
    start(){
        this.myPromptSize_View.askSize();
        let clickedCubeX = 0;
        let clickedCubeY = 0;

        do{
            this.myGrid_Model = new Grid_Model(this.mySize_Model.getSize());
            this.myGrid_Model.createGridArray();
            this.mySquareGrid_View = new SquareGrid_View(this.myGrid_Model.getGridArray());
            this.mySquareGrid_View.showGrid();
            let n =this.mySquareGrid_View.eventEmitter.emit('clickedCube')
            if(this.mySquareGrid_View.eventEmitter.emit('clickedCube')){
                console.log('ok');
            };


            
            
        }while(!(this.mySize_Model.getSizeChanged()));
        //do{

            if(this.mySquareGrid_View.getClickedCube() != 0){
                clickedCubeX = this.mySquareGrid_View.getClickedCube().x;
                clickedCubeY = this.mySquareGrid_View.getClickedCube().y;
                this.mySquareGrid_View.changeClickedCube(clickedCubeX,clickedCubeY);
                this.mySquareGrid_View.showGrid();
            }
            
       // }while(!(this.mySquareGrid_View.getCubeWasClickedFlag()));
    };
};

//class Random_Lib{};

//model for asking size
class Size_Model{
    constructor(){
        this.size = 0;
        this.sizeChanged = false;
        };
    getSize(){
        return this.size;
    };
    setSize(size){
        this.size = size;
        this.sizeChanged = true;
    };
    getSizeChanged(){
        return this.sizeChanged;
    };
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
        for(let y = 0; y < this.size; y++){
            for(let x = 0; x < this.size; x++){
                this.gridArray.push({x:x, y:y, state: 0})
            }
        }
        this.fillGridArray();
    }
    
    fillGridArray(){
        let random = 0;

        this.gridArray.forEach(element => {
            random = Math.random()+0.5;//get random digit
            if (random > 1){
                element.state = 1;
            }else {
                element.state = 0;
            }  
        });
        console.log(this.gridArray);
    };
    changeClickedCube(x, y){
        this.gridArray.forEach(element => {
            if (element.x == x && element.y ==y){
                if (element.state == 1){
                    element.state = 0;
                }else {
                    element.state = 1;
                }
            }  
        });
        console.log(this.gridArray);
    };
        
};

//view for asking size
class PromptSize_View{
    constructor(size_Model){
        this.size_Model = size_Model;
        };
    
    askSize(){
            this.size_Model.setSize(prompt('Please set size of grid'));
        };    
};

//view for drowing grid with cubes
class SquareGrid_View{
    constructor(gridArray){
        this.gridArray = gridArray;
        //this.cubeWasClickedFlag = false;
        this.clicked = 0;
        this.eventEmitter = new EventEmitter();

    };

    getCubeWasClickedFlag(){
        return this.cubeWasClickedFlag;
    };


    showGrid(){
        let game = document.getElementById('board');
        let grid = document.createElement('div');
        this.cubeWasClickedFlag = false;

        grid.setAttribute('class','grid');
        grid.setAttribute('id','grid');

        game.appendChild(grid);

        let size = this.gridArray.length / 2;
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
             cube.setAttribute('x',element.x);//add x to cube
             cube.setAttribute('y',element.y);//add y to cube
             grid.appendChild(cube);//add cube to grid
         });
        
         //console.log(this.eventEmitter);
        grid.addEventListener('click',(event) => {
            this.clicked = event.target;// var for clicked item
            //this.cubeWasClickedFlag = true;
            console.log(this.clicked);
            console.log(this.eventEmitter);
            this.eventEmitter.on('clickedCube', event.target);        
        });
    };
    
    on(eventName, data){
        this.eventEmitter.on(eventName, data);
    };

    off(){};


    getClickedCube(){
        return this.clicked;
    };

};

class YouWin_View{};

class EventEmitter{
    constructor(){
        this.eventsList = [];

    }

    emit(eventName){
        if(this.eventsList.forEach(element => (element === eventName))){
            
            console.log('true');
            return true;
        };
    };

    on(eventName, data){
        this.eventsList.push(eventName, data);
        console.log(this.eventsList);
    };

    of(){};
};

let myController = new Controller();
myController.start();