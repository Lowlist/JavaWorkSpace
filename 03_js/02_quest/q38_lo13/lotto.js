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

let auto_number = repeat_1(6);
let lotto_number = repeat_1(7);
let win = 0;
let result;
let aaa = 0;
let bouns_number = lotto_number[6];


//자동 클릭 만들어서 묶어놔야됨. 아래꺼
//만약 보너스 번호 만들면 for문 가운데에 있는걸 수정해야됨

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

document.write(auto_number);
document.write("<hr>");
for(let i = 0 ; i<6 ;i++){
    document.write("\n" + lotto_number[i]);
}
document.write(" 보너스번호: "+bouns_number);
document.write("<hr>");

t.value = result;
