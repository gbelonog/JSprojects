class Controller{
    constructor() {
        this.mySize_Model = new Size_Model();
        this.mySize_View = new Size_View(this.mySize_Model);    
    };
    start(){
        

        this.mySize_View.askSize();
        this.mySize_View.on('getSize',(n)=>{
            
            if(this.mySize_View.data ===null){
                this.mySize_View.askSize();
            } else {
                console.log('test');
            };
        });


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
};