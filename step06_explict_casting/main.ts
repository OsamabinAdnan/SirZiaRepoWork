// ======================================================= EXPLICT CASTING =======================================================
//Type casting is a feature in TypeScript that allows developers to explicitly change the type of a value from one type to another. 
//Type casting is particularly useful when you're working with dynamic data, or when the type of a value is not correctly inferred automatically.
// when you want to convert variable from one variable to another then you used this

let myName: unknown = 'Osama bin Adnan';

// at the time of console we will change it type
// as is the KW used to covert type from one to another
//there are 2 ways (syntaxs) to change type

//1
console.log((myName as string).length)
//2
console.log((<string> myName).length)

// we have used length KW here in order to take complete value to change it type
//like take 'Osama bin Adnan' completely and change it type

