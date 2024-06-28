"use strict";
// in structural object literals, the properties of 2 object should be matched doesnt matter they have same or different object names
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let circle = {
    radius: 2
};
let disk = {
    radius: 3
};
circle = disk; //OK because properties of both are matched
disk = circle; //OK because properties of both are matched
let tube = { diameter: 12, length: 3 };
//tube = ball;//Error
ball = tube;
let cylinder = {
    radius: 2,
    height: 10,
};
circle = cylinder; //OK because all circle (LHS) properties are present in cylinder (RHS)
//You have to fulfill LHS requirement in term of properties, if all properties of LHS is present in RHS, no issue
//But if any property of LHS is missing in RHS then it will give error, see below line of code
// cylinder = circle //Error because property 'height' is missing in type 'Circle' (RHS) but required in type 'Cylinder' (LHS)
// ======================================== FRESH object ========================================
//Fresh object assigns directly and in this object TS is strict and doesnt allow any extra properties
//Example 01
let myType = {
    name: "Osama bin Adnan",
    ID: 12345
};
// CASE 01
myType = {
    ID: 98765,
    name: "Ali"
};
//CASE 02a
// myType = {
//     ID:65654,
//     name_person:"Ahmed" //Error, renamed or missing property
// }
//Object literal may only specify known properties, 
//and 'name_person' does not exist in type '{ name: string; ID: number; }'
//CASE 02b
myType = {
    ID: 98765,
    name: "Ali"
    // age:35 //Error because of excess property
};
//Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; ID: number; }'
//CASE 03
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var x; //Note now 'x' can have any name, just that the property should be of type string
x = { id: 1, fullname: "Zia" }; // Ok, `fullname` matched by index signature
x = { id: 25, name_person: "Osama", age: 35, email: "osama@gmail.com" }; // Ok
// ======================================== STALE object ========================================
//Stale object store in any variable priorly and uses later, 
//TS is flexible in this case and allow extra properties till required properties matched
let myType2 = {
    name: "Osama",
    ID: 6654
};
let mytype3 = {
    name_person: "Ahmed",
    ID: 8546
};
myType = myType2; //OK
myType2 = myType; //OK
// myType = mytype3 //Error Property 'name' is missing in type '{ name_person: string; ID: number; }' but required in type '{ name: string; ID: number; }'
let myType4 = {
    name: "Ali",
    ID: 5487,
    age: 32
};
myType = myType4; //OK, because all properties of myType (LHS) is present in myType4 (RHS), and myType4 has additional properties
//RHS should have more or equal property in order to run otherwise error will receive
