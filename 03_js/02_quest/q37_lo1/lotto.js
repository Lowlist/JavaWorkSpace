// 1. 컴퓨터가 1~45 수를 6개 뽑아서 출력
// 2. 내가 한 게임을 구매했다고 가정하고
// 3. 컴퓨터의 랜덤값도

//변수 선언

let number_a;
let number_b;
let number_c;
let number_d;
let number_e;
let number_f;
let lotto_random;


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
