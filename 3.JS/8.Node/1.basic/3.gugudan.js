function gugudan() {
    for (let i = 2; i <= 9; i++) {
        console.log(`=== ${i}단 ===`);
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} X ${j} = ${i*j}`);
        }
    }
}

gugudan();