const rows = 5; //총 출력할 줄 수

function leftTriangle() {   // while이든 for 등 상관없음
    let currentRow = 1;
    while (currentRow <= rows) {
        let stars = "";
        let starCount = 1;
        while (starCount <= currentRow) {
            stars += "*";
            starCount++;
        }
        console.log(stars);
        currentRow++;
    }
}

leftTriangle();

console.log("");

// 아래 주석은 내가 짠 코드. 그런데 rows가 변할때마다 원하는대로 결과가 나오지 않음 생각해봐야함

// function leftInvertedTriangle() {
//     let currentRow = 1;
//     while (currentRow <= rows) {
//         let stars = "";
//         let starCount = rows;
//         while (starCount >= currentRow) {
//             stars += "*";
//             starCount--;
//         }
//         console.log(stars);
//         currentRow++;
//     }
// }

// leftInvertedTriangle();

// console.log("");

// function rightTriangle() {
//     let currentRow = 1;
//     while (currentRow <= rows) {
//         let stars = "";
//         let starCount = 1;
//         let blank = 4;
//         while (blank >= currentRow) {
//             stars += " ";
//             blank--;
//         }
//         while (starCount <= currentRow) {
//             stars += "*";
//             starCount++;
//         }
//         console.log(stars);
//         currentRow++;
//     }
// }

// rightTriangle();

// console.log("");

// function rightInvertedTriangle() {
//     let currentRow = 1;
//     while (currentRow <= rows) {
//         let stars = "";
//         let starCount = rows;
//         let blank = 1;
//         while (blank < currentRow) {
//             stars += " ";
//             blank++;
//         }
//         while (starCount >= currentRow) {
//             stars += "*";
//             starCount--;
//         }
//         console.log(stars);
//         currentRow++;
//     }
// }

// rightInvertedTriangle();

// console.log("");

// function doubleSideTriangle() {
//     let currentRow = 1;
//     while (currentRow <= rows) {
//         let stars = "";
//         let starCount = 1;
//         let blank = 4;
//         while (blank >= currentRow) {
//             stars += " ";
//             blank--;
//         }
//         while (starCount <= currentRow) {
//             if (starCount == 1) {
//                 stars += "*";
//             } else {
//                 stars += "**";
//             }
//             starCount++;
//         }
//         console.log(stars);
//         currentRow++;
//     }
// }

// doubleSideTriangle();

// console.log("");

// function doubleSideInvertedTriangle() {
//     let currentRow = 1;
//     while (currentRow <= rows) {
//         let stars = "";
//         let starCount = 5;
//         let blank = 1;
//         while (blank < currentRow) {
//             stars += " ";
//             blank++;
//         }
//         while (starCount >= currentRow) {
//             if (starCount == 5) {
//                 stars += "*";
//             } else {
//                 stars += "**";
//             }
//             starCount--;
//         }
//         console.log(stars);
//         currentRow++;
//     }
// }

// doubleSideInvertedTriangle();

console.log();

function leftTriangle2() {
    for (let r = 1; r <= rows; r++) {
        let stars = "";
        for (let c = 1; c <= r; c++) {
            stars += "*";
        }
        console.log(stars);
    }
    // console.log('*');
    // console.log('**');
    // console.log('***');
    // console.log('****');
    // console.log('*****');
}

leftTriangle2();

console.log();

// function leftTriangle3() {  // 함수의 인자를 받으면서 기본값 설정
//     for (let i = 1; i <= rows; i++) {
//         console.log(i);
//     }
// }

// leftTriangle3();

function invertedLeftTriangle3(row = 5) {
    for (let i = rows; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}


invertedLeftTriangle3();

console.log();

function rightTriangle2(rows = 5) {
    for (let i = 1; i <= rows; i++) {
        console.log(' '.repeat(rows - i) + '*'.repeat(i));
    }
}

rightTriangle2();