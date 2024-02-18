//========================> 'for of' loop
// [""," "]
// [{}, {}, {}]
const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    console.log(num);
}

const greetings = "Hello World"
for(const greet of greetings){
    console.log(`each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('Fr', "France")

console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
}


// 'for of' loop cannot work on object
const myObject = {
    js : "Javascript",
    cpp: "C++",
    rb: "rubby",
    swift: "Swift by apple"
}
//================> Us ' for in ' loop concept
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Using for in loop on array
const programming = ["js","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}

const map1 = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('Fr', "France")

for (const key in map1) {
    console.log(key);// does not print anything due to map is not iterable
}