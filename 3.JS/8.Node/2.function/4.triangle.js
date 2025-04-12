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

function leftInvertedTriangle() {
    let currentRow = 1;
    while (currentRow <= rows) {
        let stars = "";
        let starCount = rows;
        while (starCount >= currentRow) {
            stars += "*";
            starCount--;
        }
        console.log(stars);
        currentRow++;
    }
}

leftInvertedTriangle();

console.log("");

function rightTriangle() {
    let currentRow = 1;
    while (currentRow <= rows) {
        let stars = "";
        let starCount = 1;
        let blank = 4;
        while (blank >= currentRow) {
            stars += " ";
            blank--;
        }
        while (starCount <= currentRow) {
            stars += "*";
            starCount++;
        }
        console.log(stars);
        currentRow++;
    }
}

rightTriangle();

console.log("");

function rightInvertedTriangle() {
    let currentRow = 1;
    while (currentRow <= rows) {
        let stars = "";
        let starCount = rows;
        let blank = 1;
        while (blank < currentRow) {
            stars += " ";
            blank++;
        }
        while (starCount >= currentRow) {
            stars += "*";
            starCount--;
        }
        console.log(stars);
        currentRow++;
    }
}

rightInvertedTriangle();

console.log("");

function doubleSideTriangle() {
    let currentRow = 1;
    while (currentRow <= rows) {
        let stars = "";
        let starCount = 1;
        let blank = 4;
        while (blank >= currentRow) {
            stars += " ";
            blank--;
        }
        while (starCount <= currentRow) {
            if (starCount == 1) {
                stars += "*";
            } else {
                stars += "**";
            }
            starCount++;
        }
        console.log(stars);
        currentRow++;
    }
}

doubleSideTriangle();

console.log("");

function doubleSideInvertedTriangle() {
    let currentRow = 1;
    while (currentRow <= rows) {
        let stars = "";
        let starCount = 5;
        let blank = 1;
        while (blank < currentRow) {
            stars += " ";
            blank++;
        }
        while (starCount >= currentRow) {
            if (starCount == 5) {
                stars += "*";
            } else {
                stars += "**";
            }
            starCount--;
        }
        console.log(stars);
        currentRow++;
    }
}

doubleSideInvertedTriangle();