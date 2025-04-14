const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('<h1><meta charset="UTF-8">안녕하세요. 이것은 Node.js 웹서버 입니다.</h1>');
});

server.listen(3000);