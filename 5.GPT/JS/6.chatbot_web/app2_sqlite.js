const express = require('express');
const path = require('path');
require('dotenv').config({ path: '../../.env' });
const axios = require('axios');
const Database = require('better-sqlite3');

// const conversationHistory = [];

// const db = new Database(':memory:'); // 파일에 저장하지 않고, 메모리에 임시 저장하는 DB
const db = new Database('history.db'); // 파일에 저장

db.exec(`CREATE TABLE IF NOT EXISTS conversation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role TEXT,
    content TEXT
    );
    `
);

// console.log(process.env.OPENAI_API_KEY);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

function getRecentConversation() {
    const stmt = db.prepare('SELECT * FROM conversation ORDER BY id DESC LIMIT 10');
    const rows = stmt.all();

    return rows.reverse(); // 최근 10개 가져와서 오래된 질문을 먼저 넣기 위해서 순서 바꿈
};

app.post('/api/chat', async (req, res) => {
    const { userInput } = req.body;
    console.log('userInput: ', userInput);
    db.prepare('INSERT INTO conversation (role, content) VALUES (?, ?)').run('user', userInput);
    // 이전 대화내용에 추가
    // conversationHistory.push({role: 'user', content: userInput});

    const previousConversation = getRecentConversation();

    const chatGPTResponse = await getChatGPTResponse(previousConversation);
    console.log(chatGPTResponse);
    console.log('-----');
    console.log('보낼전체대화내용', previousConversation);
    console.log('-----');
    // conversationHistory.push({role: 'assistant', content: chatGPTResponse});
    db.prepare('INSERT INTO conversation (role, content) VALUES (?, ?)').run('assistant', chatGPTResponse);

    res.json({'message': chatGPTResponse});
});

const CHATGPT_URL = 'https://api.openai.com/v1/chat/completions';

async function getChatGPTResponse(previousConversation) {
    const response = await axios.post(
        CHATGPT_URL,
        {
            model: 'gpt-3.5-turbo',
            messages: [
                // { role: 'system', content: 'You are a helpful assistant. Please remember our conversation history in memory and respond accordingly. 모든 답변은 간결하게 200글자 이내로 해줘.' },
                { role: 'system', content: '너는 스포츠 트레이너로 운동에 대해서 상세한 답변을 해줄수 있어. 운동과 관련없는 질문은 알려주지마.' },
                // { role: 'user', content: userInput },
                // ...conversationHistory
                ...previousConversation
            ],
            temperature: 0.2 // 최대한 딱딱하게, 팩트 중심으로
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        }
    );

    return response.data.choices[0].message.content;
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});