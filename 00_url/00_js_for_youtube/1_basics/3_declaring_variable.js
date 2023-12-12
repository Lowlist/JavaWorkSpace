/**
 * Variable 선언하기
 * 1) var - 더이상 쓰지 않는다.
 * 2) let - var을 대체해서 사용
 * 3) const - var를 대체해서 사용
*/

var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * var = name
 * 2) 할당 
 * 예) var name = '코드팩토리'
*/

var name;
console.log(name);

let girlFriend;
console.log(girlFriend);

// const girlFriend2;   
// const는 할당하지 않으면 에러가 남
// var,let 은 할당하지 않으면 underfined 값이 출력이 됨.


/**
 * const 키워드로 선언하면
 * 값을 추후 번경할 수 없다.
 */

