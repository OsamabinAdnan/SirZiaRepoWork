// ==================================== Nested Object ====================================
//Object within a object
let student = {
    name: "Osama",
    stdID: 56464,
    fName: "Adnan Ahmed",
    email: "osama@gmail.com",
    age: 35,
    Qualification: {
        graduation: "BS textile",
        gradResultCGPA: 3.48,
        master: "MBA Marketing",
        masterResultCGPA: 3.54
    },
};
console.log(student);
console.log(student.Qualification.master);
console.log(student.Qualification.masterResultCGPA);
console.log(student["Qualification"]["graduation"]);
console.log(student["Qualification"]["gradResultCGPA"]);
export {};
//You can access object by 2 ways 1) dot notation 2) square bracket notation
