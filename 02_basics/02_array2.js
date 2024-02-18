const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["supermanr", "flash", "batman"]
// Kyoki array kisi bhi type ke element ko store kr sakta hai ek saath to 
// yaha pr kya ho hoa ki dc_heros jo array hai wo marvel_heros aary me push ho jayega as an array
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[0]);
console.log(marvel_heros[1]);
console.log(marvel_heros[2]);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][0]);

const marvel_heros1 = ["thor", "ironman", "spiderman"]
const dc_heros1 = ["supermanr", "flash", "batman"]
console.log("After Concat");
// dc_heros.concat(marvel_heros)
// console.log(dc_heros);
//  above line print only dc_heros element to isiliye concate krne ke liye 
//hame hamesha new variable lena padega
const all_heros = marvel_heros1.concat(dc_heros1)
console.log(all_heros);
/* OR */
// use spread
const all_new_heros = [...marvel_heros1, ...dc_heros1]
console.log(all_new_heros);

console.log(" Flat Array ");
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(" Making Array ");
console.log(Array.isArray("Akhilesh"));
console.log(Array.from("Akhilesh"));
console.log(Array.from({name: "Akhil"}));// Intersting case isme bolna padega sari keys se array banaye ya sari value se array banaye

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))