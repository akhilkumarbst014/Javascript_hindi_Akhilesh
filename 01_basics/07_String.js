const name ="akhilesh"
const repocount = 2

console.log(name + repocount + " value"); // This can not be used modern time this is not good way

 //  Use BackTick  ////////////////
console.log(`Hello My name is ${name} and my repo count is ${repocount}`);

// Proper way of declaring a string

const gameName = new String('ClashOfClan')
console.log(gameName);
console.log(gameName[2]);
console.log(gameName.__proto__);

// Methods for string

console.log(gameName.length);
console.log(`EN-US: ${gameName.toLocaleLowerCase('en-US')}`);
console.log(`EN-US: ${gameName.toLocaleUpperCase('en-US')}`);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));
console.log(gameName.substring(0,4));// Last index will be not included like 4th index element not include

console.log(gameName.slice(-11, 4));

const newstring = "   hello    "
console.log(newstring);
console.log(newstring.trim());// It will remove all the extra spaces

const url = "https://hope-foundation-ak.netlify"

console.log(url.replace('ak','akhil'));
console.log(url.includes('akhilesh'));
console.log(url.includes('ak'));
console.log(url);

console.log(url.split('-'));