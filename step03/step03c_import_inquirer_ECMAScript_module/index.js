import inquirer from "inquirer";
//Inquirer is a library in which prebuilt codes are present
//await KW wait for user response
let answer = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is your name?"
    }, {
        name: "age",
        type: "number",
        message: "Enter your age?"
    }
]);
console.log(`Hello ${answer.name}! Welcome to inquirer`);
console.log(`Insha'Allah, in ${60 - answer.age} years your age will be 60 years old`);
