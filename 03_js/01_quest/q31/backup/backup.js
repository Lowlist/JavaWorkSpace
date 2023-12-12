
function bt_2(){

   let a_1 = document.getElementById("a");
   let b_1 = document.getElementById("b");
   let c_1 = document.getElementById("c");

   let player = "바위";
   let result_1 ="";
   let np_player = Math.floor(Math.random()*3+1);

   a_1.innerHTML = "당신:"+"\n"+ player+"\n";
   b_1.innerHTML = "컴퓨터:"+"\n"+ np_player+"\n";
   c_1.innerHTML = "결과:" + result_1;

   if(np_player == 1){
      np_player= "가위";
  }
else if(np_player == 2){
      np_player= "바위";
  }
else if(np_player == 3){
      np_player= "보";
  }



// 가위라인

if(player == "가위"){
  if (np_player == "가위"){
     result_1 = "draw";
  } 
  else if (np_player == "바위"){
     result_1 = "lose";
  }
  else if (np_player == "보"){
     result_1 = "win";
  }
}

//바위 라인

if(player == "바위"){
  if (np_player == "가위"){
     result_1 = "win";
  } 
  else if (np_player == "바위"){
     result_1 = "draw";
  }
  else if (np_player == "보"){
     result_1 = "lose";
  }
}

//보자기 라인

if(player == "보"){
  if (np_player == "가위"){
     result_1 = "lose";
  } 
  else if (np_player == "바위"){
     result_1 = "win";
  }
  else if (np_player == "보"){
     result_1 = "draw";
  }
}

}

function bt_3(){

   let a_1 = document.getElementById("a");
   let b_1 = document.getElementById("b");
   let c_1 = document.getElementById("c");

   let player = "보";
   let result_1 ="";
   let np_player = Math.floor(Math.random()*3+1);

   a_1.innerHTML = "당신:"+"\n"+ player+"\n";
   b_1.innerHTML = "컴퓨터:"+"\n"+ np_player+"\n";
   c_1.innerHTML = "결과:" + result_1;

   if(np_player == 1){
      np_player= "가위";
  }
else if(np_player == 2){
      np_player= "바위";
  }
else if(np_player == 3){
      np_player= "보";
  }

// let result_1 초기화

// 가위라인

if(player == "가위"){
  if (np_player == "가위"){
     result_1 = "draw";
  } 
  else if (np_player == "바위"){
     result_1 = "lose";
  }
  else if (np_player == "보"){
     result_1 = "win";
  }
}

//바위 라인

if(player == "바위"){
  if (np_player == "가위"){
     result_1 = "win";
  } 
  else if (np_player == "바위"){
     result_1 = "draw";
  }
  else if (np_player == "보"){
     result_1 = "lose";
  }
}

//보자기 라인

if(player == "보"){
  if (np_player == "가위"){
     result_1 = "lose";
  } 
  else if (np_player == "바위"){
     result_1 = "win";
  }
  else if (np_player == "보"){
     result_1 = "draw";
  }
}

}


window.onload = function(){

    let a_1 = document.getElementById("a");
    let b_1 = document.getElementById("b");
    let c_1 = document.getElementById("c");

//결과창을 따로 q15 응용해서 표기했음.

let np_player = Math.floor(Math.random()*3+1);

// while(true){
//    player = bt_2 + bt_2 + bt_3
//    if (player === "가위" || player === "바위" || player === "보"){
//       break;
//    } else {
//       alert("값이 다릅니다.");
//    }
// } 
// while 무한루프 값이 트루가 될때까지 무한으로 루프함


if(np_player == 1){
        np_player= "가위";
    }
else if(np_player == 2){
        np_player= "바위";
    }
else if(np_player == 3){
        np_player= "보";
    }

let result_1 ="";
// let result_1 초기화

// 가위라인

if(player == "가위"){
    if (np_player == "가위"){
       result_1 = "draw";
    } 
    else if (np_player == "바위"){
       result_1 = "lose";
    }
    else if (np_player == "보"){
       result_1 = "win";
    }
}

//바위 라인

if(player == "바위"){
    if (np_player == "가위"){
       result_1 = "win";
    } 
    else if (np_player == "바위"){
       result_1 = "draw";
    }
    else if (np_player == "보"){
       result_1 = "lose";
    }
}

//보자기 라인

if(player == "보"){
    if (np_player == "가위"){
       result_1 = "lose";
    } 
    else if (np_player == "바위"){
       result_1 = "win";
    }
    else if (np_player == "보"){
       result_1 = "draw";
    }
}

    a_1.innerHTML = "당신:"+"\n"+ player+"\n";
    b_1.innerHTML = "컴퓨터:"+"\n"+ np_player+"\n";
    c_1.innerHTML = "결과:" + result_1;

}
