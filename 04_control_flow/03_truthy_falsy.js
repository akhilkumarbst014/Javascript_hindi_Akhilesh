const userEmail = "akhil@2003"
if(userEmail){// truthy value means maan liya hai ki userEmail ek correct value hai without any comparision
    console.log("Got user email");
} else {
    console.log("Dont't have user email");
}

// Falsy values
/* false, 0, -0, BigInt (0n), "", null, undefined, NaN */

// Thruthy value
/* "0",'false', " ",[], {}, function(){}, and rest of all */

// checking array
const userarr =[]
if(userarr.length === 0){
    console.log("array is empty");
}
// checking object
const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}