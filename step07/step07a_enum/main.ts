//An enum is a special "class" that represents a group of constants (unchangeable variables). you can write predefine values in enum
//Enums come in two flavors string and numeric.

/*enum syntax
enum  {
    member1,
    member2,
    member3
}
numeric enum
*/

//enum is not array but it has index
//if phone # starts with 0 like 0923021234567 then error receive b/c of zero
//if you want to access enum by indexing then you should not assign value in enum, otherwise you cant access it

//Enum can do three tasks 1) Define index 2) return index 3) or return value

// 1) Returning index

enum Color {
    Red,
    Green,
    Blue,
}

let color:Color = Color.Green;
console.log(color);
console.log(Color.Red)

// 2) Returning value

enum Color1 {
    Red = 1,
    Green ,
    Blue ,
}
console.log (Color1.Blue)
let colorName:string = Color1[3];
console.log(colorName);

// 3) Defining index

enum Color2 {
    Red = 1,
    Green = 200,
    Blue = 4, // you can assign values to all | even you can assign 100 to red and any other number to green and blue
}
let colorindex = Color2["Green"]
console.log(colorindex);

