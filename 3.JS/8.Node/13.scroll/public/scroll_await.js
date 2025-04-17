const NUM_OF_ITEMS_PER_PAGE = 10;
let start = 0;
let end = start + NUM_OF_ITEMS_PER_PAGE;

// console.log('로딩 완료');
// 미션1. 백엔드에 요청해서 데이터를 받아와서, 화면에 렌더링한다.

async function loading() {
    // 미션1-1. 백엔드에 요청한다.
    const res = await fetch(`/get-items?start=${start}&end=${end}`);
    // 미션1-2. 데이터를 받아온다.
    const data = await res.json();
    // 미션1-3. 화면에 렌더링한다.
    console.log(data.items);
    const myContainer = document.getElementById('scroll-container');

    if (end <= data.total) {
        // 미션1-4. data를 각 항목(item) 별로 개별 div로 만들기
        data.items.forEach((d) => {
            const item = document.createElement('div');
            item.textContent = d;
            item.classList.add('item'); // 디자인 속성 추가
            myContainer.appendChild(item);
        })
        // 오래된 DOM을 찾아서 위에 지우기
        const itemList = 100;
        let deleteItem = (end - itemList);
        const children = myContainer.children;

        for (let i = 0; i < deleteItem; i++) {
            if (children.length > 0) {
                myContainer.removeChild(myContainer.firstChild);
            }
        }
        
        // 다음 로딩 준비
        start = end;
        end += NUM_OF_ITEMS_PER_PAGE;
    }
    
};

document.addEventListener("DOMContentLoaded", () => {
    loading();
});

window.addEventListener('scroll', () => {
    // console.log('윈도우 높이:', window.innerHeight);
    // console.log('스크롤위치:', window.scrollY);
    const endOfScroll = (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight);
    console.log('화면끝?', endOfScroll);
    if (endOfScroll) {
        loading();

        // start += 10; end += 10;
        // loading();

        // const res = await fetch(`/get-items?start=${start}&end=${end}`);
        // const data = await res.json();
        // for (let i = 0; i < data.length; i += 10) {
        //     start += 10;
        //     end += 10;
        //     loading();
        // }
    }
});
