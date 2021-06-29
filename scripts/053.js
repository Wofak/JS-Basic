//정규식
//regular expression


var txt = "Hello World! World!";

var regexp = /world/gi;
// 찾고자 하는 내용을 슬래시 사이에 입력


console.log(txt.replace("World", "Jeremy"));
// 하나만 바뀜...

console.log(txt.replace(regexp, "Jeremy"));
// g - global
// i - 대소문자 구분 없이

var str = "123abc456kkk";
var regexp1 = /[0-9]/g;
var result = str.match(regexp1);
// 정규식 str함수 match
console.log(result);

var str2 = "re,green,red,gree,gen, yellow,blue";
var regexp2 = /(red|green)/g;
var result2 = str2.match(regexp2);
console.log(result2)

var tel = "010-3008-9614";
//3자리 숫자 - 4자리 숫자 - 4자리 숫자
var regexp3 = /^(010)-\d{4}-\d{4}/;
// 시작이 010으로 시작하고 숫자 3,4,4자리 확인
console.log(regexp3.test(tel));
// = true

//gmail.com
//co.kr
//@foeof

var regexp4 = /^\w+@\w+(\.\w{2,3})+$/;

console.log(regexp4.test("seun@gmail.com"));
//무조건 처음에 문자가 하나이상 존재, @, 도메인 마지막부분
//정규식은 연차 있는 개발자도 안쓰면 낯선 존재이므로  연습