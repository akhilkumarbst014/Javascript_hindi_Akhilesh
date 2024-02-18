////////////////  Numbers  ///////////

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.782876
const newNumber = 123.732876
const anotherNumber = 1123.732876

console.log(otherNumber.toPrecision(3));
console.log(newNumber.toPrecision(3));
console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-In'));

/////////////////     Maths   ///////////

console.log('**********Math library*****');

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4, 6, 8, 1));
console.log(Math.max(4, 6, 8, 1));

console.log(Math.random()); // Iski value always come between 0 and 1(i.e => 0<= random value <=1)
console.log(Math.random()*10);// Ye 1 value dega hi dega means 0 nahi aayega

const min = 10
const max = 20

console.log(Math.random() * (max-min + 1))
console.log(Math.random() * (max-min + 1))


console.log(Math.floor(Math.random() * (max-min + 1))+ min) // Important Formula

