/*
    공통함수들을 모아놓음
*/
function tv(s){	

	// document.write(s);

	str = str + s;
	
	t.value = str;

}
function tv1(s){	

	// document.write(s);

	str1 = str1 + s;
	
	t1.value = str1;

}
function tv2(s){	
	str2 = str2 + s;
	t2.value = str2;
}

function tv3(s){	
	str3 = str3 + s;
	t3.value = str3;
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
        tv(random_a);
    }

    return random;

}