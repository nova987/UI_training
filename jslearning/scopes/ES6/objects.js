//dynamic properties.
var user = {};
user.age = 30;
user.name = "navya";
console.log(user);

//object creation:- using literals
var user = {
    name: "navya",
    address: {
        city: "hyd"
    }
};

//bu using new object
var student = new Object();
student.name = "navya";

var employee = {};
employee["name"] = "ravi";

console.log(student.name);
console.log(student);


