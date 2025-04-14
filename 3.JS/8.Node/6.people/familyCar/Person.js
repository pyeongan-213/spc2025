class Person {
    constructor(name, age, gender, role) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.role = role;
    }

    getInCar(Car){
        console.log(Car);
        return console.log(`${this.name}이(가) ${Car.brand} ${Car.model}에 탑승했습니다.`);
    }

}

module.exports = Person;