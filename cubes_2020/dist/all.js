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

        //add form
        let game = document.getElementById('board');
        let form = document.createElement('form');
        form.setAttribute('class','form');
        form.setAttribute('id','form');
        game.appendChild(form);
        
        //add text
        let text = document.createElement('text');
        text.setAttribute('id','text');
        form.appendChild(text);
        text.innerHTML = '<b>Type size of greed</b>';

        //add text field
        let input = document.createElement('input');
        input.setAttribute('id','input');
        input.setAttribute('placeholder','From 2 to 5 only');
        input.setAttribute('autofocus', 'true');
        input.setAttribute('maxlength',1);
        form.appendChild(input);

        //add button
        let button = document.createElement('input');
        button.setAttribute('id','button');
        button.setAttribute('type','button');
        button.setAttribute('value',"Start game");
        form.appendChild(button);

        //this.size_Model.setSize(Number(document.getElementById('input').value));

        //listener for text field
        input.addEventListener('input', (event) => {
            this.eventEmitter.emit('inputSize',event.target.value);    
        });

        //listener for button
        button.addEventListener('click', () => {
            this.eventEmitter.emit('getSize');   
        });

        //2 3 4 5 digits only
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
//shows image when game is over
class Win_View{
    showWinImage(){
        let point = document.getElementById('board');
        let image = document.createElement('img');
        image.setAttribute('id', 'winImage');
        image.setAttribute('src','you-win-sign-pop-art-style_175838-499.jpg');
        point.appendChild(image);   
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

        //emulates some user's clicks - we need to be sure 
        //that user can win by repeating emulated clicks in back order
        for(let i =0; i < this.size; i++){
            this.emulateClick();
        };
    };

    emulateClick(){
        let random = Math.floor(Math.random() * Math.floor(this.size * this.size));
        console.log('random1', random);
        this.changeCube(random);
        this.changeNeighbours(random);
        return random;
    };
    
    //changes state of cube by clicking on it
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

    //changes state of neighbours by clicking on cube
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
let myController = new Controller();
myController.start();


//class Random_Lib{};
//class Victory_Model{};


