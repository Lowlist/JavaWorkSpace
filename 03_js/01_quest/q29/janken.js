/*
실수:
여기에서 실수했던것: if 에서 다음으로 넘어갈때 else if 를 사용했어야했는데 사용하지않음.
window.onload = function(){} 을 전체를 감싸게 설정했어야 했는데 하지않음.
if 란에 np_player 는 이미 맨 위쪽 if 선언으로 인해 "가위" "바위" "보" 값으로 변하였는데
1 , 2 , 3 값으로만 표기했던것
let result_1 초기화를 안했던것
123
123
123

123
 23
  3


*/

window.onload = function(){

    let a_1 = document.getElementById("a");
    let b_1 = document.getElementById("b");
    let c_1 = document.getElementById("c");

//결과창을 따로 q15 응용해서 표기했음.

// let player = "";
let player = prompt("'가위' , '바위' , '보' 중 무엇을 내시겠습니까?");
let np_player = Math.floor(Math.random()*3+1);




// while(true){

//    let player = prompt("'가위' , '바위' , '보' 중 무엇을 내시겠습니까?");

//    if (player != "가위" && player != "바위" && player != "보"){
//       alert("값이 다릅니다.");
//    }else{
//       break;
//    }
// }

if(np_player == 1){
        np_player= "가위";
    }
else if(np_player == 2){
        np_player= "바위";
    }
else if(np_player == 3){
        np_player= "보";
    }

let result_1 ="";
// let result_1 초기화

// 가위라인

if(player == "가위"){
    if (np_player == "가위"){
       result_1 = "draw";
    } 
    else if (np_player == "바위"){
       result_1 = "lose";
    }
    else if (np_player == "보"){
       result_1 = "win";
    }{ }
}

//바위 라인

if(player == "바위"){
    if (np_player == "가위"){
       result_1 = "win";
    } 
    else if (np_player == "바위"){
       result_1 = "draw";
    }
    else if (np_player == "보"){
       result_1 = "lose";
    }
}

//보자기 라인

if(player == "보"){
    if (np_player == "가위"){
       result_1 = "lose";
    } 
    else if (np_player == "바위"){
       result_1 = "win";
    }
    else if (np_player == "보"){
       result_1 = "draw";
    }
}

    a_1.innerHTML = "당신:"+"\n"+ player+"\n";
    b_1.innerHTML = "컴퓨터:"+"\n"+ np_player+"\n";
    c_1.innerHTML = "결과:" + result_1;
}
