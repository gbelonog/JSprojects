'use strict';
function square(){
    let input = prompt("nuber for square?");
    for(let i = 0; i < Math.sqrt(input); i++){
        console.log(i);
    }
};
function isItSimple(){
    let input = prompt("is it simpe?");
    let simpleFlag = false;
    if(input < 0){
        simpleFlag = false;   
    }
    else if (input == 1 || input == 2){
        simpleFlag = true;
    } else {
        for (let i = 2; i < input; i++){
            if (input % i == 0){
                simpleFlag = false;
                break;    
            }else{
                simpleFlag = true; 
            }
        }
    };
    if (simpleFlag){
        console.log("simple");
    }else console.log("not simple");
};

function isItMinOrMax(){
    let input = [];
    input[0] = prompt("Enter first digit");
    input[1] = prompt("Enter second digit");
    input[2] = prompt("Enter third digit");
    let minOrMax = prompt("Enter + for max and - for min");
    console.log(input);
    let sortedInput = input.sort();
    if (minOrMax == '+'){console.log('max is '+ sortedInput[2]);}
    else{console.log('min is '+ sortedInput[0]);}
}

//square();
//isItSimple();
//isItMinOrMax();