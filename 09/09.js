//자바스크립트 데이터 타입
//기본타입
let n1 = 10; //정수
let n2 = 10.5; //실수
let s1 = "안녕하세요"; //문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);
for(let i in s1) { //문자열 순회 > in은 key 출력 > key가 index
    console.log("문자열 : ", s1[i])
}

for (let c of s1) { //of로 돌면 value
    console.log("문자열 : ", c);
}
console.log("문자열 : ", s1[1]);

//참조타입 > 배열
//trailing comma > 새로운 엘리멘트나 매개변수, 속성을 추가할 때 유용
let arr = ['❤', 1, '🌹', 2,];
console.log("배열 : ", arr);
console.log("배열의 요소 : ", arr[1]);

//배열을 오브젝트로
let obj = {'❤':1, '🌹':2};
console.log("오브젝트 : ", obj);
console.log("오브젝트 요소 접근 : ", obj['❤']);