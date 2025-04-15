const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const users = {};
// const user_list = [];

let nextId = 1;

app.use(express.json());    // payload를 
// app.use(express.urlencoded({extended: true}));    // 문자열 

app.get('/', (req, res) => {
    console.log('메인홈');
    res.sendFile('users.html');
})

app.get('/users', (req, res) => {
    console.log('사용자 조회');
    res.send(users);    // application/text문자열
    // res.json(users); // application/json
});

app.post('/users', (req, res) => {
    console.log('사용자 생성', req.body);
    const name = req.body.name;
    users[nextId++] = name;
    res.send('사용자 생성');
});

app.put('/users/:id', (req, res) => {
    console.log('사용자 수정');
    const id = req.params.id;
    users[id] = req.body.name;
    res.send('사용자 수정');
});

app.delete('/users/:id', (req, res) => {
    console.log('사용자 삭제', req.params.id);

    const id = req.params.id;

    delete users[id];
    res.send('사용자 삭제');
});

app.listen(port, () => {
    console.log(`서버 포트가 ${port}에서 실행중 입니다.`);
});