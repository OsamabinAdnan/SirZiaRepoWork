//====================== Union Literals ======================//

let myname: string | null; // you can give more than 1 data types to 1 variable
// "|" is called pipe and Unicode name is "vertical bar"

myname = null; //at the time of assigning, you can assign only 1 data type at a time
console.log(myname);

myname = "Osama bin Adnan";
console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error

//====================== Narrowing ======================//

let myAge: string | number;

myAge = 16;//narrowing means be specific
console.log(myAge); //when you hover curson on variable (myAge) in console, it will give you the narrow data type of that variable, whichis number here

//console.log(myAge.toLowerCase());//Error

myAge = "Dont Know";//narrowing means be specific
console.log(myAge);

console.log(myAge.toString()); // common to both types 
                               //can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string 
                                //because of narrowing


//====================== Union Types ======================//

// You can write any string, number, boolean etc. in it
let unionType : string | number | boolean | null | undefined 
unionType = "Osama bin Adnan"
unionType = 35
unionType = true
unionType = null
unionType = undefined

//====================== Literal types ======================//

//Literal types ==> you assign value as a data type | you cant write anything expect what you assign in variable
let literalType : "Osama" | 35
literalType = "Osama"
// literalType = "Ali" ==> Error because type ali is not assignable to type "Osama" | 35
literalType = 35
// literalType = 53 ==> Error because type 53 is not assignable to type "Osama" | 35


let newAge = Math.random() > 0.6 ? "Khan": 60; 
//Math.random generate random number between 0 to 1
//here we are using ternary operator shortcut, if condition is true Khan will be displayed and false then 60

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number


let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error

let zia: "zia";

zia = "zia";
//zia = "khan";//Error

//====================== TypeAlias ======================//
//type declare as a variable for reuse
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;

let yourAge :IdMaybe = 35
yourAge = "Osama"
yourAge = undefined
yourAge = null
// yourAge = true //Error because Type 'true' is not assignable to type 'IdMaybe'

//Why we use TypeAlias? because to reduce the no of lines of code, see below example

let a : string | number | boolean = "Osama"
let b : string | number | boolean = 35
let c : string | number | boolean = false

type typeAlias = string | number | boolean

let d : typeAlias = "Osama"
let e : typeAlias = 35
let f : typeAlias = true

type colors = "Red" | "Green" | "Blue"

function setColor (Colors:colors){
    console.log (`Color set to ${Colors}`)
}
setColor("Red") //valid
setColor("Green") //valid
setColor("Blue") //valid
// setColor("Yellow") // Error ==> Argument of type '"Yellow"' is not assignable to parameter of type 'colors'.
