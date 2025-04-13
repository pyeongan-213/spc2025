const Person = require('./Person');

class Parent extends Person {
    constructor(name, age, gender, role) {
        super(name, age, gender, role);
    }

    driveCar(Car) {
        return console.log(`${this.name}이(가) ${Car.brand} ${Car.model}를 운전하고 있습니다.`);
    }

}

module.exports = Parent;