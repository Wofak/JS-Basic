// Object Destructuring
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 함
function getPerson() {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 37,
        email: "john@gmail.com",
        city: "Jeju-si",
        country: "Republic of korea"
    };
}

var person = getPerson();
console.log(person.firstName);
console.log(person.lastName);
// 기존의 불러와서 담는 방식

var {
    firstName,
    lastName
} = getPerson();
console.log(firstName);
console.log(lastName);

//var {키이름, 키이름}을 통해 불러옴, 중괄호를 사용하는 것에 주의