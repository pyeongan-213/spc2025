const Person = require('./Person');

class Student extends Person {
    constructor(name, hello, major) {
        super(name, hello);
        this.major = major;
    }

    greet() {
        return `저는 ${this.name} 입니다. 전공은 ${this.major}입니다. ${this.hello}.`;
    }   
}

module.exports = Student;