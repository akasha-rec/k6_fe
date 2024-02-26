// 한 쪽이 섭씨 > 다른 쪽은 화씨가 되게
//<태그>txt<태그> .innerHTML로 값을 가져와
// 폼 태그 요소는 .value
const handleChange = (s1, s2, lb1, lb2, t1, t2) => {
    if (s1.value === "℃") {
        s2.value="℉";
        lb1.innerHTML = "℃";
        lb2.innerHTML = "℉";
    } 
    else {
        s2.value = "℃";
        lb1.innerHTML = "℉";
        lb2.innerHTML = "℃";
}
    t1.value = ''; // selectbox 클릭할 때마다 txt 값 초기화
    t1.focus();
    t2.value = '';
}
    const handleTxt = () => {
        console.log("t")
    }

document.addEventListener("DOMContentLoaded", ()=> { // 구조가 다 완성됐을 때
    //폼 구성요소 모두 들고 옴
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const labels = document.querySelectorAll("label");

    txt1.addEventListener("input", ()=> {
        console.log(txt1.value)
        if (sel1.value ==="℃") {
            // 섭씨를 화씨로
            txt2.value = (parseFloat(txt1.value) * (9 / 5)) + 32  ;
        }else {
            // 화씨를 섭씨로
            txt2.value = (parseFloat(txt1.value)-32*(5/9));
        }
    });

    //폼 값은 .value로 가져온다
    sel1.addEventListener("change", () => {
        handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2);
        // console.log(sel1.value);
        // if (sel1.value == "℃") sel2.value="℉";
        // else sel2.value = "℃";
    });

    sel2.addEventListener("change", () => {
        handleChange(sel2, sel1, labels[1], labels[0], txt1, txt2);
        // console.log(sel2.value);
        // if (sel1.value == "℃") sel1.value="℉";
        // else sel1.value = "℃";
    });
});
