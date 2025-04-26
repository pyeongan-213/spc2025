document.addEventListener('DOMContentLoaded', () => {
    bringMemo();
    const title = document.getElementById('titleInput');
    const content = document.getElementById('contentInput');
    
    document.getElementById('saveBtn').addEventListener('click', async () => {
        const imageInput = document.getElementById('imageInput');
        const formData = new FormData();
        const image = imageInput.files[0];
        // console.log('imageInput 확인:', imageInput);

        if (title.value !== "" && content.value !== "") {
            formData.append('title', title.value);
            formData.append('content', content.value);
            if (image) {
                formData.append('myImage', image);
            }
            // console.log("JS에서 메모 추가 전 데이터 확인:", title.value, content.value, imageInput);
        
            const response = await fetch('/addMemo',{
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log("메모추가:", data);
                bringMemo();
                title.value = '';
                content.value = '';
                imageInput.value = '';
            }
        } else {
            // 빈 문자열일땐 작동 안함
            alert('제목과 내용을 입력해 주세요.');
        }
    });
});

async function bringMemo() {
    const response = await fetch('/bringMemo');
    const data = await response.json();
    console.log("가져온 메모들", data);
    const memos = data;

    const memoContainer = document.getElementById('memoContainer');
    memoContainer.innerHTML = '';

    for (let i = 0; i < memos.length; i++) {
        const new_memo = document.createElement('div');
        new_memo.classList.add('memoList');

        let imgTag = '';
        if (memos[i].image) {
            imgTag = `<img src="images/${memos[i].image}" width="100px" height="100px" class="imageMemo">`;
        }

        // console.log(memos[i].title, memos[i].content);
        new_memo.innerHTML = `
            <div class="memobox" style="display: block;">
                ${imgTag}
                <div id="memosTitle">${memos[i].title}</div>
                <div id="memosContent">${memos[i].content}</div>
                <button class="editBtn">수정</button>
                <button class="deleteBtn" delete-memo-id="${memos[i].id}">삭제</button>
            </div>
            <div class="editbox" style="display: none;">
                <input type="text" id="editTitle" value="${memos[i].title}"><br>
                <input type="text" id="editContent" value="${memos[i].content}"><br>
                <form action="/add" enctype="multipart/form-data">
                    <input type="file" class="editImage" accept="image/*" name="editImage">
                    <input type="checkbox" class="deleteImageCheckbox" name="deleteImageCheckbox" value="deleteImage">
                    <label>이미지 삭제</label>
                </form>
                <button class="ecBtn" data-memo-id="${memos[i].id}">저장</button>
            </div>
        `;

        memoContainer.appendChild(new_memo);

        new_memo.querySelector('.editBtn').addEventListener('click', function () {
            // console.log('수정버튼 클릭됨');
            new_memo.querySelector('.memobox').style.display = 'none';
            new_memo.querySelector('.editbox').style.display = 'block';
        });
        
        new_memo.querySelector('.ecBtn').addEventListener('click', function () {
            console.log('완료버튼 클릭됨');
            const checkbox = new_memo.querySelector('.deleteImageCheckbox');
            const editTitle = new_memo.querySelector('#editTitle').value;
            const editContent = new_memo.querySelector('#editContent').value;
            if (checkbox.checked) {
                deleteImage(memos[i].image);
                const imgTag = new_memo.querySelector('.imageMemo');
                console.log("이미지 태그 확인용:", imgTag);
                imgTag.remove();
                editMemo(this.getAttribute('data-memo-id'), editTitle, editContent);
            } else {
                const updateImage = new_memo.querySelector('.editImage');
                const img = updateImage.files[0];
                if(img) {
                    console.log("이미지 업데이트 호출중", img);
                    editImgMemo(this.getAttribute('data-memo-id'), editTitle, editContent, img);
                } else {
                    console.log("메모 업데이트 호출중");
                    editMemo(this.getAttribute('data-memo-id'), editTitle, editContent);
                }
            }
        });

        new_memo.querySelector('.deleteBtn').addEventListener('click', function () {
            // console.log("삭제버튼클릭됨");
            const deleteImage = new_memo.querySelector('.imageMemo');
            let image = null;
            if (deleteImage) {
                image = deleteImage.getAttribute('src');
                deleteImageMemo(this.getAttribute('delete-memo-id'), image);
            } else {
                deleteMemo(this.getAttribute('delete-memo-id'));
            }
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

async function editImgMemo(memoId, editTitle, editContent, img) {
    const formData = new FormData();
    formData.append('title', editTitle);
    formData.append('content', editContent);
    formData.append('editImage', img);
    
    const response = await fetch(`/editImg/${memoId}`, {
        method: 'PUT',
        body: formData
    });
    const data = await response.json();
    console.log("이미지수정후:", data);
    location.reload();
};

async function deleteImageMemo(memoId, imageinfo) {
    console.log("이미지 삭제함수 불러짐:", memoId, imageinfo);
    const response = await fetch(`/image/${memoId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({image: imageinfo})
    });
    const data = await response.json();
    console.log(data);
    location.reload();
};

async function deleteImage(img) {
    console.log("이미지만 삭제 불러짐");
    const response = await fetch(`/deleteImg/${img}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
    location.reload();
};

async function deleteMemo(memoId) {
    console.log("이미지 없는 삭제함수 불러짐:", memoId);
    const response = await fetch(`/delete/${memoId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
    location.reload();
};

