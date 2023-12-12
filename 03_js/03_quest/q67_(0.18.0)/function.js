let t;
let t2;
let t3;
let str = "";
let str2 = "";
let str3 = "";
let turn_count = 1;
let input_turn;
let currentMode = "대기";

function turn(){
	if(currentMode == "전투"){
		fightInfo(elf,orc);
	}
	else if(currentMode == "대기"){
		NormalTurn();
	}
	
	turn_count ++;
	input_turn.value = turn_count;
	console.log("현재 턴:"+turn_count);
	scrollTopToLast()
}

function NormalTurn(){  
    tv2("특별한 것은 보이지 않는다. \n");   
}


function fightInfo(first,second) {

    let first_damege = r(second.attack);
    let second_damege = r(first.attack);
    
    first.hp = first.hp - first_damege;
    second.hp = second.hp - second_damege;

    // remaining_first = first.max_hp - first.hp;
    // remaining_second = second.max_hp - second.hp;   
    currentMode = "전투";
    hr2();
    tv2("전투중!");
    hr2();
    tv2("[" + second.name + "]의 공격! [" + first.name + "]에게 [" + first_damege + "]만큼의 데미지를 주었다!");
    tv2("[" + first.name + "]의 남은체력:[" + first.hp + "]");
    hr2();
    tv2("[" + first.name + "]의 공격! [" + second.name + "]에게 [" + second_damege + "]만큼의 데미지를 주었다!");
    tv2("[" + second.name + "]의 남은체력:[" + second.hp + "]")

    if(first.hp <= 0){
        fightResult(first,second);
    }
    if(second.hp <= 0){
        fightResult(first,second);
    }

}

function fightResult(first,second){

    if(first.hp <= 0){
        hr2();
        tv2("----------전투종료----------");
        hr2();
        tv2("["+first.name+"가 사망하였습니다.]");
        hr2();
        tv2("최종 전투결과:");
        first.info();
        second.info();
        currentMode = "사망";
        tvClear();
        tv2Clear();
        tv3Clear();
    }
        else if(second.hp <=0){
        hr2();
        tv2("----------전투종료----------");
        hr2();
        tv2("최종 전투결과\n");
        tv2("["+second.name+"를 처치 하였습니다.]");
        hr2();
        fight_reward(first,second)
        tvClear();
        currentMode = "대기";
    }
    
}

function fight_reward(first,second){

    let second_money = r(second.drop_money);
    let drop_exps = second.drop_exp;

    first.t_exp = first.t_exp + drop_exps;
    first.money = first.money + second_money;

    tv2("경험치"+ first.t_exp +" 증가 \n"+second.name+"의 시체에서 [$"+ second_money +"] 만큼의 돈을 발견하였습니다.\n");    
    tv2(""+first.info()+"\n");
}

