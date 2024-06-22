//Via module you can easily import and export your files
import add from "./main.js"; //`./` (dot and slash) is use to get file from directory or folder | default import
console.log(add(9, 6));
import { userNames, myFavoriteColor } from "./main.js"; //Normal import will be done in curly bracket unlike default import
console.log(userNames);
console.log(myFavoriteColor); // we can import several code in one line like userNames and myFavoriteColor in 1 line.
import { person } from "./main.js";
console.log(person);
console.log(person.name);
console.log(person.gender);
console.log(person.age);
import { a } from "./main.js";
import { c as d, b as e } from "./main.js"; // "as" is used to change the name of any varibale, object or function during import 
// b,c will access now with new name which is "d" | this as option will work only with normal export option, it will not work with default export
console.log(a + d + e);
