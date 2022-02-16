const inquirer = require('inquirer'); //inquirer package remember to install on command line
const fs = require('fs'); //Filesystem

class employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email;
    }
}

class manager extends employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
}

class engineer extends employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github; 
    }
}

class intern extends employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
}

const menuQuestion = [
    {
        type: 'list',
        name: 'employeeType',
        choices: ['Manager', 'Engineer', 'Intern', 'None'],
        message: 'What kind of employee is this?',
    }
]

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is this employees name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your github user name?',
    }
]
