const user = {
    username: "akhilesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // Gives output as Empty : {} , if above three line are comment out kr de


function chai(){
    let userName= "Akhilesh Kumar"
    console.log(this.userName);// This can give undefined because this can be used in object only
}
chai()

const chai1 = function(){
    let userName= "Akhilesh Kumar"
    console.log(this.userName);

}
chai1()

//////////////  Now see The Arrow Function /////////////////\

const chaii = () =>{
    let userName= "Akhilesh Kumar"
    console.log(this.userName);
}
chaii()

// Syntax of arrow function declaration () => {}
 const addTwo = (num1,num2) => {
    return num1+num2
 }
 console.log(addTwo(3,6))

 //   Implicit Return 
 console.log("     Implicit Return    ");

//  const addTwoNum = (num1,num2) => num1+num2
//   OR
const addTwoNum = (num1,num2) => num1+num2 

 console.log(addTwo(3,6))

//  NOTE ??????????????????????????????????????
// {} Curly bracket use kiye to return kihna padega aur agar () paranthesis use kiye to return keyword nahi likhna padega

// Object ko return krne ke liye aapko parenthesis  me rap krna padega object ko
const bojectRet = () => ({usernamme: "hitesh"}) 
