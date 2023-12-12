/*
실수:
여기에서 실수했던것: if 에서 다음으로 넘어갈때 else if 를 사용했어야했는데 사용하지않음.
window.onload = function(){} 을 전체를 감싸게 설정했어야 했는데 하지않음.
if 란에 np_player 는 이미 맨 위쪽 if 선언으로 인해 "가위" "바위" "보" 값으로 변하였는데
1 , 2 , 3 값으로만 표기했던것
let result_1 초기화를 안했던것

   JS 질문 = 아래 함수 안에 np_player 를 넣었는데 이걸 밖에다 빼서 모든 함수에 적용시키는 방법은 없는지
   그렇게하면 코드 줄수가 많이 줄어서 가독성이 높아질꺼같음.
   그리고 let a_1...c_3 까지 document.getElementById 이거랑 아래에 있는 코드도 모든 함수안에 들어가있음.
   a_1.innerHTML = "당신:" + "\n" + player + "\n";
   b_1.innerHTML = "컴퓨터:" + "\n" + np_player + "\n";
   c_1.innerHTML = "결과:" + result_1;

   현재 함수에대한 개념이 잘 잡히지 않아서 함수를 배우는게 좋을꺼같음.
   전역변수 / 지역변수 
   전역은 전부
   (모든곳에 인용할수있음)
   지역은 동네
   ()
   
   함수를 사용하면 단축하기에 용이함


*/

//변수

let a_1;
let b_1;
let c_1;
let np_player;
let player;
let result_1;
let t_log_1;

// 에리어 설정 함수

function m_area() {

   a_1 = document.getElementById("a");
   b_1 = document.getElementById("b");
   c_1 = document.getElementById("c");
   
}

// 텍스트 전송 함수

function d_result() {

   return "당신:" + player + '\n'  + "컴퓨터:" + np_player + '\n' +"결과:" + result_1 + '\n' + '\n';

}

// 버튼 전송용 함수

function l_d_result(){

   a_1.innerHTML = "당신:" + "\n" + player + "\n";
   b_1.innerHTML = "컴퓨터:" + "\n" + np_player + "\n";
   c_1.innerHTML = "결과:" + result_1;

}

// 텍스트 에리어에 표기 함수

function j_log() {
   t_log_1 = document.getElementById("log_1");
   t_log_1.value += d_result();
}

// 컴퓨터 랜덤 가위바위보

function c_janken() {

   np_player = Math.floor(Math.random() * 3 + 1);

   if (np_player == 1) {
      np_player = "가위";
   }
   else if (np_player == 2) {
      np_player = "바위";
   }
   else if (np_player == 3) {
      np_player = "보";
   }

}

//가위 버튼

function bt_1() {

   player = "가위";

   m_area();
   c_janken();

   if (player == "가위") {
      if (np_player == "가위") {
         result_1 = "draw";
      }
      else if (np_player == "바위") {
         result_1 = "lose";
      }
      else if (np_player == "보") {
         result_1 = "win";
      }
   }
   
   d_result();

   j_log();

   l_d_result();
}

// 바위버튼

function bt_2() {

   player = "바위";

   m_area();

   c_janken();

   if (player == "바위") {
      if (np_player == "가위") {
         result_1 = "win";
      }
      else if (np_player == "바위") {
         result_1 = "draw";
      }
      else if (np_player == "보") {
         result_1 = "lose";
      }
   }

   d_result();

   j_log();

   l_d_result();
}

// 보 버튼

function bt_3() {

   player = "보";

   m_area();

   c_janken();

   if (player == "보") {
      if (np_player == "가위") {
         result_1 = "lose";
      }
      else if (np_player == "바위") {
         result_1 = "win";
      }
      else if (np_player == "보") {
         result_1 = "draw";
      }
   }

   d_result();

   j_log();

   l_d_result();

}

