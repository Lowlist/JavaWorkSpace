// 자동로또 + 내 번호도 자동으로

//변수 선언

let number_a;
let number_b;
let number_c;
let number_d;
let number_e;
let number_f;
let lotto_random;


function random_LottoNoOne(){
    
    lotto_random = Math.floor(Math.random()* 45);
    document.write(lotto_random); // 출력장소지만 div 이용하여 바꿀예정
    document.write("\n");

}

function random_MyNoOne(){
    
    lotto_random = Math.floor(Math.random()* 45);
    document.write(lotto_random); // 출력장소지만 div 이용하여 바꿀예정
    document.write("\n");
    
}
document.write("<hr> Lotto number: ");
random_LottoNoOne();
random_LottoNoOne();
random_LottoNoOne();
random_LottoNoOne();
random_LottoNoOne();
random_LottoNoOne();

document.write("<hr> my number: ");
random_MyNoOne();
random_MyNoOne();
random_MyNoOne();
random_MyNoOne();
random_MyNoOne();
random_MyNoOne();