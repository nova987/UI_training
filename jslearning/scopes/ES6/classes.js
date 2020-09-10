class user {
    constructor() {


    }
    username = "navya"
    lastname = "sripada"
    getfullname() {
        return this.username + this.lastname;
    }
}

class student extends user{
    
}
var u = new user();
u.getfullname();
console.log(u)