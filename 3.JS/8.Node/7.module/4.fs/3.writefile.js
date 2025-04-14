const fs = require('fs');

console.log('파일 쓰기전');

const data = "내가 파일에 쓰고 싶은 내용"

fs.writeFile('example.txt', data, {encoding: 'utf8', flag:'a'}, (err) => { // 화살표 함수
    if (err) {
        console.log('에러가 있음, 에러는:', err);
    } else {
        console.log('에러가 없음, 쓰기 완료');
    }
});

console.log('파일 쓴후');   // 위에 콜백이 비동기라서, 이게 먼저 출력됨