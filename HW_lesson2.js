'use strict';
function start(){
    let weight = prompt('Enter weight of luggage in lb');
    var n = parseInt(weight); 
    if (isNaN(n)) {
        alert("Type weight in digits please.");
        weight = prompt('Enter weight of luggage in lb');
        };
    weight = Math.ceil(weight / 2.20462);
    
    if (Number(weight) <=  0){
            alert('You weight is ' + weight + ".\nWeight should be more than 0 kg.");
        } else if (Number(weight) >= 15){
                alert("You weight is " + weight + ".\nWeight should be less than 15 kg.");
                }else alert('You need to pay ' + countCost(weight) + 'grn');

};
function countCost(weightInKG){
    let cost = 0;
    if(weightInKG > 5){
        if (weightInKG > 10){cost = weightInKG * 10;}
        else cost = weightInKG * 5;
    }else cost = weightInKG * 3;
    return cost;
};

start();