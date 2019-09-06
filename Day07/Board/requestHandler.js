// 모듈 추출.
var fs = require('fs');
var ejs = require('ejs');

// DB 변수.
var mysqlDB;

// DB 연결 함수.
function connectDB(database) {
    mysqlDB = database;
}

// 요청 처리 함수...
function start(req, res) {
    res.redirect('/register');
}

// 계정 생성 폼 보여주는 함수.
function showRegisterForm(req, res) {
    fs.readFile('./register.html', function(error, html) {
        res.send(html.toString());
    });
}

// 로그인 생성 폼 보여주는 함수.
function showLoginForm(req, res) {
    fs.readFile('./login.html', function(error, html) {
        res.send(html.toString());
    });
}

// 사용자 정보 등록 (Register).
function register(req, res) {
    // 저장할 데이터 생성.
    var data = {
        userid : req.body.userid,
        nickname : req.body.nickname,
        password : req.body.password
    };

    console.log(data);

    mysqlDB.register(res, data);
}

// 로그인 처리 함수.
function login(req, res) {
    // 로그인에 사용할 데이터 생성.
    var data = {
        userid : req.body.userid,
        password : req.body.password
    };

    mysqlDB.login(res, data);
}

// 추가할 함수.
function showBoard(req, res) {
    fs.readFile('./board.html', 'utf-8', function(error, html) {
        mysqlDB.showBoard(res, ejs, html);
    });
}

function showWritingForm(req, res) {
    fs.readFile('./writeForm.html', 'utf-8', function(error, html) {
        res.send(html.toString());
    });
}

// 작성된 글 저장하는 함수.
function saveContent(req, res) {
    var data = {
        author : req.cookies.userid,
        title : req.body.title,
        content : req.body.content
    };

    mysqlDB.saveContent(res, data);
}

// 작성된 글 보여주는 함수.
function showContent(req, res) {
    fs.readFile('./showContent.html', 'utf-8', function(error, html) {
        mysqlDB.showContent(req, res, ejs, html);
    });
}

// 모듈 내보내기.
module.exports = {
    connectDB : connectDB,
    start : start,
    showRegisterForm : showRegisterForm,
    showLoginForm : showLoginForm,
    register : register,
    login : login,

    showBoard : showBoard,
    showWritingForm : showWritingForm,
    saveContent : saveContent,
    showContent : showContent
};