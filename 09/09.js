//자바스크립트 데이터 타입
//기본타입
let n1 = 10; //정수
let n2 = 10.5; //실수
let s1 = "안녕하세요"; //문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);
for(let i in s1) { //문자열 순회 > in은 key 출력 > 배열의 key가 index
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

//배열 순회
console.log("배열 for in")
for(let i in arr) { //문자열 순회 > in은 key 출력 > 배열의 key가 index
    console.log("배열 : ", arr[i])
}

console.log("배열 for of")
for (let c of arr) { //of로 돌면 value
    console.log("배열 : ", c);
}

//배열 Map함수 > react 30% = for of와 같아서 map을 쓰자
//콜백에 인수가 하나 > () 생략 가능
//콜백 body 부분에 실행문X & return문만 존재 > (), return 생략 가능
console.log("배열의 map 함수")
arr2 = arr.map(v=> v+"👌");
console.log("arr2 =", arr2)

arr2 = arr.map((v, i)=> v+"👌"+i);
console.log("arr2 =", arr2)

//배열을 오브젝트로
let obj = {'❤':1, '🌹':2};
console.log("오브젝트 : ", obj);
console.log("오브젝트 요소 접근 : ", obj['❤']);

//오브젝트 순회
console.log("오브젝트 for in")
for(let i in obj) { //문자열 순회 > in은 key 출력 > 배열의 key가 index
    console.log("오브젝트 : ", obj[i])
}

console.log("오브젝트 for of") //키:값 쌍으로 가져와야 해
for (let [k, v] of Object.entries(obj)) { //정말 Object에서 가져와서
    console.log("오브젝트 : ", k);
    console.log("오브젝트 : ", v);
}