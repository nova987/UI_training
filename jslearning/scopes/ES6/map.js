var users=[
    {
    name:"navya",
    age:21
},
{ name: "dodo",
age:22
}];

var ages=users.map(function(item,index){
    return {age:item.age}
});
console.log(ages);