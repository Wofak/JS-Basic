// Array Destructuring

function getScores() {
    return [70, 21, 100, 50, 12, 33, 45];

}

var scores = getScores();
scores[0];
scores[1];
scores[2];

// 배열이니 대괄호로 사용
var [x, y, ...args] = getScores();
console.log(x);
console.log(y);
console.log(args);



function getPerson() {
    return [
        "John",
        "Doe",
        ["Red", "Green", "Blue"]
    ];
}

var [firstName, lastName, favoriteColor] = getPerson();
// 아니면 var [firstName, lastName, color1, color2, color3] = getPerson();








// 지리 정보, 위도 경도를 이용할 경우
function getCoordinates() {
    return [12.3222, 34.2222];
}

//[경도],[위도];

var coordinates = getCoordinates(); //[경도,위도]
coordinates[0]; // 경도
coordinates[1]; // 위도

var [longititude, latitude] = getCoordinates();