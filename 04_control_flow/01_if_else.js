// if.......................

/* if(condition) {
    
 } */

//Example
const isUserLoggedIn = true;
if(isUserLoggedIn){
     console.log("this is executed");
}
// Comparision Operator
// <, >, <=, >=, ==, !=, ===  

if(2 == "2"){
    console.log("executed");
}
if(2 === "2"){//=> strict equal this will help to compare data as well as datatype
    console.log("executed");
}

const temp = 60
if(temp < 50){
    console.log("temperature less than 50 ");
} 
else{
    console.log("temperature greater than 50");
}

// Shorthand notation
const balance=1000
if(balance>500) console.log("test"),console.log("test2");// Bad way to write this code

// else if condition
if(balance < 500){
     console.log("Less Than 500");
}else if(balance<750){
     console.log("Less Than 750");
}else if(balance<900){
    console.log("Less Than 900");
}else{
    console.log("Less than 1200 ");
}

// Multiple condition
const userLoggin = true
const debitcard = false

if(userLoggin && debitcard){
    console.log("Allow to buy course");
}
else if (userLoggin || debitcard){
    console.log("Allowed but with some restriction");
}
else{
    console.log("NOT allowed");
}

// Nullish Coalescing Operator (??) => work on : null, undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 12

console.log(val1);

// Ternary operator

/* condition ? true : false */

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");