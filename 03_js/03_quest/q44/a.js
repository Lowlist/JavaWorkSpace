function clac(a){

    let b = a + 1;
    return b;

}

c = clac( clac (7) );

// ex) c = clac(clac(clac(clac(clac(4)))) );
// 선언된 함수 안에 매개변수의 값이 우선으로 적용
// calc(calc(calc(calc(a)))); 이것도 가능 왜냐하면 함수 calc 안에 매개변수를 총 4개 넣었지만
// 우선순위로 인해 매개변수 a -> 함수 clac(매개변수) 실행 -> 값출력 -> 매개변수 지정... 식으로
// 계산이 된다.

document.write(c);

