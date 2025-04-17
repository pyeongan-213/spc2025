// 미션1-1. 저 영역을 클릭해서 창이 나오게 한다
// 미션1-2. x박스를 눌러서 다시 창이 닫히게 한다.
// chatbotIcon.style.display = 'flex'; 이거 없어도 클릭이벤트 이상없는것 같음

// 미션3. Send버튼을 통해서 백엔드로 사용자가 입력한 대화 내용을 전송한다.
// 미션4. 받아온 응답(에코 메세지)를 대화창에 출력한다.

const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const sendMessage = document.getElementById('sendMessage');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessage = document.getElementById('chatbotMessage');

chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
    chatbotIcon.style.display = 'none';
});

closeChatbot.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
    chatbotIcon.style.display = 'flex';
});

async function sendMessageToServer() {
    const question = chatbotInput.value;

    // 메세지 지우기
    chatbotInput.value = '';

    // 화면에 내 메시지 추가한다
    const myMessage = document.createElement('div');
    myMessage.innerHTML = `<i class="bi bi-person"></i> ${question}`;
    myMessage.style.textAlign = 'right';
    myMessage.style.marginLeft = '20%';
    myMessage.style.backgroundColor = 'lightblue';
    myMessage.style.borderTopLeftRadius = '10px';
    myMessage.style.borderTopRightRadius = '10px';
    myMessage.style.borderBottomLeftRadius = '10px';
    myMessage.style.padding = '5px';
    myMessage.style.marginTop = '5px';
    chatbotMessage.appendChild(myMessage);
    // 서버로 보낸다

    // .then (fetch 체이닝 (promise 체이닝))
    // fetch('/api/chat', {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     // body: JSON.stringify({"question": question})
    //     body: JSON.stringify({question})
    // })
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp));

    // await 방식
    const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({"question": question})
        body: JSON.stringify({question})
    });

    const result = await resp.json();

    const answer = document.createElement('div');
    answer.innerHTML = `<i class="bi bi-robot"></i> ${result.question}`;

    answer.style.textAlign = 'left';
    answer.style.marginRight = '20%';
    answer.style.backgroundColor = 'lightpink';
    answer.style.borderTopLeftRadius = '10px';
    answer.style.borderTopRightRadius = '10px';
    answer.style.borderBottomRightRadius = '10px';
    answer.style.padding = '5px';
    answer.style.marginTop = '5px';

    chatbotMessage.appendChild(answer);

    chatbotMessage.scrollTop = chatbotMessage.scrollHeight;
};

sendMessage.addEventListener('click', () => {
    sendMessageToServer();
});

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // console.log('엔터키를 눌렀으니, 서버로 보내는 코드 짜기');
        sendMessageToServer();
    }
});

