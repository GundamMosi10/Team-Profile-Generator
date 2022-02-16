const employee = require('./employee');

class engineer extends employee{
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

module.exports = engineer;