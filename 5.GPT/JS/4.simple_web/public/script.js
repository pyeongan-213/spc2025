const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', async () => {
    const questionInput = document.getElementById('questionInput').value;
    const response = await fetch('/chatbot', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({questionInput})
    });
    const data = await response.json();
    console.log("백엔드로부터 받은 데이터:", data);

    if (data) {
        const chatbotResponseDiv = document.getElementById('chatbotResponseDiv');
        const chatRes = document.createElement('div');
        chatRes.innerHTML = `
            <p>${data.chatbot}</p>
        `
        chatbotResponseDiv.appendChild(chatRes);
    }

});
