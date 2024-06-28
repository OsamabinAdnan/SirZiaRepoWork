// ========================= Structural Typing Object Literals =========================
// But we will learn Array of object

//Array of Object

interface Employee {
    name: string;
    ID: number;
    age:number;
    salary:number;
}

let employeesData:Employee[] = [
    {
        name:"Osama",
        ID: 1234,
        age: 35,
        salary: 55000,
    }, 
    {
        name:"Zohaib",
        ID: 1345,
        age: 38,
        salary: 125000,
    },
    {
        name:"Taqi",
        ID: 1456,
        age: 36,
        salary: 85000,
    }
];
console.log(employeesData);
console.log(employeesData[0])