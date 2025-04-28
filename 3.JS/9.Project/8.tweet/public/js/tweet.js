const tweetBtn = document.getElementById('tweetBtn');

tweetBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const content = document.getElementById('content').value;

    if (!content.trim()) {
        alert('내용을 입력하세요');
        return;
    }

    const res = await fetch('/api/tweet', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({content})
    });

    const data = await res.json();
    if (res.ok) {
        // alert(data.message);
        showFlash('트윗 작성 완료', 'success');
        setTimeout(() => {
            window.location.href = '/index.html'
        }, 1000);
    } else {
        // alert(data.error);
        showFlash(data.error, 'danger');
        setTimeout(() => {
            window.location.href = '/login.html'
        }, 1000);
    }
});