/*var cardsArray = [
    {   'name': 'one', 'img': '/Users/galina/JS projects/cardGame/p01ffyz3.jpg', },
    {   'name': 'two', 'img': '/Users/galina/JS projects/cardGame/the_sultan_suleiman_i_by_eduartinehistorise-d7ccda5.jpg', },
];*/

var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
  ];
//Duplicate cards
var gameGrid = cardsArray.concat(cardsArray);
//randomize card places
gameGrid.sort(function(){
    return 0.5 - Math.random();
})
//grab the div with an id of game-board and assign it to var game
var game = document.getElementById('game-board');
//create a section element and assign it to var grid
var grid = document.createElement('section');
//give  section element a class of grid
grid.setAttribute('class','grid');
//add grid section to game board
game.appendChild(grid);
//loop for all cards from array
for(i = 0; i < gameGrid.length; i++){
    //create div element and assign it to var card
    var card = document.createElement('div');
    //apply a card clas to that div
    card.classList.add('card');
    //set data-name attr to div
    card.dataset.name = gameGrid[i].name;
    //apply img to div 
    card.style.backgroundImage = `url(${gameGrid[i].img})`;
    //add div to card section
    grid.appendChild(card);
}

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

//add match
var match = function(){
    var selected = document.querySelectorAll('.selected');
    for (i = 0; i < selected.length; i++){
        //loop through array
        selected[i].classList.add('match');
    }
};

//reset guesses  after match
var resetGuesses = function(){
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    for(i = 0; i < selected.length; i++){
        selected[i].classList.remove('selected');
    }
};

//add event listener to grid
grid.addEventListener('click',function(event){
    // var for clicked item
    var clicked = event.target;
    //to prevent border appearing for board
    if (clicked.nodeName === 'SECTION' || clicked ===previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')){
        return ;
    };
    if (count < 2){
        count++;
        //add selected class
        //clicked.classList.add('selected');
        if(count === 1){
            //assign first guess
            firstGuess = clicked.dataset.name;
            clicked.classList.add('selected');

        } else {
            //assign second guess
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }
        //if both guess are not empty
        if(firstGuess!== '' && secondGuess!== ''){
            //and they match
            if (firstGuess ===  secondGuess){
                //run match function
                setTimeout(match, delay);
                setTimeout(resetGuesses,delay);
            } else {
                setTimeout(resetGuesses,delay);
            }
        }
        previousTarget = clicked;
    }
});
