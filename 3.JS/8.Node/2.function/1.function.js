function greet(name) {
    const greeting = '안녕하세요, ' + name;
    return greeting;
}

function printScreen(text) {
    console.log(text);
}

console.log(greet('john'));
printScreen('안녕');

function add(a, b) {
    return a + b;
}

add(5, 7);

printScreen(add(5, 7));