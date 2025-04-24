document.addEventListener('DOMContentLoaded', () => {
    bringMemo();
    const title = document.getElementById('titleInput');
    const content = document.getElementById('contentInput');

    document.getElementById('saveBtn').addEventListener('click', () => {
        if (title.value !== "" || content.value !== "") {
            addMemo(title.value, content.value);
            bringMemo();
            title.value = '';
            content.value = '';
        } else {
            // 빈 문자열일땐 작동 안함
        }
    });
});

async function addMemo(title, content) {
    // console.log('js타이틀과 콘텐츠:', title, content);
    const response = await fetch('/addMemo',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, content})
    });
    if (response.status === 200) {
        const data = await response.json();
        console.log("메모추가:", data);
    }

};

async function bringMemo() {
    const response = await fetch('/bringMemo');
    const data = await response.json();
    console.log(data);
    const memos = data.row;

    const memoContainer = document.getElementById('memoContainer');
    memoContainer.innerHTML = '';

    for (let i = 0; i < memos.length; i++) {
        const new_memo = document.createElement('div');
        new_memo.classList.add('memoList');

        console.log(memos[i].title, memos[i].content);
        new_memo.innerHTML = `
            <div class="memobox" style="display: block;">
                <div id="memosTitle">${memos[i].title}</div>
                <div id="memosContent">${memos[i].content}</div>
                <button class="editBtn">수정</button>
                <button class="deleteBtn" delete-memo-id="${memos[i].id}">삭제</button>
            </div>
            <div class="editbox" style="display: none;">
                <input type="text" id="editTitle" value="${memos[i].title}"><br>
                <input type="text" id="editContent" value="${memos[i].content}"><br>
                <button class="ecBtn" data-memo-id="${memos[i].id}">저장</button>
            </div>
        `
        memoContainer.appendChild(new_memo);

        new_memo.querySelector('.editBtn').addEventListener('click', function () {
            // console.log('수정버튼 클릭됨');
            new_memo.querySelector('.memobox').style.display = 'none';
            new_memo.querySelector('.editbox').style.display = 'block';
        });
        
        new_memo.querySelector('.ecBtn').addEventListener('click', function () {
            // console.log('완료버튼 클릭됨');
            const editTitle = new_memo.querySelector('#editTitle').value;
            const editContent = new_memo.querySelector('#editContent').value;
            editMemo(this.getAttribute('data-memo-id'), editTitle, editContent);
            
        });

        new_memo.querySelector('.deleteBtn').addEventListener('click', function () {
            deleteMemo(this.getAttribute('delete-memo-id'));
        });
    }
    
};

async function editMemo(memoId, editTitle, editContent) {
    // console.log("수정하기위한데이터:", memoId, editTitle, editContent);

    const response = await fetch(`/edit/${memoId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: editTitle, content: editContent})
    });
    const data = await response.json();
    console.log("수정후:", data);
    location.reload();
};

async function deleteMemo(memoId) {
    const response = await fetch(`/delete/${memoId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
    location.reload();
};
