document.addEventListener("DOMContentLoaded", () => {
    //다 완성된 후 img, input, button 가져오기
    const upDownImg = document.querySelector("img");
    const numInput = document.querySelector("#num1");
    //const numInput = document.getElementById("# 쓰면 안 돼")
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    //랜덤수 생성 변수
    let n; //undefined type
    let flag = false; //정답 맞출 때까지 랜덤 수가 변하지 않기 위해

    //button click event
    bt.addEventListener("click", (e) => {
        e.preventDefault();

        //if(flag === false) {
        if(!flag) {
        n = Math.floor(Math.random()*100) +1; //1~100
        console.log("n=", n);
        flag = true;
        }

        //input 박스 내용 가져오기
        if(numInput.value == "") {
            //alert("숫자를 입력하세요"); inputbox에 값이 없으면 백엔드로 데이터 보내지X
            document.querySelector("#msg").innerHTML="<span>숫자를 입력하세요</span>";
            numInput.focus();
            return;
        }

        //숫자비교
        msg.innerHTML="";
        if (n === parseInt(numInput.value)) {
            upDownImg.setAttribute("src", "./imges/good.png")
        }
        else if (n > numInput.value) {
            upDownImg.setAttribute("src", "./imges/up.png")
        }
        else {
            upDownImg.setAttribute("src", "./imges/down.png")
        }
    });
});