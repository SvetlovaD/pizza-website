let btn1 = document.querySelectorAll(".btn1");
let btn2 = document.querySelectorAll(".btn2");
let btn3 = document.querySelectorAll(".btn3");

let page1 = document.querySelector("#place1");
let page2 = document.querySelector("#place2");
let page3 = document.querySelector("#place3");


btn1.forEach(btn => {
    btn.addEventListener("click", function() {
        page1.style.opacity = "1";
        page2.style.opacity = "0";
        page3.style.opacity = "0";
        
    })
});

btn2.forEach(btn => {
    btn.addEventListener("click", function() {
        page1.style.opacity = "0";
        page2.style.opacity = "1";
        page3.style.opacity = "0";
    })
});

btn3.forEach(btn => {
    btn.addEventListener("click", function() {
        page1.style.opacity = "0";
        page2.style.opacity = "0";
        page3.style.opacity = "1";
    })
});