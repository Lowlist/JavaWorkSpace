let popups;
let btn_down;


function popupdown(){

    popups = document.getElementById("popup");

    popups.style.color = "pink";

    popups.style.height = "600px";

    popups.style.width = "600px";

    popups.style.background = "black";

    popups.style.transitionProperty = "width, height, background";
    
    popups.style.transitionDuration = "2s";


}