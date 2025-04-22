const express = require('express');
const sqlite = require('sqlite3');

const app = express();
const port = 3000;

const db = new sqlite.Database('users.db');

app.use(express.static('public'));
app.use(express.urlencoded());

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (row) res.send('로그인 성공');
        else res.send('로그인 실패');
    });
});

app.listen(port, () => {
    console.log('서버 레디')
});
