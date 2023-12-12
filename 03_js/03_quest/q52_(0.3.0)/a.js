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

*/

function Monster(name,hp,attack){

    this.name = name;
    this.hp = hp;
    this.max_hp;
    this.attack = attack;
    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"]");
        hr();
    }

}
function Character(){
    
    this.name;
    this.hp;
    this.max_hp;
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

fightInfo(elf,orc);


