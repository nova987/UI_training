var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.reverse());

/*
array.filter(functon(x){
    return condition;
})

array.map(functon(x){

});
*/

var even=numbers.filter(function(x,index){
    return x%2==0
});

console.log("even numbers-->",even)
