/*
    roomName 방이름
    desc 방설명
    id 방 고유 id ex.1000 1001 ...
    e 동쪽 방의 고유 id (0이면 동쪽으로 연결이 안된 방, 특정id값이면 해당id방과 연결되었다는 뜻)
    w 서 //
    s 남 //
    n 북 //
    u 위 //
    d 밑 //
*/

let currentRoomId = 1000;

let roomA = new Room("훈련장 입구", "훈련장으로 들어가는 입구다.", 1000, 1001, 0, 0, 0, 0, 0);
let roomB = new Room("훈련장 서쪽", "훈련장 서쪽이다.", 1001, 1002, 1000, 0, 0, 0, 0);
let roomC = new Room("훈련장 중앙", "훈련장 중앙이다.", 1002, 0, 1001, 0, 0, 0, 0);


let roomArray = [
	roomA = new Room("훈련장 입구", "훈련장으로 들어가는 입구다.", 1000, 1001, 0, 0, 0, 0, 0),
	roomB = new Room("훈련장 서쪽", "훈련장 서쪽이다.", 1001, 1002, 1000, 0, 0, 0, 0),
	roomC = new Room("훈련장 중앙", "훈련장 중앙이다.", 1002, 0, 1001, 0, 0, 0, 0)
];



function Room(roomName,desc,id,e,w,s,n,u,d){
    
    this.roomName = roomName;
    this.desc = desc;
    this.id = id;
    this.e = e;
    this.w = w;
    this.s = s;
    this.n = n;
    this.u = u;
    this.d = d;

    this.displayRoomInfo = function(){
        tv2("["+this.roomName+"]\n");
        tv2(this.desc+"\n");
        tv2(this.getRoomEnter()+"\n");
    }

    this.getRoomEnter = function(){
        let enters = "출구:[";
        if(e != 0){
            enters = enters + " 동";
        }
        if(w != 0){
            enters = enters + " 서";
        }
        if(s != 0){
            enters = enters + " 남";
        }
        if(n != 0){
            enters = enters + " 북";
        }
        if(u != 0){
            enters = enters + " 위";
        }
        if(d != 0){
            enters = enters + " 밑";
        }
        enters = enters + " ]";
        return enters;
    }

    this.getIdBymovepoint = function(movepoint){
        switch(movepoint){
            case "동":
                return e;
                break;
            case "서":
                return w;
                break;
            case "남":
                return s;
                break;
            case "북":
                return n;
                break;
            case "위":
                return u;
                break;
            case "밑":
                return d;
                break;
        }
    }
}

function getCurrentRoomObject(){    
    for(let i=0 ; i<roomArray.length ; i++){
        if(roomArray[i].id == currentRoomId){
            return roomArray[i];
        }
    }
}
function displayRoomInfo(){
    getCurrentRoomObject().displayRoomInfo();
}

//룸 부분 전부다 질문해야됨 