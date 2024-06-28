// ================================== Object "Type Alias" ==================================
// we create custom type for object it it

// anonymous
let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.age);


// Another example

type StudentType = {
    name:string,
    id:number,
    email?:string // optional property
}
let myStudent : StudentType = {
    name: "Arham",
    id: 1234
}
console.log (myStudent);

let std : StudentType = {
    name: "Sufiyan",
    id:2345,
    email: "sufiyan@gmail.com"
}
console.log(std);

// ================================== Object "Interface" ==================================
//Interface is similar to type alias, but it is more flexible. It allows us to define the structure of an object.

// Example 1
interface Employee {
    name: string,
    id: number,
    designation?: string
}

let employee : Employee = {
    name: "Zeeshan",
    id: 1395,
    designation: "Software Engineer"
}

console.log(employee);

// Interfaces
// Example 2

interface Manager {
    name: string,
    subordiates?: number //optional property
}

let storeManager: Manager = {
    name: "Bilal"
}
