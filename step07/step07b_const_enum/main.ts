//const will apply before enum
//try to use const with string value, error will receive
//const enum doesnt access by indexing

// const enum return index and define index but doesnt return value i.e., const enum doesnt access by indexing

const enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;
console.log(c);

const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color[2]; //Not allowed with const enums
// console.log(colorName); //Error

const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

const enum Menu  {
    Tikka = 300,
    BeefTikka = 320,
    Malaiboti = 350
}
let menu:Menu = Menu.BeefTikka;
console.log(menu);