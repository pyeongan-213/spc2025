const express = require('express');
const path = require('path');
const morgan = require('morgan');
const sqlite = require('sqlite3')

const db = new sqlite.Database('memo1.db');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/addMemo', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    // console.log("타이틀과 콘텐츠:", title, content);

    const query = 'INSERT INTO memo (title, content) VALUES (?, ?)';
    db.run(query, [title, content], (err, memo) => {
        if (err) {
            console.log('db저장 중 에러 발생');
        } else {
            res.json({message: 'db에 메모 저장 완료'});
        }
    });
});

app.get('/bringMemo', (req, res) => {
    const query = 'SELECT * FROM memo';
    db.all(query, [], (err, row) => {
        if (err) {
            console.log('메모를 가져오는중 에러 발생');
        } else {
            res.json({row});
        }
    });
});

app.put('/edit/:memoId', (req, res) => {
    const memoId = Number(req.params.memoId);
    const editTitle = req.body.title;
    const editContent = req.body.content;

    console.log('백엔드수정하기위한데이터:', memoId, editTitle, editContent);

    query = 'UPDATE memo SET title=?, content=? WHERE id=?';
    db.run(query, [editTitle, editContent, memoId], (err, row) => {
        if (err) {
            console.log('update 에러 발생');
        } 
        
        res.json({message: '업데이트 완료'});
        
    });

});

app.delete('/delete/:memoId', (req, res) => {
    const memoId = Number(req.params.memoId);
    query = 'DELETE FROM memo WHERE id = ?';
    db.run(query, [memoId], (err, row) => {
        if (err) console.error('삭제 오류');

        res.json({message: '삭제 완료'});
    })
});

app.listen(port, () => {
    console.log('서버 레디');
});