function cat(){
    
    this.name;
    this.age;
    this.weight;
    this.family;
    this.color;
}
// this.xxx = 멤버변수라는 개념이다.
// 문법이다.

let nyan_cat = new cat()

//new << 클래스설정

nyan_cat.name = "우주";
nyan_cat.age = 3;
nyan_cat.weight = 6;
nyan_cat.family = "ragdoll";
nyan_cat.color = "White & grayblack";

//변수에 객체할당

document.write(nyan_cat.name);
document.write("<br>");
document.write(nyan_cat.age);
document.write("<br>");
document.write(nyan_cat.weight);
document.write("<br>");
document.write(nyan_cat.family);
document.write("<br>");
document.write(nyan_cat.color);