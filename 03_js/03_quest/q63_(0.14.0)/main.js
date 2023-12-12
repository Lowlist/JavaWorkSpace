/************************************ 
 *                                  *
 *            rpg game              *
 *           ver (0.1.0)            *
 *                                  *
 ************************************/
elf = new Character("엘프궁수",100,100,5,0,300,0);
//이름 ,체력, 최대 체력 , 공격력 , 경험치 , 최대경험치 , 소지금 

orc = new Monster("오크",50,50,5,100,15);
//이름 , 체력, 최대 체력 , 공격력 , 드랍 경험치 , 드랍 머니

window.onload = function(){

	t = document.getElementById("character_info");
	t2 = document.getElementById("log");
	t3 = document.getElementById("result_info");
	input_turn = document.getElementById("input_turn");

	let battle_loop = true;

	tv(elf.info());
	tv2(orc.info());

	while(battle_loop){

		battle_loop = fightInfo(elf,orc);

	}


}