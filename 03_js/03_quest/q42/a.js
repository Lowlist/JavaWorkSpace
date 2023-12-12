function cat(){
    return 100;
}

// 함수 cat()를 불러오면 100을 반환한다.

function cat2(){
    return 200;
}

// 함수 cat2()를 불러오면 200을 반환한다.

function a_calc_b(a,b){

    let zz = a + b;

    return zz;
}

// 함수 a_calc_b 를 불러오고 매개변수 a,b 를 지정한다.
// 그 a,b를 더한것을 zz 라 명칭하고 zz를 반환한다.

let y = a_calc_b( cat() , cat2() );

// y라는 변수를 함수 a_calc_b 로 지정한다 지정되어있는 함수에 매개변수를 함수 cat(), cat2()로 지정후
// 각각 함수에있는 return 으로 반환된 값을 매개변수에 반환한다
// 매개 변수에 반환된 값을 각각 알맞은 매개변수에 옮긴 후 함수 안에 들어가있는 계산을 시작한다.
// 계산 후 변수 zz에 값을 저장후 값을 반환한다.
// 추가로 저 함수에 아무 숫자만 넣어도 계산이 된다는 소리다.
// let y2 = a_calc_b(100,200);


document.write(y);