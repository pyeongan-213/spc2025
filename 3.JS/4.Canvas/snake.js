
const GAME_SPEED = 200; // ms (화면 갱신 주기)
const BLOCK_SIZE = 30;

let snake = {
    x: 0,
    y: 0,
    directionX: 1,
    directionY: 1,
}; // 뱀의 시작 위치


// DOM과 각종 필요한 여러 컴포넌트 로딩이 끝난 이후 이거 실행해라
window.onload = initialize;

function initialize() {
    canvas = document.getElementById('snakeCanvas');
    context = canvas.getContext('2d');

    // 키 이벤트 리스너 추가
    setupEventListners();

    // 게임 시작 루프 호출
    setInterval(gameLoop, GAME_SPEED);
};

function setupEventListners() {
    document.addEventListener('keydown', handleKeyDown);
};

function handleKeyDown(e) {
    console.log(e.key);
    switch (e.key) {
        case 'ArrowLeft':

            break;
        case 'ArrowRight':

            break;
        case 'ArrowUp':

            break;
        case 'ArrowDown':

            break;
    }
};

function gameLoop() {
    // 뱀 이동
    moveSnake();

    // 화면 렌더링
    draw();
};

// 뱀의 위치를 이동한다
function moveSnake() {
    snake.x += BLOCK_SIZE;
    // snake.y += BLOCK_SIZE;

    // 화면을 벗어나지 않게 오른쪽 끝 -> 왼쪽 끝에서 나오기 (vice versa)
    //                         위로 -> 아래에서 나오기 (vice versa)

};

// 화면에 뱀을 그린다
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'blue';
    context.fillRect(snake.x, snake.y, BLOCK_SIZE, BLOCK_SIZE);
};
