//parameters to promise constructor
var condition ="positive"
var p=new Promise(function(resolve,reject){
if (condition=="positive")
{
    resolve("im good")

}
 else{
    reject("ooppss!!")

    }

});

p.then(functoin(response){
console.log(responnse)
});
.catch(function(errorResponse){
console.log(errorResponse)
});