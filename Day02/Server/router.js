// 분기 관계 설정.
var handler = require('./requestHandler');

// 규칙 설정.
var rule = {
    "/" : handler.start,
    "/favicon.ico" : handler.favicon
};

// 요청 주소 별 응답 함수 호출.
function route(pathname, req, res) {
    // 예외처리.
    if(typeof rule[pathname] === "function") {
        rule[pathname](req, res);
    } else {
        // 오류 처리.
        console.log("처리함수 없음");
    }
}

// 내보내기.
module.exports = {
    "route" : route
}