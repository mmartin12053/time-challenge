let score = document.getElementById('game').innerHTML;
let highscore = document.getElementById('highscore').innerHTML;
let thing = true;


var timer;
function startTimer(duration, display) {
    timer = duration;
    var minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function resetTimer() {
  timer = 60 * .25;
}

window.onclick = function () {
    fiveMinutes = 60 * .25,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


    function sploorff(){

    if(thing == true){
        score++;
        document.getElementById('game').innerHTML = score;
        
        }

}

function dave(){

    if(score > highscore){
        highscore = score;
        document.getElementById('highscore').innerHTML = score;
    }

}

function brownZebra(){

    thing = true;
            score = 0;
            document.getElementById('game').innerHTML = score;
            clearInterval(myTimer);

}