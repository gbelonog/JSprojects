var game = document.getElementById('board');//get board
var grid = document.createElement('section');//create grid
//var cubesBox = [0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1];
/*var cubesBox = [{'color':'green'},
{'color':'green'},
{'color':'yellow'},
{'color':'green'},
{'color':'green'},
{'color':'green'},
{'color':'green'},
{'color':'green'},
{'color':'green'},
];*/
var cubesBox = [{'state':1},
{'state':1},
{'state':1},
{'state':1},
{'state':0},
{'state':1},
{'state':1},
{'state':0},
{'state':1},
{'state':1}
];
grid.setAttribute('class','grid');
game.appendChild(grid);//add grid to board

for(i = 0; i < cubesBox.length; i++)
{
    var cube = document.createElement('div');//create div element and assign it to var card
   if (cubesBox[i].state == 1){cube.classList.add('yellowState');}//apply a green cube to that div}
    else {cube.classList.add('greenState');}//apply a yellow cube to that div
   
 //cube.classList.add('yellowState');
 grid.appendChild(cube);//add card to grid*/
};

//add event listener to grid
grid.addEventListener('click',function(event){
    var clicked = event.target;// var for clicked item
    console.log(clicked.classList);
    if (clicked.classList == 'yellowState'){clicked.classList.add('greenState');}
   //if (clicked.classList == 'yellowState'){console.log('test');}
    //if (clicked.classList == 'greenState'){clicked.classList.add('yellowState');}
   else {clicked.classList.add('yellowState');}
   //else {console.log('test1');}
});

