let images = document.querySelectorAll(".blog-img");

images.forEach(img => {
    img.addEventListener("click", function() {
        if (img.style.transform == "scale(1.3)") {
            return;
        } else if (img.style.transform == "scale(1.2)") {
            img.style.transform = "none";
            img.style.zIndex = "1";
        }
        else {
            img.style.transform = "scale(1.2)";
            img.style.zIndex = "3";
        }
    })
})