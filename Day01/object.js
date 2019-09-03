// 객체 만들기.
// Hash Table (키-값/Key-Value).
// JSON -> JavaScript Object Notation.
var person = {
    name : 'Ronnie Jang',
    age : 35,
    job : 'Lecturer',
    printName : () => {
        console.log("Hello World");
    }
}

// 데이터 접근.
// var myName = person['name'];
var myName = person.name;

person.printName();

// console.log(myName);