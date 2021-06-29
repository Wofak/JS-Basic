//Spread Operator
// 배열, 문자열 같은 형태의 데이터를 요소 하나 하나 모두 분리하여 사용할 수 있게 해줌


var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];

// concat 도 가능

var arr3 = [...arr2, ...arr1];
// [1,2,3,4,5,6] 의 형식으로 들어가게 됨

var cd = "CD"
var alphabet = ["A", "B", ...cd];
// ["A","B","C","D"] 로 들어감