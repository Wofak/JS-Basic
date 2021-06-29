//Object Literal Syntax Extension

var firstName = "John";
var lastName = "Doe";


var person = {
    firstName: firstName,
    lastName: lastName

}

var type = "student";
var score = {
    [type]: "John Doe",
    // student : "John Doe" 와 똑같이 진행됨
    score: 95

};

// score.student
// score[type]
// score["student"]
// 세가지 모두 같은 표현