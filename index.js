//Module Dependencies 
const fs = require("fs");
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');


//Initial function.
function init () {
    console.log(`\nHi! This is the shape and text generator!
    \nFollow the instructions to generate a new logo.\n`);

    inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

    inquirer.prompt([
        {
            type: 'maxlength-input',
            name: 'textLogo',
            message: `\n 1) Write your logo characters. (Up to 3):`,
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: `2) Pick a color for your charachters. (ex: type in "blue" or "0000FF"):`,
        },
        {
            type: "list",
            name: "shape",
            message: `3) Choose a shape from the list below:`,
            choices: ["square", "circle", "triangle"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: `4) Pick a shape color. (type in 'red' or '#FF0000'):`
        },
        
    ]).then(answers => next(answers))
}

init();

function next (answers) {}