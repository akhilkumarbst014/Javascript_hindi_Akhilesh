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