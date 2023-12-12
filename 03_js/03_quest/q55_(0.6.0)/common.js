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

    first.hp = first.hp - r(second.attack);
    second.hp = second.hp - r(first.attack);
    remaining_first = first.max_hp - first.hp;
    remaining_second = second.max_hp - second.hp;
    
    hr();
    dw("전투시작!");
    hr();

    dw("[" + second.name + "]이 공격! [" + first.name + "]에게 [" + remaining_first + "]만큼의 데미지를 주었다!"); br();
    dw("[" + first.name + "]의 남은체력:[" + first.hp + "]"); br();

    dw("[" + first.name + "]이 공격! [" + second.name + "]에게 [" + remaining_second + "]만큼의 데미지를 주었다!"); br();
    dw("[" + second.name + "]의 남은체력:[" + second.hp + "]");

}


function Monster(name,hp,max_hp,attack){

    this.name = name;
    this.hp = hp;
    this.max_hp = max_hp;
    this.attack = attack;
    this.info = function(){
        br()
        dw("["+this.name+"]hp:("+this.hp+"/"+this.max_hp+")][atk:"+this.attack+"]");
    }

}
function Character(name,hp,max_hp,attack){
    
    this.name = name;
    this.hp = hp;
    this.max_hp = max_hp;
    this.attack = attack;
    this.info = function(){
        hr();
        dw("["+this.name+"][hp:("+this.hp+"/"+this.max_hp+")][atk:"+this.attack+"]");
    }
   
}