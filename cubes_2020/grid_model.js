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
        let counter = 0;
        for(let y = 0; y < this.size; y++){
            for(let x = 0; x < this.size; x++){
                //this.gridArray.push({id:counter, x:x, y:y, state: 0});
                this.gridArray.push({id:counter, state: 0});
                counter++;
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
    changeCube(id){
        //console.log('id', id);
        //console.log(' this.gridArray[id].id', this.gridArray[id].id);
        this.gridArray.forEach(element => {
            //if (element.x == x && element.y ==y){
                //console.log("element",element);
            if (element.id == id){
                if (element.state == 1){
                    element.state = 0;
                }else {
                    element.state = 1;
                }
            }  
        });
        //this.changeNeighbour(id);
        //console.log('changeClickedCube', this.gridArray);
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
        //victoryCheck(size);
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
            //removeCubesFromGrid(size);
        //document.getElementById('grid').innerText = 'Victory';
            //gameView('victory');
            return true;
    };
    return false;
};
        
};