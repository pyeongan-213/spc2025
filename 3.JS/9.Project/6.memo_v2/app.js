const express = require('express');
const path = require('path');
const morgan = require('morgan');
const sqlite = require('sqlite3');
const multer = require('multer');
const fs = require('fs');

const db = new sqlite.Database('memo2.db');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'public/images/');
        },
        filename(req, file, cb) {
            const ext = path.extname(file.originalname);
            const randomID = Date.now();
            const filename = randomID + ext;
            cb(null, filename);
        }
    })
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/addMemo', upload.single('myImage'), (req, res) => {
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null;
    // console.log("BE 타이틀과 콘텐츠, 이미지:", title, content, image);

    const query = 'INSERT INTO memo (title, content, image) VALUES (?, ?, ?)';
    db.run(query, [title, content, image], (err, memo) => {
        if (err) {
            // console.log('BE db저장 중 에러 발생');
        } else {
            res.json({message: 'BE db에 메모 저장 완료', memo});
        }
    });
});

app.get('/bringMemo', (req, res) => {
    const query = 'SELECT * FROM memo';
    db.all(query, [], (err, row) => {
        if (err) {
            // console.log('BE 메모를 가져오는중 에러 발생');
        } else {
            const rowList = [];
            row.forEach(new_row => {
                if (new_row.image === null) {
                    rowList.push({id:new_row.id, title:new_row.title, content:new_row.content});
                } else {
                    rowList.push(new_row);
                }
            })
            res.json(rowList);
        }
    });
});

app.put('/edit/:memoId', (req, res) => {
    const memoId = Number(req.params.memoId);
    const {editTitle, editContent} = req.body;
    // console.log('BE 수정할 데이터:', memoId, editTitle, editContent);

    query = 'UPDATE memo SET title=?, content=? WHERE id=?';
    db.run(query, [editTitle, editContent, memoId], (err, row) => {
        if (err) {
            // console.log('BE update 에러 발생');
        } 
        res.json({message: 'BE 업데이트 완료'});
    });
});

app.put('/editImg/:memoId', upload.single('editImage'), (req, res) => {
    const memoId = Number(req.params.memoId);
    const {editTitle, editContent} = req.body;
    const editImage = req.file ? req.file.filename : null;
    // console.log('BE 수정할 데이터:', memoId, editTitle, editContent, editImage);

    const imagequery = 'SELECT image FROM memo WHERE id=?';
    db.get(imagequery, [memoId], (err, row) => {
        if (err) {
            // console.error('BE 기존 이미지 조회 오류', err);
            return res.status(500).json({ message: '이미지를 찾을 수 없습니다.' });
        }

        if (row && row.image) {
            const oldImagePath = 'images/' + row.image;
            deleteImage(oldImagePath);
        }

        query = 'UPDATE memo SET title=?, content=?, image=? WHERE id=?';
        db.run(query, [editTitle, editContent, editImage, memoId], (err, row) => {
            if (err) {
                // console.log('BE update 에러 발생');
            } 
            res.json({message: 'BE 업데이트 완료'});
        });
    })
});

app.delete('/deleteImg/:img', (req, res) => {
    // console.log("BE 이미지만 삭제 호출됨");
    const image = 'images/' + req.params.img;
    const dbimg = req.params.img;
    deleteImage(image);
    deleteDBimage(dbimg);
    res.json({message: 'BE 이미지만 삭제 완료'});
});

app.delete('/image/:memoId', (req, res) => {
    // console.log("BE 이미지 메모 삭제 호출됨");
    const memoId = Number(req.params.memoId);
    const image = req.body.image;
    deleteImage(image);
    deleteMemo(memoId);
    res.json({message: 'BE 이미지 메모 삭제 완료'});
});

app.delete('/delete/:memoId', (req, res) => {
    // console.log("BE 일반텍스트 메모 삭제 호출됨");
    const memoId = Number(req.params.memoId);
    deleteMemo(memoId);
    res.json({message: 'BE 텍스트 메모 삭제 완료'});
});

app.listen(port, () => {
    console.log('BE 서버 레디');
});

function deleteMemo(num) {
    query = 'DELETE FROM memo WHERE id = ?';
    db.run(query, [num], (err, row) => {
        if (err) console.error('BE 삭제 오류');
    });
};

function deleteDBimage(num) {
    // console.log("db에서 이미지 삭제 요청 들어옴", num);
    query = 'UPDATE memo SET image=null WHERE image=?';
    db.run(query, [num], (err, row) => {
        if (err) console.error('BE 삭제 오류');
        console.log("db에서 이미지 삭제 완료");
    });
};

function deleteImage(string) {
    // console.log("이미지 삭제:", string);
    if (string) {
        const imagePath = path.join(__dirname, 'public', string);
        fs.unlink(imagePath, (err) => {
            if (err) {
                // console.log('BE 이미지 삭제 실패', err);
            } else {
                // console.log('BE 이미지 삭제 성공');
            }
        });
    }
};