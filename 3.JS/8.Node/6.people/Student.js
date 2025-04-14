// const Person = require('./Person');

// class Student extends Person {
//     constructor(name, hello, major) {
//         super(name, hello);
//         this.major = major;
//     }

//     greet() {
//         return `저는 ${this.name} 입니다. 전공은 ${this.major}입니다. ${this.hello}.`;
//     }   
// }

// module.exports = Student;

const Person = require('./Person');

class Student extends Person {
    // name = "";
    // major = "";

    constructor(name, major) {
        super(name);
        this.major = major;
    }

    greet() {  // 내껄 정의(define) 하거나, 부모함수를 재정의(overridng) 하거나
        console.log(`안녕하세요. 저의 이름은 ${this.name} 이고, 저의 전공은 ${this.major} 입니다.`);
    }
}

// const aStudent = new Student();
// aStudent.name = 'pachoi';
// aStudent.major = 'engineering';
// aStudent.greet();

// const aStudent2 = new Student('pachoi', 'engineering');
// aStudent2.greet();
// aStudent2.greet2();

module.exports = Student;