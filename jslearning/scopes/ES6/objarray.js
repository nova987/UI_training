var users=[{
    name:"navya",
    age:21
},
{ name: "dodo",
age:22
}];
console.log(users[0]);

var ans= users.filter(function(item,index){
    return item.age>20;
});
console.log(ans);