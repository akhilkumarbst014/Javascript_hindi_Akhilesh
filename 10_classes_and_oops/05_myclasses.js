// ES6

class User {
    constructor(username, email, passward){
        this.username=username,
        this.email=email,
        this.passward=passward
    }
    // Method
    encryptPassward(){
        return `${this.passward}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai", "chai@gmail.com", "123" )
console.log(chai.encryptPassward());
console.log(chai.changeUserName());





// Behind The Scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());