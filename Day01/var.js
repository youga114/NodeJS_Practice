// 변수 선언.
var numberA = 0.1;
var numberB = 0.2;

// 숫자 더하기.
var numberC = numberA + numberB;

// 정확한 수치를 얻고 싶을때.
numberC = ((numberA*10) + (numberB * 10)) / 10;

if(numberC == 0.3)
{
    console.log('OK');
}
else
{
    console.log('NO');
}

// 다른 타입의 값 넣기.
numberA = "Hello World";
numberB = 'HELLO WORLD';

numberC = "Hello 'world'";

// Boolean.
var boolVariable = true;

// 콘솔에 출력.
console.log(boolVariable);