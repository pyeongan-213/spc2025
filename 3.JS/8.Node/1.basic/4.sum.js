function sum_to_num(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    console.log(`${number} 까지의 합산은: ${sum}`);
}

sum_to_num(10);
sum_to_num(11);
sum_to_num(15);
sum_to_num(100);
sum_to_num(1_000);
sum_to_num(10_000);
sum_to_num(1_000_000);
// sum_to_num(10_000_000_000); // 수가 너무 커져 오류가 생김
// 미션1. 주어진 숫자까지의 합산을 구하시오
// 1부터 10까지의 합은? 55
// 1부터 100까지의 합은? 5050
// 1부터 1000까지의 합은? 500500

function sum_gauss_num(number) {
    return (number * (number + 1)) / 2;
}

console.log('가우스 공식을 활용한 합산:', sum_gauss_num(10));
console.log('가우스 공식을 활용한 합산:', sum_gauss_num(100));
console.log('가우스 공식을 활용한 합산:', sum_gauss_num(1000));
console.log('가우스 공식을 활용한 합산:', sum_gauss_num(100000));
console.log('가우스 공식을 활용한 합산:', sum_gauss_num(10_000_000_000));   // 속도를 거의 느끼기 어려움