//view for drowing grid with cubes
class SquareGrid_View{
    constructor(gridArray){
        this.gridArray = gridArray;
        //this.clicked = 0;
        this.eventEmitter = new EventEmitter();
        this.game;

    };

    getCubeWasClickedFlag(){
        return this.cubeWasClickedFlag;
    };

    showGrid(){
        this.game = document.getElementById('board');
        let grid = document.createElement('div');

        grid.setAttribute('class','grid');
        grid.setAttribute('id','grid');

        this.game.appendChild(grid);

        //let size = this.gridArray.length / 2;
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
             cube.setAttribute('x',element.x);//add x to cube
             cube.setAttribute('y',element.y);//add y to cube
             grid.appendChild(cube);//add cube to grid
         });
        
        grid.addEventListener('click',(event) => {
            this.eventEmitter.emit('clickedCube', event.target); 
            //console.log('listener_eventTarget', event.target.id);       
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