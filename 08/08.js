document.addEventListener("DOMContentLoaded", () => {
    //다 완성된 후 img, input, button 가져오기
    const upDownImg = document.querySelector("img");
    const numInput = document.querySelector("#num1");
    //const numInput = document.getElementById("# 쓰면 안 돼")
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");
    
    //inputbox focus
    numInput.focus();

    //랜덤수 생성 변수
    let n; //undefined type
    let flag = false; //정답 맞출 때까지 랜덤 수가 변하지 않기 위해

    //button click event
    bt.addEventListener("click", (e) => {
        e.preventDefault();
        
        //input 박스 내용 가져오기
        //(parseInt(numInput.value < 1 || numInput.value < 100)
        if(numInput.value == "") {
            //alert("숫자를 입력하세요"); inputbox에 값이 없으면 백엔드로 데이터 보내지X
            document.querySelector("#msg").innerHTML="<span>숫자를 입력하세요</span>";
            numInput.focus();
            return;
        }

         // if (flag === false) {
        if (!flag) {  
            n = Math.floor(Math.random()*100) + 1 ; //1~100까지
            console.log("n =", n);        
            flag = true;
        
        //초기화
        numInput.style.display = "inline";
        numInput.value = "";
        numInput.focus();
        bt.innerHTML = "확인";
        }

        //숫자비교
        msg.innerHTML="";
        if (n === parseInt(numInput.value)) {
            upDownImg.setAttribute("src", "./imges/good.png");
            numInput.style.display = "none"; //CSS 제어 가능하다
            bt.innerHTML = "재시작"
            flag = false; //초기값으로 다시
        }
        else if (n > numInput.value) {
            upDownImg.setAttribute("src", "./imges/up.png");
        }
        else {
            upDownImg.setAttribute("src", "./imges/down.png");
        }
    });
});