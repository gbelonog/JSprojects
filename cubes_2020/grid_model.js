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