/************************************ 
 *                                  *
 *            rpg game              *
 *           ver (0.1.0)            *
 *                                  *
 ************************************/

/* 
- 업데이트 내용v(0.1.0)    

- 몬스터 클래스 생성
- 플레이어 클래스 생성
- 몬스터 객체 생성(orc)
- 플레이어 객체 생성(elf)

*/

function Monster(){

    this.name;
    this.hp;
    this.attack;
    this.info = function(){
        hr();
        dw("["+this.name+"][hp:"+this.hp+"][atk:"+this.attack+"]");
        hr();
    }

}
function Character(){
    
    this.name;
    this.hp;
    this.attack;
    this.info = function(){
        hr();
        dw("["+this.name+"][hp:"+this.hp+"][atk:"+this.attack+"]");
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
