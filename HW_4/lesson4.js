'use strict';
function square(){
    let input = prompt("?");
    for(let i = 0; i < Math.sqrt(input); i++){
        console.log(i);
    }
};
function simple(){
    let input = prompt("?");
    let simpleFlag = false;
    if(input > 0){
        for (let i = 2; i < input; i++){
            if (input % i > 0){
                simpleFlag = false;
                
            }else {
                simpleFlag = true;
                break;
            }
        }
    }
    else  simpleFlag = false;

    if (simpleFlag){
        console.log("not simple");
    }else console.log("simple");
    //console.log("negative");
   
};

//square();
simple();