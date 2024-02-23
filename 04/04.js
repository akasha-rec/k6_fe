//1. 버튼 누르기
document.addEventListener("DOMContentLoaded", () => {
    // 2. 버튼 가져오기
    const bt1 = document.querySelector("#bt1");
    // 또는 const bt1 = document.querySelector("div > button");

    //3. 이벤트 달기
    bt1.addEventListener("click", () => {
        handleClick();
    });
});

const handleClick = () => { //함수 호출
    //floor : 버림, (Math.random() * 6) : 0~5 > +1 > 1~6
    for(let i=1; i<=3; i++) {
    const n = Math.floor(Math.random() * 6) + 1; 
    //이미지에 src 바꿔주기
    const img = document.querySelector(`#img${i}`);//셀렉터 찾기 = 적용 대상 찾기
    img.setAttribute("src", `./img/${n}.png`) //속성(src)를 바꿔서 이미지(링크)를 바꿔준다
    console.log("Click", n); // 버튼을 누를 때마다 n이 생긴다
}
};

// 짜냈다...
// const $random = document.querySelector("#random1");
// const randomNum = Math.floor(Math.random() * (6-1) +1);
// $random.append(randomNum, document.createElement(br))