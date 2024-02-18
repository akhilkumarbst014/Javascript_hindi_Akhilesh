// Immediately Invoked Fuction Expression (IIFE)

(function chai(){
    // name IIFE
    console.log('DB CONNECTED');
})(); // => ; is required here due to stop IIFE

// Syntax of IIFE
// ()() => First parenthesis represent the definition of function and 
//         second parenthesis repesent execution call of function

// Arrow function in IIFE
( ()=>{
    console.log('DB CONNECTED TWO ');
})();

//Accessing variable or passing an paramater

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Akhilesh');w