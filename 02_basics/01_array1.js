//  Array

const Arr = [0, 1, 2, 3, 4, 5, true, 'Akhil'] // Array can store multiple type of element 
// Array can be resizes
// Array can be indexing based ( 0 based indexing)

const myArr = [1, 2, 3, 4, 5]
//Accesing element of arryay
console.log(myArr[0]);
console.log(Arr[6]);

const myHeros = ["Shaktiman", "naagraj", "Krish"]

// Other way to declare array
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr2[3]);

///// ***************** Array Method
myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()// Delete last value from the array
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

//   Question asked in array
console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

// join Method
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


/// Interview Asked Question defference between slice and splice
// slice, splice method
console.log("A", myArr);

const myn1= myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2= myArr.splice(1, 3)// 1,3 represent indexes range
console.log(myn2);

console.log("C", myArr);

/* Very Important  */
// Slice karne se original array change nahi hoti but,
// Splice karne se Original array change ho jata hai ie: Splice range 
// element remove ho jate hai original array se



