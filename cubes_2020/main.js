class Controller{
    //constructor(mySize_Model,myPromptSize_View) {
    constructor() {
        this.mySize_Model = new Size_Model();
        this.myPromptSize_View = new PromptSize_View(this.mySize_Model);    
    };
    start(){
        this.myPromptSize_View.askSize();
        
        do{
            this.myGrid_Model = new Grid_Model(this.mySize_Model.getSize());
            this.myGrid_Model.createGridArray();
            this.mySquareGrid_View = new SquareGrid_View(this.myGrid_Model.getGridArray());
            this.mySquareGrid_View.showGrid();
        }while(!(this.mySize_Model.getSizeChanged()));
        
    };
};

class Random_Lib{};

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
                this.gridArray.push({'x':x, 'y':y, state: 0})
            }
        }
        console.log(this.gridArray);
    }


};

class PromptSize_View{
    constructor(size_Model){
        this.size_Model = size_Model;
        };
    
    askSize(){
            this.size_Model.setSize(prompt('Please set size of grid'));
        };    
};
class SquareGrid_View{
    constructor(gridArray){
        this.gridArray = gridArray;

    };
    showGrid(){
        let game = document.getElementById('board');
        let grid = document.createElement('div');

        grid.setAttribute('class','grid');
        grid.setAttribute('id','grid');

        game.appendChild(grid);

        let size = this.gridArray.length;
        let gridSize = size * 100 + size * 8;
        document.getElementById('grid').style.setProperty('--grid-width', gridSize + 'px');// set width property in css file
        document.getElementById('grid').style.setProperty('--grid-height', gridSize + 'px');// set height property in css file

        let i = 0;
        let random = 0;

        this.gridArray.forEach(element => {
            let cube = document.createElement('cube');//create div element and assign it to var cube
            cube.id = i;
            i++;
            random = Math.random()+0.5;//get random digit
            if (random > 1){
                cube.classList.add('cubeSecondState');
            }else {
                cube.classList.add('cubeFirstState');
            }  
            cube.setAttribute('x',element.x);//add x to cube
            cube.setAttribute('y',element.y);//add y to cube
            grid.appendChild(cube);//add cube to grid
        });
//                 let cube = document.createElement('cube');//create div element and assign it to var cube
//                 let random = Math.random()+0.5;//get random digit
//                 if (random > 1){
//                     cube.classList.add('cubeSecondState');
//                 }
//                 else {
//                     cube.classList.add('cubeFirstState');
//                 }  
//         cube.id = i;
//         i++;
//         cube.setAttribute('x',x);//add x to cube
//         cube.setAttribute('y',y);//add y to cube
//         grid.appendChild(cube);//add cube to grid
//     };
// };*/
    };

};
class YouWin_View{};

let myController = new Controller();
myController.start();