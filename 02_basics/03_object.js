//Object ko declare karne ke do tareeke hai
// 1- Literal. 2- Constructor

// singleton- Jab bhi hum object ko Literal method se banate hai to singleton nahi banta hai
// constructor se singleton banega

//Symbol declaration
const mySym = Symbol("key1")

// Object Literal
const Jsuser = {
    name:"Akhil",
    "full name": "Akhilesh Kumar",
    [mySym]: "myKey1",
    age:18,
    location: "UP",
    email:"abc@google.com",
    isLogged: false,
    lastlogindaya:["Monday","Saturday"]
}

console.log(Jsuser.email);
// console.log(Jsuser.full name); // No chance to access by .full name
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);// Interview question 

// Changing values
Jsuser.email = "akhilesh@gmail.com"
// Lock the values
//Object.freeze(Jsuser)
Jsuser.email = "akku9191@microsoft.com"// not change occur due to lock or freeze

console.log(Jsuser);

//fuction including access in object
 Jsuser.greeting1 = function() {
    console.log("Hello js user");
 }

 Jsuser.greeting2 = function() {
    console.log(`Hello js user, ${this.name}`);// ` => backstik
 }

 console.log(Jsuser.greeting1());
 console.log(Jsuser.greeting2());


 
 // Object constructor Or Singleton
console.log("======> Object constructor  ");

 const tinderUser = new Object()
 //or
//  const tinderUser = {}
tinderUser.id= "gww267"
tinderUser.name = "Ankita"
tinderUser.isloggIn = false
 console.log(tinderUser);

 // Object ke andar Object
 const regularUser ={
   email : 'Some@gmail.com',
   fullname:{
      userfullname:{
         firstname: "Ritik",
         lastname:"GArg"
      }
      
   }
 }

 console.log(regularUser.fullname);
 console.log(regularUser.fullname.userfullname.firstname);

 const obj1 ={ 1:"a", 2:"b"}
 const obj2 ={ 3:"a", 4:"b"}

 const obj3 = {obj1, obj2}
 const obj4 = Object.assign(obj1,obj2)
 const obj5 = {...obj1, ...obj2}
 console.log(obj3);
 console.log(obj4);
 console.log(obj5);

 //when tha vlaues come from database , wo value neeche wale format me aati hai array ke ander object
  const databaseUser = [
   {
      id: 1,
      email: "abc@gmail.com"
   },
   {
      id: 2,
      email: "xyc@gmail.com"
   },
   {
      id: 3,
      email: "sahsahsg@gmail.com"
   }
  ]

  databaseUser[1].email
  
  console.log((tinderUser));
  console.log(Object.keys(tinderUser));//// VERY IMPORTANT
  console.log(Object.values(tinderUser));
  console.log(Object.entries(tinderUser));
  console.log(tinderUser.hasOwnProperty('isloggIn'));