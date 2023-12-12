let now = new Date();
let month = now.getMonth() + 1;

document.write(
    now.getFullYear()+"년 "
    + month +"월 " 
    + now.getDate() + "일 " 
    + now.getHours() + "시 " 
    + now.getMinutes() + "분 " 
    + now.getSeconds() + "초 " 
    + now.getMilliseconds()  +" 밀리초")



// date() 객체를 불러와 시간과 관련된 객체를 불러올수 있게 됨.


// document.write("현재 시간은 :" + now.toLocaleTimeString()); br();
//오전,오후 00시00분00초 표기

// document.write("현재 시간은 :" + now.toLocaleString()); br(); 
//0000년도 + 0시간0분0초

// document.write("getDate :" + now.getDate() );   br(); 
// 요일

// document.write("getDay :" + now.getDay() );   br(); 
// 요일. 0-일, 1-월, 2-화, 3-수, 4-목, 5-금, 6-토

// document.write("getFullYear :" + now.getFullYear() );   br(); 
// 년도

// document.write("getHours :" + now.getHours() );   br(); 
// 24시 중 시간표기

// document.write("getMilliseconds :" + now.getMilliseconds() );   br();
//000밀리초

// document.write("getMinutes :" + now.getMinutes() );   br();
// 분

// document.write("getMonth :" + now.getMonth() );   br(); 
// 달 데이터는 0부터시작이라 +1 해야 현재달이 나옴.

// document.write("getSeconds :" + now.getSeconds() );   br();
// 초

// document.write("getTime :" + now.getTime() );   br();
// getTime() 함수는 '1970년 1월1 일 00:00:00 UTC'로부터 주어진 시간 사이의 경과시간(밀리초)를 리턴합니다.

// document.write("getTimezoneOffset :" + now.getTimezoneOffset() );   br();
// UTC(표준시 한국은 UTC+9:00) 시간을 계산.

// 아래는 전부 UTC 시간

// document.write("getUTCDate :" + now.getUTCDate() );   br();
// document.write("getUTCDay :" + now.getUTCDay() );   br();
// document.write("getUTCFullYear :" + now.getUTCFullYear() );   br();
// document.write("getUTCHours :" + now.getUTCHours() );   br();
// document.write("getUTCMilliseconds :" + now.getUTCMilliseconds() );   br();
// document.write("getUTCMinutes :" + now.getUTCMinutes() );   br();
// document.write("getUTCMonth :" + now.getUTCMonth() );   br();
// document.write("getUTCSeconds :" + now.getUTCSeconds() );   br();





// document.write("getVarDate :" + now.getVarDate() );   br();

// ㅇㅇㅇㅇ년 ㅇㅇ월 ㅇㅇ일 ㅇㅇ시 ㅇㅇ분 ㅇㅇ초 ㅇㅇㅇ 밀리초