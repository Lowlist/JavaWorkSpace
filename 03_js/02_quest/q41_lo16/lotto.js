/**
 * 1. 나의 랜덤한 숫자 6개를 뽑는다 / o
 * 2. 컴퓨터의 랜덤한 숫자 6개를 뽑는다. / o
 * 3. 나의 숫자에서 중복이 있는지 검사한다. / o
 * 4. 컴퓨터의 숫자에서 중복이 있는지 검사한다. / o
 * 5. 나와 컴퓨터의 숫자중 일치하는것이 있는지 검사한다. / o for 2중첩 사용해서 1x6x6
 * 6. 등수를 표기한다.o
 * 7. 보너스번호를 뽑아서 2등까지 만들어보자
 * 8. 자동뽑기와 수동뽑기 2개경우 만들어보자
 */

//변수 선언

    // 내 숫자
    // ab_number []<<  변수 지정
    // length << 문자열 길이 나타내는데 while 을 추가하면 z와 길이가 같아질때까지 반복함
    // 즉 아래 코드에 흐름상 ab_number는 amount(첫번째 parameter) 보다 작아질때까지 반복하게됨
    // conut = 함수 reroll 을 실행하게됨(랜덤문)
    // 만약에 ab_number 가 count에 저장된 reroll 값과 다를경우에만
    // 다음으로 넘어가서 count를 ab_number 값에다가 push한다.
    // 반복
    
// 아래 이거 나중에 보너스번호 추가로 뽑아서 돌리게 하려고 함수 넣었음.

function reroll(){
    return Math.floor(Math.random() * 45 + 1);
}

function repeat_1(amount){

let ab_number = [];

while (ab_number.length < amount){ 

    let count = reroll()

    if (!ab_number.includes(count)) {
        ab_number.push(count);
    }
}
return ab_number;
}

let auto_number = repeat_1(6); // 자동번호출력
let lotto_number = repeat_1(7); // 로또당첨번호 출력
let win = 0; // 결과값을 위한 변수선언
let result; // 결과값 변수
let bouns_number = lotto_number[6]; 
// 로또당첨범호에 7번째 객체값을 보너스 번호로 선언

let a1;
let a2;
let a3;
let a4;
let a5;
let a6;

window.onload=function(){
    t=document.getElementById("t");
    a1=document.getElementById("a1");
    a2=document.getElementById("a2");
    a3=document.getElementById("a3");
    a4=document.getElementById("a4");
    a5=document.getElementById("a5");
    a6=document.getElementById("a6");
}

function insertPlayerLotto(){
    p[0]=a1.value;
    p[1]=a2.value;
    p[2]=a3.value;
    p[3]=a4.value;
    p[4]=a5.value;
    p[5]=a6.value;
}

function checkLottoNumberDuplicates(){
    var isDuplicated = false;
    for(var i=0;i<5;i++){
        for(var j=i+1;j<=5;j++){
            if(p[i]==p[j]){
                isDuplicated = true;
            }
        }
    }
    return isDuplicated;
}

function runLotto(){
    insertPlayerLotto();

    var isPlayerLottoDuplicated = checkLottoNumberDuplicates();
    log(isPlayerLottoDuplicated);
    if(isPlayerLottoDuplicated){
        //게임 취소
        t.value = "장난x";
        return ;   
    }
}

function lotto_result(){

for(let p=0 ; p<6 ; p++){
for(let c=0 ; c<6 ; c++){
    if(auto_number[p] == lotto_number[c])
    win++;
}
if(win < 2){
    result = "꽝.";
}
else if(win == 3){
    result = "5등"; 
}
else if(win == 4){
    result = "4등";   
}
else if(win == 5 ){
    result = "3등"; 
for(let i=0;i<6;i++){
    if(bouns_number == auto_number[i]){
        result = "2등";
    }
}
}
else if(win == 6){
    result = "1등";       
}
}
t.value = result;
}

function menual_lotto(){
    
    insertPlayerLotto();
    checkLottoNumberDuplicates();
    lotto_result();
}



/*
document.write(auto_number);
document.write("<hr>");
for(let i = 0 ; i<6 ;i++){
    document.write("\n" + lotto_number[i]);
}
document.write(" 보너스번호: "+bouns_number);
document.write("<hr>");

document.write(result);
*/