




function fightInfo(first,second) {

    let first_damege = r(second.attack);
    let second_damege = r(first.attack);
    let second_money = r(second.money);


    first.hp = first.hp - first_damege;
    second.hp = second.hp - second_damege;

    // remaining_first = first.max_hp - first.hp;
    // remaining_second = second.max_hp - second.hp;   

    hr();
    tv("전투중!");
    hr();

    tv("[" + second.name + "]의 공격! [" + first.name + "]에게 [" + first_damege + "]만큼의 데미지를 주었다!"); br();
    tv("[" + first.name + "]의 남은체력:[" + first.hp + "]");
    hr();
    tv("[" + first.name + "]의 공격! [" + second.name + "]에게 [" + second_damege + "]만큼의 데미지를 주었다!"); br();
    tv("[" + second.name + "]의 남은체력:[" + second.hp + "]");

    if(first.hp <= 0){
        hr();
        tv("----------전투종료----------");
        hr();
        tv("["+first.name+"가 사망하였습니다.]");
        hr();
        tv("최종 전투결과:");
        first.info();
        second.info();
    }
        else if(second.hp <=0){
        hr();
        tv("----------전투종료----------");
        hr();
        tv("["+second.name+"가 사망하였습니다.]");
        hr();
        tv("최종 전투결과");

        first.t_exp = first.t_exp + 100;
        first.money = first.money + second_money;

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
        br()
        tv3("["+this.name+"][hp:("+this.hp+"/"+this.max_hp+")][경험치:"+this.t_exp+"/"+this.exp_max+"][소지금:"+this.money+"$]");
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
        tv("["+this.name+"][hp:("+this.hp+"/"+this.max_hp+")]");
    }

}
