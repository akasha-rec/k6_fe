// Dom tree가 완성된 후 실행
// addEventListener 인수로 함수가 들어갈 수 있다 = 콜백 함수
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOMContentLoaded OK")
    const bt3 = document.createElement("button");
    document.querySelector("#btArea2").append(bt3);
    const bt3Txt = document.createTextNode("버튼3");
    
    bt3.setAttribute("id", "bt3");
    bt3.appendChild(bt3Txt);
    bt3.addEventListener("click", () => {
        handleClick(3);
    })

    const bt4 = document.createElement("button");
    document.querySelector("#btArea2").append(bt4);
    const bt4Txt = document.createTextNode("버튼4");
    bt4.appendChild(bt4Txt);
    bt4.addEventListener("click", ()=>{
        handleClick(4);
    });
});

//addEventListener 이벤트 발생 시(DOMContentLoaded) 함수 실행

//버튼 생성
//어떤 태그 만들거야? > createElement
// const bt3 = document.createElement("button");

// 버튼 추가하기 : querySelector 찾는다. append 집어넣는다
// document.querySelector("#btArea2").append(bt3);

// 함수 작성 2 : 화살표 함수
// 변수를 선언할 때 

// const(상수) / let(변수)
const handleClick =(n)=> {
    let msg;
    if (n==1) msg = "<h2>안녕하세요.</h2>";
    else if (n == 2) msg = "<h2>안녕히 가세요</h2>";
    else if (n == 3) msg = `<h2>버튼${n} 클릭</h2>`;
    else msg = `<h2>버튼${n} 클릭</h2>`;
    document.querySelector(
        "#msgArea").innerHTML = msg;

    // document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다</h2>`;
}
// 함수 작성 1

// function handleClick(n) {
//     //메시지 영역 가져오기 1
//     // document.getElementById("msgArea").innerHTML = "안녕하세요";
    
//     //메시지 영역 가져오기 2
//     // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다</h2>";

//     document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다</h2>`;
// }