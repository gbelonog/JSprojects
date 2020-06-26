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
        let game = document.getElementById('board');
        let form = document.createElement('form');
        form.setAttribute('class','form');
        form.setAttribute('id','form');
        game.appendChild(form);
        
        let text = document.createElement('text');
        text.setAttribute('id','text');
        form.appendChild(text);
        text.innerHTML = '<b>Type size of greed</b>';

        let input = document.createElement('input');
        input.setAttribute('id','input');
        form.appendChild(input);

        let button = document.createElement('input');
        button.setAttribute('id','button');
        button.setAttribute('type','button');
        button.setAttribute('value',"Start game");
        form.appendChild(button);

        this.data = input.value;
        console.log( this.data);
        button.addEventListener('click', (data) => {
            this.eventEmitter.emit('getSize', data); 
            console.log('get size', data);    
        });
    };   
    
    on(eventName, data){
        this.eventEmitter.on(eventName, data);
    };

};