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
    return random;

/*
    this.r_info = function(){
        dw(random_a);
    }
*/
}
function fightInfo(first,second) {

    first.hp = first.hp - r(second.attack);
    second.hp = second.hp - r(first.attack);

    hr();
    dw("전투시작!");
    hr();

    dw("[" + second.name + "]이 공격! [" + first.name + "]에게 [" + r(second.attack) + "]만큼의 데미지를 주었다!"); br();
    dw("[" + first.name + "]의 남은체력:[" + first.hp + "]"); br();

    dw("[" + first.name + "]이 공격! [" + second.name + "]에게 [" + r(first.attack) + "]만큼의 데미지를 주었다!"); br();
    dw("[" + second.name + "]의 남은체력:[" + second.hp + "]");


}