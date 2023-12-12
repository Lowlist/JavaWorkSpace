let cat_age ;
let cat_type ;
let cat_name ;
let all_cat ;

// 전역변수 선언

function xx(){ // 함수 선언

    cat_age = "4";
    cat_type = "ragdoll";
    cat_name = "우주";

    word_plus();
    alert(all_cat);

}

function word_plus(){

    all_cat = cat_age + cat_name + cat_type;

}

xx(); //함수 실행

/*

//함수


//변수

//전역변수. global. 인싸변수.
//지역변수. local. 아싸변수

var a ;
var t ;
var n ;
var s ;

//함수선언(만들기)
function xx(){
    a = "2살";
    t = "시고르자브종";
    n = "야옹이";
    
    word_plus();
    alert(s);

}

function word_plus(){
    s = a + t + n;
}

//함수  사용하기. 실행한다. 호출한다.

xx();

*/