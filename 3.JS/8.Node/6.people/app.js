// const Person = require('./Person');
// const Student = require('./Student');
// const Employee = require('./Employee');

// const person1 = new Person("평안", "안녕하세요");
// console.log(person1.greet());

// const person2 = new Student("최평안", "반갑습니다", "호텔관광학");
// console.log(person2.greet());

// const person3 = new Employee("홍길동", "잘부탁드립니다", "신입개발자");
// console.log(person3.greet());

const Person = require('./Person');
const Student = require('./Student');

const john = new Person('John');
john.greet();

const smith = new Person('Smith');
smith.greet();

const jane = new Student('Jane', 'art');
jane.greet();

const june = new Student('June', 'law');
june.greet();

