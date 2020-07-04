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