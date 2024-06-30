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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Green;
console.log(color);
console.log(Color.Red);
// 2) Returning value
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
console.log(Color1.Blue);
let colorName = Color1[3];
console.log(colorName);
// 3) Defining index
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 200] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let colorindex = Color2["Green"];
console.log(colorindex);
export {};
