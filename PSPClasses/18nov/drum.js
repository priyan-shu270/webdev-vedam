
var buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {

        var audio = document.querySelectorAll("audio")[i];

        audio.currentTime = 0;
        audio.play();

    });

}
