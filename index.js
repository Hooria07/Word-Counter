#!/usr/bin/env node
//Import the 'inquirer' module, which is a command line inter face for Node.js
import inquirer from "inquirer";
// Declare a constant "answers" and assign it  to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words"
    }
]);
const words = answers.Sentence.trim().split(" ");
//print Array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
