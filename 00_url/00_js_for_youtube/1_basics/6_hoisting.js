/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

// console.log(yuJin);
// let yuJin = '안유진';

/**
 * let 과 const 도 Hoisting은 발생하지만 var 처럼 선언이 꼬였을때 undefined 가 뜨지않고 
 * initialization 에러가 발생하면서 자세하게 나옴
 *  */


/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10*10);
console.log(10/10);
console.log(10 % 10);
console.log(10 % 3);

console.log('----------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게될까?
 */

let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true; // =1
console.log(+sample);
console.log(typeof +sample);

sample = false; // =0
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 * 
 * == 값비교 === 값+타입 비교
 * != 같지않다 !== 같지않다 값+타입
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('-----------');

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log('-----------');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('-----------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
// 100이 1보다 크다
console.log(100 < 1);
// 100이 1보다 작다
console.log(100 <= 1);
// 100이 1보다 작거나 같다
console.log(100 >= 1);
// 100이 1보다 크거나 같다

/**
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다');
// ?를 기준으로 조건을 짤수 있다.

console.log('-----------');

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 *    \ <에서 쉬프트 누르면 나옴
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-----------');

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-----------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true 면 우측 값 반환 //               엔좌트우
 * &&를 사용했을때 좌측이 false 면 좌측 값 반환 // 엔(드를 사용했을때)좌(측이)트(루면)우(측값 반환)
 * ||를 사용했을때 좌측이 true 면 좌측 값 반환 //               오좌트좌
 * ||를 사용했을때 좌측이 false 면 우측 값 반환 // 오(어를 사용했을때)좌(측이)트(루면)좌(측값 반환)
 */
console.log('-----------');

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log('-----------');

console.log(true && true && '아이브' && '12');
console.log(true && false && '아이브');
console.log(false || false || false || '아이브');
console.log(false || false || true || '아이브');


/**
 * 지수 연산자
 */
console.log('-----------');
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */

console.log('-----------');

let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);