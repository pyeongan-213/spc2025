const Person = require('./Person');

class Employee extends Person {
    constructor(name, hello, jobTitle) {
        super(name, hello);
        this.jobTitle = jobTitle;
    }

    greet() {
        return `저는 ${this.name} 입니다. 직급은 ${this.jobTitle}입니다. ${this.hello}.`;
    }   
}

module.exports = Employee;