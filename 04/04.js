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
    const n = Math.floor(Math.random() * 6) + 1;
    console.log("Click", n); // 버튼을 누를 때마다 n이 생긴다
}

// 짜냈다...
// const $random = document.querySelector("#random1");
// const randomNum = Math.floor(Math.random() * (6-1) +1);
// $random.append(randomNum, document.createElement(br))