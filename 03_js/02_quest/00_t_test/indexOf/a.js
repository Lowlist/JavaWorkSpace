var sol2 = [];//컴퓨터가 랜덤으로 뽑은 6가지 수가 들어가기위한 변수
    var count=0; //중복되지않는수가나왔을때 카운트하기위한 변수
    while(true){
        //1~45까지 랜덤으로 수를 뽑기위한 명령어
        var number=Math.floor(Math.random()*45)+1;
        //indexOf:sol2라는 수열안에 number(랜덤으로뽑은수)가 있는지 찾으라는 명령어
        //0보다 작게 설정한 이유는 중복되는 수가 number에 있으면 
        //sol2.indexOf(number)의 값이 1을넘어버리기때문
        if(sol2.indexOf(number)<0){
            sol2.push(number);//수열안에 넣어라
            count++;
        }
        if(count==6){
            break;
        }
    }
    document.write(sol2);
    document.write("<br>");

    // for(var i=0;i<6;i++){
    //     sol2[i] // 수열[n]일때 수열에서 n번째 수가 출력됨
    // }
var user =[0,0,0,0,0,0];
    //user[n]은  n번째 수를 출력하는 명령어이므로 문자가 들어가면 오류뜸
    user[0]=20;
    user[1]=24;
    user[2]=11;
    user[3]=8;
    user[4]=17;
    user[5]=26;
var win = 0;
//for 중첩문 i가 0일때 안에있는 for 중첩문은 6회차까지 돌아서 j=5까지
//반복해서 실행된다
for(var i=0;i<6;i++){
    for(var j=0;j<6;j++){
    if(sol2[i] == user[j]) {
            win++;
    }
}
}
document.write(win);
document.write("<br>");
if(win<=2) {
    document.write("꽝입니다.");
}
else if(win=3) {
    document.write("5등입니다.");
}
else if(win=4) {
    document.write("3등입니다.");
}
else if(win=5) {
    document.write("1등입니다.");
}