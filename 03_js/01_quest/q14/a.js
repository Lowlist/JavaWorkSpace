let a = prompt("값을 입력하세요:");

switch(a)
{
    case "1":
        alert("1입니다.")
        break;
    case "2":
        alert("2입니다.")
        break;
    case "3":
        alert("3입니다.")
        break;
    default: // switch 문에서 그 이외일떄 표기할때 사용
        alert("1,2,3 이아닙니다.");
    }