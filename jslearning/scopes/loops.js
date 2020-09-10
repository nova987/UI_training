/*var y;
for(var i=10;i<15;i++)
{
var x=10;
//var y=23
let y=100; //block level scope
console.log("y--inside",y);
}

console.log(i); 
console.log(x);
console.log(y);
//Variable hoisting--all variable declarations will be moved to top of page , even w
//even when u declarelater

/*var i,x;
for(i=10;i<15;i++){var x=15;}
console.log(i);*/

var x = 1;
for(var i=10;i<15;i++){
    let x=10;
    console.log("Inside",++x);
}
console.log(i);
console.log("Outside",x);