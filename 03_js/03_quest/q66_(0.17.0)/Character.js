function Character(name,hp,max_hp,attack,t_exp,exp_max,money){
    
    this.name = name;
    this.hp = hp;
    this.max_hp = max_hp;
    this.attack = attack;
    this.t_exp = t_exp;
    this.exp_max = exp_max;
    this.money = money;
    this.info = function(){

    return "[" + this.name + "]HP:["+ this.hp + "/"+ this.max_hp +"]경험치:["+ this.t_exp +"/"+ this.exp_max +"][소지금:"+ this.money +"]";
    
}
   
}

function Monster(name,hp,max_hp,attack,drop_exp,drop_money){

    this.name = name;
    this.hp = hp;
    this.max_hp = max_hp;
    this.attack = attack;
    this.drop_exp = drop_exp;
    this.drop_money = drop_money;
    this.info = function(){
        br()
        return "["+this.name+"][hp:("+this.hp+"/"+this.max_hp+")]공격력:["+ attack +"]"
    }
}
