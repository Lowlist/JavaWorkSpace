/* 
한번에 묶으려다가 변수 1개에서 6개 번호가 나오게 만들어버림
혹시 한번에 for 문으로 2개를 묶고
그걸 번호 하나마다 비교할수는 없는지?

*/



//변수 선언

let number_a;
let number_b;
let number_c;
let number_d;
let number_e;
let number_f;

let L_number_a;
let L_number_b;
let L_number_c;
let L_number_d;
let L_number_e;
let L_number_f;



document.write("<hr>"); //div 으로 지정예정
document.write("my number: "); // div 으로 지정예정

number_a = Math.floor(Math.random()* 45);
    document.write("\n" + number_a);

    number_b = Math.floor(Math.random()* 45);
    document.write("\n" + number_b);

    number_c = Math.floor(Math.random()* 45);
    document.write("\n" + number_c);

    number_d = Math.floor(Math.random()* 45);
    document.write("\n" +number_d);

    number_e = Math.floor(Math.random()* 45);
    document.write("\n" + number_e);

    number_f = Math.floor(Math.random()* 45);
    document.write("\n" + number_f);

document.write("<hr>"); //div 으로 지정예정
document.write("Lotto number:"); // div 으로 지정예정


L_number_a = Math.floor(Math.random()* 45);
    document.write("\n" + L_number_a);

    L_number_b = Math.floor(Math.random()* 45);
    document.write("\n" + L_number_b);

    L_number_c = Math.floor(Math.random()* 45);
    document.write("\n" + L_number_c);

    L_number_d = Math.floor(Math.random()* 45);
    document.write("\n" +L_number_d);

    L_number_e = Math.floor(Math.random()* 45);
    document.write("\n" + L_number_e);

    L_number_f = Math.floor(Math.random()* 45);
    document.write("\n" + L_number_f);


    document.write("<hr>"); //div 으로 지정예정
    document.write("result:"); // div 으로 지정예정

    if(number_a == L_number_a){
        document.write("같다");
        }
    if(number_b == L_number_b){
        document.write("같다");
        }    
    if(number_c == L_number_c){
        document.write("같다");
        }
    if(number_d == L_number_d){
        document.write("같다");
        }    
    if(number_e == L_number_e){
        document.write("같다");
        }
    if(number_f == L_number_f){
        document.write("같다");
        }    







/*
 for(i = 0 ; i < 6 ;i ++){
     let lotto_random = Math.floor(Math.random()* 45);

     document.write("\n" + random_LottoNoOne);
 }
 function random_LottoNoOne(){ 
    
    for(i = 0 ; i < 6 ;i ++){
        let lotto_random = Math.floor(Math.random()* 45);
        document.write("\n" + lotto_random);
    }  

}
*/

/*
function random_MyNoOne(){
    
    for(i = 0 ; i < 6 ;i ++){
        let lotto_random = Math.floor(Math.random()* 45);
        document.write("\n" + lotto_random);
    }

}
*/

/*

function random_result(){

    
}

*/