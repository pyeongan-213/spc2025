const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const users = {};
// const user_list = [];

let nextId = 1;

app.use(express.json());    // payload를 (즉 data영역을) 파싱해서, req.body 에 담아줘라
// app.use(express.urlencoded({extended: true}));    // 문자열 

app.get('/', (req, res) => {
    console.log('메인홈');
    res.sendFile(path.join(__dirname, 'public', 'users.html'));
});

// app.get('/users.js', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'users.js'));
// });

app.use(express.static('public'));

app.get('/users', (req, res) => {
    console.log('사용자 조회');
    console.log('접속자가 누구냐?', req.ip, req.headers['user-agent']);
    res.send(users);    // application/text문자열
    // res.json(users); // application/json
});

app.post('/users', (req, res) => {
    console.log('사용자 생성', req.body);

    try {
        const name = req.body.name;
        users[nextId++] = name;
        // res.send('사용자 생성');
        res.status(201).send("등록 성공");
    } catch (error) {
        res.status(500).send('서버 내부 오류');   // 상세한 오류를 알려주는게 좋다.
    }
    
});

app.put('/users/:id', (req, res) => {
    console.log('사용자 수정');
    try {
        const id = req.params.id;
        users[id] = req.body.name;
        res.status(200).send('사용자 수정');
    } catch (error) {
        res.status(500).send('서버 내부 오류');
    }
    
});

app.delete('/users/:id', (req, res) => {
    console.log('사용자 삭제', req.params.id);
    console.log('요청안에 대체 뭐가있나?', req);
    
    try {
        const id = req.params.id;

        if (!users[id]) {   // (users[id] === undefined)
            return res.status(404).send(`해당 사용자(ID: ${id})는 존재하지 않습니다.`);
        }
        delete users[id];
        res.status(204).send();    // 204 No Content
    } catch (error) {
        res.status(500).send('서버 내부 오류');
    }
    
});

app.listen(port, () => {
    console.log(`서버 포트가 ${port}에서 실행중 입니다.`);
});