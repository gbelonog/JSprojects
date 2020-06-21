
class Controller{
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
            this.mySquareGrid_View.on('clickedCube',(n)=>{
                console.log(n.id);
                this.myGrid_Model.changeCube(n.id);
                this.myGrid_Model.changeNeighbours(n.id);
                this.mySquareGrid_View.removeCubes();
                if(this.myGrid_Model.victoryCheck()){
                    console.log('victory');
                }else{
                    this.mySquareGrid_View.showGrid(); 
                };
                
                
            });
            this.mySquareGrid_View.showGrid();
        }while(!(this.mySize_Model.getSizeChanged()));
        
        //do{

            // if(this.mySquareGrid_View.getClickedCube() != 0){
            //     clickedCubeX = this.mySquareGrid_View.getClickedCube().x;
            //     clickedCubeY = this.mySquareGrid_View.getClickedCube().y;
            //     this.mySquareGrid_View.changeClickedCube(clickedCubeX,clickedCubeY);
            //     this.mySquareGrid_View.showGrid();
            // }
            
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


//view for asking size
class PromptSize_View{
    constructor(size_Model){
        this.size_Model = size_Model;
    };

    askSize(){
        this.size_Model.setSize(prompt('Please set size of grid'));
    };    
};


let myController = new Controller();
myController.start();