function showhide() {
    var mydiv = document.getElementById('showhide');
    
    //미션1. 이 요소를 숨기기 (버튼 다시 누르면 보이기)
    if (mydiv.style.display !== 'none') {
        mydiv.style.display = 'none';
    } else {
        mydiv.style.display = 'block';
    }
}