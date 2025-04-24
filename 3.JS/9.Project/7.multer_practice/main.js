// https://velog.io/@mainfn/Node.js-express-multer%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
// 위 링크는 multer 참고한 블로그

const express = require('express');
const path = require('path');
const multer = require('multer');
const uuid4 = require('uuid4');

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// index.html은 루트 페이지를 가리키는 특별한 파일명이기 때문에 GET '/index.html' 이 아닌 GET '/' 으로 접속해도 index.html 파일의 내용을 반환해준다.

// const upload = multer({ dest: '/files' }); 아래처럼 dest -> storage로 변경
const upload = multer({
    storage: multer.diskStorage({
        filename(req, file, done) {
            // console.log(file);
            // done(null, file.originalname); // 기존방식대신 uuid를 발급받아 파일명으로 지정. 이유는 아래에서
            const randomID = uuid4();
            const ext = path.extname(file.originalname);
            const filename = randomID + ext;
            done(null, filename);
        },
        destination(req, file, done) {
            console.log(file);
            done(null, path.join(__dirname, 'files'));
        },
    }),
    // 추가된 속성 - 업로드 할 파일의 최대용량을 제한할 수 있다.
	limits: { fileSize: 1024 * 1024 },
});
// const uploadMiddleware = upload.single('myFile'); - 하나만 업로드 할때
// storage 속성 내의 destination, filename은 수정할 필요 없다. 파일 하나당 한 번씩 실행하면 되기 때문에 이 메소드 내부에서 file을 배열로 다룰 필요는 없기 때문이다.
const uploadMiddleware = upload.array('myFiles');   // 여러개 업로드 할때
// app.use(uploadMiddleware); /upload 라우터의 2번째 인자로 옮겼다. 이유는 아래에서

// multer 함수에 dest 라는 속성을 가진 JS객체를 인자로 전달. dest(destination) = 업로드 될 목적지
// multer 함수로 upload라는 객체를 반환하는데, 또 다시 upload.single() 메소드를 호출하면 업로드 미들웨어를 생성할 수 있다.
// 이 미들웨어는 multipart/form-data 형식의 body를 파싱해서 파일로 다시 변환하고 dest에 등록된 경로에 업로드 한다.
// upload.single()는 파일을 하나만 등록할때 사용한다. 인자로 myFile을 준 이유는 index.html의 input 태그에 name 속성이 myFile 이였기 때문.

// storage 는 업로드 할 이미지 파일을 어디에 저장할 것인가에 대한 옵션. dest를 지정했을 때 보다 좀 더 세부적인 내용을 지정할 수 있다.
// req는 express의 Request 객체고, file은 업로드한 파일에 대한 정보가 들어있음. done() 은 함수인데 미들웨어에서 사용하는 next()와 비슷하게 
// 다음 미들웨어로 작업을 넘기도록 하며 1번째 인자로는 오류를, 2번째 이름으로는 파일이름을 지정한다.
// done의 첫 번째 매개변수로 오류를 전달하면 이미지 이름이 중복인지 체크하여 중복이면 오류를 발생시키는 등 처리가 가능하다.
// dest 속성만 사용할때는 multer가 지어준 임의의 이름을 그대로 사용해야 했지만 filename 함수 안에서 2번째 인자 file로 파일에 대한 정보를 받아서 
// 업로드 하기전의 cat.jpg를 그대로 사용할 수도 있다.
// filename, destination이 받는 인자는 동일하며 file도 같은 데이터다. 실행 순서는 destination -> filename이다.

// uuid4() 함수는 랜덤값을 만들어주는데 중복확률이 상상 이상으로 매우 낮기 때문에 보통은 큰 문제가 없을것이다.
// 하지만 걱정되거나 사용자/사용량이 매우 많다면 uuid4 대신 Date.now()를 사용하는것도 좋을것 같다.
// path.extname()은 파일명을 인자로 주면 확장자를 추출하는 함수다. 그래서 filename은 랜덤값 + 원래이름의 확장자를 연결한 값이 된다.

// 오류 처리 미들웨어 - 업로드 할 파일의 크기가 limits.fileSize보다 크면 오류 처리
app.use((err, req, res, next) => {
    console.log("error middleware");
    console.log(err.toString());
    res.send(err.toString());
});

app.get("/", (req, res) => {
    res.end("HOME");
});

// 그럼 위와 같이 get('/') 라우터가 존재하면 둘 중 어떤걸 렌더링 될까? 미들웨어는 순서가 중요하다.
// app.use(express.static(publicPath));가 위에 있기 때문에, GET /에 요청을 보내면 index.html을 렌더링 한 뒤 종료된다.
// express.static 미들웨어에서 내부적으로 res.sendFile(); 등의 함수가 실행될 것이기 때문에 res.end();로 먼저 응답을 완료하기 때문이다.
// 그래서 GET / 라우터가 app.use(express.static(publicPath)); 보다 위에 있을경우 HOME이 응답됨.
// res.end();로 응답을 완료했기 때문에 다음 미들웨어인 express.static()이 실행되지 않음.

app.post('/upload', uploadMiddleware, (req, res) => {
    // console.log(req.file);   - 하나만 업로드 할경우엔 file
    console.log(req.files);      // Request 객체 내의 속성도 req.file이 아닌 req.files로 들어오게 된다.
    res.status(200).send('uploaded');
});

// req.file의 fieldname을 확인해보면 input 태그의 name 값과 동일한걸 확인 할 수 있다.
// originalname은 업로드한 파일의 원래 이름이고, mimetype 속성을 통해 확장자를 알 수 있다.
// destination은 multer() 함수의 dest 옵션으로 준 그대로 출력된다.
// filename은 multer에 의해 임의로 만들어진 파일명이다. 서버에 업로드 될 때 저 이름으로 저장된다.
// filename이 확장자도 사라지고 원본과 전혀 다른 값이 나온건 uploadMiddleware가 파싱 및 파일 업로드를 모두 자동으로 처리했기 때문이다.
// 그럼 왜 uploadMiddleware를 거치고 나면 이름이 달라지는가?
// 여러명이 사용하는 서비스의 경우 같은 제목의 사진을 수십명이 업로드 한다면 이름이 같기 때문에 이전 사진이 지워지고 새로운 사진으로 덮어씌워지기 때문
// 그런데 이렇게 하면 확장자가 날아가버리는 문제 발생. 해결을 위해 기존의 multer() 함수의 옵션을 dest -> storage 로 변경한다.
// path는 dest + filename이며, size는 파일 용량이다.

// app.post('/upload')의 2번째 인자로 uploadMiddleware를 옮긴 이유는 POST /upload로 요청을 보낼 때만 uploadMiddleware가 실행되어 업로드가 진행된다.
// 이미지 업로드가 발생하는 라우터는 한정적이기 때문에 특정 라우터를 지정해서 미들웨어를 등록해주는 편이 합리적이다.

app.listen(3000, () => {
    console.log('server is running at 3000');
});