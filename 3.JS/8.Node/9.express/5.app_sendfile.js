const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));  // 우리의 홈에있는 public 폴더를 정적 폴더로 정의함
                                    // 외부에서는 public이 보이는게 아니고, public 안에 담긴 내용이 보인다(폴더와 파일)
                                    // html에 이미지 src를 public/images/cat.jpg <- xxx images/cat.jpg <- ooo

function myMiddleware(req, res, next) {
    console.log(`MyLog: ${req.method}, ${req.url}`);
}

app.use(myMiddleware);

app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'public', 'index.html');    // 절대경로 (absolute path, full path)
    // console.log(htmlFilePath);

    res.sendFile(htmlFilePath);
});

app.listen(port, () => {
    console.log(`server ready on ${port}`);
});