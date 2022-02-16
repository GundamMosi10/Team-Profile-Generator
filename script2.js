const inquirer = require('inquirer'); //inquirer package remember to install on command line
const fs = require('fs'); //Filesystem
const Manager = require('./manager'); //child of employee parent 
const Engineer = require('./engineer'); //child of employee parent
const Intern = require('./intern'); //child of employee parent
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const generateHTML = require('./generateHTML');
const teamMembers = [];


const promptManager = () => { //the first prompt that is presented to the user
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
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
        const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber) //creates a new manager
        teamMembers.push(manager); //pushes this new manager information to the html 
        promptMenu();
    })
}

const promptMenu = () => { //this is the prompt to ask after each employee if we need to add another employee or we can finish setting up the team
    return inquirer.prompt([
    {
        type: 'list',
        name: 'employeeType',
        message: 'What kind of employee are you?',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish Team'],
    }])
    .then(userChoices => {
        switch (userChoices.employeeType) { //a swtich case so that if the user chooses a different employee type then they will get the right prompt
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
                FinishTeam();
        }
    });
};

const promptEngineer = () => { //the engineer prompt questions only difference is we are adding the github user name 
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
            name: 'githubUserName',
            message: 'What is your github user name?',
        },
    ]).then (answers => {
        const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.githubUserName)
        teamMembers.push(engineer); //the answers from the user will be pushed to the engineer card in the html 
        promptMenu();
    }) 
}

const promptIntern = () => { //the intern prompt will fire once the user has selected they want to add an intern to the team
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
            name: 'school',
            message: 'What school do you go to?',
        },
    ]).then (answers => {
        const intern = new Intern(answers.name, answers.Id, answers.email, answers.school)
        teamMembers.push(intern); //this answers from the intern questions will be pushed to the html for the intern card 
        promptMenu(); //asks the user again if they want to add more people to the team 
    })
}

const FinishTeam = () => { //once finish team is selected then we can start the process to create the html file
    if (!fs.existsSync(OUTPUT_DIR)) {//checks to see if any file exists
        fs.mkdirSync(OUTPUT_DIR)     //this makes a new file as there wasnt one before
    }
    fs.writeFileSync(outputPath, generateHTML(teamMembers));
}

promptManager();




