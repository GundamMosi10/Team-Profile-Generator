const inquirer = require('inquirer'); //inquirer package remember to install on command line
const fs = require('fs'); //Filesystem
const generateHTML = require('./generateHTML');

inquirer
    .prompt([
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
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('generate.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created generate.html')
        );
      });