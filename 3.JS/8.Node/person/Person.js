class Person {

    constructor(name, hello) {
        this.name = name;
        this.hello = hello;
    }

    greet() {
        return `저는 ${this.name} 입니다. ${this.hello}.`;
    }
}

module.exports = Person;