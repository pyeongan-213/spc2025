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

const API_SERVER = 'http://127.0.0.1:5000'

chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
    chatbotIcon.style.display = 'none';
});

closeChatbot.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
    chatbotIcon.style.display = 'flex';
});

function addMessage(message, sender='user') {
    if (sender == 'user') {
        // 화면에 내 메시지 추가한다
        const myMessage = document.createElement('div');
        myMessage.classList.add('userMessage');
        myMessage.innerHTML = `<i class="bi bi-person"></i>Sender: ${message}`;
        chatbotMessage.appendChild(myMessage);
    } else{
        const answer = document.createElement('div');
        answer.classList.add('echoMessage')
        answer.innerHTML = `<i class="bi bi-robot"></i> ${message}`;
        chatbotMessage.appendChild(answer);
    }
    
    // 스크롤 내린다
    chatbotMessage.scrollTop = chatbotMessage.scrollHeight;
}

async function sendMessageToServer() {
    const question = chatbotInput.value;

    // 메세지 지우기
    chatbotInput.value = '';
    addMessage(question, 'user');

    // 서버로 보낸다
    // await 방식
    const resp = await fetch(`${API_SERVER}/api/chat`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({"question": question})
        body: JSON.stringify({question})
    });

    const result = await resp.json();

    addMessage(result.question, 'chatbot')
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

