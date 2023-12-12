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

function fightInfo(a,b) {

    a.hp = a.hp - b.attack;
    b.hp = b.hp - a.attack;

    hr();
    dw("전투시작!");
    hr();

    dw("[" + a.name + "]이 공격! [" + b.name + "]에게 [" + a.attack + "]만큼의 데미지를 주었다!");
    br();
    dw("[" + b.name + "]의 남은체력:[" + b.hp + "]");
    br();
    dw("[" + b.name + "]이 공격! [" + a.name + "]에게 [" + b.attack + "]만큼의 데미지를 주었다!");
    br();
    dw("[" + a.name + "]의 남은체력:[" + a.hp + "]");

}