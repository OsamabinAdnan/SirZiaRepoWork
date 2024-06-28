//Interaction means combination of 2 types
type PersonalDetails = {
    name: string,
    age: number
}

type OfficialDetail = {
    email: string,
    designation: string
    status: string
}
//Combining 2 types
type Employee = PersonalDetails & OfficialDetail

let employee: Employee = {
    name: "Osama",
    age : 35,
    email: "osama@gmail.com",
    designation: "Student",
    status: "Married",
    //salary: 55000, // Error | Object literal may only specify known properties, and 'salary' does not exist in type 'Employee'
}


// ================================== step05f_any__unknown_never_types ===============================

// Any

let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK


//Unknown

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// Never | never function never return value
//The never type in TypeScript represents values that never occur. 
//It is used to indicate a function that never returns or a variable that never holds any value.

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
//Functions that contain an infinite loop that never terminates naturally can be typed with never.

function infiniteLoop(): never {
  while (true) {}
}
