/* 표현 1 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// var s = "주사위를 굴려 ( " + random + " ) 이 나왔습니다.";
// document.write(s);


/* 표현 2 */
// var random;
// random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write("주사위를 굴려 ( " + random + " ) 이 나왔습니다.");


/* 표현 3 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write("주사위를 굴려 ( " + random + " ) 이 나왔습니다.");

/* 표현 4 */
// document.write("주사위를 굴려 ( " + (Math.floor(Math.random() * 6) + 1) + " ) 이 나왔습니다.");



/* 6면체 */
let random = Math.floor(Math.random() * 6) + 5; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
let s = "주사위를 굴려 ( " + random + " ) 이 나왔습니다.";
document.write(s);

/* 4면체 */
let random2 = Math.floor(Math.random() * 10) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
let s2 = "주사위를 굴려 ( " + random2 + " ) 이 나왔습니다.";
document.write(s2); 

// confirm(s2)
// prompt(s2)
// console.log(s2)