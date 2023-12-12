/*
    공통함수들을 모아놓음
*/
function tv(s){	

	// document.write(s);
	
	str = str + s;	
	t.value = str;
}

function tv2(s){	
	
	str2 = str2 + s;
	t2.value = str2;
}

function tv3(s){
	
	str3 = str3 + s;
	t3.value = str3;
}

function tvClear(){
	str = "";
}
function tv2Clear(){
	str2 = "";
}
function tv3Clear(){
	str3= "";
}
function hr(){	
	// document.write("<hr>");

	str = str + "\n==============================================\n";

	t.value = str;
}

function hr2(){

	str2 = str2 +"\n==============================================\n";
	t2.value = str2;

}

function scrollTopToLast(){
	t.scrollTop = t.scrollHeight;
	t2.scrollTop = t2.scrollHeight;
	t3.scrollTop = t3.scrollHeight;
}

function br(){	
	// document.write("<br>");
	str = str + "\n";
	t.value = str;
}
function br2(){	
	// document.write("<br>");
	str2 = str2 + "\n";
	t2.value = str2;
}

function r(random_a){
    random_a = random_a + 1;
    random = Math.floor(Math.random()*random_a);

    this.r_info = function(){
        tv(random_a);
    }

    return random;

}