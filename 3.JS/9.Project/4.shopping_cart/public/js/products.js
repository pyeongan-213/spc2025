document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/products');
    const data = await response.json();

    displayTable(data);

    checkLoginStatus();

    // document.getElementById('logoutBtn').addEventListener('click', async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('/logout');
    //     const data = await response.json();
    //     // console.log("로그아웃버튼:", data);
    //     alert(data.message);
    //     location.href = '/home';
    // })
});

function displayTable(products) {
    const productTableBody = document.querySelector('#productTable tbody');
    products.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><button class="addCartBtn" data-product-id="${product.id}">담기</button></td>
        `
        productTableBody.appendChild(row);

        row.querySelector('.addCartBtn').addEventListener('click', function () {
            addToCart(this.getAttribute('data-product-id'));
        })
    })
}

async function checkLoginStatus() {
    const response = await fetch('/api/check-login');
    if (response.status === 200) {
        const data = await response.json();
        // console.log("product페이지:", data);
        navshowProfile(data.username);
        return true;
    } else {
        const data = await response.json();
        console.log(data);
        return false;
    }
}

async function addToCart(productId) {
    const isLogin = await checkLoginStatus();
    if (!isLogin) {
        alert('로그인을 하고 오세요')
    } else {
        const response = await fetch(`/api/cart/${productId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log(data);
    }
}

function navshowProfile(username) {
    document.getElementById('navusernameSpan').textContent = username + "님";
    document.getElementById('navusernameSpan').style.display = 'block';
    document.getElementById('navusernameSpan').style.marginTop = '9px';
};