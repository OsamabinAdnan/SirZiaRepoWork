//use const where variable values do not change
const a = 5;
const b : number = 33;
const c ="best";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
// console.log("let: " + z);// Error: z is not defined in this scope

//let ==> block scope
let myName = "Osama bin Adnan";
myName = "Ali" // we can reassign value

//const ==> 
const myAccount = 1234
//myAccount = 7845 //Error ==> we cant reassign value in const

