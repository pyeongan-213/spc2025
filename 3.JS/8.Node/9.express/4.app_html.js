const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');

app.get('/', (req, res) => {
    // res.send(`
    //     <html>
    //         <head>
    //             <title>헬로우 익스프레스</title>
    //         </head>
    //         <body>
    //             <h1>헬로우 익스프레스??</h1>
    //             <h2>헬로우 익스프레스??</h2>
    //             <h3>헬로우 익스프레스??</h3>
    //         </body>
    //     </html>
    // `);

    fs.readFile('index.html', 'utf8', (err, data) => {
        console.log('파일 읽기:', data);
        res.send(data);
    })
});

app.listen(port, () => {
    console.log(`server ready on ${port}`);
});