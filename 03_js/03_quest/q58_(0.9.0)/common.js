/*
    공통함수들을 모아놓음
*/
function dw(s){	

	// document.write(s);

	str = str + s;
	
	t.value = str;

}


function hr(){	
	// document.write("<hr>");

	str = str + "\n==============================================\n";

	t.value = str;

}
function br(){	
	// document.write("<br>");
	str = str + "\n";
	t.value = str;
}
function r(random_a){
    random_a = random_a + 1;
    random = Math.floor(Math.random()*random_a);

    this.r_info = function(){
        dw(random_a);
    }

    return random;

}