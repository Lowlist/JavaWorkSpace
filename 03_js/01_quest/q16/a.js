window.onload = function(){

    var t = document.getElementById("a");


    var n = 0;
    
    var s = "";
    
    while(true){

        n ++ ;
    
        if(n > 10){
            break;
        }else{
            s = s + n + "<br>";
        }
    }
    
    t.innerHTML = s;

}
