
let cat_1 = Math.floor(Math.random() * 100 ) + 1;

for( i = 1 ; i<= cat_1 ; i = i + 1 ){
    if(i == 7){ // i 가 7일때

        document.write("<img id='goldcat' src='cat.jpg' width='100px' height='100px'>");

        // img id를 goldcat 으로 src 는 cat.jpg 로 가로 100px 세로 100px 출력

        document.write(i); 

        // i(숫자) 를 출력

        let gold_cat_img = document.getElementById("goldcat");

        // gold_cat_img 를 document.getElementById("goldcat") 으로 선언
    
        gold_cat_img.style.borderColor = "yellow";

        // 선언 해둔 gold_cat_img 에서 style 객체 속성에 접근 후 테두리 색깔을 노란색으로

        gold_cat_img.style.borderStyle = "solid";

        // gold_cat_img 에서 style 객체 속성에 접근 후 테두리를 실선으로

        gold_cat_img.style.borderWidth = "10px";

        // gold_cat_img 에서 style 객체 속성에 접근 후 가로 크기를 10px로

    }
    else { // if 문과 같지 않을때 아래 를 출력
        document.write("<img src='cat.jpg' width='100px' height='100px'>");
        document.write(i);
    
    }
    
}

/**

var random=Math.floor(Math.random()*100)+1;
for( var i=1;  i <= random;  i=i+1  ) {
    if ( i == 7 ) { //황금고양이 만들기
        document.write("<img id='goldcat' src='cat.jpg' width='100px' height='100px'>");
        document.write(i);
        var gold_cat_img = document.getElementById("goldcat");
        gold_cat_img.style.borderColor = "yellow";
        gold_cat_img.style.borderStyle = "solid";
        gold_cat_img.style.borderWidth = "10px";
    } else {
        document.write("<img src='cat.jpg' width='100px' height='100px'>");
        document.write(i);
    }
}

 */