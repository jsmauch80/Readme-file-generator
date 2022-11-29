// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    //name of project
    {
        type: 'input',
        message:"What is the project title?",
        name:'title',
        
    },
    //project description
    {
        type: 'input',
        message:"What is the project description?",
        name:'description',
        
    },
    //install instructions
    {
        type: 'input',
        message:"What is the installation",
        name:'installation',
        
    },
    //project usage
    {
        type: 'input',
        message:"What is the usage",
        name:'usage',
        
    },
    //contributors
    {
        type: 'input',
        message:"Who contributed to the project?",
        name:'contribution',
        
    },
    //testing
    {
        type: 'input',
        message:"How do you test the project?",
        name:'test',
        
    },
    //license
    {
        type: 'list',
        message:"What license are you using?",
        name:'license',
        choices: ['MIT', 'GNU', 'Apache', "BSD", 'N/A'],
        
    },
    //github name
    {
        type: 'input',
        message:"What is your Github username?",
        name:'github',
        
    },
    //email
    {
        type: 'input',
        message:"What is your email?",
        name:'email',
        
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (input)
    {
        console.log(input)
        writeToFile("readme.md", generateMarkdown(input));
    });
};

// Function call to initialize app
// function init();

init();


