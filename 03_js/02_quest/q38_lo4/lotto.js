/**
 * 1. 나의 랜덤한 숫자 6개를 뽑는다 / o
 * 2. 컴퓨터의 랜덤한 숫자 6개를 뽑는다. / o
 * 3. 나의 숫자에서 중복이 있는지 검사한다. / o
 * 4. 컴퓨터의 숫자에서 중복이 있는지 검사한다. / o
 * 5. 나와 컴퓨터의 숫자중 일치하는것이 있는지 검사한다.
 * 6. 등수를 표기한다.
 */

//변수 선언

//내 숫자

function reroll(){
    return Math.floor(Math.random() * 45 + 1);
}


    // ab_number []<<  변수 지정
    // length << 문자열 길이 나타내는데 while 을 추가하면 z와 길이가 같아질때까지 반복함
    // 즉 아래 코드에 흐름상 ab_number는 amount(첫번째 parameter) 보다 작아질때까지 반복하게됨
    // conut = 함수 reroll 을 실행하게됨(랜덤문)
    // 만약에 ab_number 가 count에 저장된 reroll 값과 다를경우에만
    // 다음으로 넘어가서 count를 ab_number 값에다가 push한다.
    // 반복


function repeat_1(amount,min,max){

    let ab_number = [];

    while (ab_number.length < amount){ 
        let count = reroll();
    

        if (!ab_number.includes(count)) {
            ab_number.push(count);
        }
    }

    return ab_number;
}

let my_number = repeat_1(6, 1, 45);
let lotto_number = repeat_1(6, 1, 45);

document.write(my_number);
document.write("<hr>");
document.write(lotto_number);
console.log(typeof ab_number);