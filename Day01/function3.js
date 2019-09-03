// 함수를 반환하는 함수 선언.
function makeFunction(){
    return function(){
        console.log('Hello World');
    }
}

// 함수 리턴 받기.
var test = makeFunction();

// 함수 호출.
test();