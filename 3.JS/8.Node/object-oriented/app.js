const Parent = require('./Parent');
const Parent = require('./Child');
const Parent = require('./Sedan');

// 부모와 자녀 객체 생성
const dad = new Parent("철수", 45, "남성", "회사원");
const daughter = new Parent("지연", 10, "여성", "초등학교 4학년");
const son = new Parent("민수", 8, "남성", "초등학교 2학년");

// 가족 차량 생성
const familyCar = new Sedan("현대", "그랜저", "검정", 500);

// 시나리오 생성
familyCar.start();
dad.getInCar(familyCar);
dad.driveCar(familyCar);
daughter.getInCar(familyCar);
son.getInCar(familyCar);
daughter.playInCar();
son.playInCar();
familyCar.stop();