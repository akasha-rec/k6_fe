//버튼 클릭 > 클릭 후 이미지 변화 > img 번호 비교
const handleClick = (n) => { 
    const img1 = document.querySelector("#img1") ;
    const img2 = document.querySelector("#img2") ;

    const nc = Math.floor(Math.random() * 6) + 1;

    img1.setAttribute("src", `../05/img/${nc}.png`);
    img2.setAttribute("src", `../05/img/${n}.png`);
  
    if (n == nc) {
      document.querySelector("#msg").innerHTML = "맞음" ;
    }
    else {
      document.querySelector("#msg").innerHTML = "틀림" ;
    }

}