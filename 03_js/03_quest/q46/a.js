function cat(){
    
    this.name = "우주";
    this.age = 4;
    this.weight = 6;
    this.family = "ragdoll";
    this.color = "White & grayblack";

}
// this.xxx = 멤버변수라는 개념이다.
// 문법이다.

let nyan_cat = new cat()

//new << 클래스설정

nyan_cat.name = "우주";

//변수에 객체할당

document.write(nyan_cat.name)