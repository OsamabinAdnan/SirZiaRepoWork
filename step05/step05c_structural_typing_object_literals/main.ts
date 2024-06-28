// in structural object literals, the properties of 2 object should be matched doesnt matter they have same or different object names

// These two interfaces are completely
// transferrable in a structural type system:

// Example 01

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  sphere = ball;
  ball = sphere;
  
  // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.

  //Example 02

  interface Circle {
    radius:number //property name should be name like another interface property's name
}
interface Disk {
    radius:number //property name should be name like another interface property's name
}

let circle:Circle = {
    radius : 2
}
let disk:Disk = {
    radius: 3
}

circle = disk //OK because properties of both are matched
disk = circle //OK because properties of both are matched

// Adtional properties

//Example 01

  interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };
  
  //tube = ball;//Error
  ball = tube;
  
  // Because a ball does not have a length, then it cannot be
  // assigned to the tube variable. However, all of the members
  // of Ball are inside tube, and so it can be assigned.
  
  // TypeScript is comparing each member in the type against
  // each other to verify their equality.

//Example 02

interface Cylinder {
    radius: number;
    height: number;
}

let cylinder : Cylinder = {
    radius:2,
    height:10,
};

circle = cylinder //OK because all circle (LHS) properties are present in cylinder (RHS)
//You have to fulfill LHS requirement in term of properties, if all properties of LHS is present in RHS, no issue
//But if any property of LHS is missing in RHS then it will give error, see below line of code

// cylinder = circle //Error because property 'height' is missing in type 'Circle' (RHS) but required in type 'Cylinder' (LHS)

// ======================================== FRESH object ========================================

//Fresh object assigns directly and in this object TS is strict and doesnt allow any extra properties

//Example 01

let myType = {
    name: "Osama bin Adnan",
    ID: 12345
}

// CASE 01

myType = {
    ID:98765,
    name:"Ali"
}

//CASE 02a

// myType = {
//     ID:65654,
//     name_person:"Ahmed" //Error, renamed or missing property
// }
//Object literal may only specify known properties, 
//and 'name_person' does not exist in type '{ name: string; ID: number; }'

//CASE 02b

myType = {
    ID:98765,
    name:"Ali"
    // age:35 //Error because of excess property
}

//Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; ID: number; }'

//CASE 03

//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature
x = {id:25, name_person: "Osama", age:35, email:"osama@gmail.com"} // Ok

// ======================================== STALE object ========================================

//Stale object store in any variable priorly and uses later, 
//TS is flexible in this case and allow extra properties till required properties matched

let myType2 = {
    name: "Osama",
    ID: 6654
}

let mytype3 = {
    name_person:"Ahmed",
    ID:8546
}

myType = myType2 //OK
myType2 = myType //OK

// myType = mytype3 //Error Property 'name' is missing in type '{ name_person: string; ID: number; }' but required in type '{ name: string; ID: number; }'

let myType4 = {
    name: "Ali",
    ID: 5487,
    age: 32
}

myType = myType4 //OK, because all properties of myType (LHS) is present in myType4 (RHS), and myType4 has additional properties
//RHS should have more or equal property in order to run otherwise error will receive


