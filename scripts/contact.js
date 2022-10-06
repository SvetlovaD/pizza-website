let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
let text = document.querySelector("textarea");

inputs.forEach(input => {
    input.addEventListener("focus", function() {
        for (i = 0; i<labels.length; i++) {
            let label = labels[i];
            if (input.id == label.id) {
                label.style.fontSize = "16px";
                label.style.transform = 'translateY(-20px)';
            }
        }
    })
    input.addEventListener("blur", function() {
        for (i = 0; i<labels.length; i++) {
            let label = labels[i];
            if (input.id == label.id) {
                if (input.value == "") {
                   label.style.fontSize = "18px";
                   label.style.transform = 'none';
                }
            }
        }
    })
});

text.addEventListener("focus", function() {
    for (i = 0; i<labels.length; i++) {
        let label = labels[i];
        if (text.id == label.id) {
            label.style.fontSize = "16px";
            label.style.transform = 'translateY(-20px)';
        }
    }
});

text.addEventListener("blur", function() {
    for (i = 0; i<labels.length; i++) {
        let label = labels[i];
        if (text.id == label.id) {
            if (text.value == "") {
               label.style.fontSize = "18px";
               label.style.transform = 'none';
            }
        }
    }
})

let form = document.forms[0];
let button = document.querySelector("#confirm");

button.addEventListener("click", function(e) {
    e.preventDefault();
    let result = form.checkValidity();
    if (result) {
        alert("Your message sent!")
    } else {alert("Your message isn't sent! Check the accuracy of your data!")}
});


