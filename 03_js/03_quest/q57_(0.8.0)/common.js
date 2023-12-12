/*
    공통함수들을 모아놓음
*/
function dw(str){    // var str; var str = "고양이";
    document.write(str);
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}
function r(random_a){
    
    random_a = random_a + 1;
    random = Math.floor(Math.random()*random_a)

    return random;

}
function fightInfo(first,second) {

    let first_damege = r(second.attack);
    let second_damege = r(first.attack);
    let second_money = r(second.money);


    first.hp = first.hp - first_damege;
    second.hp = second.hp - second_damege;

    // remaining_first = first.max_hp - first.hp;
    // remaining_second = second.max_hp - second.hp;   

    hr();
    dw("전투시작!");
    hr();

    dw("[" + second.name + "]이 공격! [" + first.name + "]에게 [" + first_damege + "]만큼의 ⚡데미지⚡를 주었다!"); br();
    dw("[" + first.name + "]의 남은체력:[" + first.hp + "]"); br();

    dw("[" + first.name + "]이 공격! [" + second.name + "]에게 [" + second_damege + "]만큼의 ⚡데미지⚡를 주었다!"); br();
    dw("[" + second.name + "]의 남은체력:[" + second.hp + "]");

    if(first.hp <= 0){
        br()
        dw("["+first.name+"가 사망하였습니다.]");
        hr();
        dw("최종 전투결과");
        first.info();
        second.info();
    }
        else if(second.hp <=0){
        br();
        dw("["+second.name+"가 사망하였습니다.]");
        hr();
        dw("최종 전투결과");
        first.t_exp = first.t_exp + 100;
        first.money = first.money + second_money;
        dw("["+second.name+"가 ("+first.t_exp+")만큼의 경험치와 ("+first.money+")만큼의 돈을 남기고 사망하였습니다.]")
        first.info();      
    }

}


function Character(name,hp,max_hp,attack,t_exp,exp_max,money){
    
    this.name = name;
    this.hp = hp;
    this.max_hp = max_hp;
    this.attack = attack;
    this.t_exp = t_exp;
    this.exp_max = exp_max;
    this.money = money;
    this.info = function(){
        hr();
        dw("["+this.name+"][hp:("+this.hp+"/"+this.max_hp+")][경험치:"+this.t_exp+"/"+this.exp_max+"][소지금:"+this.money+"$]");
    }
   
}
function Monster(name,hp,max_hp,attack,exp,real_exp,money){

    this.name = name;
    this.hp = hp;
    this.max_hp = max_hp;
    this.attack = attack;
    this.exp = exp;
    this.real_exp = real_exp;
    this.money = money;
    this.info = function(){
        br()
        dw("["+this.name+"][hp:("+this.hp+"/"+this.max_hp+")]");
    }

}
