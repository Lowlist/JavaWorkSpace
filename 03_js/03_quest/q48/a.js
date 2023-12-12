function Cat(){
    
    this.name = "";
    this.age = "";
    this.weight = "";
    this.family = "";
    this.color = "";

}
// this.xxx 를 입력하면 클래스

let coco = new Cat();

let nyan_cat = new Cat();

//new << 클래스설정

nyan_cat.name = "우주";
nyan_cat.age = 3;
nyan_cat.weight = 6;
nyan_cat.family = "ragdoll";
nyan_cat.color = "White & grayblack";

coco.name = "코코";
coco.age = 2;
coco.weight = 4;
coco.family = "k-shout";
coco.color = "samsek"

//변수에 객체할당

document.write(nyan_cat.name + " vs ");
document.write(coco.name);
document.write("<hr>");

document.write(nyan_cat.age + " vs ");
document.write(coco.age);
document.write("<hr>");

document.write(nyan_cat.weight + " vs ");
document.write(coco.weight);
document.write("<hr>");

document.write(nyan_cat.family + " vs ");
document.write(coco.family);
document.write("<hr>");

document.write(nyan_cat.color + " vs ");
document.write(coco.color);


// 변수명 = 소문자시작 
// 함수명 = 대문자시작
// 클래스명 = 대문자시작