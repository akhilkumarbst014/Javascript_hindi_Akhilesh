function sayMyName() {// Function Definition
    console.log('A');
    console.log('K');
    console.log('H');
    console.log('I');
    console.log('L');
    console.log('E');
    console.log('S');
    console.log('H');   
}

// sayMyName // Ye Function Ka reference hai(Important for React)
sayMyName()// Ye hai function Execution

//  Function for adding two number
function addTwoNumber(number1,number2) {// number1,number2 => are the Parameter
    console.log(number1+number2);
}
addTwoNumber(3,4)// 3,4 are tha Argument

function addThreeNumber(number1,number2,number3) {
    let result = number1 + number2 + number3
    return result
    // OR
    // return number1 + number2 + number3
}
const result = addThreeNumber(3, 5, 8)
console.log("Result: ", result);

function loginUserMessage(username){
    // if(username === undefined){
    //     return "Please enter a username"
    // }
    // else{
    //     return `${username} just logged in` 
    // }

    ///////// OR///////
    if(username){
        return `${username} just logged in`
    }
    else{
        return "Please enter a username"
    }
}
console.log(loginUserMessage("Akhilesh"))
console.log(loginUserMessage())// Output will be undefine if not pass any argument and if checking will not done in functio definition


function loginMessage(username= "Sam"){// Default value will be declare
    if(username){
        return `${username} just logged in`
    }
    else{
        return "Please enter a username"
    }
}
console.log(loginMessage("Akhilesh"))
console.log(loginMessage())

function calculateCartPrices(num1){
    return  num1
}
console.log(calculateCartPrices(200,400,500));

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

function calculateCartPricess(val1,val2,...num1){
    return num1
}
console.log(calculateCartPricess(200,400,500,2000));

const user ={
    userName: "Akhiles Kumar",
    price:999
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);    
}
handleObject(user)
handleObject({ // Fuction me hi  direct object paas kr rahe hai
    userName:"Shyam",
    price: 199
})

const myNewArray=[299,34,556,78]

function handleArray(getArray){
    return getArray[3]
}
    console.log(handleArray(myNewArray));