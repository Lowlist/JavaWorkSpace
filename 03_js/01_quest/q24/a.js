
let x = Math.floor(Math.random() * 10) + 1;

document.write(x);
document.write("<br>");


for (let i = 1; i <= 10; i++) {

    if (i == x) {

        continue;
    }
    document.write(i);
}

// 문24
// 1 ~ 10 랜덤값 준비		
// 반복문을 1~10 까지 10번 반복하기
// 반복 도중 반복용 변수 값( var i ) 이 랜덤값과 일치하는 경우 해당 반복 회차를 건너뛰고 다음 회차 진행.	
// 일치 하지 않은 경우 i 값을 출력하기

/*

var r = Math.floor(Math.random() * 10) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
for(var i=1;i<=10;i=i+1){
    if(i == r){
        continue;
    }
    document.write(i);    
}

*/
