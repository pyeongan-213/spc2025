const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// function myMiddleware(req, res, next) {
//     console.log(`MyLog: ${req.method}, ${req.url}`);
//     next();
// }

// app.use(function myMiddleware(req, res, next) {
//     console.log(`MyLog: ${req.method}, ${req.url}`);
//     next();
// });

app.use((req, res, next) => {
    console.log(`MyLog1: ${req.method}, ${req.url}`);
    req.myData = 1234;
    next();
});

app.use((req, res, next) => {
    console.log(`MyLog2: ${req.method}, ${req.url}`);
    req.requestTime = Date.now();   // 이 숫자는 epoch하는 값임. 1970년 1월 1일 00:00:00을 기준
    next();
});

app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'public', 'index.html');    // 절대경로 (absolute path, full path)
    // console.log(htmlFilePath);
    console.log(req.myData);
    const date = new Date(req.requestTime);
    console.log(`요청시간: ${date.toLocaleString()}`);

    res.sendFile(htmlFilePath);
});

app.use(express.static('public'));  // 우리의 홈에있는 public 폴더를 정적 폴더로 정의함
                                    // 외부에서는 public이 보이는게 아니고, public 안에 담긴 내용이 보인다(폴더와 파일)
                                    // html에 이미지 src를 public/images/cat.jpg <- xxx images/cat.jpg <- ooo

app.listen(port, () => {
    console.log(`server ready on ${port}`);
});