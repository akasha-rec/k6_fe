//자바스크립트 데이터 타입
//기본타입
// let n1 = 10; //정수
// let n2 = 10.5; //실수
// let s1 = "안녕하세요"; //문자열 < char의 배열 형태 오...

// console.log("정수 : ", n1);
// console.log("실수 : ", n2);
// console.log("문자열 : ", s1);
// for(let i in s1) { //문자열 순회 > in은 key 출력 > 배열의 key가 index
//     console.log("문자열 : ", s1[i])
// }

// for (let c of s1) { //of로 돌면 value, 파이썬의 for in Collection 객체
//     console.log("문자열 : ", c);
// }
// console.log("문자열 : ", s1[1]);

//reference type > 배열(python의 list) : 순서가 정해져 있어
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
//arr1 만들기 (3/7)
let arr1 = [0, 0, 0, 0];
for(let i in arr) { //★ for in은 index로 접근
    arr1[i] = arr[i];
}
console.log("반복문 첨자로 arr1 = ", arr1);

//arr2 만들기 (3/7)
// let arr2; 변수만 설정 > ★ undefined == false 아무것도 없다
let arr2 = []; //빈 배열 선언 > index 없어서
console.log("arr2 = ", arr2);

//반복문
for (let item of arr) {
    arr2.push(item); //index로 접근할 수 없어서 밀어넣었다. py)list.append() 개념
}
console.log("반복문으로 arr2 생성 = ", arr2);

//배열 Map함수 > react 30% = for of와 같아서 map을 쓰자
//콜백에 인수가 하나 > () 생략 가능
//콜백 body 부분에 실행문X & return문만 존재 > (), return 생략 가능
console.log("배열의 map 함수")
//인수로 함수를 가지면 콜백 함수
//요소 1개면 v(값을 가져와)
arr2 = arr.map((v)=>{
    let s = v + "❤";
    console.log(v, ",", s);

    return s;
});
console.log("map arr2 =", arr2)

arr3 = arr.map(v=>v + "❤");
console.log("map arr3 =", arr3)

//console.log("배열 index 사용하는 함수")
arr3 = arr.map((v, i) => v + "❤");
console.log("map arr3 =", arr3)

arr2 = arr.map(v=> v+"👌");
console.log("arr2 =", arr2)

arr2 = arr.map((v, i)=> v+"👌"+i);
console.log("arr2 =", arr2)

//filter
let arr21 = [];
for (let item of arr) { //isNaN 문자만 출력하겠다
    if(isNaN(item)) arr21.push(item);
}
console.log(arr21)

arr21 = arr.filter(v=>isNaN(v));//isNaN을 만족하는 것만 출력 

console.log("반복문 필터 arr21 = ", arr21)
////reference type > 오브젝트(python의 dictionary) 순서 중요X > key
let obj = {'❤':1, '🌹':2};
// console.log("오브젝트 : ", obj);
// console.log("오브젝트 요소 접근 : ", obj['❤']);

//오브젝트 순회
// console.log("오브젝트 for in")
// for(let i in obj) { //문자열 순회 > in은 key 출력 > 배열의 key가 index
//     console.log("오브젝트 : ", obj[i])
// }

// console.log("오브젝트 for of") //키:값 쌍으로 가져와야 해
// for (let [k, v] of Object.entries(obj)) { //정말 Object에서 가져와서
//     console.log("오브젝트 : ", k);
//     console.log("오브젝트 : ", v);
// }

// console.log("오브젝트 키배열 : ", Object.keys(obj));
// let arr3 = Object.keys(obj).map(k => k + obj[k]);
// console.log("arr3=", arr3)
