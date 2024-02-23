const handleClick = () => { //함수 호출
    //이미지에 src 바꿔주기
    const bts = document.querySelectorAll("img"); //querySelectorAll 반환값은 배열구조

    bts.forEach((item) => {
        //floor : 버림, (Math.random() * 6) : 0~5 > +1 > 1~6
        const n = Math.floor(Math.random() * 6) + 1; 
        item.setAttribute("src", `./img/${n}.png`) //속성(src)를 바꿔서 이미지(링크)를 바꿔준다
        
        console.log("Click", n); // 버튼을 누를 때마다 n이 생긴다
    }); 

};