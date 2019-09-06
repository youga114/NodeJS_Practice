// 모듈 추출.
var mysql = require('mysql');

// 클라이언트 정보 설정.
var client = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'qwer1234',
    database : 'userdb'
});

// 연결.
client.connect(function(error) {
    if(error) {
        console.log(error);
    }
});

// 로그인 함수.
function login(res, data) {
    var query = 'select * from userdb.userinfo where userid=? and password=?';
    client.query(query, [data.userid, data.password], function(error, results, fields) {
        if(error) {
            res.send('쿼리 검색 실패: ' + error);
        } else {
            if (results.length > 0) {
                // OK.
                res.cookie('userid', data.userid);
                res.send('로그인 성공');
            } else {
                // NO.
                res.send('로그인 실패');
            }
        }
    });
}

// 등록 함수.
function register(res, data) {
    // 쿼리문 작성.
    var query = 'select * from userdb.userinfo where userid=?';
    client.query(query, data.userid, function(error, results){
        // ID 있음 -> 가입 실패.
        if(results.length > 0) {
            res.send('ID가 사용중 입니다.');
        } else {
            // 가입.
            query = 'insert into userdb.userinfo set?';
            client.query(query, data, function(error, results) {
                if(error) {
                    res.send('사용자 등록 실패: ' + error);
                } else {
                    res.send('사용자 등록 성공: ' + data.userid);
                }
            });
        }
    });
}

// 글 저장 함수.
function saveContent(res, data) {
    var queryString = 'insert into userdb.board set ?';
    client.query(queryString, data, function(error) {
        if(error) {
            console.log('글 저장 오류: ' + error);
            res.send('글 저장 오류: ' + error);
        } else {
            console.log('글 저장 성공');
            res.redirect('/board');
        }
    });
}

// 글 조회 함수.
function showBoard(res, ejs, html) {
    var queryString = 'select * from userdb.board';
    client.query(queryString, function(error, results) {
        if(error) {
            console.log('글 조회 오류: ' + error);
            res.send('글 조회 오류: ' + error);
        } else {
            if(results.length > 0) {
                console.log('글 조회 성공');

                res.send(ejs.render(html, {
                    data : results
                }));
            } else {
                res.send(html.toString());
            }
        }
    });
}

// 작성된 글 보이기 함수.
function showContent(req, res, ejs, html) {
    var queryString = 'select * from userdb.board where no=?';
    client.query(queryString, req.params.id, function(error, results){
        if(error) {
            console.log('글 ' + req.params.id + ' 조회 실패: ' + error);
            res.send('글 ' + req.params.id + ' 조회 실패: ' + error);
        } else {
            if(results.length > 0) {
                console.log('글 ' + req.params.id + ' 조회 성공');
                res.send(ejs.render(html, {
                    data : results[0]
                }));
            }
        }
    });
}

// 모듈 내보내기.
module.exports = {
    login : login,
    register : register,
    saveContent : saveContent,
    showBoard : showBoard,
    showContent : showContent
};