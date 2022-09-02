// TODO: Include packages needed for this application x

const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require("./utils/generateMarkdown")
const path = ("readme.md")

// TODO: Create an array of questions for user input
const questions =
    [
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?'

        },
        {
            type: 'input',
            name: 'email address',
            message: 'what is your email address?',
            


        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.'

        },
        {
            type: 'list',
            name: 'qlicense',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']

        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
            
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'repository',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repo?'
        },

    ]
    ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        const output = (error) ? 'error' : 'success'
        error ? console.error(error) : console.log("Your README.md has been created")
    })
}

// TODO: Create a function to initialize app, (for me) put writeToFile funtion inside init function.
function init() {
    // Asks the user questions to complete the markedown file
    inquirer.prompt(questions).then((answers) => {
        const data = markdown(answers);
        // Displays answers to questions
        console.log(answers);
        // Creates the markdown file based on the answers provided
         writeToFile("./dist/README.md", data);
    })
}

// Function call to initialize app
init();
