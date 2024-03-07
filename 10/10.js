document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("button");

    bt.addEventListener("click", ()=>{
        n = Math.floor(Math.random()*45)+1;
        console.log("n : ", n);
    });
});