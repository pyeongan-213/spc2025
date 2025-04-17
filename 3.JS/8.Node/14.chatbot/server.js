const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.json());    // 사용자의 입력을 파싱해서 req.body에 담아라
app.use(express.static('public'));
app.use(morgan('dev'));

app.post('/api/chat', (req, res) => {
    
    // 미션2. 사용자가 한말 그대로 반환하기 (단 이쁜 포맷으로 반환하기 = JSON)
    // const response = {"answer": question};
    // res.json(response);
    try {
        const question = "Echo: " + req.body.question;
        console.log(question);
        res.status(201).send({question});   // {question} ==> {"question": question의 밸류}
    } catch (error) {
        res.status(500).send("서버와 연결할 수 없습니다.");
    }
});

app.listen(port, () => {
    console.log('서버 레디');
});