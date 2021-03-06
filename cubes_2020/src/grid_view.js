//view for drowing grid with cubes
class Grid_View{
    constructor(gridArray){
        this.gridArray = gridArray;
        this.eventEmitter = new EventEmitter();
    };

    showGrid(){
        //create grid
        this.game = document.getElementById('board');
        let grid = document.createElement('div');
        grid.setAttribute('class','grid');
        grid.setAttribute('id','grid');
        this.game.appendChild(grid);

        //set correct size
        let size = Math.sqrt(this.gridArray.length);
        let gridSize = size * 100 + size * 8;
        document.getElementById('grid').style.setProperty('--grid-width', gridSize + 'px');// set width property in css file
        document.getElementById('grid').style.setProperty('--grid-height', gridSize + 'px');// set height property in css file

        //add cubes according to cubes' states
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
        
        // listener for cubes
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