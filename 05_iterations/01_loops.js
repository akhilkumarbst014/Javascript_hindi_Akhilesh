// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element);
    
}

// loop inside loop or nested loop
for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    //console.log(`Multiplication table: ${i}`);
    for(let j = 0; j <= 10; j++){
        // console.log(`inner loop value: ${j} and inner loop ${i}`);
        //console.log(i + "*" + j + '=' + i*j); 
        
    }
    
}

// declaration of array
let myarray = ["flash", "batman", "spiderman"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray [i];
    //console.log(element);
    
}

// break and continue

//break
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`Detected : ${5}`);
        break;
    }
    console.log(`value of i is: ${index}`);   
}

// continue
for (let index1 = 0; index1 < 10; index1++) {
    if(index1==5){
        continue;
    }
    console.log(`value of i is: ${index1}`);
    
}

// while loop
console.log(`While Loop **********************`);

let j=0;
while (j <= 10) {
    console.log(`Value of index is ${j}`);
    j=j+2   
}

let arr = ["flash", "batman", "spiderman"];
let ar = 0
while(ar <= arr.length){
    console.log(`value is ${arr[ar]}`);
    ar=ar+1
}

// do while loop
console.log(` do while loop ***************`);

let score = 1
do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10)
