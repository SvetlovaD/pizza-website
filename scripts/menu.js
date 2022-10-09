let images = document.querySelectorAll(".menu-img");


images.forEach(img => {
    img.addEventListener("click", function() {
        if (img.style.transform == "scale(2.4) translateX(20px)") {
            img.style.transform = "none";
            img.style.zIndex = "1";
            
        }
        else {
            img.style.transform = "scale(2.4) translateX(20px)";
            img.style.zIndex = "3";
            
        }
    })

    img.addEventListener("mouseover", function() {
        img.style.transform = "scale(2.4) translateX(20px)";
        img.style.zIndex = "3"; 
        
    })

    img.addEventListener("mouseout", function() {
        img.style.transform = "none";
            img.style.zIndex = "1";
            
    })
})