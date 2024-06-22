import inquirer from "inquirer";
import chalk from "chalk";
//Inquirer is a library in which prebuilt codes are present
//await KW wait for user response


let answer = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:chalk.greenBright.bold("What is your name?")
    },{
        name:"age",
        type:"number",
        message:chalk.greenBright.bold("Enter your age?")
    }
])

console.log(chalk.cyan.bold(`\nHello ${answer.name}! Welcome to inquirer`))
console.log(chalk.magenta.bold(`Insha'Allah, in ${60 - answer.age} years your age will be 60 years old`));
