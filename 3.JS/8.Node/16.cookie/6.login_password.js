const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// const users = [
//     {id: 1, username: 'user1', password: 'password1'},
//     {id: 2, username: 'user2', password: 'password2'},
// ]

const db = new sqlite3.Database('users.db');

app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(session({
    secret: 'this-is-my-password',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/user', (req, res) => {
    // const username = req.session.username; ???
    // const yoursession = req.body;
    const user = req.session.user;

    if (user) {
        const {username, password} = req.session.user;
        res.send(`당신의 사용자 이름은: ${username}, 비밀번호는 ${password} 입니다.`);
    } else {
        res.send('로그인 하고 오시오.');
    }
});

app.post('/login', async (req, res) => {
    // req.session.username = req.body.username;
    // req.session.password = req.body.password;

    const {username, password} = req.body;
    console.log(username, password);
    
    // const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // 나의 계정을 가져와서 bcrypt.compare로 해시를 비교함

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
        if (row) {
            const isMatch = await bcrypt.compare(password, row.password);
            if (isMatch) {
                req.session.user = {username: row.username, password: row.password}
                res.json({message: '로그인 성공'});
            } else {
                res.status(401).json({message: '로그인 실패'});
            }
        } else { // 보안적으로는 계정이 없는건지 비번이 틀린건지 구분해서 알려주지 않는게 좋은것임.
            res.status(401).json({ message: '(계정이 틀려서) 로그인 실패'});
        }
    });

    // db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    //     if (row) {
    //         // 비밀번호 해시
    //         // const hashedPassword = await bcrypt.hash(row.password, 10);
    //         req.session.user = { username: row.username, password: row.password };
    //         res.json({message: '로그인 성공'});
    //     } else {
    //         res.status(401).json({message: '로그인 실패'});
    //     }
    // })

});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('안녕히 가세요..');
});

app.listen(port, () => {
    console.log('서버 레디');
});