document.addEventListener('DOMContentLoaded', () => {
    bringMemo();
    const title = document.getElementById('titleInput');
    const content = document.getElementById('contentInput');
    const imageInput = document.getElementById('imageInput');
    
    document.getElementById('saveBtn').addEventListener('click', async () => {
        // console.log('imageInput 확인:', imageInput);
        
        if (title.value !== "" && content.value !== "") {
            const formData = new FormData();
            formData.append('title', title.value);
            formData.append('content', content.value);
            if (imageInput.files[0]) {
                formData.append('myImage', imageInput.files[0]);
            }
            // console.log("JS에서 메모 추가 전 데이터 확인:", title.value, content.value, imageInput);
        
            await fetchToExpress('/addMemo',{
                method: 'POST',
                body: formData
            });

            title.value = '';
            content.value = '';
            imageInput.value = '';

        } else {
            // 빈 문자열일땐 작동 안함
            alert('제목과 내용을 입력해 주세요.');
        }
    });
});

async function bringMemo() {
    const response = await fetch('/bringMemo');
    const data = await response.json();
    // console.log("가져온 메모들", data);
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
                <div class="memosTitle">${memos[i].title}</div>
                <div class="memosContent">${memos[i].content}</div>
                <button class="editBtn">수정</button>
                <button class="deleteBtn" delete-memo-id="${memos[i].id}">삭제</button>
            </div>
            <div class="editbox" style="display: none;">
                <input type="text" class="editTitle" value="${memos[i].title}"><br>
                <input type="text" class="editContent" value="${memos[i].content}"><br>
                <form action="/add" enctype="multipart/form-data">
                    <input type="file" class="editImage" accept="image/*" name="editImage">
                    <input type="checkbox" class="deleteImageCheckbox" name="deleteImageCheckbox" value="deleteImage">
                    <label>이미지 삭제</label>
                </form>
                <button class="ecBtn" data-memo-id="${memos[i].id}">저장</button>
            </div>
        `;

        memoContainer.appendChild(new_memo);

        const memobox = new_memo.querySelector('.memobox');
        const editbox = new_memo.querySelector('.editbox');
        const editBtn = new_memo.querySelector('.editBtn');
        const ecBtn = new_memo.querySelector('.ecBtn');
        const deleteBtn = new_memo.querySelector('.deleteBtn');

        const editTitleInput = new_memo.querySelector('.editTitle');
        const editContentInput = new_memo.querySelector('.editContent');
        const deleteImageCheckbox = new_memo.querySelector('.deleteImageCheckbox');
        const editImageInput = new_memo.querySelector('.editImage');
        const imageMemo = new_memo.querySelector('.imageMemo');

        editBtn.addEventListener('click', function () {
            // console.log('수정버튼 클릭됨');
            memobox.style.display = 'none';
            editbox.style.display = 'block';
        });
        
        ecBtn.addEventListener('click', function () {
            // console.log('완료버튼 클릭됨');
            const editTitle = editTitleInput.value;
            const editContent = editContentInput.value;
            if (deleteImageCheckbox.checked) {
                deleteImage(memos[i].image);
                if (imageMemo) {
                    // console.log("이미지 태그 확인용:", imageMemo);
                    imageMemo.remove();
                }
                editMemo(ecBtn.getAttribute('data-memo-id'), editTitle, editContent);
            } else {
                const img = editImageInput.files[0];
                if(img) {
                    // console.log("이미지 업데이트 호출중", img);
                    editImgMemo(ecBtn.getAttribute('data-memo-id'), editTitle, editContent, img);
                } else {
                    // console.log("메모 업데이트 호출중");
                    editMemo(ecBtn.getAttribute('data-memo-id'), editTitle, editContent);
                }
            }
        });

        deleteBtn.addEventListener('click', function () {
            // console.log("삭제버튼클릭됨");
            if (imageMemo) {
                image = imageMemo.getAttribute('src');
                deleteImageMemo(deleteBtn.getAttribute('delete-memo-id'), image);
            } else {
                deleteMemo(deleteBtn.getAttribute('delete-memo-id'));
            }
        });
    }
    
};

async function editMemo(memoId, editTitle, editContent) {
    // console.log("수정하기위한데이터:", memoId, editTitle, editContent);
    await fetchToExpress(`/edit/${memoId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({editTitle: editTitle, editContent: editContent})
    });
};

async function editImgMemo(memoId, editTitle, editContent, img) {
    const formData = new FormData();
    formData.append('editTitle', editTitle);
    formData.append('editContent', editContent);
    formData.append('editImage', img);
    
    await fetchToExpress(`/editImg/${memoId}`, {
        method: 'PUT',
        body: formData
    });
};

async function deleteImageMemo(memoId, imageinfo) {
    // console.log("이미지 삭제함수 불러짐:", memoId, imageinfo);
    await fetchToExpress(`/image/${memoId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({image: imageinfo})
    });
};

async function deleteImage(img) {
    // console.log("이미지만 삭제 불러짐");
    await fetchToExpress(`/deleteImg/${img}`, {
        method: 'DELETE'
    });
};

async function deleteMemo(memoId) {
    // console.log("이미지 없는 삭제함수 불러짐:", memoId);
    await fetchToExpress(`/delete/${memoId}`, {
        method: 'DELETE'
    });
};

async function fetchToExpress(route, method = {}) {
    const response = await fetch(route, method);
    const data = await response.json();
    // console.log(data);
    bringMemo()
};