//Arrow Function - 화살표 함수

/* //함수 선언식 */
function add() {

}

/* //함수 표현식 */
var add = function () {

}


/* //Arrow Function */
var add = function (x1, x2) {
    return x1 + x2;
};

// 위의 함수를 
var add = (x1, x2) => {
    return x1 +
};

// var add = (x1,x2) => x1 + x2 이렇게도 가능




var add2 = function (x1, x2) {
    var sum = x1 + x2;
    return x1 + x2;
};

// 위의 경우는

var add2 = (x1, x2) => {
    var sum = x1 + x2;
    return x1 + x2;
};






function say(message) {

}
// 위의 경우는
var say = message => {};







function myFunction() {

}
// 위의 경우는
var myFunction = () => {};