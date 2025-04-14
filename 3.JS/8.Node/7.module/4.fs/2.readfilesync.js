// 별다른 말이 없으면, 우리는 commonJS 방식을 쓸것임

const fs = require('fs');

console.log('파일 읽기전');

const data = fs.readFileSync('example.txt', 'utf8');
console.log('데이터는:', data);

console.log('파일 읽은후');