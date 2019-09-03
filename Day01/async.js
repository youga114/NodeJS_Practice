function start(){
    console.log('start');
}

function mid(){
    console.log('middle');
}

function end(){
    console.log('end');
}

// 함수 호출.
start();

// setTimeout(mid, 2000);

// setTimeout(function(){
//     console.log("Hello");
// }, 1000);


setTimeout(function(){
    console.log("test1");
    setTimeout(function(){
        console.log("test2");
        setTimeout(function(){
            console.log("test3");
        }, 1000);
    }, 1000);
}, 1000);

// mid();
end();