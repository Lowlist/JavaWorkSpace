//js
var btn;
var imgCat;

var isPopupOpened = false;	


window.onload = function(){
    btn = document.getElementById("btn");
    imgCat = document.getElementById("cat");

    // html 에
    // <input type="button" id="btn" value="고양이" onclick="popup();"></input>
    // 이런식으로 했던것과 동일한 처리임.

    btn.addEventListener("click",popup);

    // btn 변수 = 버튼에 addEventListener 함수를 불러와 "click" 시 popup 함수를 불러오게 처리 

}

function popup(){
    imgCat.style.display = "inline";
    
    // if(isPopupOpened == false){
    //     imgCat.style.display = "inline";
    //     isPopupOpened = true;
    // } else {
    //     imgCat.style.display = "none";
    //     isPopupOpened = false;
    // }
}


