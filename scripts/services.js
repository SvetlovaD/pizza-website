let item1 = document.querySelector("#item1");
let img1 = item1.querySelector("img");
let item2 = document.querySelector("#item2");
let img2 = item2.querySelector("img");
let item3 = document.querySelector("#item3");
let img3 = item3.querySelector("img");

item1.addEventListener("mouseover", function() {
    img1.src = "../img/diet1.png";
})
item1.addEventListener("mouseout", function() {
    img1.src = "../img/diet.png";
})
item2.addEventListener("mouseover", function() {
    img2.src = "../img/bicycle1.png";
})
item2.addEventListener("mouseout", function() {
    img2.src = "../img/bicycle.png";
})
item3.addEventListener("mouseover", function() {
    img3.src = "../img/pizza2.png";
})
item3.addEventListener("mouseout", function() {
    img3.src = "../img/pizza1.png";
})