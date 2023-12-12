// 문20	반복문 - 별찍기

/*

**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *

이런 모양 나오게

*/

// for(let i=1; i<=10; i=i+1){

//     for(let k=1; k <= i - 1; k=k+1){
//         document.write("&nbsp;")
//     }

//     for(let j=10; j>=i; j=j-1){
//         document.write("*");
//     }
//     document.write("<br>");
// }

for(let i = 1 ; i <= 10 ; i ++){//줄담당

    //옆에있는 변수를 i로 칭하고 변수 i는 값이 1이고 i는 10보다 같거나 작고 1개씩 증가한다

    for(let k = 1 ; k <= i ; k ++ ){
            document.write("&nbsp");
        }

        // 옆에있는 변수를 k로 칭하고 K의 값은 1이고 k는 i보다 작거나 같고 1개씩 증가한다.
        // 변수 k라 명칭한 것을 http 문서에 &nbsp 형태로 나타내겠다.

        for(let j=10 ; j >= i ; j-- ){
            document.write("*");
        }

        // 옆에있는 변수를 j라 칭하고 j의 값은 10이고 j는 i보다 크거나 같고 1개씩 감소한다.
        // 변수 j라 명칭한 것을 http 문서에 *형태로 나타내겠다.


        document.write("<br>")

        //변수가 나타날때마다 <br>을 반복하겠다.

} // for문은 순환식이다 위에서 아래식 (동적으로 바뀐다)

/*

for (let i = 1; i <= 10; i++) {

    for (let k = 1; k <= i; k++) {

        document.write("&nbsp");
    }
    for (let j = 10; j >= i; j--) {

        document.write("*");
    }
    document.write("<br>");

}

*/