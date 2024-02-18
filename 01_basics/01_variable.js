const accountId = 144553
let accountEmail = "akhileshkumarbst0@gmail.com"
var accountPassword = "12345"
accountCity = "UP"

let accountState;

//accountId=2  // Not allowed

accountEmail="abc@gmail.com"
accountPassword="213"
accountCity="jaipur"

console.log(accountId);

/*
prefer not to use var because of issue
scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])