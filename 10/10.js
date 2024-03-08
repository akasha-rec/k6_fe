document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("button");
    const lotto = document.querySelector("#lotto");

    let nums = [];

    bt.addEventListener("click", ()=>{
        // 1~45까지 7개의 랜덤수 중복 허용X
        // 몇 번 돌려야 끝나는지 모르니까 while
        // 배열 초기화 nums.length = 0; > 배열의 내용 지워져
        nums = [];
        while (nums.length < 7) {
            let n = Math.floor(Math.random()*45)+1;
            nums.push(n)
        }
        
        let tags = ""; //아무것도 없는 문자열
        nums.map((v)=>{
            tags = tags + `<span class="sp${parseInt(v/10)}">${v}</span>`;
            console.log(tags)
        });
        lotto.innerHTML = tags;

    });
});