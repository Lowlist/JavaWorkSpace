// 주사위 1번
window.onload = function() {
    let line_disc = document.getElementById("line_1_1");
    let disc_1 = Math.floor(Math.random() * 6) + 1;
    line_disc.innerHTML = `<img src='d_${disc_1}.png' width='100' height='100'>`;


// 주사위 2번

    let line_disc2 = document.getElementById("line_1_2");
    let disc_2 = Math.floor(Math.random() * 6) + 1;
    line_disc2.innerHTML = `<img src='d_${disc_2}.png' width='100' height='100'>`;

    let line_disc3 = document.getElementById("line_1_3");
    let disc_3 = Math.floor(Math.random() * 6) + 1;
    line_disc3.innerHTML = `<img src='d_${disc_3}.png' width='100' height='100'>`;

}