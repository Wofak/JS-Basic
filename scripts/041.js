//Rest Parameter
//파라미터로 전달받은 변수가 몇개인지 모를때

function add(...nums) {
    // 파라미터가 없을수도, 1,2개일 수도, 10개 이상일수도
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }
    return sum;
}

console.log(add(2, 5, 3, 7, 43, 21));
// 위와 같이 입력하면 배열로 들어가는 방식임.
// node js를 이용하여 터미널로 테스트 가능
// 터미널 -> cd scripts ent -> node 041.js 입력
// 상위 폴더로 돌아갈 경우 cd .. ent
// 상위 폴더명이 길 경우 일부 입력하고 tab키로 자동완성