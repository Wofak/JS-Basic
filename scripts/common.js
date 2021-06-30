/**
 * user그룹 내에서 나이대 별로 인원을 구분하고, 나이대별 인원수 누계를 반환
 * @param {*} users 
 * @param {*} keyAge 
 * @returns 나이대 별로 형성된 배열
 */
function getAgeGroup(users, keyAge) {
    let userAgeGroup = {};

    for (var user of users) {
        var ageGroup = "";
        if (user[keyAge] < 10) {
            ageGroup = "0";
        } else if (user[keyAge] >= 100) {
            ageGroup = user[keyAge].toString().substr(0, 2) + "0";
        } else {
            ageGroup = user[keyAge].toString().charAt(0) + "0";
        }

        if (userAgeGroup[ageGroup]) {
            userAgeGroup[ageGroup] = userAgeGroup[ageGroup] + 1;
        } else {
            userAgeGroup[ageGroup] = 1;
        }
    }

    return userAgeGroup;
}
// 슬래시하고 별표 2개, ent
/**
 * 최소값과 최대값을 파라미터로 받고 그 사이의 무작위 난수를 생성,반환
 * @param {*} min 
 * @param {*} max 
 * @returns min과 max 사이의 랜덤 정수 값
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 가위바위보 함수
 * @param {*} userRsp 
 * @returns 가위바위보 투입과 결과를 반환
 */
function rspPlayer(userRsp) {
    const rsp = ["가위", "바위", "보"];
    const playerRsp = rsp[getRandomInteger(0, 2)];
    const winValue = {
        "가위": "보",
        "바위": "가위",
        "보": "바위"
    };

    return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": (userRsp == playerRsp) ? 0 : (winValue[userRsp] == playerRsp) ? 1 : -1
    }
}