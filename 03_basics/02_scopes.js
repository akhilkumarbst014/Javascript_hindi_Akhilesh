var c = 300 // Global scope

if (true) { //block scope or local scope
    let a = 10
    const b = 20
    var c = 30
    console.log("inner value of a: ", a);
}
// console.log(a);// give an error that  'a' is not declare
// console.log(b);give an error that  'b' is not declare
console.log(c);

var d = 300 // Global scope
var e = 200
if (true) { //block scope or local scope
    let d = 10
    const e = 20
    console.log("inner value of d: ", d);
    console.log("inner value of e: ", e);
}
console.log("outer value of b: ",d);
console.log("outer value of e: ",e);

/// Nested scope
console.log("Nested scope");
function one(){
    const username = 'Akhil'
    function two(){
        const website = "youTube"
        console.log(username);
    } 
    // console.log(website); give error
    two()
}
one()

if(true){
    const userName ='hitesh'
    if(userName=='hitesh'){
        const website =" youtube"
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

// +++++++++++++++++++ Interesting question  ++++++++

console.log(addOne(5));

 function addOne(num) {
    return num+1
 }
//  addOne(5) // Its place can be change anywhere

//addTwo(5) // here we cannot placed

 const addTwo = function(num){
    return num+2;
 }
 addTwo(5) // Its cannnot write above the declaration of function like