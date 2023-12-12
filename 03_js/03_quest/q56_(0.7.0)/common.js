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
    random = Math.floor(Math.random()*random_a);

    this.r_info = function(){
        dw(random_a);
    }

    return random;

}
function fightInfo(first,second) {

    let first_damege = r(second.attack);
    let second_damege = r(first.attack);
    
    first.hp = first.hp - first_damege;
    second.hp = second.hp - second_damege;

    // remaining_first = first.max_hp - first.hp;
    // remaining_second = second.max_hp - second.hp;   

    hr();
    dw("전투시작!");
    hr();

    dw("[" + second.name + "]이 공격! [" + first.name + "]에게 [" + first_damege + "]만큼의 데미지를 주었다!"); br();
    dw("[" + first.name + "]의 남은체력:[" + first.hp + "]"); br();

    dw("[" + first.name + "]이 공격! [" + second.name + "]에게 [" + second_damege + "]만큼의 데미지를 주었다!"); br();
    dw("[" + second.name + "]의 남은체력:[" + second.hp + "]");

    if(first.hp <= 0){
        br()
        dw("["+first.name+"가 사망하였습니다.]");
        hr();
        dw("최종 전투결과");
        elf.info();
        orc.info();
    }
        else if(second.hp <=0){
        br();
        dw("["+second.name+"가 사망하였습니다.]");
        hr();
        dw("최종 전투결과");

        first.t_exp = first.t_exp + 100;

        elf.info();
        orc.info();
        
    }

}

function Character(name,hp,max_hp,attack,t_exp,exp_max){
    
    this.name = name;
    this.hp = hp;
    this.max_hp = max_hp;
    this.attack = attack;
    this.t_exp = t_exp;
    this.exp_max = exp_max;
    this.info = function(){
        hr();
        dw("["+this.name+"][hp:("+this.hp+"/"+this.max_hp+")][경험치:"+this.t_exp+"/"+this.exp_max+"]");
    }
   
}
function Monster(name,hp,max_hp,attack,exp,real_exp){

    this.name = name;
    this.hp = hp;
    this.max_hp = max_hp;
    this.attack = attack;
    this.exp = exp;
    this.real_exp = real_exp;
    this.info = function(){
        br()
        dw("["+this.name+"][hp:("+this.hp+"/"+this.max_hp+")]");
    }

}
