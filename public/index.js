var arr = document.querySelectorAll(".drum");

for (let index = 0; index < arr.length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        var aud = new Audio("sounds/" + index + ".mp3")
        aud.play();
        var btninhtml = this.innerHTML;
        btnAnimation(btninhtml);
    });
    document.addEventListener("keypress", function (event) {
        switch (event.key) {
            case "w":
                var aud = new Audio("sounds/0.mp3")
                break;
            case "a":
                var aud = new Audio("sounds/1.mp3")
                break;
            case "s":
                var aud = new Audio("sounds/2.mp3")
                break;
            case "d":
                var aud = new Audio("sounds/3.mp3")
                break;
            case "j":
                var aud = new Audio("sounds/4.mp3")
                break;
            case "k":
                var aud = new Audio("sounds/5.mp3")
                break;
            case "l":
                var aud = new Audio("sounds/6.mp3")
                break;
        
            default:
                break;
        }
        aud.play();
        btnAnimation(event.key);
    })
}

function btnAnimation(curKey){
    var btn = document.querySelector("." + curKey);
    btn.classList.add("pressed");

    setTimeout(function() {
        btn.classList.remove("pressed");
    }, 150);
}