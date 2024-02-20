class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static word use karne se hum creatId method ko access nahi kr sakte
        return `123`
    }
}
//const akhil = new User("Hitesh")
//console.log(akhil.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const akhil2 = new Teacher("naman", "abc@google.com")
console.log(akhil2.logMe());
console.log(akhil2.createId());