// Primitive Datatype
// 7 Type :- String. Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 378628376873466387n // It represnt bigInt

// Non Primitive or Reference Type
// Array, Object, Functions


//Array
const heros = ["shaktiman", "naagraj", "krish"]

//Object
let myObj = {
    name: "Akhil",
    age: 22,
    // Curly bracket jo bhi hoga wo sab Object honge
}

//Function

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);

// Note: Jitne phi non primitive datatype hai unka datatype hamesha function hi aata hai
// Aur function ka datatype Objectfunction hota hai in datail study

// https://262.ecma-international.org/5.1/#sec-11.4.3


////////////////////// Stack And Heap Memory ////////////////////////////////

// Stack(primitive), heap (Non-Primitive) primitive dataype me Stack memory use hoti hai aur jitne bhi 
//  Non-primitive datatype hai wo heap mamory use krte hai

let myName ="AkhileshKumar"
let anothername = myName
anothername ="chaiaurcode"

 console.log(myName);
 console.log(anothername);

 let userOne ={
    email: "akhil@gmail.com",
    upi:"user@ybl"
 }

 let userTwo = userOne

userTwo.email="abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);