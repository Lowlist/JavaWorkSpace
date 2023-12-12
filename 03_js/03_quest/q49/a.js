function Cat(){
    
    this.name = "";
    this.age = "";
    this.weight = "";
    this.family = "";
    this.color = "";
    
    this.crying = function()
        {
            document.write("야옹");
        }
    

}
// this.xxx = 멤버변수라는 개념이다.
// 문법이다.
// this.xxx 이후 함수명 + function(){값}
// 을 부여하면 클래스 내에 함수가 완성된다.


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

document.write("<hr>");
coco.crying();
document.write("<br>");
nyan_cat.crying();

// 변수명 = 소문자시작 
// 함수명 = 대문자시작
// 클래스명 = 대문자시작