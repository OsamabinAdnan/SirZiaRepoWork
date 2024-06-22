// when we have to import something, we should have make it before importing it.
export default add; // when you export something using default KW then you have to give name to it, for example we are giving "add" here
//default means setting something on top priority
// you can export any files without default KW as well multiple times | we can default only one function, object etc. in one file.
// Function export
function add(num1, num2) {
    return num1 + num2;
}
// Array export
export let userNames = ["Ali", "Osama", "Ahmed"];
//Variable export
export let myFavoriteColor = "Yellow";
export let a = 5;
export const b = 10;
export const c = 2;
//Object export
export let person = {
    name: "Osama",
    age: 35,
    gender: "Male",
};
