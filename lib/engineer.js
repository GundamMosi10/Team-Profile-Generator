const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, gitub){
        super(name, id, email);
        this.github = gitub; 
    }
    getgitHub(){
        return this.github;
    }
    getRole(){
        return 'engineer';
    }
}

module.exports = Engineer;