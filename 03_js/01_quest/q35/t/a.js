//문35

// 배열
//
// 1) 초깃값이 없는 경우    var numbers = new Array();		var numbers = new Array(4);	
// 2) 초깃값이 있는 경우    var numbers = ["one","two","three"];			var numbers = Array("one","two","three");

// 배열에서 값을 꺼내기
// ex. var a = Array("개","고양이","너굴맨");

// 개 꺼내기 > a[0]     << a 0 ?? 1 이 아니고?? ㅇㅅㅇ? 대괄호 [ ] 안에 있는 값을 인덱스 (index) 라고 하는데 이 인덱스의 시작은 우리 상식처럼 1 부터 시작이 아니라 0 부터다.
// 컴터는 숫자를 0부터 세는 경우가 많다. 그래서 개발자 직업병이 숫자 0부터 셈.



// 1. 개, 고양이, 너굴맨 으로 문자열 배열 만들기			
var a = Array("개","고양이","너굴맨");

// 2. 변수 선언 하나 하고 여기에 배열에서 고양이랑 개 꺼내고 둘을 더하기				
var b = a[1] + a[0] + a[2];

// 3. alert 함수로 찍기
alert("합계: "+b);



