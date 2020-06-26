'use strict';
let x, y;
x = prompt('Input x');
y = prompt('Input y');
if (x >= 0 && x <= 5 && y >= 0 && y <= 5 && (x**2 + y**2 >= 25)){
    alert('your dot is in square and out of circle');  
}else alert('your dot is not in area')