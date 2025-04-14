// const figlet = require('figlet');    figlet은 둘 다 지원한다 아래방법을 사용하려면 package.json 에서 "type": "modules" 추가해야함
import figlet from 'figlet';

figlet('Hello World!', (err, data) => {
    if (err) {
        console.log('에러', err);
        return;
    }

    console.log(data);
});