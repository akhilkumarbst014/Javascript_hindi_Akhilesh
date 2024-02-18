///       Date           //////

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());// easy hai dekhne me
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

console.log(typeof myDate);/// Important for interview question

let myCreatedDate = new Date(2024,0,4)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let createdDateWithTime = new Date(2024,0,4, 5,3)
console.log(createdDateWithTime.toLocaleString());

let newMyCreateDate = new Date("2024-01-24")
console.log(newMyCreateDate.toLocaleString());

let indiantypeCreateDate = new Date("01-01-2024")
console.log(indiantypeCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp) // time will come in miliSecond(ms)
console.log(indiantypeCreateDate.getTime()) // time will come in miliSecond(ms)

// If we want time in second (s)
console.log(Math.floor(myTimeStamp/100));


let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

// `${newDate.getDay()} and the time ${newDate.getTime()}  // For printing in readable format

newDate.toLocaleString('dafault',{
    weakday: "long"
})