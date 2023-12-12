/************************************ 
 *                                  *
 *            rpg game              *
 *           ver (0.2.0)            *
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

*/


function Monster(){

    this.name;
    this.hp;
    this.attack;
    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"]");
        hr();
    }

}
function Character(){
    
    this.name;
    this.hp;
    this.attack;
    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"]");
        hr();
    }
   
}

let orc = new Monster();
let elf = new Character();

orc.name = "오크";
orc.hp = 100;
orc.attack = 15;

elf.name = "엘프주민";
elf.hp = 80;
elf.attack = 5;


elf.info();
orc.info();

fightInfo(orc,elf)

/*
hr();
dw("전투시작!");
hr();

elf.hp = elf.hp - orc.attack;

dw("["+orc.name+"]이 공격! ["+elf.name+"]에게 ["+orc.attack+"]만큼의 데미지를 주었다!");
br();
dw("["+elf.name+"]의 남은체력:["+elf.hp+"]");
br();

orc.hp = orc.hp - elf.attack;

dw("["+elf.name+"]이 공격! ["+orc.name+"]에게 ["+elf.attack+"]만큼의 데미지를 주었다!");
br();
dw("["+orc.name+"]의 남은체력:["+orc.hp+"]");
*/