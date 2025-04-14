// class Person {

//     constructor(name, hello) {
//         this.name = name;
//         this.hello = hello;
//     }

//     greet() {
//         return `저는 ${this.name} 입니다. ${this.hello}.`;
//     }
// }

// module.exports = Person;

class Person {
    // name = "";

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`안녕하세요. 저는 ${this.name} 입니다.`);
        // console.log('안녕하세요. 저는 ' + this.name + '입니다.');
    }
}

module.exports = Person;