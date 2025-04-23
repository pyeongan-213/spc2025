document.addEventListener('DOMContentLoaded', async () => {
    const isLogin = await checkLoginStatus();
    if (!isLogin) {
        alert('로그인 후 이용 가능합니다.');
        location.href = '/home';
    } else {
        const response = await fetch('/api/cart');
        const data = await response.json();
    
        displayTable(data.cart);

        // document.getElementById('logoutBtn').addEventListener('click', async (e) => {
        //     e.preventDefault();
        //     const response = await fetch('/logout');
        //     const data = await response.json();
        //     // console.log("로그아웃버튼:", data);
        //     alert(data.message);
        //     location.href = '/home';
        // })
    }
});

function displayTable(cart) {
    const cartTableBody = document.querySelector('#cartTable tbody');
    cart.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}<button id="addBtn">+</button><button id="subBtn">-</button></td>
            <td><button class="deleteBtn" data-product-id="${item.id}">삭제</button></td>
        `;
        cartTableBody.appendChild(row);

        row.querySelector('.deleteBtn').addEventListener('click', function () {
            deleteToCart(this.getAttribute('data-product-id'));
        })
    });
};

async function deleteToCart(itemId) {
    const response = await fetch(`/api/delete-cart/${itemId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log("삭제후 받아온 데이터:", data);

    location.reload();
};

async function checkLoginStatus() {
    const response = await fetch('/api/check-login');
    if (response.status === 200) {
        const data = await response.json();
        // console.log(data);
        return true;
    } else {
        const data = await response.json();
        console.log(data);
        return false;
    }
}