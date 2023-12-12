let str_id = "";
let str_pw = "";

let id_input;
let password_input;
let divX;
let time;

let now = new Date();
let month = now.getMonth() + 1;

window.onload = function(){

 id_input = document.getElementById("id_1");   
 password_input = document.getElementById("password_1");
 divX = document.getElementById("x");
 time = document.getElementById("time");

 time.innerHTML = 
 now.getFullYear()+"년 "
 + month +"월 " 
 + now.getDate() + "일 " 
 + now.getHours() + "시 " 
 + now.getMinutes() + "분 " 
 + now.getSeconds() + "초 " 
 + now.getMilliseconds()  +" 밀리초"


}


function loginButton(){

    let local_id = id_input.value;
    let local_pw = password_input.value;

    if(local_id == "cat" && local_pw == "1234"){
        divX.innerHTML = local_id+" 회원님 반갑습니다.";
        alert("로그인 성공");
    }else{
        alert("로그인 실패");
    }

}





// function login(){

//     // alert("id:"+str_id+" pw:"+str_pw);
//     alert("id:"+id_input.value+" pw:"+password_input.value);
// }

