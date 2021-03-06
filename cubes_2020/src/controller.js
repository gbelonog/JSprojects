//coordinates work of models and views
class Controller{
    constructor() {
        this.mySize_Model = new Size_Model();
        this.mySize_View = new Size_View(this.mySize_Model);    
    };
    start(){

        //ask size and get it
        this.mySize_View.askSize();
        this.mySize_View.on('inputSize',(n)=>{
            this.mySize_Model.setSize(n);
        });

        //create grid with cubes according to size
        this.mySize_View.on('getSize',()=>{
            this.mySize_View.removeForm();
            if(this.mySize_Model.getSize() === 0 || //check that size is correct
                this.mySize_Model.getSize() < 2 ||
                this.mySize_Model.getSize() > 5){
                    this.mySize_View.askSize(); //else ask size again
            } else {//size is correct  -> create grid
                this.myGrid_Model = new Grid_Model(this.mySize_Model.getSize());
                this.myGrid_Model.createGridArray();
                this.myGrid_View = new Grid_View(this.myGrid_Model.getGridArray());
                this.myGrid_View.on('clickedCube',(n)=>{//cube is clicked -> chenge it
                    //console.log(n.id);
                    this.myGrid_Model.changeCube(n.id);
                    this.myGrid_Model.changeNeighbours(n.id);//and change neighbours
                    this.myGrid_View.removeCubes();
                    if(this.myGrid_Model.victoryCheck()){ //and check for win
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