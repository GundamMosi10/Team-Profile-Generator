const inquirer = require('inquirer'); //inquirer package remember to install on command line
const fs = require('fs'); //Filesystem
const manager = require('manager');
const engineer = require('engineer');
const intern = require('intern');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'Id',
            message: 'Please enter your employee Id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
    ]).then (answers => {
        const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber)
        teamMembers.push(manager);
        promptMenu();
    })
}

const promptMenu = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'employeeType',
        message: 'What kind of employee is this?',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish Team'],
    }
]).then(userChoices => {
    switch (userChoices.menu) {
        case 'Manager':
            promptManager();
            break;
        case 'Engineer':
            promptEngineer();
            break;
        case 'Intern':
            promptIntern();
            break;
        default: 
            FinishedTeam();
    }
}





































// const employeeQuestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is this employees name?',
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is your id number?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//     }
// ]

// const engineerQuestions = [
//     {
//         type: 'input',
//         name: 'githubName',
//         message: 'What is your github user name?',
//     }
// ]

// const interQuestions = [
//     {
//         type: 'input',
//         name: 'school', 
//         message: 'What is the school that you go to?',
//     }
// 
