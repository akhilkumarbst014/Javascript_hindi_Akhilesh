let score= 33

console.log(typeof score);

score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // output=> NaN 

score = null
let valInNumber = Number(score)
console.log(typeof valInNumber);
console.log(valInNumber);

//NOTES
// "33"=> 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

console.log("After.....");
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "akhilesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


/************************** Operations  ************/
console.log("*********Operation Start**************");

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);


let str1="hello "
let str2= " Akhil"
let str3= str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(3 + 4 * 5 % 3)// In sab ko use krne ke liye bracket ka use kare

console.log(true);
console.log(+true);
// console.log(true+);  Gives error
console.log(+"")

// let num1, num2, num3
// num1 = num2 =num3 = 2 + 2 this is correct but not use for readable purpose

let gameCounter = 100
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(gameCounter);

// Link to study
// https://tc39.es/ecma262/multipage/abstract-operation.html#sec-type-conversion

