const handleClick = () => { //함수 호출
    //이미지에 src 바꿔주기
    const bts = document.querySelectorAll(".c1"); //querySelectorAll 반환값은 배열구조
    const btsNum = [1, 1, 1];
    
    //for of
    for (let [idx, bt] of bts.entries()) {
            const n = Math.floor(Math.random() * 6) + 1;
            bt.setAttribute("src", `./img/${n}.png`);
            btsNum[idx] = n;

            console.log(btsNum);
    }

    // for of => 파이썬의 for in (가장 추천함)
    //     for (let bt of bts) {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bt.setAttribute("src", `./img/${n}.png`)
    // }

    //기본 for
    // for (let i = 0; i < bts.length; i++) {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bts[i].setAttribute("src", `./img/${n}.png`)
    // }

    // bts.forEach((item) => {
    //     //floor : 버림, (Math.random() * 6) : 0~5 > +1 > 1~6
    //     const n = Math.floor(Math.random() * 6) + 1; 
    //     item.setAttribute("src", `./img/${n}.png`) //속성(src)를 바꿔서 이미지(링크)를 바꿔준다
        
    //     console.log("Click", n); // 버튼을 누를 때마다 n이 생긴다
    // }); 

}