const express = require('express');
const sqlite = require('better-sqlite3');

const app = express();
const port = 3000;

const db = sqlite('users.db');

app.use(express.static('public'));
app.use(express.urlencoded());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE username = ? AND password = ?').get(username, password);
    if (user) {
        res.send('로그인 성공');
    } else {
        res.send('로그인 실패');
    }
});

app.listen(port, () => {
    console.log('서버 레디')
})
