alert("I hope you're ready.")
let score = document.getElementById('game').innerHTML
let thing = true

function click(){

    startTimer();
    score = 0;
    document.getElementById('game').innerHTML = score;

}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            thing = false;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * .25,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

    function sploorff(){

    if(thing == true){
        score++;
        document.getElementById('game').innerHTML = score;
        }

    }

    