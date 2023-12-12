
let x = Math.floor(Math.random() * 10 );{
    
    document.write(x);
    document.write("<br>");
}

for(let i = 1 ; i <= 10 ; i++){
    
    document.write(i);

    if(i == x)

    break;
}
