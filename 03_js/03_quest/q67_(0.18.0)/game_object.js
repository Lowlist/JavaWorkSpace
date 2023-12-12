/*
function moveEast(){
    tv2("\n동쪽으로 이동했습니다.\n");
    turn();
}
function moveWest(){
    tv2("\n서쪽으로 이동했습니다.\n");
    turn();
}
function moveSouth(){
    tv2("\n남쪽으로 이동했습니다.\n");
    turn();
}
function moveNorth(){
    tv2("\n북쪽으로 이동했습니다.\n");
    turn();
}
function moveUp(){
    tv2("\n위쪽으로 이동했습니다.\n");
    turn();
}
function moveDown(){
    tv2("\n아래쪽으로 이동했습니다.\n");
    turn();
}
*/

function move(movepoint){
    let nowRoom = getCurrentRoomObject()
    let connectionRoomId = nowRoom.getIdBymovepoint(movepoint);
    if(connectionRoomId == 0){
        tv2("갈수 없음\n");
        return;
    } else {
        currentRoomId = connectionRoomId;
        console.log("현재 방번호:" + currentRoomId);
    }
    switch (movepoint) {
        case "동":
            tv2("동쪽으로 이동했습니다.\n");
            break;
        case "서":
            tv2("서쪽으로 이동했습니다.\n");
            break;
        case "남":
            tv2("남쪽으로 이동했습니다.\n");
            break;
        case "북":
            tv2("북쪽으로 이동했습니다.\n");
            break;
        case "위":
            tv2("위쪽으로 이동했습니다.\n");
            break;
        case "밑":
            tv2("아래쪽으로 이동했습니다.\n");
            break;
    }
    displayRoomInfo();
    turn();
}
