const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

// 보내줄 데이터 정의
// function myData(_, i) {
//     `Item ${i + 1}` 
// }

// const data = Array.from({length: 200}, myData);

const data = Array.from({length: 200}, (_, i) => `Item ${i + 1}`);
// console.log(data);

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/get-items', (req, res) => {
    // 미션2. 원하는 갯수만큼만 보내주려면 어떻게 해야할까?
    //        입력 파라미터를 어떻게 정해야 할까?
    // query 파라미터로 GET으로 start=10, end=20 라는 변수에 담아줄거다.
    // 미션2-1. 그래서, 어떻게 이 많은걸 나눌까?
    // 미션2-2. 이걸 구현.

    // const start = req.query.start;
    // const end = req.query.end;
    const { start, end } = req.query;

    // const userItems = [];
    // for (let i = start; i < end; i++) {
    //     userItems.push(data[i]);
    // }
    // console.log(userItems);

    console.log(data.length);

    const userItems = data.slice(start, end);

    res.json({total: data.length, items: userItems});
});

// app.get('/get-items', (req, res) => {
//     for (let i = 0; i < data.length; i += 10) {
//         let sliceData = [];
//         sliceData = data.slice(i, i + 10);
//         // console.log(sliceData);
//     }
//     res.send(sliceData);
// });

app.listen(port, () => {
    console.log('서버 레디');
});