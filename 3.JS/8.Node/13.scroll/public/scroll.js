console.log('로딩 완료');
// 미션1. 백엔드에 요청해서 데이터를 받아와서, 화면에 렌더링한다.
// 미션1-1. 백엔드에 요청한다.
fetch('/get-items')
// 미션1-2. 데이터를 받아온다.
    .then((res) => res.json())
    .then((data) => {
// 미션1-3. 화면에 렌더링한다.
        console.log(data);
        const myContainer = document.getElementById('scroll-container');
        const item = document.createElement('div');
        item.textContent = data;
        myContainer.appendChild(item);
    });



// document.addEventListener("DOMContentLoaded", async () => {
//     const itemTable = document.getElementById('itemTable');

//     const res = await fetch('/get-items');
//     const items = res.json();
//     // console.log(items);
    
//     for (const key in items) {
//         const row = document.createElement('div');
//         row.innerHTML = `
            
//         `
//     }
// });