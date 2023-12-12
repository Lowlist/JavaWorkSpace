/************************************ 
 *                                  *
 *            rpg game              *
 *           ver (0.1.0)            *
 *                                  *
 ************************************/

/* 
- 업데이트 내용 v(0.1.0)    

- 몬스터 클래스 생성
- 플레이어 클래스 생성
- 몬스터 객체 생성(orc)
- 플레이어 객체 생성(elf)

- 업데이트 내용 v(0.2.0)
- 전투와 전투시작 메세지 출력

- 업데이트 내용 v(0.3.0)
- 공격력을 해당 공격력 수치의 값에서 랜덤으로 나오도록 수정하였습니다.

- 업데이트 내용 v(0.4.0)
- 체력 표시를 [현재체력/최대체력] 식으로 변경하였습니다.
- 케릭터 정보 표시를 수정하였습니다. ex. [엠피스(70/100)]
- 케릭터 정보 표시에서 공격력 수치를 제거하였습니다.

- 업데이트 내용 v(0.5.0)
- 케릭터 정보 출력을 한꺼번에 출력되도록 수정하였습니다. ex [엠피스(50/100)] [오크전사(30/100)]
- 클래스 선언을 별도의 파일로 옮기고 연결했습니다.

- 업데이트 내용 v(0.6.0)
- 전투 처리부분과 캐릭터들의 상태 정보를 출력하는 부분을 하나의 함수로 묶어 처리
- 전투 무한 루프 처리 : 전투 시 플레이어나 적의 currentHp 가 0 이하로 될 때까지(죽을때 까지) 전투 반복 처리

- 업데이트 내용 v(0.7.0)
- 전투 종료 처리(종료메세지 출력, 경험치 획득)
- 케릭터 클래스에 현재 경험치, 다음 레벨업에 필요한 경험치 두 변수를 추가하기. (현재 경험치는 초기값 0. 필요 경험치는 초기값 300 주기)
- 몬스터를 잡고 받은 경험치 획득 처리는 플레이어의 현재 경험치에 100을 추가해주기
- 플레이어 간략 정보 표시에 현재 경험치/다음 레벨업 필요 경험치 표시 추가 
- 전투 종료 후 얻은 경험치를 확인하기 위해 플레이어 info 함수 한번 호출하기

- 업데이트 내용 v(0.8.0)
- 전투 종료 후 경험치 획득 메세지 출력 ex. 불쌍한 토끼, 엠피스에게 경험치 100 을 주고 죽었습니다.
- 보상 추가. 몬스터 사냥 시 돈도 획득하도록 변경되었습니다.

- 업데이트 내용 v(0.9.0)
- 출력 중 hr() 을 모두 제거
- br()도 모두 제거
- 정보 출력을 textarea 에 하도록 변경

- 업데이트 내용 v(0.10.0)
- dw() 이름을 tv() 로 변경
- textarea 를 두개 추가
- 플레이어 정보 출력 ( ex. [엠피스(70/100)](exp: 100/300) 을 새 textarea (id - screenPlayerInfo) 로 분리

- 업데이트 내용 v(0.11.0)
- 턴 진행 버튼 추가
- 테스트로 턴 진행 버튼에 console.log 적용 ( ex. console.log("로그찍기"); )
- 턴 진행 버튼 왼쪽에 턴수 표시 input text 추가

- 업데이트 내용 v(0.12.0)
- 전투를 턴버튼을 누를때마다 한턴씩 진행하도록 수정
- 적 간략 정보가 textarea game object 에 나오도록 수정

- 업데이트 내용 v(0.13.0)
- 전투 종료 후 턴 진행 시 전투가 더 진행되지 않게 처리
- 전투 종료 시 적 오브젝트 처리(전투가 끝났으니 더 이상 안나오게)

*/
let elf;
let orc;
let t;
let t2;
let t3;
let str = "";
let str2 = "";
let str3 = "";
let turn_count = 0;
let input_turn;
let currentMode = "대기";

function turn(){

	if(currentMode == "전투"){
		fightInfo(elf,orc);
	}
	else if(currentMode == "대기"){
		NormalTurn();
	}
	
	turn_count ++;
	input_turn.value = turn_count;
	console.log("현재 턴:"+turn_count);

}

function NormalTurn(){
    tv2Clear();  
    tv2("아무것도 안하고 시간이 흘러감 \n");   
}

window.onload = function(){

	t = document.getElementById("character_info");
	t2 = document.getElementById("log");
	t3 = document.getElementById("result_info");
	input_turn = document.getElementById("input_turn");

	let battle_loop = true;

	elf = new Character("엘프궁수",100,100,30,0,300,0);

//이름 ,체력, 최대 체력 , 공격력 , 경험치 , 최대경험치 , 소지금 

	orc = new Monster("오크",50,50,5,100,15);

//이름 , 체력, 최대 체력 , 공격력 , 드랍 경험치 , 드랍 머니
	tv(elf.info());
	tv2(orc.info());

	while(battle_loop){

		battle_loop = fightInfo(elf,orc);

	}


}