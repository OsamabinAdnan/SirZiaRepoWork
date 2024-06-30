// array syntax ==> let name: type [] = []

let array:string [] = ["Hamdan", "Sufiyan", "Osman", "Arham"];
console.log(array);
console.log(array[3]);
console.log(array.length);

let array2:number [] = [1,2,3,4,5];

console.log(array2);

// To replace specific value in index, we will write it as below, see below picture
console.log(array2[3] = 100);

console.log(array2);

//this is also correct syntax to make array

let array3:Array <string> = ["Hamdan", "Sufiyan", "Osman", "Arham"]
console.log(array3);

//push element in array
let array4: number[] = [];
array4.push(1,2,3,4);//dynamically adding
console.log(array4);
console.log(array4[3]);

//adding string and number in array at same time using union literal

let array5: (string | number)[] = ["Hamdan",6, "Sufiyan",3.5, "Osman", 0.6, "Arham", 3];
console.log(array5);
console.log(array5[2]);

//empty array
let array6: number[] = [];
console.log(array6);
array6.push(1, 2, 3, 4, 5); //dynamically adding
console.log(array6);



