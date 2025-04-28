const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie': 'your_number=1234'});
    res.end('cookie');
});

// cookie.txt 에서 your_number= 를 1111로 바꿨더니 콘솔창에 /hello your_number=1111로 뜸 (정상)

server.listen(3000, () => {
    console.log('서버 레디');
});