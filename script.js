const inquirer = require('inquirer'); //inquirer package remember to install on command line
const fs = require('fs'); //Filesystem

const questons = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Team Managers name?',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is the Team Managers ID?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is the Team Managers email?',
    },
    {
        type: 'input',
        name: 'Office Number',
        message: 'What is the Team Managers Office Number?',
    }
]

function writeFile(fileName, answers){ //this takes the answers from the prompt above and plugs them into the README file
    fs.writeFile(fileName, answers, (err) => 
        err ? console.log(err) : console.log('Successfully created the Team-Profile') //lets us know the README has been written succesfully 
        )}