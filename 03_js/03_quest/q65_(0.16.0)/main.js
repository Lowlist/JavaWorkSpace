/************************************ 
 *                                  *
 *            rpg game              *
 *           ver (0.1.0)            *
 *                                  *
 ************************************/
let elf = new Character("엘프궁수",100,100,5,0,300,0);
//이름 ,체력, 최대 체력 , 공격력 , 경험치 , 최대경험치 , 소지금 

let orc = new Monster("오크",50,50,5,100,15);
//이름 , 체력, 최대 체력 , 공격력 , 드랍 경험치 , 드랍 머니

let roomA = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);
let roomB = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);
let roomC = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);
let currentRoomId = 1000;

window.onload = function(){

	t = document.getElementById("character_info");
	t2 = document.getElementById("log");
	t3 = document.getElementById("result_info");
	input_turn = document.getElementById("input_turn");

	let battle_loop = true;

	tv3(elf.info());
	tv(orc.info());
	roomA.displayRoomInfo();
	roomB.displayRoomInfo();
	roomC.displayRoomInfo();

	// while(battle_loop){

	// 	battle_loop = fightInfo(elf,orc);

	// }


}