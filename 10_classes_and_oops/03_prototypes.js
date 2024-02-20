// let myName = "Akhilesh"
// console.log(myName.length);

// let myname = "akhilesh    "
// console.log(myname.length);
// console.log(myname.trim().length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function(){
        console.log(`Spider Power is: ${this.spiderman}`);
    }
}

Object.prototype.akhilesh = function(){// yaha pr hum object kr ander ek naya prototype declare kr raha hu akhilesh ke naam se
                                    // jo ki accessible rahega sabji cheejo me like array, object,string,etc that means ye access kiya ja sakta hai hr jagah
    console.log(`Akhilesh is present in all object`);
}

heroPower.akhilesh();
myHeros.akhilesh()

// Now creating an prototpe in the array and check does it is accessible in (with) the object or not

Array.prototype.hitesh = function(){
    console.log(`Hitesh says hello`);
}
myHeros.hitesh();
//heroPower.hitesh();// gives error because method or prototype created in the array will not accessible by objects


       /* inheritance */

const user = {
    neme: "chai",
    email: "chai@google.com" 
    }
const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__:TeachingSupport // Inheritance
}

// OR
Teacher.__proto__ = user // Inheritance


// New Approach for inheritance
// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
