var x=new Promise(function(resolve,reject) //asynchronous
{
    if(x=='full')
    {
        resolve();
    }
    else{
        reject();
    }
});
x.then(function(){
    console.log("iam happy as you kept promise")

}).catch(function(){
    console.log("you dont care let u sbreaksu);")
});