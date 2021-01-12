function myfunction01(a, b) {
    return a > b ? '왼쪽 숫자가 더 크다' : '오른쪽 숫자가 더 크다';
}

// 나누기 결과를 정수로 얻는 법
//  -> Math.round(), parseInt(), ...
function appleBascket(numOfApple, bascketsize) {
    return numOfApple % bascketsize == 0 ? 
    Math.floor(numOfApple / bascketsize): 
    Math.floor(numOfApple / bascketsize) + 1;
}

/**  
    함수를 변수에 담아서 사용할 수 있다.
    let rabbit = function consoleRabbit() { ... }

    함수에 ()를 붙이면 실행, 붙이지 않으면 값으로 사용
    console.log(rabbit);
    rabit();
**/
function consoleRabbit() {
    console.log(' /)/)');
    console.log('(  ..)');
    console.log('( >ㅁ<)');
}

console.log(myfunction01(10, 15));
console.log(appleBascket(123, 10) + '개');
consoleRabbit();

let anotherVar = myfunction01;
console.log(anotherVar(10,11));

/* 매개변수로 함수를 전달해서 사용하는 경우도 있다. */
function myfunction02(f) {
    return f(5, 10);
}

console.log(myfunction02(myfunction01));
console.log(myfunction02(appleBascket));