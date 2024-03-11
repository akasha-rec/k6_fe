document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("button");
    const lotto = document.querySelector("#lotto");

    let nums = [];

    bt.addEventListener("click", ()=>{
        // 1~45까지 7개의 랜덤수 중복 허용X
        // 몇 번 돌려야 끝나는지 모르니까 while
        // 배열 초기화 nums.length = 0; > 배열의 내용 지워줘
        nums = [];
        while(nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1  ;
            if(!nums.includes(n)) nums.push(n);
          }
          
          //6번째 자리에 +를 삽입하겠다.
          //nums에 다시 넣어주겠다.
          nums = nums.map((v)=>
          `<span class="sp${parseInt(v/10)}">${v}</span>`
          );
          nums.splice(6, 0, `<span>+</span>`);
          lotto.innerHTML = nums.toString().replaceAll(',','');
          // else {
          //     nums.push(`<span class="sp${parseInt(n/10)}">${n}</span>`);
          //     nums.length ===6
          //     nums.push("+");
          // }

        // nums.splice(6, 0, `<span>+</span>`);
        // lotto.innerHTML = nums.toString().replaceAll(',','');
        // console.log(s)
            // lotto.innerHTML = s;

        //문자열로 처리
        // //`{백틱}` : 변수 표현 되고 {연산}도 가능하다
        // let tags = ""; //아무것도 없는 문자열
        // nums.map((v, i)=>{
        //     tags = tags + `<span class="sp${parseInt(v/10)}">${v}</span>`;
        //     if (i === 5)
        //     tags = tags + `<span class>+</span>`;
        
        // });
        // lotto.innerHTML = tags;
        
        // let tags = [];
    });
});